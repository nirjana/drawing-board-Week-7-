

const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size =sizeEl.value
const color = document.querySelector('.color')
const saveBtn =document.querySelector('.btn')
const resetBtn = document.querySelector('.btn1')
let color_selector = document.querySelector(".color_selector");
let color_selectorKey = document.querySelector(".color_selectorKey");

let colorSelectBnt = document.querySelector("#colorSelectBnt");
let red = document.querySelector("#red");

// let colorSelectBnt = document.querySelector("#colorSelectBnt");

// let color_selector1 = document.querySelector(".color_selector1 ");
// let color_selector2 = document.querySelector(".color_selector2");

let draw =false
let colorPaletteOpen = false


var color1 = "black",
    y = 2;


    
// / change brush color
function ChangeColor(obj) {
    switch (obj.id) {
        case "green":
        color1 = "green";
            break;
        case "blue":
        color1 = "blue";
            break;
        case "red":
        color1 = "red";
            break;
        case "yellow":
        color1 = "yellow";
            break;
        case "orange":
        color1 = "orange";
            break;
        case "black":
        color1 = "black";
            break;
        case "white":
        color1 = "white";
            break;
    }
    colorSelectBnt.style.background = obj.id;
    colorSelectBnt.value= obj.id;
    
  
    }


// / change brush color
function ChangeColor(obj) {
    switch (obj.value) {
        case "green":
        color1 = "green";
            break;
        case "blue":
        color1 = "blue";
            break;
        case "red":
        color1 = "red";
            break;
        case "yellow":
        color1 = "yellow";
            break;
        case "orange":
        color1 = "orange";
            break;
        case "black":
        color1 = "black";
            break;
        case "white":
        color1 = "white";
            break;
    }
    colorSelectBnt.style.background = obj.value;
    colorSelectBnt.style.background = obj.value;
    
  
    }


function populate(size){
    container.style.setProperty('--size',size)
    for(let i=0; i< size * size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')


        div.addEventListener('mouseover',function(){
            if(!draw)return
            div.style.backgroundColor = color_selector.value


       })



   

 div.addEventListener('mousedown',function(){
           
            div.style.backgroundColor = color_selector.value
        })

        container.appendChild(div)
    }
}




//  button one 

let btn1 = document.getElementById('btn1');

let btn2 = document.getElementById('btn2');

let btn3 = document.getElementById('btn3');

let btn4 = document.getElementById('btn4');

let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

   
// when the btn is clicked print info in console 
btn1.addEventListener('click', (ev)=>{
  console.log("Btn1 clicked");
});

document.addEventListener('keypress', (event)=>{

  // event.keyCode or event.which  property will have the code of the pressed key
  let keyCode = event.keyCode ? event.keyCode : event.which;

  // 	49 points the 1 key
  if(keyCode === 	49) {
    // call click function of the buttonn 
    btn1.click();
  }
    
});

// button 2 

 
// when the btn is clicked print info in console 
btn2.addEventListener('click', (ev)=>{
    console.log("Btn2 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;
  
    // 	50 points the 2 key
    if(keyCode === 	50) {
      // call click function of the buttonn 
      btn2.click();
    }
      
  });
  
  
// button 3 
 
// when the btn is clicked print info in console 
btn3.addEventListener('click', (ev)=>{
    console.log("Btn3 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;
  
    // 	51 points the 3 key
    if(keyCode === 	51) {
      // call click function of the buttonn 
      btn3.click();
    }
      
  });
  
  

//   button4
 
// when the btn is clicked print info in console 
btn4.addEventListener('click', (ev)=>{
    console.log("Btn4 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;
  
    // 	52 points the 4 key
    if(keyCode === 	52) {
      // call click function of the buttonn 
      btn4.click();
    }
      
  });
  
  

//   button 5
 
// when the btn is clicked print info in console 
btn5.addEventListener('click', (ev)=>{
    console.log("Btn5 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;
  
    // 	53 points the 5 key
    if(keyCode === 	53) {
      // call click function of the buttonn 
      btn5.click();
    }
      
  });
  
  

//   button 6 
 
// when the btn is clicked print info in console 
btn6.addEventListener('click', (ev)=>{
    console.log("Btn6 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;
  
    // 	54 points the 6 key
    if(keyCode === 	54) {
      // call click function of the buttonn 
      btn6.click();
    }
      
  });
  
  
  


window.addEventListener("mousedown",function(){
    draw = true
})





// window.addEventListener("keydown",function(){
//     draw = true
// })

window.addEventListener("mouseup",function(){
    draw = false
})

function save(){
    container.innerHTML=''
    populate(size)    
    let csvContent = "data:text/csv;charset=utf-8," 
        + arry.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
}

saveBtn.addEventListener('click',save)

sizeEl.addEventListener('keyup',function(){
    size = sizeEl.value
    save()
})







var arry = [];
function printMousePos(event) {

    arry.push([event.clientX, event.clientY]);
    // document.body.textContent =
    //   "clientX: " + event.clientX +
    //   " - clientY: " + event.clientY;
}
  
  document.addEventListener("click", printMousePos);
  var a= document.addEventListener("click", printMousePos);


  //reset

function reset(){
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)

sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value
    reset()
})


populate(size )