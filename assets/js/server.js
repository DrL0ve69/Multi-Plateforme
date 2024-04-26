import http from 'http';
const server = http.createServer((req, res) =>
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('<!DOCTYPE html>');
})
const port = server.listen(8080);
console.log('Server running at http://localhost:8080');
console.log(`Server running at ${port}`);

//mettre dans le meme module pour que ca fonctionne!!!