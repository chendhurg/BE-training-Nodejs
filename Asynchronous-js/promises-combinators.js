
const pr1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('reading p1');
        resolve(1);
    },2000);
    
});

const pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('reading p2');
        //reject(console.error('error for promises.any'));
        resolve(4);
        
    },1000);
});

Promise.race([pr1,pr2])
  .then(result =>console.log(result));