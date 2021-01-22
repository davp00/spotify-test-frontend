# Spotify Test Frontend
you can try a live demo in [Live Preview](http://165.227.76.8:3000/)

## Installation

```bash
npm install

# If there is any problem installing the dependencies
npm install --legacy-peer-deps
```

## Environment
Look at the .env example, then create .env file(Note: note: do not place / at the end)
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
Recommended running <b>npm run start:prod</b> before.
```bash
# runs cypress environment
npm run cypress:open

# runs all cypress test
npm run cypress:run
```

## Stay in touch

- Author - [Daniel Viloria](https://github.com/davp00)
- LinkedIn - [https://www.linkedin.com/in/daniel-viloria-perez-17434016b/](https://www.linkedin.com/in/daniel-viloria-perez-17434016b/)
