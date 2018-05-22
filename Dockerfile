FROM node:9.11.1

EXPOSE 3000

ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn --pune-lockfile

ADD client client
ADD src src
ADD tsconfig.json tsconfig.json
ADD next.config.js next.config.js

RUN yarn build

CMD ["yarn", "start"]