FROM node:14.15.1-alpine
# Env
ENV NODE_CONFIG_ENV development
ENV PORT=3333
ENV HOST=0.0.0.0
ENV NODE_ENV=development
#RECIPE
ENV RECIPE_PUPPY_API=http://www.recipepuppy.com/api
#GIPHY
ENV GIPHY_API=https://api.giphy.com/v1/gifs/search
ENV GIPHY_RATING=g
ENV GIPHY_LANG=en
ENV GIPHY_KEY=pPiMNFkdnBt4wGmBiJ9YCryAw3lHJk98

# Create Directory for the Container
WORKDIR /usr/src/app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/app 
EXPOSE 3333
# TypeScript
RUN npm run start
# Start
CMD [ "npm", "start" ]
