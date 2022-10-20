

const container = document.querySelector('.container')
const sizeEl = document.querySelector('.size')
let size =sizeEl.value
const color = document.querySelector('.color')
const saveBtn =document.querySelector('.btn')
const saveButton =document.querySelector('.save')
const resetBtn = document.querySelector('.btn1')
let color_selector = document.querySelector(".color_selector");
let color_selectorKey = document.querySelector(".color_selectorKey");

let colorSelectBnt = document.querySelector("#colorSelectBnt");
let red = document.querySelector("#red");

let draw =false
let colorPaletteOpen = false


var color1 = "black",
    y = 2;


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
    colorSelectBnt.value= obj.value;
    
  
    }



function populate(size){
    container.style.setProperty('--size',size)
    for(let i=0; i< size * size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')
        div.setAttribute("id",i)

       div.style = `background-color:white`

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
  let keyCode = event.key? event.key : event.key.charCodeAt();//condition ? true : false //  // 	49 points the 1 key
  if(keyCode ==='1') {
    // call click function of the buttonn 
    btn1.click();
  }
    
});

// button 2 

btn2.addEventListener('click', (ev)=>{
    console.log("Btn2 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.key? event.key: event.which;
  
    // 	50 points the 2 key
    if(keyCode ==='2') {
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
   let keyCode = event.key ? event.key: event.which;
  

    if(keyCode ==='3') {
      btn3.click();
    }
      
  });
  
  

//   button4
 btn4.addEventListener('click', (ev)=>{
    console.log("Btn4 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
     let keyCode = event.key? event.key: event.which;
     if(keyCode ==='4') {
      btn4.click();
    }
      
  });
  
  

//   button 5
 

btn5.addEventListener('click', (ev)=>{
    console.log("Btn5 clicked");
  });
  
  document.addEventListener('keypress', (event)=>{
  
    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.key? event.key : event.which;
  
    if(keyCode === '5') {
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
    let keyCode = event.key ? event.key : event.which;
  
    // 	54 points the 6 key
    if(keyCode === '6') {
      // call click function of the buttonn 
      btn6.click();
    }
      
  });
  
  

window.addEventListener("mousedown",function(){
    draw = true
})


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

//************************save******************* */

saveButton.addEventListener("click",(e)=>{
    let allSquare = document.querySelectorAll(".pixel")
 //   console.log(allSquare[0].id)
// let count = 0
let a = []

for(let i=0; i< 250* 250; i++){
      let color = allSquare[i].style.backgroundColor
      if(color != "white"){
    //  let divID = document.querySelector(i);
      let D ={};
      D.divID =  allSquare[i].id;
      D.color = color 
    a.push(D)

} //count++
}
console.log("value of a",a)
   

const data = {data :a};

fetch('/board', {
  method: 'POST', // or 'PUT'
  headers: {
    
    'Content-Type': 'application/json',
    // Accept: 'application/json',
    // "Allow-Access-Control-Origin": "http://localhost:4001",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  
})
populate(size )