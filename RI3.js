class Telefone {
  constructor(ddd, numero, tipo) {
    this.ddd = ddd;
    this.numero = numero;
    this.tipo = tipo;
  }

  getDdd() {
    return this.ddd;
  }

  getDddMaiuscula() {
    return String(this.ddd).toUpperCase();
  }

  getDddMinuscula() {
    return String(this.ddd).toLowerCase();
  }

  getNumero() {
    return this.numero;
  }

  getNumeroMaiuscula() {
    return String(this.numero).toUpperCase();
  }

  getNumeroMinuscula() {
    return String(this.numero).toLowerCase();
  }

  getTipo() {
    return this.tipo;
  }

  getTipoMaiuscula() {
    return String(this.tipo).toUpperCase();
  }

  getTipoMinuscula() {
    return String(this.tipo).toLowerCase();
  }

  toString() {
    return `(${this.ddd}) ${this.numero} - ${this.tipo}`;
  }
}

class Endereco {
  constructor(logradouro, numero, bairro, cidade, estado, cep) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  getLogradouro() {
    return this.logradouro;
  }

  getLogradouroMaiuscula() {
    return String(this.logradouro).toUpperCase();
  }

  getLogradouroMinuscula() {
    return String(this.logradouro).toLowerCase();
  }

  getNumero() {
    return this.numero;
  }

  getNumeroMaiuscula() {
    return String(this.numero).toUpperCase();
  }

  getNumeroMinuscula() {
    return String(this.numero).toLowerCase();
  }

  getBairro() {
    return this.bairro;
  }

  getBairroMaiuscula() {
    return String(this.bairro).toUpperCase();
  }

  getBairroMinuscula() {
    return String(this.bairro).toLowerCase();
  }

  getCidade() {
    return this.cidade;
  }

  getCidadeMaiuscula() {
    return String(this.cidade).toUpperCase();
  }

  getCidadeMinuscula() {
    return String(this.cidade).toLowerCase();
  }

  getEstado() {
    return this.estado;
  }

  getEstadoMaiuscula() {
    return String(this.estado).toUpperCase();
  }

  getEstadoMinuscula() {
    return String(this.estado).toLowerCase();
  }

  getCep() {
    return this.cep;
  }

  getCepMaiuscula() {
    return String(this.cep).toUpperCase();
  }

  getCepMinuscula() {
    return String(this.cep).toLowerCase();
  }

  toString() {
    return `${this.logradouro}, ${this.numero} - ${this.bairro}, ${this.cidade}/${this.estado} - CEP: ${this.cep}`;
  }
}

class Cliente {
  #cpf;

  constructor(nome, cpf, endereco, telefones = []) {
    this.nome = nome;
    this.#cpf = cpf;
    this.endereco = endereco;
    this.telefones = telefones;
  }

  getNome() {
    return this.nome;
  }

  getNomeMaiuscula() {
    return this.nome.toUpperCase();
  }

  getNomeMinuscula() {
    return this.nome.toLowerCase();
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }

  getCpf() {
    return this.#cpf;
  }

  getCpfMaiuscula() {
    return this.#cpf.toUpperCase();
  }

  getCpfMinuscula() {
    return this.#cpf.toLowerCase();
  }

  getEndereco() {
    return this.endereco;
  }

  setEndereco(novoEndereco) {
    this.endereco = novoEndereco;
  }

  getTelefones() {
    return this.telefones;
  }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  removerTelefone(indice) {
    this.telefones.splice(indice, 1);
  }

  toString() {
    const listaTelefones = this.telefones
      .map((telefone) => telefone.toString())
      .join(' | ');

    return (
      `Nome: ${this.nome}\n` +
      `CPF: ${this.#cpf}\n` +
      `Endereço: ${this.endereco.toString()}\n` +
      `Telefones: ${listaTelefones}`
    );
  }
}

class Empresa {
  #cnpj;

  constructor(razaoSocial, cnpj, endereco, telefones = []) {
    this.razaoSocial = razaoSocial;
    this.#cnpj = cnpj;
    this.endereco = endereco;
    this.telefones = telefones;
    this.clientes = [];
  }

  getRazaoSocial() {
    return this.razaoSocial;
  }

  getRazaoSocialMaiuscula() {
    return this.razaoSocial.toUpperCase();
  }

  getRazaoSocialMinuscula() {
    return this.razaoSocial.toLowerCase();
  }

  setRazaoSocial(novaRazaoSocial) {
    this.razaoSocial = novaRazaoSocial;
  }

  getCnpj() {
    return this.#cnpj;
  }

  getCnpjMaiuscula() {
    return this.#cnpj.toUpperCase();
  }

