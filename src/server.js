
import express from 'express';
import path from 'path';


var PORT = process.env.PORT || 8050;
const app = express();

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send('Hello!'));

app.use(express.static(path.join(__dirname, '/build')));

app.get('*',(req, res) =>{
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(PORT, () => console.log('Teste...'));




