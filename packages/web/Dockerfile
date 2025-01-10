FROM oven/bun AS builder

WORKDIR /app
COPY package.json bun.lockb ./

RUN bun install
COPY . .

RUN bun run build

RUN bunx drizzle-kit push



FROM oven/bun

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 90

ENV NODE_ENV=production

CMD ["bun", "run", "preview", "--host", "--port=80"]
