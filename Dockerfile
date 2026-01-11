# Builds the react UI inside the "app" directory 

FROM node:22-alpine

COPY . /app/
WORKDIR /app

RUN npm install --omit=dev
RUN npm run build:app

CMD ["npm", "run", "start:app"]
