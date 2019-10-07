package routes

import (
	"net/http"

	"./handlers"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
)

// Route struct
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

// Routes collection
type Routes []Route

// NewRouter registers our services routes & returns '*mux.Router'
func NewRouter(db *mongo.Database) *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		h := Adapt(route.HandlerFunc, Logger(route.Name), setHeaders(), withDB(db, route.Pattern))

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(h)
	}

	return router
}

var routes = Routes{
	Route{
		"Hit",
		"GET",
		"/hit",
		handlers.Hit,
	},
	Route{
		"StringGetAll",
		"GET",
		"/string",
		handlers.StringGetAll,
	},
	Route{
		"StringUpdate",
		"PUT",
		"/string/{id}",
		handlers.StringUpdate,
	},
	// Route{
	// 	"TodoShow",
	// 	"GET",
	// 	"/todos/{todoId}",
	// 	TodoShow,
	// },
}
