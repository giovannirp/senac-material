const textUser = document.querySelector("#text-user");
const buttonUser = document.querySelector("#screen-name");
const result = document.querySelector(".result");

function cadUser(event) {
  event.preventDefault();
  
  result.innerHTML += `<li> Bem vindo, ${textUser.value} </li>`;
  textUser.value = "";
}