package services

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// NewDatabase returns a connection to our MongoDB database.
func NewDatabase() *mongo.Database {
	cltOp := options.Client().ApplyURI("mongodb://micro-go:micro-go1@ds033750.mlab.com:33750/micro-string-db")

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	client, err := mongo.Connect(ctx, cltOp)
	defer cancel()

	if err != nil {
		log.Fatal("MongoDB connection ERROR: ", err)
	}

	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal("MongoDB ping ERROR: ", err)
	}

	fmt.Println("Connected to MongoDB!")

	return client.Database("micro-string-db")
}
