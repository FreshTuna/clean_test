#!/usr/bin/env bash

set -e

docker tag cleaning-fairy 673225916783.dkr.ecr.ap-northeast-2.amazonaws.com/cleaning-fairy
docker push 673225916783.dkr.ecr.ap-northeast-2.amazonaws.com/cleaning-fairy