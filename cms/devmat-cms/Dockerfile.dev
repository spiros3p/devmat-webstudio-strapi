FROM node:24-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ARG PORT
ENV PORT=${PORT}

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt
COPY package.json ./
COPY package-lock.json ./
COPY .npmrc ./

RUN npm i -g npm@latest
RUN npm ci --verbose

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

RUN chown -R node:node /opt/app
USER node

EXPOSE ${PORT}

CMD ["npm", "run", "develop"]