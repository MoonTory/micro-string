package routes

import (
	"net/http"

	"github.com/gorilla/context"
	"go.mongodb.org/mongo-driver/mongo"
)

func withDB(db *mongo.Database, pattern string) Adapter {
	// return the Adapter
	return func(h http.Handler) http.Handler {
		// the adapter (when called) should return a new handler
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// copy the database session
			// dbsession := db.Copy()
			// defer dbsession.Close() // clean up
			// save it in the mux context
			context.Set(r, "db", db.Collection("archives"))

			// pass execution to the original handler
			h.ServeHTTP(w, r)
		})
	}
}
