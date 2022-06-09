FROM node:17-alpine as base
ENV NODE_ENV=production
WORKDIR /app

COPY "." "/app"

RUN npm ci --production
#RUN npm ci --production \
#    && npm ci --production=false\
#    && cd client \
#    && npm run build

CMD [ "node", "index.js" ]