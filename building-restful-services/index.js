const express = require('express');
const app = express();
const courses = [
    {id: 1,name: 'course1'},
    {id: 2, name: 'course2'},
    {id:3, name: 'course3'},
];
app.get('/', (req,res)=>{
    res.send('hello world');
});
 app.get('/api/courses', (req,res)=>{
    res.send([1,2,3,4,5]);
 })
app.get('/api/courses/:id',(req,res)=>{
    courses.find(c =>=== parse);
})
 const port = process.env.PORT || 3000
 app.listen(3000,()=>console.log(`listening on port ${port}...`));
