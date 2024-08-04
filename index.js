// Calculadora de partidas Rankeadas
// Objetivo : Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
// Retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
// Função que calcula o saldo de vitórias e determina o nível
let vitorias = 82
let derrotas = 17
const resultado = calcularNivel(vitorias, derrotas)
function calcularNivel(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas
    let nivel
    if (vitorias < 10) {
      nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário"
    } else if (vitorias >= 101) {
      nivel = "Imortal"
    }

    return { saldoVitorias, nivel }
  }
  
  console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}.`)