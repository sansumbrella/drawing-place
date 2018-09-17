FROM node

# Image for react development

RUN npm install -g \
    create-react-app \
    yarn

WORKDIR /site
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]