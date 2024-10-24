const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const courses = [
    {id: 1,name: 'course1'},
    {id: 2, name: 'course2'},
    {id:3, name: 'course3'},
];
app.get('/', (req,res)=>{
    res.send('hello world');
});
 app.get('/api/courses', (req,res)=>{
    res.send(courses);
 });



 app.post('/api/courses',(req,res)=>{
    
    const course ={
        id : courses.length+1,
        name : req.body.name,
    };
    courses.push(course);
    const {error} = validateCourse(req.body);
    if(error){
        return res.send(400).send('validation error');
    }
    else{
        res.send(course);
    }
    
});
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c =>c.id=== parseInt(req.params.id));
    if(!course) res.status(404).send('invalid course');
    res.send(course);
});
app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c =>c.id=== parseInt(req.params.id));
    if(!course) return res.status(404).send('invalid course');
    const { error }= validateCourse(req.body);
    if(error){
        return res.status(400).send("invalid course name");
    }
    course.name = req.body.name;
    res.send(course);

}); 
app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id===parseInt(req.params.id));
    if(!course) res.status(404).send('Invalid course name');

    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(courses);
})





function validateCourse(course){
    const schema = Joi.object({
        //id : Joi.number().required(),
        name:Joi.string().min(3).required(),
    });

    return schema.validate(course);
}











const port = process.env.PORT || 3000
 app.listen(3000,()=>console.log(`listening on port ${port}...`));