  getCnpjMinuscula() {
    return this.#cnpj.toLowerCase();
  }

  getEndereco() {
    return this.endereco;
  }

  setEndereco(novoEndereco) {
    this.endereco = novoEndereco;
  }

  getTelefones() {
    return this.telefones;
  }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  removerTelefone(indice) {
    this.telefones.splice(indice, 1);
  }

  getClientes() {
    return this.clientes;
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  removerCliente(indice) {
    this.clientes.splice(indice, 1);
  }

  gerarDescricao() {
    const separador = '='.repeat(50);
    const telefonesEmpresa = this.telefones
      .map((telefone) => telefone.toString())
      .join(' | ');

    let descricao = `${separador}\n`;
    descricao += `EMPRESA: ${this.razaoSocial}\n`;
    descricao += `CNPJ: ${this.#cnpj}\n`;
    descricao += `Endereço: ${this.endereco.toString()}\n`;
    descricao += `Telefones: ${telefonesEmpresa}\n`;
    descricao += `Quantidade de clientes: ${this.clientes.length}\n`;
    descricao += `${separador}\n`;
    descricao += `CLIENTES\n`;
    descricao += `${separador}\n`;

    for (let i = 0; i < this.clientes.length; i++) {
      descricao += `Cliente ${i + 1}\n`;
      descricao += `${this.clientes[i].toString()}\n`;
      descricao += `${'-'.repeat(50)}\n`;
    }

    return descricao;
  }
}

const enderecoEmpresa = new Endereco(
  'Avenida Paulista',
  1000,
  'Bela Vista',
  'São Paulo',
  'SP',
  '01310-100'
);

const telefoneEmpresa1 = new Telefone(11, '3000-1000', 'Comercial');
const telefoneEmpresa2 = new Telefone(11, '99999-0000', 'Celular');

const empresa = new Empresa(
  'Tech Solutions Ltda',
  '12.345.678/0001-90',
  enderecoEmpresa,
  [telefoneEmpresa1, telefoneEmpresa2]
);

const dadosClientes = [
  {
    nome: 'Maria Souza',
    cpf: '111.111.111-11',
    endereco: new Endereco('Rua A', 10, 'Centro', 'São Paulo', 'SP', '01000-000'),
    telefones: [
      new Telefone(11, '91111-1111', 'Celular'),
      new Telefone(11, '3333-1111', 'Residencial')
    ]
  },
  {
    nome: 'João Silva',
    cpf: '222.222.222-22',
    endereco: new Endereco('Rua B', 20, 'Copacabana', 'Rio de Janeiro', 'RJ', '20000-000'),
    telefones: [
      new Telefone(21, '92222-2222', 'Celular'),
      new Telefone(21, '3333-2222', 'Comercial')
    ]
  },
  {
    nome: 'Ana Paula Costa',
    cpf: '333.333.333-33',
    endereco: new Endereco('Rua C', 30, 'Savassi', 'Belo Horizonte', 'MG', '30000-000'),
    telefones: [
      new Telefone(31, '93333-3333', 'Celular'),
      new Telefone(31, '3333-3333', 'Residencial')
    ]
  },
  {
    nome: 'Carlos Pereira',
    cpf: '444.444.444-44',
    endereco: new Endereco('Rua D', 40, 'Batel', 'Curitiba', 'PR', '80000-000'),
    telefones: [
      new Telefone(41, '94444-4444', 'Celular'),
      new Telefone(41, '3333-4444', 'Comercial')
    ]
  },
  {
    nome: 'Fernanda Lima',
    cpf: '555.555.555-55',
    endereco: new Endereco('Rua E', 50, 'Moema', 'São Paulo', 'SP', '04000-000'),
    telefones: [
      new Telefone(11, '95555-5555', 'Celular'),
      new Telefone(11, '3333-5555', 'Residencial')
    ]
  }
];

for (let i = 0; i < dadosClientes.length; i++) {
  const dados = dadosClientes[i];
  const cliente = new Cliente(dados.nome, dados.cpf, dados.endereco, dados.telefones);
  empresa.adicionarCliente(cliente);
}

console.log(empresa.gerarDescricao());

console.log('Testando get, maiúscula e minúscula:');
console.log(empresa.getRazaoSocial());
console.log(empresa.getRazaoSocialMaiuscula());
console.log(empresa.getRazaoSocialMinuscula());
console.log(empresa.getCnpj());
console.log(empresa.getCnpjMaiuscula());

const primeiroCliente = empresa.getClientes()[0];
console.log(primeiroCliente.getNome());
console.log(primeiroCliente.getNomeMaiuscula());
console.log(primeiroCliente.getCpf());
console.log(primeiroCliente.getCpfMinuscula());