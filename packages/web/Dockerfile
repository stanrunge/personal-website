FROM oven/bun AS builder

WORKDIR /app
COPY package.json bun.lockb ./

RUN bun install
COPY . .

ARG DB_URL
ARG AUTH_TOKEN


RUN bun run build



FROM oven/bun

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 80

ENV NODE_ENV=production

CMD ["bun", "build/index.js"]
