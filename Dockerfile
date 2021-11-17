FROM node:16-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry https://registry.npm.taobao.org \
 && npm -g i pnpm \
 && pnpm config set registry https://registry.npm.taobao.org \
 && pnpm install

COPY . .

RUN pnpm run build

FROM node:16-alpine as production

ARG NODE_ENV=developmen
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set registry https://registry.npm.taobao.org \
 && npm -g i pnpm \
 && pnpm config set registry https://registry.npm.taobao.org \
 && pnpm install

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]