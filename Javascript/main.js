

// Question 1

let x = 1;
let result = (function(){
       delete x;
       return x;
 })();


 //console.log(result);  // 1

// Question 2

 let status = true;

//  console.log(status + 0); //1
//  console.log(status + 'user') //trueuser
//  console.log(status + true) // 2
//  console.log(status + false) //1

 // Question 3

 const city = ['delhi','goa','pune'];

 delete city[1];

//  console.log(city.length) //3


// Question 4

 console.log(0.2 + 0.4 == 0.6); // false

 // Question 5

 function test(){
    return {
        name :'Tejas'
    }
 }

 function test1(){
    return 
    {
        name :'Tejas'
    }
 }

 console.log(test());
 console.log(test1())