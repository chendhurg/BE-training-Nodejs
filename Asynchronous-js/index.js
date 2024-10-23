console.log('start');
getNum(3,function(n){
    console.log(n);
});
function getNum(number,callback){
    setTimeout(() => {
    console.log('reading the number...');
    callback(number);
}, 2000);
}

console.log('end');