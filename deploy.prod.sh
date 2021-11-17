#!/usr/bin/env bash
pnpm build

project=wuchuheng/note-demo
version=nestjs-01
docker build . -t $project:$version
docker tag $project:$version $project:$version
#docker push $project:$version

