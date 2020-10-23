const json = require("./json");

let pets = [
  {
    id:1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id:2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

const listarPets = () => {
  pets.forEach(objeto => console.log("Nome: " + objeto.nome + "\n" + "Tipo: " + objeto.tipo));
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema")
}

// listarPets()

const validaDados = objetoPet => {
  return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean'
  ) 
}

const cadastrarPet = (objetoPet) => {
  if (typeof objetoPet == "object") {  
    if(validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto informado não possui todas as propriedades necessárias")
    }
  } else {
    console.log("Informe um objeto para cadastrar um novo pet")
  }
}

let novoPet = {
  nome: 'Novo Pet',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}

// cadastrarPet(novoPet)

const servicosPrestados = (pet, servicoRealizado) => {
  servicoRealizado(pet)
}

const darBanhoNoPet = pet =>{
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("banho na data " + data);
  console.log("O pet " + pet.nome + " tomou banho");
}

const tosarPet = pet => {
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("tosa na data " + data);
  console.log("O pet " + pet.nome + " foi tosado");
}

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

const cadastrarPetsSpreadOperator = (pets, json) =>{
  let arrayPetsJson = JSON.parse(json);
  pets.push(...arrayPetsJson)

  return pets
}

const cadastrarPetsFor = (pets, json) => {
  let arrayPetsJson = JSON.parse(json)

  for (let index = 0; index < arrayPetsJson.length; index++) {    
    pets.push(arrayPetsJson[index])
  }

  return pets
}

const filtrarPetPorNome = (lista, nomePet) =>{
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome " + nomePet
  }
}

// console.log(filtrarPetPorNome(pets, 'Yoshi'))
const petsNaoVacinados = (array) => {
    let quantNaoVacidados = pets.filter((objeto)=> objeto.vacinado === false);
    let quantVacidados = pets.filter((objeto)=> objeto.vacinado === true);
    return "Quantidade de pets vacinados: "+quantVacidados.length+"\nQuantidade de pets não vacinados: " + quantNaoVacidados.length;
};

console.log(petsNaoVacinados(pets));

const removerPet = (lista, id) => {
    lista.filter(pet => pet.id === id)
}