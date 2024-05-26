document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".draggable");
    const dropzone = document.getElementById("dropzone");
  
    items.forEach(item => {
      item.addEventListener("dragstart", drag);
    });
  
    dropzone.addEventListener("dragover", allowDrop);
    dropzone.addEventListener("drop", drop);
  });
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(data);
    event.target.appendChild(draggableElement);
  }
  