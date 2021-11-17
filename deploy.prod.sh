#!/usr/bin/env bash
pnpm build

project=wuchuheng/note-demo
version=introduceGraphqlDemo
docker build . -t $project:$version
docker tag $project:$version $project:$version
docker push $project:$version

