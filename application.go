package main

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}

	f, _ := os.Create("/var/log/golang/golang-server.log")
	defer f.Close()
	log.SetOutput(f)

	http.HandleFunc("/css/", serveStaticContent)
	http.HandleFunc("/scripts/", serveStaticContent)

	http.HandleFunc("/robots.txt", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./robots.txt")
	})

	http.HandleFunc("/favicon.ico", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./favicon.ico")
	})

	const indexPage = "public/index.html"
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			if buf, err := ioutil.ReadAll(r.Body); err == nil {
				log.Printf("Received message: %s\n", string(buf))
			}
		} else {
			log.Printf("Serving %s to %s...\n", indexPage, r.RemoteAddr)
			setRespHeaders(w)
			http.ServeFile(w, r, indexPage)
		}
	})

	http.HandleFunc("/scheduled", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			log.Printf("Received task %s scheduled at %s\n", r.Header.Get("X-Aws-Sqsd-Taskname"), r.Header.Get("X-Aws-Sqsd-Scheduled-At"))
		}
	})

	log.Printf("Listening on port %s\n\n", port)
	http.ListenAndServe(":"+port, nil)
}

func serveStaticContent(w http.ResponseWriter, r *http.Request) {
	setRespHeaders(w)
	http.ServeFile(w, r, r.URL.Path[1:])
}

func setRespHeaders(w http.ResponseWriter) {
	w.Header().Set("Cache-Control", "max-age=3600")
	w.Header().Set("X-Frame-Options", "deny")
	w.Header().Set("X-XSS-Protection", "1; mode=block")
	w.Header().Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
	w.Header().Set("Content-Security-Policy", "img-src https://s3.us-east-2.amazonaws.com 'self';default-src 'unsafe-inline' 'self';")
}
