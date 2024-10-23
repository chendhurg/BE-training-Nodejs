console.log('start');
getStudentdet(1,function(student){
    console.log(student);

    getParentdet(2,function(parent){
        console.log(parent);
    })
});
function getStudentdet(id,callback){
    setTimeout(() => {
    console.log('reading the student details...');
    const student ={
        id : id,
        name : 'chendhur arasu',
        roll_no : '21itr015',
        phone_no : '9025343592',
    };
    callback(student);
}, 2000);
}
function getParentdet(id,callback){
    setTimeout(()=>{
        console.log('reading parent details');
        const parent ={
            id : id,
            name : 'gandhinathan k',
            phone_no : 9025343592,
        };
        callback(parent);

    },2000)
}

console.log('end');