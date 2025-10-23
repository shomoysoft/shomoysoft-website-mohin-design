# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install dependencies
RUN \
if [ -f package-lock.json ]; then npm ci; \
elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
elif [ -f yarn.lock ]; then yarn install; \
else echo "No lock file found." && exit 1; fi

# Copy all app source
COPY . .

# Build Next.js app
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install curl for healthcheck
RUN apk add --no-cache curl

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["npm", "start", "--", "-H", "0.0.0.0"]
