const mapa = {1: 'Pedra', 2: 'Papel', 3: 'Tesoura'};

const botoesEscolha = document.querySelectorAll('.botao-escolha');
const status = document.getElementById('status');
const detalhes = document.getElementById('detalhes');
const escolhaComputador = document.getElementById('escolhaPC');
const placarJogador = document.getElementById('placarJogador');
const placarPC = document.getElementById('placarPC');
const botaoReiniciar = document.getElementById('reiniciar');
const botaoComoJogar = document.getElementById('comoJogar');

let pontosJogador = 0;
let pontosPC = 0;

function computadorEscolhe() {
    return Math.floor(Math.random() * 3) + 1;
}

function avaliar(jogador, pc) {
    if (jogador === pc) return 'empate';
    if ((jogador === 1 && pc === 3) || 
        (jogador === 2 && pc === 1) || 
        (jogador === 3 && pc === 2)) {
        return 'jogador';
    }
    return 'pc';
}

function jogar(escolha) {
    const escolhaJogador = Number(escolha);
    const escolhaPCValor = computadorEscolhe();
    const resultado = avaliar(escolhaJogador, escolhaPCValor);

    escolhaComputador.textContent = mapa[escolhaPCValor];

    if (resultado === 'empate') {
        status.textContent = 'Empate!!';
        detalhes.textContent = `Você escolheu ${mapa[escolhaJogador]} e o computador também.`;
    } else if (resultado === 'jogador') {
        status.textContent = 'Você venceu! 🎉';
        detalhes.textContent = `Você: ${mapa[escolhaJogador]} — PC: ${mapa[escolhaPCValor]}`;
        pontosJogador++;
        placarJogador.textContent = pontosJogador;
    } else {
        status.textContent = 'Computador venceu! 💻';
        detalhes.textContent = `Computador escolheu ${mapa[escolhaPCValor]}`;
        pontosPC++;
        placarPC.textContent = pontosPC;
    }
}

botoesEscolha.forEach(botao => {
    botao.addEventListener('click', () => jogar(botao.dataset.choice));
});

botaoReiniciar.addEventListener('click', () => {
    pontosJogador = 0;
    pontosPC = 0;
    placarJogador.textContent = '0';
    placarPC.textContent = '0';
    status.textContent = 'Placar reiniciado';
    detalhes.textContent = 'Boa sorte!';
    escolhaComputador.textContent = '—';
});

botaoComoJogar.addEventListener('click', () => {
    alert('Regras:\n1 vence 3 (Pedra amassa Tesoura)\n2 vence 1 (Papel embrulha Pedra)\n3 vence 2 (Tesoura corta Papel)');
});
