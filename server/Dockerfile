FROM golang:1.8

WORKDIR /go/src/app
COPY . .
# create a volume to write data to? (maybe using Compose)

RUN go get -d -v ./...
RUN go install -v ./...

CMD ["app"]