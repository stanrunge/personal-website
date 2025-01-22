FROM oven/bun AS builder

RUN bun

WORKDIR /app
COPY package.json bun.lockb ./

RUN bun install
COPY . .

ENV DB_URL=''
ENV AUTH_TOKEN=''


RUN bun run build



FROM oven/bun

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["bun", "build/index.js"]
