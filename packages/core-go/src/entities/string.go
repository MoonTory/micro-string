package entities

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// String entity model
type String struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	String    string             `json:"string,omitempty" bson:"string,omitempty"`
	CreatedAt time.Time          `json:"createdAt,omitempty" bson:"createdAt,omitempty"`
	UpdatedAt time.Time          `json:"updatedAt,omitempty" bson:"updatedAt,omitempty"`
}

// Strings collection type
type Strings []String
