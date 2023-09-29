import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.post('/test',async (request,response)=>{
    let input = request.body.input;
    input += ' World';
    response.send({input});
});

app.listen(8484, ()=> console.log('running on 8484'));

