//javascript
const perfilController = () => {
  class Usuario{
      constructor(email, senha, cnpj, areaAtuacao, descEmpresa, valEmprestimo, razaoSocial, prazo, peridCarencia){
        this.email = email;
        this.senha = senha;
        this.cnpj = cnpj;
        this.areaAtuacao = areaAtuacao;
        this.descEmpresa =  descEmpresa;
        this.valEmprestimo = valEmprestimo;
        this.razaoSocial = razaoSocial;
        this.prazo = prazo;
        this.peridCarencia = peridCarencia;
      }
  };

    async function addUsuario(email, senha, cnpj, areaAtuacao, descEmpresa, valEmprestimo, razaoSocial, prazo, peridCarencia) => {
      const novoUsuario;

      novoUsuario = new Usuario(email, senha, cnpj, areaAtuacao, descEmpresa, valEmprestimo, razaoSocial, prazo, peridCarencia);

}


const UIController = () => {
  const DOMstrings = {
    inputEmail: '',
    inputSenha: '',
    inputCnpj: '',
    inputAtuacao: '',
    inputEmpDesc:'',
    inputValEmprest: '',
    inputRazaoSoc: '',
    inputValFinan: '',
    inputPrazo: '',
    inputPeriCar: ''
  };

  getInput = () => {
    return{
      email: document.querySelector(DOMstrings.inputEmail).value.
      senha: document.querySelector(DOMstrings.inputSenha).value,
      cnpj: parseInt(document.querySelector(DOMstrings.inputCnpj).value),
      areaAtuacao: document.querySelector(DOMstrings.inputAtuacao).value,
      descEmpresa: document.querySelector(DOMstrings.inputEmpDesc).value,
      valEmprestimo: parseFloat(document.querySelector(DOMstrings.inputRazaoSoc).value),
      razaoSocial: document.querySelector(DOMstrings.inputValFinan).value,
      prazo: parseInt(document.querySelector(DOMstrings.inputPrazo).value),
      peridCarencia: parseInt(document.querySelector(DOMstrings.inputPeriCar).value)
    };
  },



  getDOMstrings = () => return DOMstrings;

}
