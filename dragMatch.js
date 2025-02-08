const draggableElements = document.querySelectorAll(".drag");
const droppableElements = document.querySelectorAll(".drop");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart",dragStart);
   // elem.addEventListener("drag",drag);
   // elem.addEventListener("drag",dragEnd);

});

//control + forward slash 

droppableElements.forEach(elem => {
   elem.addEventListener("dragenter", dragEnter);
   elem.addEventListener("dragover", dragOver);
elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
 });
 
//drag and drop functions 
 function dragStart(event){
    //console.log("dragging...");
    event.dataTransfer.setData("text", event.target.id);
 }

 function dragEnter(event){
    if (!event.target.classList.contains("dropped")){
        event.target.classList.add("drop-hover");
    }
 }

 function dragOver(event){
    if(!event.target.classList.contains("dropped")){
        event.preventDefault();
    }  
 }

 function dragLeave(event){
    if(!event.target.classList.contains("dropped")){
        event.target.classList.remove("drop-hover");
    }

 }

 function drop(event){
    event.preventDefault();

    event.target.classList.remove("drop-hover");

    const draggableElementData = event.dataTransfer.getData("text");
    const droppableElementData = event.target.getAttribute("data-draggable-id");
    if(draggableElementData === droppableElementData){
        event.target.classList.add("dropped");
        const draggableElement = document.getElementById(draggableElementData);
        event.target.style.backgroundColor = draggableElement.style.color;
       //event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
        draggableElement.classList.add("dragged");
        draggableElement.setAttribute("drag", "false");
        event.target.insertAdjacentHTML("afterbegin", `<div class="${draggableElementData}"> </div>`);
    }
        }
 