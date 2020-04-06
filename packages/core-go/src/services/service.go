package services

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"../routes"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/mongo"
)

// Service will handle the core logic of our micro-service.
type Service struct {
	itrfc *mux.Router
	db    *mongo.Database
}

// Init initializes our micro-service.
func (s *Service) Init() {
	host, _ := os.Hostname()
	s.db = NewDatabase()
	s.itrfc = routes.NewRouter(s.db)

	fmt.Println("go-core initialised on", host, "successfully...")
	log.Fatal(http.ListenAndServe(":5003", s.itrfc))
}
