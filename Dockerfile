FROM node:16-alpine

ENV TZ=Asia/Seoul
RUN apk --update add tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/src/app

RUN yarn global add serve

COPY package.json ./
RUN yarn install

COPY ./src ./src
COPY ./public ./public

RUN yarn build

ENTRYPOINT ["serve","-s","build"]

