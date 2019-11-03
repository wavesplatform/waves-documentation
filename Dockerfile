FROM node:alpine

# Install dependencies
RUN apk update && apk upgrade && apk add --no-cache bash git openssh \
    && rm -rf /var/cache/apk/*

RUN npm install -g gitbook-cli

RUN mkdir /gitbook
WORKDIR /gitbook
RUN git clone https://github.com/wavesplatform/waves-documentation.git
WORKDIR waves-documentation
RUN gitbook install

EXPOSE 4000

CMD ["gitbook", "serve", "--timing"]


# serve
# docker run -d -p 4000:4000
