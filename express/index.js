const express = require('express');
const app = express();
app.use(express.json());

// const numberArray = ["Apple","Banana","Kiwi","Orange","Mongo"]
const courses = [{id : 1,name:"course1"},{id : 2, name : "course2"},{id :3, name : "course3"}]
// const courses = []
app.get('/',(req,res)=>{
    res.send('Hello World');
    res.end();
})

app.get('/get/numbers',(req,res)=>{
    res.send(JSON.stringify(numberArray));
    res.end();
})

app.get('/get/number/:id',(req,res)=>{
    // res.send(req.params.id)
    if(courses.length > 1){
        // res.send(req.params.id)
        const result = courses.filter(obj=>obj.id === Number(req.params.id));
        // res.send(result)
        if(result.length >= 1){
        res.send(result);
        res.end()}
        else{
            res.send(JSON.stringify({"err_msg":"Data not found"}))
        }
    }else{
        res.send(JSON.stringify({"err_msg":"Data Base is empty"}))
    }

})

app.post('/save/course',(req,res)=>{
    // res.send(req.body)
    // res.end()
    let course = {
        id: courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    const result = courses.filter(obj=> obj.id === course.id)
    if(result){
        res.send({id:result[0].id,
            name : result[0].name,
            msg : "data insterted successfully"
        })
        res.end()
    }
})
const port = process.env.PORT || 3000 //process is global object
// for setting for port number pls run this command "set PORT=8000"
// console.log(port,process)
app.listen(port,()=>console.log(`running on ${port}...`))