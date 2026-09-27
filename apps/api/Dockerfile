# syntax=docker/dockerfile:1

FROM node:22-alpine
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate
WORKDIR /app
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY packages/shared packages/shared
COPY apps/api apps/api
RUN pnpm install --frozen-lockfile --filter @bil/api...
RUN pnpm --filter @bil/api build
WORKDIR /app/apps/api
ENV NODE_ENV=production \
    PORT=3001 \
    HOSTNAME=0.0.0.0
EXPOSE 3001
CMD ["pnpm", "start"]
