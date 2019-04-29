// 1. A JavaScript Boolean represents one of two values: true or false.
// different expression that results a Boolean type:
// 5>4            // return true

//85 + 45 === 69  // return false

//let x = 23;
//Boolean(x)      // return true

// 2. Flowchart.js allows you to draw simple SVG flow chart diagrams from textual representation of the diagram.

//3. Placing If Statement inside another IF Statement is called JavaScript Nested If Statement
// let a = prompt("username: ");
// if(a !== "c4e"){
//     console.log("wrong username")
// }
// else if(a ==="c4e"){
//     let b = prompt("password")
//     if(b !=="mindx"){
//         console.log("wrong password")
//     }
//     else if(a ==="c4e"){
//         console.log("wellcome")
//     }
// }


// Turtle
// clear()
// color("red")
// for( let i=0; i<4; i++){
// lt(30)
// fd(60)
// rt(60)
// fd(60)
// rt(120)
// fd(60)
// rt(60)
// fd(60)
// rt(240)
// }




// clear()
// color("blue")
// rt(30)
// for(let i=0;i<17;i++){
//   fd(100)
//  if(i<2){
//   rt(120)
//   }
//  else if(i<7){
//    rt(72)
//   }

//   else if(i<11){
//     color("red")
//     rt(90)
//   }
//  else{
//     rt(60)
//   }
// }


// let height= prompt("Enter height(cm): ")
// let weight= prompt("Enter weight(kg): ")
// let bmi= (weight/100)/ (height^2)
// if (bmi<16){
//   console.log("severely underweight")
// } else if(16<=bmi<18.5){
//   console.log( "underweight")
// } else if(18.5<=bmi<25){
//   console.log( "normal")
// } else{
//   console.log( "obese")
// };


let n= prompt("Enter a number: ")
 let tich=1
for (let i = 1; i<=n;i++){
  tich= tich*i;
};
console.log(tich)