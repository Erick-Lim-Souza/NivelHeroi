// Variáveis
let heroi = "Escolha seu nome de Héroi nordestino";
let xp = 100000;
let nivel;

// Mapeamento de níveis de acordo com o XP
const niveis = [
    { maxXP: 1000, nome: "Ferro" },
    { maxXP: 2000, nome: "Bronze" },
    { maxXP: 5000, nome: "Prata" },
    { maxXP: 6000, nome: "Ouro" },
    { maxXP: 7000, nome: "Platina" },
    { maxXP: 8000, nome: "Diamante" },
    { maxXP: 9000, nome: "Nordestino Imortal" },
    { maxXP: 10000, nome: "Nordestino Supremo" },
    { maxXP: Infinity, nome: "Northeastern galactic god" }
];

// Encontrar o nível correspondente
nivel = niveis.find(nivel => xp <= nivel.maxXP).nome;

// Mensagem final com o nível atual de herói
console.log(`O herói de nome ${heroi}, está no nível ${nivel}`);