FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY ./patches/* /app/patches/

RUN npm install -g pnpm@9

RUN pnpm install
RUN pnpm prune --prod

COPY . ./

RUN pnpm build:app

CMD ["pnpm", "start:app"]
