import express from 'express';
import path from 'path';

const app = express();

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send('Hello!'));

app.use(express.static(path.join(__dirname, '/build')));

app.get('*',(req, res) =>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8050, () => console.log('Teste...'));




