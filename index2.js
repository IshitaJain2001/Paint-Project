

let prevmouseX,prevMouseY
const canvas = document.querySelector("canvas");
const pencil = document.querySelector(".pencil");
const eraser = document.querySelector(".eraser") ;
const shapes= document.querySelector(".shapes");
const allshapes= document.querySelector(".allshapes");
const slider = document.querySelector(".slider-input");
const savebtn= document.querySelector(".save");
const brush = document.querySelector(".brush")
let linewidth= parseInt(slider.value);
slider.addEventListener('input', function() {
 linewidth = parseInt(slider.value);
});
const clear = document.querySelector(".clear");
ctx= canvas.getContext("2d");

let isDrawing= false;
let erasered= false;
window.addEventListener("load",()=>{
 canvas.width= canvas.offsetWidth;
 canvas.height = canvas.offsetHeight;

 })
let color = 0;

const color1= document.querySelector(".color1")
const color2= document.querySelector(".color2")
const color3= document.querySelector(".color3")
const color4= document.querySelector(".color4")
const color5= document.querySelector(".color5")
const color6= document.querySelector(".color6")
const color7= document.querySelector(".color7")
const color8= document.querySelector(".color8")
const color9= document.querySelector(".color9")
const color10=document.querySelector(".color10")
const color11=document.querySelector(".color11")
const color12= document.querySelector(".color12")
const color13= document.querySelector(".color13")
const color14= document.querySelector(".color14")

color1.addEventListener("click",()=>{
color =1;
})
color2.addEventListener("click",()=>{
 color =2;
 })
 color3.addEventListener("click",()=>{
   color =3;
   })
   color4.addEventListener("click",()=>{
     color =4;
     })
     color5.addEventListener("click",()=>{
       color =5;
       })
       color6.addEventListener("click",()=>{
         color =6;
         })
         color7.addEventListener("click",()=>{
           color =7;
           })
           color8.addEventListener("click",()=>{
             color =8;
             })
             color9.addEventListener("click",()=>{
               color =9;
               })
               color10.addEventListener("click",()=>{
                 color =10;
                 })
                 color11.addEventListener("click",()=>{
                   color =11;
                   })
                   color12.addEventListener("click",()=>{
                     color =12;
                     })
                     color13.addEventListener("click",()=>{
                       color =13;
                       })
                       color14.addEventListener("click",()=>{
                         color =14;
                         })
const drawing= (e) =>{
 if(!isDrawing) return;
 {
 ctx.lineTo(e.offsetX, e.offsetY);
 ctx.stroke();
 ctx.lineWidth= linewidth;
 
 if(erasered== true) {
   ctx.strokeStyle= "white";
     }
     else{
       if(color==1) {
         ctx.strokeStyle="aqua";
       }
      else if(color==2) {
         ctx.strokeStyle="blue";
       }
       else if(color==3) {
         ctx.strokeStyle="blueviolet";
       }
       else if(color==4) {
         ctx.strokeStyle="brown";
       }
       else if(color==5) {
         ctx.strokeStyle="cadetblue";
       }
       else if(color==6) {
         ctx.strokeStyle="chartreuse";
       }
       else if(color==7) {
         ctx.strokeStyle="coral";
       }
       else if(color==8) {
         ctx.strokeStyle="darkgoldenrod";
       }
       else if(color==9) {
         ctx.strokeStyle="black";
       }
       else if(color==10) {
         ctx.strokeStyle="darkred";
       }
       else if(color==11) {
         ctx.strokeStyle="deeppink";
       }
       else if(color==12) {
         ctx.strokeStyle="gold";
       }
       else if(color==13) {
         ctx.strokeStyle="green";
       }
       else if(color==14) {
         ctx.strokeStyle="white";
       }
       else{
       ctx.strokeStyle= "black";
       }
     }
 }
}


    pencil.addEventListener("click" ,()=>{
     erasered= false;
     canvas.classList.add("pencilused");
     canvas.classList.remove("erased");
     canvas.classList.remove("brushused");
     canvas.addEventListener("mousedown", startPosition);
     canvas.addEventListener("mousemove",drawing);
     canvas.addEventListener("mouseup", endPosition);    
      
    }
    )



function startPosition() {
 isDrawing = true;

}

function endPosition() {
 isDrawing = false;
 ctx.beginPath(); 
}
let shapesvisible= false;
shapes.addEventListener("click", ()=>{
if(!shapesvisible) {
allshapes.style.opacity = 1;
shapesvisible= true;
} else{
 allshapes.style.opacity = 0;
shapesvisible= false;
}

})

eraser.addEventListener("click",() =>{
erasered = true;
canvas.classList.add("erased");
canvas.classList.remove("pencilused");
canvas.classList.remove("brushused");
})

