package handlers

import (
	ctx "context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"../../entities"

	"github.com/gorilla/context"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

// StringGetAll returns all strings to client with json response
func StringGetAll(w http.ResponseWriter, r *http.Request) {
	var data struct {
		Payload entities.Strings `json:"payload"`
		Message string           `json:"message"`
	}

	host, _ := os.Hostname()
	data.Payload = []entities.String{}
	data.Message = "Golang - " + host

	db := context.Get(r, "db").(*mongo.Collection)
	cursor, err := db.Find(ctx.TODO(), bson.M{})

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `"}`))
		return
	}

	defer cursor.Close(ctx.TODO())

	for cursor.Next(ctx.TODO()) {
		var item entities.String

		if err := cursor.Decode(&item); err == nil {
			data.Payload = append(data.Payload, item)
		}
	}

	if err := cursor.Err(); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `"}`))
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(data)
}

// StringUpdate handler functin to updating a string
func StringUpdate(w http.ResponseWriter, r *http.Request) {
	docID := mux.Vars(r)["id"]
	host, _ := os.Hostname()
	db := context.Get(r, "db").(*mongo.Collection)

	var upd struct {
		String string
	}

	json.NewDecoder(r.Body).Decode(&upd)
	fmt.Println("upd: ", upd.String)
	fmt.Println("docID: ", docID)

	var data struct {
		Payload entities.String `json:"payload"`
		Message string          `json:"message"`
	}

	// data.Payload = entities.String{}
	data.Message = "Golang - " + host

	// Declare an _id filter to get a specific MongoDB document
	objID, err := primitive.ObjectIDFromHex(docID)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `"}`))
		return
	}

	fmt.Println("objID: ", objID)
	filter := bson.M{"_id": bson.M{"$eq": objID}}
	update := bson.D{
		{Key: "$set", Value: bson.D{
			{Key: "string", Value: upd.String},
		}},
	}

	rs, err := db.UpdateOne(ctx.TODO(), filter, update)

	if err != nil && rs.ModifiedCount == 0 {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{ "message": "` + err.Error() + `"}`))
		return
	}

	// err = db.FindOne(ctx.TODO(), filter).Decode(&data.Payload)

	// if err != nil {
	// 	w.WriteHeader(http.StatusInternalServerError)
	// 	w.Write([]byte(`{ "message": "` + err.Error() + `"}`))
	// 	return
	// }

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(data)
}
