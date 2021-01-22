# Spotify Test Frontend

## Installation

```bash
npm install

# If there is any problem installing the dependencies
npm install --legacy-peer-deps
```

## Environment
Look at the .env example, then create .env file
```dotenv
NEXT_PUBLIC_URL=http://your-host:your-port
```

## Running the app

```bash
# Build the application
npm run build

# Production (previously had to do a build)
npm run start

# Development mode
npm run dev

# Build & Production 
npm run start:prod
```

## Test
Recommended running <b>npm run start:prod</b> before
```bash
# runs cypress environment
npm run cypress:open

# runs all cypress test
npm run cypress:run
```