clear.addEventListener("click", ()=>{
 ctx.clearRect(0, 0, canvas.width, canvas.height); 
})

savebtn.addEventListener("click",()=>{
 const imageDataURL = canvas.toDataURL('image/png');
 const downloadLink = document.createElement('a');
 downloadLink.download = 'canvas_image.png';
 downloadLink.href = imageDataURL;
 downloadLink.click();

})
const randomclr= document.querySelector(".random")
let isbrush = false;
brush.addEventListener("click" ,()=>{
    canvas.classList.add("brushused");
    canvas.classList.remove("erased");  
    canvas.classList.remove("pencilused"); 
isbrush= true;
})

color1.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="aqua"
    }
   
    isbrush=false;
})
color2.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="blue"
    }
isbrush=false;
})
color3.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="blueviolet"
    }
    isbrush=false
})
color4.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="brown"
    }
    isbrush=false
})
color5.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="cadetblue"
    }
    isbrush=false
})
color6.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="chartreuse"
    }
    isbrush=false
})
color7.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="coral"
    }
    isbrush=false
})
color8.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="darkgoldenrod"
    }
    isbrush=false
})
color9.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="black"
    }
    isbrush=false
})
color10.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="darkred"
    }
    isbrush=false
})
color11.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="deeppink"
    }
    isbrush=false
})
color12.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="gold"
    }
    isbrush=false
})
color13.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="green"
    }
    isbrush=false
})
color14.addEventListener("click",()=>{
    if(isbrush) {
        canvas.style.backgroundColor="white"
    }
    isbrush=false
})
randomclr.addEventListener('click' ,()=>{
    let str= '0123456789abcdef';
    let clr= '#'
    for(let i=1; i<=6; i++) {
        clr += str[Math.floor(Math.random()*16)]
    }
    if(isbrush) {
        canvas.style.backgroundColor= clr;
    }
    isbrush= false;
})
const rect= document.querySelector(".rectangle")
let isrectangle= false
let rectStartX, rectStartY;
rect.addEventListener('click' ,()=>{
    isrectangle= true;
    canvas.addEventListener("mousedown", startrect);
     canvas.addEventListener("mousemove",drawingrect);
     canvas.addEventListener("mouseup", endrect);    
})

function startrect(e) {
  if(isrectangle) {
    rectStartX = e.offsetX;
        rectStartY = e.offsetY;
  }
}
function drawingrect(e) {
    if (isrectangle) {
        const rectWidth = e.offsetX - rectStartX;
        const rectHeight = e.offsetY - rectStartY;
         ctx.clearRect(rectStartX, rectStartY, rectWidth, rectHeight); 
        ctx.beginPath();
        ctx.rect(rectStartX, rectStartY, rectWidth, rectHeight);
        ctx.stroke();
    
    }

   
}

function endrect() {


  if(isrectangle) {

  
        isrectangle = false;
rectStartX=undefined;
rectStartY =undefined;
rectWidth=undefined;
rectHeight=undefined;
  }
    
}

const triangle= document.querySelector(".triangle")
let istriangle= false;
triangle.addEventListener("click" ,()=>{
istriangle= true;
canvas.addEventListener("mousedown", starttri);
     canvas.addEventListener("mousemove",drawingtri);
     canvas.addEventListener("mouseup", endtri);  
})

let triangleStartX, triangleStartY, triangleEndX, triangleEndY;
function starttri (e) {
if(istriangle) {
    triangleStartX= e.offsetX;
    triangleStartY= e.offsetY
}
}

function drawingtri(e) {
    if(istriangle) {
         triangleEndX= e.offsetX
         triangleEndY= e.offsetY;
     clearTriangleArea() 
       
    ctx.beginPath();
    ctx.moveTo(triangleStartX, triangleStartY); 
    ctx.lineTo(triangleEndX, triangleEndY); 
    ctx.lineTo(triangleStartX-(triangleEndX-triangleStartX),triangleEndY)
    ctx.closePath(); 
  
    ctx.stroke(); 
   
    }
}

function endtri() {
    if (istriangle) {
        istriangle = false;

       
        triangleStartX = undefined;
        triangleStartY = undefined;
    }}

    function clearTriangleArea() {
      
        const minX = Math.min(triangleStartX, triangleEndX, triangleStartX - (triangleEndX - triangleStartX));
        const minY = Math.min(triangleStartY, triangleEndY);
        const maxX = Math.max(triangleStartX, triangleEndX, triangleStartX - (triangleEndX - triangleStartX));
        const maxY = Math.max(triangleStartY, triangleEndY);
    
   
        ctx.clearRect(minX, minY, maxX - minX, maxY - minY);
    }
