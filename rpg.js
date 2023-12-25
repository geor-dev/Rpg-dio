// Definindo a classe Heroi
/*
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Definindo o ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }
  
  // Criando uma instância de Herói
  const meuHeroi = new Heroi('Herói Exemplo', 25, 'mago');
  
  // Chamando o método de ataque
  meuHeroi.atacar();
  */

  class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Definindo o ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }

const meuHeroi = new Heroi('adryan', 18, 'mago');

meuHeroi.atacar();