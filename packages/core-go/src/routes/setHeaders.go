package routes

import (
	"net/http"
)

func setHeaders() Adapter {
	// return the Adapter
	return func(h http.Handler) http.Handler {
		// the adapter (when called) should return a new handler
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json; charset=UTF-8")
			h.ServeHTTP(w, r)
		})
	}
}
