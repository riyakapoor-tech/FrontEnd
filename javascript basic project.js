/*Traffic light*/
let signal='green';
let padestrian=0;
if(signal==='green' && padestrian===0){
    console.log('cross road');
}
else {
    console.log('dont cross')

}

/*race*/
let registration1='late';
let age= 12;
if(age>18 && registration1==='on time'){
    console.log('race begin at 12');
}
else if(age<18 && registration1==='on time'){
    console.log('race begin at 1');
}
 else if(age>18 && registration1==='late'){
    console.log('race begin  at 2');
}
else{
        console.log('race begin at 3')
    }

    /*grade card*/

let gradeScore=85;
if(gradeScore>90 && gradeScore<100){
    console.log('got grade A')
}
else if(gradeScore>80 && gradeScore<89){
    console.log('got grade B')
}
else if(gradeScore>70 && gradeScore<79){
    console.log('got grade C')

}
else if(gradeScore>60 && gradeScore<69){
    console.log('got grade D')
}
else{
    console.log('fail')
}


let number=45;
let remainder=number%2
if(remainder===0){
    console.log('the number is even')
}
else if(remainder!==0){
    console.log('the number is odd')
}
else{
    console.log('invalid')
}


