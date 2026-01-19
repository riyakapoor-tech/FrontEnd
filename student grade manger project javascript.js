//student grade manager
let students=['riya','shikha','prince','aashish',];
let marks=[80,85,90,95,];

for(let i=0; i<students.length;i++){
    let name =students[i];
    let grade
if(marks[i]>=90 && marks[i]<100){
    
    grade='A';
}
else if(marks[i]>=80 && marks[i]<90){
    grade='B';
   // console.log(`${students[i]} got Grade B`);
}
else{
   // console.log(`${students[i]} got Grade C`)
   grade='C';
}
console.log(`Name: ${students[i]} | Marks:${marks[i]} | Grade: ${grade}`)
}
// Calculate and print average marks
let total = 0;
for (let j = 0; j < marks.length; j++) {
    total += marks[j];
}
let average = total / marks.length;

console.log(`Average Marks: ${average}`);




