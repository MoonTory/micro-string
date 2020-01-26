package routes

import "net/http"

// Adapter function type will allow us to write code that can be run before and/or after HTTP requests that come into our API.
type Adapter func(http.Handler) http.Handler

// Adapt function
func Adapt(h http.Handler, adapters ...Adapter) http.Handler {
	for _, adapter := range adapters {
		h = adapter(h)
	}
	return h
}
