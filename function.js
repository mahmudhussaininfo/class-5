

/**
 * Number 1/ Create a function that will return children, teenagers, young people, old people from the age
 */

// const agecal = (name,age) => {

//     let type;

//   if(age>=0 && age<=5){
//       type = 'Children';
//   }else if(age>=6 && age<18){
//     type = 'Teenager';
//   }else if( age>=18){
//     type = 'Young people';
//   }

//   console.log(`

//   Hello ${name}, your are a ${type}
  
//   `);
// }


/**
 * Number 2/ Create a function that will return the area of a rectangle, square, triangle
 */

// const areacal = (type,value1,value2) => {
    
//     let area = '';
//     let shape = '';

//     switch(type){
//         case 'R' :
//         area = value1 * value2;
//         shape = 'rectangle';
//         break;
        
//         case 'S' :
//         area = value1 * value1;
//         shape = 'square';
//         break;
        
//         case 'T' :
//         area =  0.5 * (value1 * value2);
//         shape = 'triangle';
//         break;
//     }

//     console.log(` This is a ${shape} & value is ${area}`);
// }


/**
 * Number 3/GPA, CGPA, GRADE function for result publishing
 */

// const gradecal = (marks) => {
     
//     let grade;

//     if(marks>=0 && marks<=33){
//         grade = 'F';
//     }else if(marks>=34 && marks<=40 ){
//         grade = 'D';
//     }else if(marks>=41 && marks<=50 ){
//         grade = 'C';
//     }else if(marks>=51 && marks<=69 ){
//         grade = 'A-';
//     }else if(marks>=70 && marks<=79 ){
//         grade = 'A';
//     }else if(marks>=80 && marks<=100 ){
//         grade = 'A+';
//     }
//     return grade;
// }


// const gpacal = (marks) => {
     
//     let gpa;

//     if(marks>=0 && marks<=33){
//         gpa = '0';
//     }else if(marks>=34 && marks<=40 ){
//         gpa = '1';
//     }else if(marks>=41 && marks<=50 ){
//         gpa = '2';
//     }else if(marks>=51 && marks<=69 ){
//         gpa = '3';
//     }else if(marks>=70 && marks<=79 ){
//         gpa = '3.5';
//     }else if(marks>=80 && marks<=100 ){
//         gpa = '4';
//     }
//     return gpa;
// }


/**
 * Number 4/ Create a BMI function for health
 */

//  const bmical = (name,weight,height) =>{
     
//     var bmi = weight / ( height * height);

//     if(bmi<=18.5){
//         console.log(`

//      Hello Mr. ${name}, Your BMI is ${bmi} and you are underweight. 
    
//      `);
//     }else if( bmi>18.5 && bmi <=24.5){
//         console.log(`

//      Hello Mr. ${name}, Your BMI is ${bmi} and you Normal. 
    
//      `);
//     }else if( bmi >=25.0 && bmi<=29.9){
//         console.log(`

//      Hello Mr. ${name}, Your BMI is ${bmi} and you are overweight. 
    
//      `);
//     }else if( bmi >=30.0){
//         console.log(`

//         Hello Mr. ${name}, Your BMI is ${bmi} and you are very overweight. 
       
//         `);
//     }
    
//  }



/**
 * Number 5/ Create a currency converter function from taka to USD, CAD, POUND, EURO etc
 */

// const currencycal = (amount,type) => {

//     let rate = 0;

//     switch(type){
//         case 'usd' :
//         rate = 86;
//         break;
       
//         case 'cad' :
//         rate = 67;
//         break;
        
//         case 'pound' :
//         rate = 114;
//         break;
        
//         case 'euro' :
//         rate = 96;
//         break;

//     }

//     console.log(` ${amount} ${type} = ${amount * rate} BDT.`);

// }