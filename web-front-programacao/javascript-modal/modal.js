const button = document.querySelector("button");
const poupup = document.querySelector(".popup-wrapper");

button.addEventListener("click", function(){
  poupup.classList.add('d-block');
});

// Exemplo de includes
const clasNameListArray = ["teste", "oi"];
console.log(clasNameListArray.includes("tested"))

poupup.addEventListener("click", function(event) {
  const classOfClickElement = event.target.classList[0];

  const clasNameListArray = ["popup-close", "popup-link", "popup-wrapper"];

  console.log(clasNameListArray);

  const isClassList = clasNameListArray.includes(classOfClickElement);

  if(isClassList) {
    poupup.classList.remove('d-block');
  }

});