const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener('keyup',updateCounter)

function updateCounter(){
 const count=textareaEl.value.length;
 totalCounterEl.innerText=count;

 const remaining=textareaEl.getAttribute("maxlength");
 remainingCounterEl.innerText =remaining-count;
}

