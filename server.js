const http = require('http');
const Gun = require('gun');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Gun Relay is Running");
});

// Initialize Gun with no stats and no tracking
const gun = Gun({
    web: server,
    stats: false,      // Disables internal stats gathering
    axe: false,        // Disables the AXE relay (often includes extra pings)
    multicast: false   // Disables LAN discovery pings
});

server.listen(8765, () => {
    console.log("Clean Gun Relay listening on port 8765");
});
