// Code your solutions in this file 

function writeCards(cards, event) {
    const messages = []; 
    for (let j = 0; j < cards.length; j++) {
       messages.push(`Thank you, ${cards[j]}, for the wonderful ${event} gift!`) 
    } 

    return messages;
} 


// create a new array, add a message for each name into that array, 
//after the loop is done return all array with messages 

 
function countDown(){ 
    let count = 11 

    while (count > 0) {
        count--; 
        console.log(count); 
    }  
}

console.log(countDown(10)); 