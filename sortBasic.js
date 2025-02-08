function dragMoveListener(event){
     var target = event.target;
     var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
     var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

     target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
     target.setAttribute('data-x', x);
     target.setAttribute('data-y', y);
}

function onDragEnter(event){
    var draggableElement = event.relatedTarget; 
    var dropzoneElement = event.target;
    dropzoneElement.classList.add("drop-target");
    draggableElement.classList.add("can-drop");
}

function onDragLeave(event) {
    event.target.classList.remove("drop-target");
    event.relatedTarget.classList.remove("can-drop");
}

function onDrop(event){
    event.target.classList.remove("drop-target");
}

document.addEventListener("DOMContentLoaded", event => {
    window.dragMoveListener = dragMoveListener;


    interact("#dropzoneA").dropzone({
        accept: ".itemA",
        overlap: 0.75, 
        ondragenter: onDragEnter,
        ondragleave: onDragLeave,
        ondrop: onDrop 
    });

    interact("#dropzoneB").dropzone({
        accept: ".itemB",
        overlap: 0.75,
        ondragenter: onDragEnter,
        ondragleave: onDragLeave,
        ondrop: onDrop 
    });

    interact(".draggable").draggable({
        inertia: true,
        autoScroll: true,
        modifiers:[
            interact.modifiers.restrictRect({
                restriction: "parent",
                endOnly: true
            })
        ],
        listeners: {
            move: dragMoveListener
        }
    })
});
