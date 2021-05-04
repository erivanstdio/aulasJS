let randomNumber = 9;

setTimeout(() => {
    randomNumber += 100;
    console.log(randomNumber);
}, 2000);

console.log(randomNumber);

const promessa = new Promise((resolve, reject) =>{
    const number = 37;
  
    resolve(number);
})

promessa
    .then(value => value)
    .then(value => {
        console.log(value);
    })
    .catch((rejectValue) => {
        console.log(rejectValue);
    })




