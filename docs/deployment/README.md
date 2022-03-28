# Deployment

## Deploy with PM2
As fronnt is nothing but a Node.js app, you can control it with PM2

```
pm2 start index.js
```

See [PM2 docs](https://pm2.keymetrics.io/) for more information.

## Deploy with Docker

### Create a Dockerfile
Create a Dockerfile with the following content

```
# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy app code
# (assuming all your app code is located in a src directory)
COPY ./src/* .

# Set NODE_ENV=production
ENV NODE_ENV production

# Expose port 4000 (which is the default)
EXPOSE 4000

# Run app
CMD [ "node", "./index.js" ]
```

### Build image
```
docker build . yourname/fronnt
```

### Run container
```
docker run --name=my-fronnt-app -p 4000:4000 yourname/fronnt
```
