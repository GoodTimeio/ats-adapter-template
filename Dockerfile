#phase 1 - development build
FROM node:12.15-alpine As development

WORKDIR /usr/app

ARG GOODTIME_NPM_TOKEN
ENV GOODTIME_NPM_TOKEN=${GOODTIME_NPM_TOKEN}

COPY .npmrc ./
COPY .env ./
COPY nodemon.json ./
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY src src

RUN npm run build

#phase 2 - production build
FROM node:12.15-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY .env ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/src/main"]

