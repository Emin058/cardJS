const test=document.querySelector(".container");
console.log(test);


                                                          // niye ikinci argumenti qebul etmir niye ancaq dark isleyir?????
                                                              // ve sonuncu resulti verir ancaq???







// const english=document.querySelector(".lang2")



// const changeColor=()=>{

// test.addEventListener.add("dark")

// }

// english.addEventListener("change",changeColor)










const changeColor=(a)=>{
  let secondValue = a.target.value;
  if (secondValue === "english") {
    test.classList.add("dark");
  }};

const list = document.querySelector('#list');
list.addEventListener('change', function(a) {  
  changeColor(a)
});


let changeColor_2=(a)=>{
  let firstValue = a.target.value;
  if (firstValue === "azeri") {                                     
    test.classList.add("light");
  } 
};
let list_2 = document.querySelector('#list');
list_2.addEventListener('change', function(a) {  
  changeColor_2(a)
});




// function changeColor(a){
//   let changeColor = a.target.value;
  
//   switch(changeColor) {

//          case 'azeri':
//         test.classList.add('light');
//         break;


//     case 'english':
//       test.classList.add('dark');
//       break;
   
//   }

// }

// const list = document.querySelector('#list');

// list.addEventListener('change', function(a) {  
//   changeColor(a)
// });







// indexin methodlari:








