




//Ex1
// let prints = () =>{
//     for( let i=0; i<3; i++){
//       text("Hello world")
//     }
//   }
//   prints()

//Ex2
// let sum =(x,y) => {
//     console.log(x+y)
//   };
//   sum(2,5);

//Ex3
// let draw_square = (length, y) => {
//     color(y)
//     for (let i = 0; i < 4; i++) {
//         fd(length)
//         rt(90)
//     }
// }
//draw_square(50, "red")

//Ex4
// let draw_square = (length, y) => {
//     color(y)
//     for (let i = 0; i < 4; i++) {
//         fd(length)
//         rt(90)
//     }
// };

// for (let i = 0; i  < 30; i ++){
//     draw_square(i * 5, "red")
// lt(17)
// penup()
//     fd(i * 2)
//     pendown()
// }

//Ex5
// let draw_star = (length) => {
//     rt(15)
//     for( let i=0 ; i<5; i ++){
//     fd(length)
//     rt(145)
//     }
//     }
    
//     draw_star(150)

//Ex6
// let remove_dollar_sign = (s) =>{
//     return s.replace(/[$]/gi,'')
//     }
//     remove_dollar_sign('With 5$ we can buy a cake, with 10$ we can buy a drink')
    
//Ex7
// let remove_dollar_sign = (s) =>{
//     return s.replace(/[$]/gi,'')
//     }
//     remove_dollar_sign('With 5$ we can buy a cake, with 10$ we can buy a drink')
//     string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//     console.log("Your function is correct")}
// else{
//     console.log("Oops, there's a bug")}


//Ex8
// let get_even_list = (l) =>{
//     let newLish =[]
//     for( let i=0; i<l.length; i++){
//       if (l[i] % 2 ===0) {
//         newLish.push(l[i])
//       }
//     }
//     return newLish
//   }
//   get_even_list([2,5,4,-7,-8,6])

//Ex9
// let get_even_list = (l) =>{
//     let newLish =[]
//     for( let i=0; i<l.length; i++){
//       if (l[i] % 2 ===0) {
//         newLish.push(l[i])
//       }
//     }
//     return newLish
//   }
  
//   even_list = get_even_list([1, 2, 5, 9, -10, 6])
//   if (even_list = [2, -10, 6]){
//       console.log("Your function is correct")}
//   else{
//       console.log("Ooops, bugs detected")}
  

//Ex10
// let is_inside =([x,y],[x1,y1,width,height]) =>{
//     if(x>=x1 && x<= x1+width){
//       if(y>=y1 && y<=y1+height){
//         return true
//       }
//       else{ return false}
//     }
//     else{ return false}
//   }
  
//   is_inside([100, 120], [140, 60,30,50])
//   is_inside([200, 120], [140, 60, 100, 200])

  //Ex11

//   let is_inside =([x,y],[x1,y1,width,height]) =>{
//     if(x>=x1 && x<= x1+width){
//       if(y>=y1 && y<=y1+height){
//         return true
//       }
//       else{ return false}
//     }
//     else{ return false}
//   }
  
//   let ketQua = is_inside([200, 120], [140, 60, 100, 200])
//   if( ketQua === true){
//       console.log("Your function is correct")
//   }
//   else{
//       console.log("Ooops, bugs detected")
//   }