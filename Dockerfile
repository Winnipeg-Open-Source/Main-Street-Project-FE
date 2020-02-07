FROM mhart/alpine-node:12.14.1

WORKDIR /client

# Not sure about this line ENV PATH /client/node_modules/.bin:$PATH

COPY package*.json /client/

RUN npm install --silent

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]
