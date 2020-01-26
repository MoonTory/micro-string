package handlers

import (
	"encoding/json"
	"net/http"
	"os"
)

type payload struct {
	Message string
}

// Hit route handler
func Hit(w http.ResponseWriter, r *http.Request) {
	host, _ := os.Hostname()
	// Payload to send to client
	payload := payload{"It's  Golang - " + host}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(payload); err != nil {
		panic(err)
	}
}
