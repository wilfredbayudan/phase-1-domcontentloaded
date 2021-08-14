// Add DOMContentLoaded Event Listener
document.addEventListener("DOMContentLoaded", ()=> {
  console.log("DOM loaded, ready to manipulate document.")
  const text = document.querySelector("#text");
  text.textContent = "This is really cool!";
})

console.log("This message is logged before the DOM is loaded.");