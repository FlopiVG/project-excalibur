FROM node:9.11.1

EXPOSE 3000

RUN mkdir /project-excalibur
WORKDIR /proyect-excalibur

ADD package.json yarn.lock /project-excalibur/
RUN yarn --pune-lockfile

ADD client client
ADD src src

RUN yarn build

CMD ["yarn", "start"]