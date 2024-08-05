// Model: Gerencia os dados
const model = {
    names: [],
    addName(name) {
      this.names.push(name);
    },
    getNames() {
      return this.names;
    }
  };
  
  // View: Atualiza a interface do usuário
  const view = {
    input: document.querySelector('#nome'),
    list: document.querySelector('#userList'),
    getInput() {
      return this.input.value;
    },
    clearInput() {
      this.input.value = '';
    },
    render(names) {
      this.list.innerHTML = names.map(name => `<li>${name}</li>`).join('');
    }
  };
  
  // Controller: Liga o Model e a View
  document.querySelector('#userForm').addEventListener('submit', event => {
    event.preventDefault();
    const name = view.getInput().trim();
    if (name) {
      model.addName(name);
      view.render(model.getNames());
      view.clearInput();
    }
  });