const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "fire"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// an array of pokémon objects where the id is evenly divisible by 3
// const Div3=pokemon.filter(po=>po.id%3==0)
// console.log(Div3)
////
console.log("*************")
// an array of pokémon objects that are "fire" type
// const fireType=pokemon.filter((po)=>{ 
//     return po.types[0]=="fire"||po.types[1]=="fire"
//     })
// console.log(fireType)

////
// console.log("*************")
// an array of pokémon objects that have more than one type
// const moreoneType=pokemon.filter(po=>po.types.length>1)
// console.log(moreoneType)

////
// console.log("*************")
// an array with just the names of the pokémon
// const Names=pokemon.map(po=>po.name)
// console.log(Names)

// ////
// console.log("*************")
// an array with just the names of pokémon with an id greater than 99
// const more99=pokemon.filter(po=>po.id>99).map(po=>po.name)
// console.log(more99)

////
// console.log("*************")
// an array with just the names of the pokémon whose only type is poison
// const PoisonType=pokemon.filter(po=>po.types=="poison").map(po=>po.name)
// console.log(PoisonType)

////
// console.log("*************")
// an array containing just the first type of all the pokémon whose second type is "flying"
// const firstType=pokemon.filter(po=>po.types[1]=="flying").map(po=>po.types[0])
// console.log(firstType)

////
// console.log("*************")
// a count of the number of pokémon that are "normal" type
// const NormalType=pokemon.filter(po=>po.types=="normal")
// const number=NormalType.length
// console.log(number)