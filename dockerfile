# setup environment with nodejs, copy everything besides node_modules, install dependencies, build, and run
FROM node:16.18.0
WORKDIR /frontend
RUN corepack enable
CMD ["yarn", "dev"]