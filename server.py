import os
import sys
import http.server
import socketserver

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)

log = open(os.path.join(ROOT, "server.log"), "a", encoding="utf-8", buffering=1)
sys.stdout = log
sys.stderr = log


class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        log.write("%s - %s\n" % (self.address_string(), fmt % args))


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


with Server(("127.0.0.1", 8000), Handler) as httpd:
    httpd.serve_forever()
