FROM node:10.1.0

EXPOSE 3000

RUN mkdir /project-excalibur
WORKDIR /project-excalibur

ADD package.json yarn.lock /project-excalibur/
RUN yarn --pune-lockfile

ADD client client
ADD src src
ADD tsconfig.json tsconfig.json
ADD .babelrc .babelrc
ADD next.config.js next.config.js

RUN yarn build

CMD ["yarn", "start"]