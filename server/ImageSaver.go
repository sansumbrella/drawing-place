package main

import (
	"fmt"
	"net/http"
)

func main() {
	println("hiya")
	// start server
	// listen for incoming image data
	// save data to disk
	http.HandleFunc("/save-image", saveImage)
	http.ListenAndServe(":80", nil)
}

func saveImage(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Received some data: %s", req.Body)
}
