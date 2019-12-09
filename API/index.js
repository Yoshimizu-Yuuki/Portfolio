const express = require('express')
const app = express()

const { Pool, Client } = require('pg')
//const connectionString = 'postgres://postgres:postgres@35.189.131.252:5432/postgres'
const connectionString = 'postgres://postgres:postgres@10.105.48.3:5432/postgres'
// const pool = new Pool({
//   connectionString: connectionString,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/user',(req, res) => res.send('Got a PUT request at /user'));

//idの箇所に数字を入れることで、パラメータを渡すことができる。tags/10
//みたいな感じで渡すと、10を受け取ることができる。
//Laravelのルーティングの中に処理を書くイメージだと思われる。（本当はもっといい方法がありそう）
// app.post('/tags/:id',(req,res)=> 
//     res.send(req.param('id') + "：POSTデータのお返しです！")
// );


/*
URL設計
/resume⇒resumeの全件取得
/tag/:resume_id⇒resume_idに応じたタグの全件取得
*/

app.post('/resume',(req, res) => 
{
    const client = new Client({
        connectionString: connectionString,
      })
      client.connect()
      client.query('SELECT * FROM resume', (err, result) => {
        res.send(result.rows);
        client.end()
    })
});


app.post('/tag/:resume_id',(req, res) => 
{
    const client = new Client({
        connectionString: connectionString,
      })
      client.connect()

      //resume_idを使ってクエリ
      client.query({
        name: 'fetch-user',
        text: 'SELECT * FROM tag WHERE resume_id = $1',
        values: [req.param('resume_id')]
      }, (err, result) => {
        res.send(result.rows);
        client.end()
    })
});

app.get('/resume',(req, res) => 
{
    const client = new Client({
      connectionString: connectionString,
    })
    client.connect()
    client.query('SELECT * FROM resume', (err, result) => {
      res.send(result.rows);
      client.end()
  })
});


app.get('/tag/:resume_id',(req, res) => 
{
    const client = new Client({
        connectionString: connectionString,
      })
      client.connect()

      //resume_idを使ってクエリ
      client.query({
        name: 'fetch-user',
        text: 'SELECT * FROM tag WHERE resume_id = $1',
        values: [req.param('resume_id')]
      }, (err, result) => {
        res.send(result.rows);
        client.end()
    })
});



app.listen(9000, () => console.log('Example app listening on port 9000!'))