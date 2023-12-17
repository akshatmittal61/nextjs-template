# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json to the container
COPY package.json ./

# ARG NEXT_PUBLIC_BACKEND_BASE_URL
# ENV NEXT_PUBLIC_BACKEND_BASE_URL=$NEXT_PUBLIC_BACKEND_BASE_URL

# Install project dependencies using Yarn
RUN yarn install

# Copy the entire project directory to the container
COPY . .

# Build the Next.js application
RUN yarn build

# Set the command to start the Next.js application
CMD ["yarn", "start"]