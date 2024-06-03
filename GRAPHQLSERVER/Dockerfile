# Etapa de construcción
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:18-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/node_modules /app/node_modules
CMD ["node", "--experimental-modules", "index.mjs"]

