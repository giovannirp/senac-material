const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

button.addEventListener("click", function(){
  poupup.classList.add('d-block');
});

// Exemplo de includes
const clasNameListArray = ["teste", "oi"];
console.log(clasNameListArray.includes("tested"))

poupup.addEventListener("click", function(event) {
  const classOfClickElement = event.target.classList[0];
  console.log(classOfClickElement);

  const clasNameListArray = ["popup-close", "poupup-link", "poupup-wrapper"];

  const isClassList = clasNameListArray.includes(classOfClickElement);

  console.log(isClassList);

  if(isClassList) {
    poupup.classList.remove('d-block')
  }

})