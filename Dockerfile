FROM node:9.11.1

EXPOSE 3000

RUN mkdir /project-excalibur
WORKDIR /project-excalibur

ADD package.json yarn.lock /project-excalibur/
RUN yarn --pure-lockfile

ADD pages pages
ADD src src
ADD server.js .

RUN yarn build


CMD ["yarn", "start"]