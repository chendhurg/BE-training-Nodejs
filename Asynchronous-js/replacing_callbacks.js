console.log('start');
function getStudentdet(id){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('reading the student details...');
            const student ={
                id : id,
                name : 'chendhur arasu',
                roll_no : '21itr015',
                phone_no : '9025343592',
            };
            resolve(student);
    })
    
}, 2000);
}
function getParentdet(id){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('reading parent details');
            const parent ={
                id : id,
                name : 'gandhinathan k',
                phone_no : 9025343592,
            };
            resolve(parent);
    
    })
    
    },2000)
}

console.log('end');