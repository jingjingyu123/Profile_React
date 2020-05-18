// console.log("Before timeout tick");
// setTimeout(()=>console.log("TICK"),1000);
// sleep(500).then(()=>(console.log("Is it after sleep?")));

// function sleep(duration){
//     return new Promise((res,rej) => {
//         setTimeout(res, duration);
//         // call res() when you are finished
//     });
// }
// async function sleeper(){
//     const res = await sleep(500);
//     console.log("Is it after the sleep?");
// }
// sleeper();


// const axios = require('axios');
// axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=b780d44a')
//     .then(function (response){
//         console.log(response.data.Title);
//         console.log(response.data.Director);
//         console.log(response.data.Ratings);
//     })
//     .catch(function (error){
//     })
//     .then(function(){
//     });

// console.log("After timeout tick");
