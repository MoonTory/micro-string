package routes

import (
	"log"
	"net/http"
	"time"
)

// Logger sets a timer before the request starts, afterwards it logs out the final status.
func Logger(name string) Adapter {
	return func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			start := time.Now()

			h.ServeHTTP(w, r)

			log.Printf(
				"%s\t%s\t%s\t%s",
				r.Method,
				r.RequestURI,
				name,
				time.Since(start),
			)
		})
	}
}
