# default Value
ARG BUILD_TARGET=prod 


FROM node:18.13.0 as builder

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --mode $BUILD_TARGET

FROM node:18.13.0-alpine

WORKDIR /app
COPY --from=builder /usr/src/app/build .
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "index.js"]