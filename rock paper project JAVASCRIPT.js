/*ROCK PAPER SCISSOR GAME*/

const userInput='rock';
let computerCall;
let computerInput=Math.floor(Math.random()*3);
if (computerInput===0){
   computerCall= 'rock';
}
else if (computerInput===1){
    computerCall='paper';
}
else{
    computerCall='scissor';
}
if(userInput==='rock' && computerCall==='paper'){
    console.log('computerCall is winner')

}
else if(userInput==='paper' && computerCall==='scissor'){
    console.log('computerCall is winner')
}
else if(userInput==='scissor' && computerCall==='paper'){
    console.log('userInput is winner')
}
else if(userInput==='rock' && computerCall==='scissor'){
    console.log('userInput is winner')
}
else if(userInput==='paper' && computerCall==='rock'){
    console.log('userInput is winner')
}
else if(userInput==='scissor' && computerCall==='rock'){
    console.log('computerCall is winner')
}
else if(userInput==='scissor' && computerCall==='scissor'){
    console.log('draw')
}
else if(userInput==='rock' && computerCall==='rock'){
    console.log('draw')
}
else{
    console.log('draw')
}

