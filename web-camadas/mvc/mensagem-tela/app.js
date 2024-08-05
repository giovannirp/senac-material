// Model: Dados
const model = {
  message: "Olá, você clicou no botão!",
};

// View: Atualiza a interface
const view = {
  button: document.querySelector("#buttonClick"),
  messageParagraph: document.querySelector("#message"),

  // Mostra a mensagem na tela
  showMessage() {
    this.messageParagraph.textContent = model.message;
  },
};

// Controller: Lógica de interação
view.button.addEventListener("click", () => {
  view.showMessage();
});
