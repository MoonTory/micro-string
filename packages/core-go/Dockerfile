# Dockerfile References: https://docs.docker.com/engine/reference/builder/

# Start from golang:1.12-alpine base image
FROM golang:1.12-alpine

# The latest alpine images don't have some tools like (`git` and `bash`).
# Adding git, bash and openssh to the image
RUN apk update && apk upgrade && \
	apk add --no-cache bash git openssh

# Add Maintainer Info
LABEL maintainer="Gustavo Quinta <gustavoqnt40@gmail.com>"

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go mod and sum files
# COPY go.mod go.sum ./

# Download all dependancies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go get github.com/gorilla/mux
RUN go get github.com/gorilla/context
RUN go get go.mongodb.org/mongo-driver/bson/primitive

# Copy the source from the current directory to the Working Directory inside the container
COPY ./packages/core-go/src .

# Build the Go app
RUN go build -o main .

# Expose port 5003 to the outside world
EXPOSE 5003

# Run the executable
CMD ["./main"]
