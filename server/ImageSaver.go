package main

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/vincent-petithory/dataurl"
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
	println("Received a request")

	dataURL, err := dataurl.DecodeString(string(body))
	if err := ioutil.WriteFile("/data/animation-frames/test.png", dataURL.Data, 0644); err != nil {
		println("error saving image", err)
		fmt.Fprintf(w, "Failed to save image %s", err)
		return
	}
	fmt.Fprintf(w, "Saved your image")
}
