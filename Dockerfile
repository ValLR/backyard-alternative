FROM node:alpine

ADD yarn.lock /yarn.lock
ADD package.json /package.json
RUN yarn install

ENV NODE_PATH=/node_modules:src/
ENV PATH=$PATH:/node_modules/.bin
ADD . /
RUN yarn build

ENTRYPOINT ["sh", "/run.sh"]
CMD ["start"]
