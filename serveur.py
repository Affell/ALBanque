﻿import http.server

PORT = 80
server_address = ("",PORT)

server = http.server.HTTPServer
handler = http.server.CGIHTTPRequestHandler
handler.cgi_directories = ["//"]
print("Serveur actif sur le port :" + str(PORT))

httpd = server(server_address, handler)
httpd.serve_forever()

