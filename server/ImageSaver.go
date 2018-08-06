package main

import (
	"fmt"
	"io/ioutil"
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
	body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		println("error reading body")
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Vary", "Origin")
	text := string(body)
	println("Received a request for ", text)
	fmt.Fprintf(w, "Received some data: %s", text)
}
