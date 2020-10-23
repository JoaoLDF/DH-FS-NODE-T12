const json = require('./json');
const petsJson = JSON.parse(json);

let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

pets.push(...petsJson);


// Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: 
// dar banho no pet e tosar o pet
// sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
// servicosPrestados(pets[0].nome, darBanhoNoPet)
// servicosPrestados(pets[0].nome, tosarPet)

// Deveremos executar um aviso dentro das funcoes callback darBanhoNoPet e tosarPet, como o exemplo abaixo:
//   console.log(O servico de tomar banho foi realizado com sucesso no pet + yoshi)
//   console.log(O servico de tosa foi realizado com sucesso no pet  + yoshi)

// Terá que ser criada uma nova propriedade dentro de cada pet chamada servicos que armazene todos servicos realizados
function servicosPrestados(pet, servicoRealizado){
  servicoRealizado(pet)
}

// Desafio 1 - identificar qual a data que os servicos foram realizados
function darBanhoNoPet(pet){
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("banho na data " + data);
  console.log("O pet " + pet.nome + " tomou banho");
}

function tosarPet(pet){
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("tosa na data " + data);
  console.log("O pet " + pet.nome + " foi tosado");
}

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)


function acharPetNome(array, nomePet){
  let resultado = array.filter((objeto)=> objeto.nome == nomePet );
  return resultado.length > 0? resultado:"Pet não cadastrado";
}
console.log(acharPetNome(pets, "Costelinha"));