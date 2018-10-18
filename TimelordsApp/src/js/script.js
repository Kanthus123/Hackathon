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

      const Lulidu = new Usuario('Lulidu', 475767, 06772824/0002-68, 'Indústria, Comércio e Serviços',
      'Empresa que de venda de bolos e doces caseiros', 50000, 'O dinheiro será usado para compra de novos eletro domesticos que agilizem a produção dos bolos e doces',
      24, 6);


const UIController = () => {
  const DOMstrings = {
    inputEmail: '.Email',
    inputSenha: '.Senha',
    inputCnpj: '.CNPJ',
    inputAtuacao: '.Area',
    inputEmpDesc: '.descricao',
    inputValEmprest: '.valemprestimo',
    inputRazaoSoc: '.razaosocial',
    inputValFinan: '.valorfinanciamento',
    inputPrazo: '.prazo',
    inputPeriCar: '.periodocarencia'
  };

  const formatNumber = function(num) {
    num = Math.abs(num).toFixed(2);
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Isso é uma Regular Expression
    return num;
};

  getInput = () => {
    return{
      email: document.querySelector(DOMstrings.inputEmail).value.
      senha: document.querySelector(DOMstrings.inputSenha).value,
      cnpj: document.querySelector(DOMstrings.inputCnpj).value,
      areaAtuacao: document.querySelector(DOMstrings.inputAtuacao).value,
      descEmpresa: document.querySelector(DOMstrings.inputEmpDesc).value,
      valEmprestimo: parseFloat(document.querySelector(DOMstrings.inputRazaoSoc).value),
      razaoSocial: document.querySelector(DOMstrings.inputValFinan).value,
      prazo: parseInt(document.querySelector(DOMstrings.inputPrazo).value),
      peridCarencia: parseInt(document.querySelector(DOMstrings.inputPeriCar).value)
    };
  },

  getDOMstrings = () => return DOMstrings;

};

const controller = (function(budgetCtrl, UICtrl){

  const setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

      if(event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

  };

return {
  init: function(){
    console.log('O program foi iniciado.');
    UICtrl.displayDate();
    UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
    });
    setupEventListeners();
  }
};

})(budgetController, UIController);
