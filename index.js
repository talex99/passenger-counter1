


let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)
let count=0;
function increment(){
    count++;
    countEl.innerText=count
    //console.log(count)
    
}

function save(){
   // console.log(count);
   
    let entries=count + " - "
    saveEl.textContent+=entries
    countEl.textContent=0
    count=0
}


// let name="Ana"
// let message="You have 3 new notificarions!"
// console.log(name +", "+ message)

// let messageToUser= name+", " + message;
// console.log(messageToUser)

// let myName="Ana"
// let greetings="Hi, my name is"
// let mess=greetings+" " + myName;
// console.log(mess)