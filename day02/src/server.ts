import express from 'express';

const server = express();

server.get('/hello', (req: Request, res: any) => {
    res.send('world');
})

server.listen(8090);