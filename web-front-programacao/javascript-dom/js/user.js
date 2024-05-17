const textUser = document.querySelector("#text-user");
const buttonUser = document.querySelector("#screen-name");
const result = document.querySelector(".result");

function clearInput() {
  textUser.value = "";
}

function cadUser(event) {
  event.preventDefault();

  // validações
  if (textUser.value.trim() === '') {
    alert("Campo obrigatório");  
    return false;
  }
  
  result.innerHTML += `<li> Bem vindo, ${textUser.value} </li>`;
}