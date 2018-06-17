var express = require('express');
var router = express.Router();

const bios = {
  helicopterson: {
    name: 'Helicopterson do Santos',
    role: 'Escritor, poeta, filantropo',
    photo: '/images/helicopterson.png',
    birth: '1870',
    death: '1950',
    background: 'Helicopterson sempre foi um jovem diferenciado, no mundo da lua, com aspirações muito além de sua geração. Com todos os seus sonhos e com muito esforço, um dia aprendeu a voar. Isso, ele aprendeu a voar, fazendo justiça à seu nome tão único. Ele continuou se esforçando, aprendendo muito e dominando a arte do voô, sempre chegando a alturas cada vez maiores. Até que um dia chegou na Lua, e essa na verdade é a última notícia que se tem dele. Depois disso, ele continuou voando cada vez mais alto, e ninguém mais o viu.',
    quote: 'Se não for pra voar, eu nem desço pro Play',
    highlights: ['Nasceu', 'Voou', 'Voou mais alto', 'Primeiro homem a pisar na lua', 'Sumiu']
  },
  lincoln: {
    name: 'Abraham Lincoln',
    role: 'Ex-presidente, advogado',
    birth: '1809',
    death: '1865',
    photo: '/images/lincoln.png',
    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
  },
  gustavotorres: {
    name: 'Gustavo Torres',
    role: 'Co-founder e CEO da Hike Academy',
    birth: 'data de nascimento não encontrada',
    death: 'atualmente vivo',
    photo: '/images/torres.png',
    background: 'Gustavo Torres é um cara que nasceu há uns 20/21 anos atrás, no Capão Redondo, gosta de rap, tocar violão e programar. Desde sempre fazendo história: tendo um nível de inglês razoável já aos 9 anos, passou em diversos processos seletivos para novas oportunidades, como um intercâmbio de férias, ganhar bolsa numa escola particular e, posteriormente, passar em algumas faculdades norte-americanas como MIT e Stanford, além de muitas outras grandes conquistas. Atualmente tem a Hike Academy, onde trabalha com o Jão e o Tutu e inspira, não só muita gente a aprender a programar, mas também alguns jovens, como eu, a se dedicarem ainda mais ao estudo e a transformar o mundo onde vivem. Com certeza um dos caras que mais me motiva e inspira a estudar e aprender cada vez mais!',
    quote: 'Voa monxtro!',
    highlights: ['Passou em 5 universidades dos EUA', 'Escreveu a redação mais inspiradora em inglês', 'Ensina programação junto de mais dois amigos na Hike Academy', 'Me inspirou a melhorar o mundo em que eu vivo', 'Trabalhou na KhanAcademy', 'É um dos caras mais maneiros que eu conheço'],
  },
  alanturing: {
    name: 'Alan Mathison Turing',
    role: 'Criptoanalista, matemático, lógico e pai da ciênica da computação',
    birth: '1912',
    death: '1954',
    photo: '/images/alan-turing.png',
    background: 'Alan Turing, nascido em Londres, filho de Julius Mathison Turing e Ethel Sara. Sempre gostou de teoremas e se interessava por computação antes mesmo dela existir. Suas primeiras respostas eram teóricas apenas. Criou a primeira máquina capaz de manipular símbolos e fazer operações automaticamente, sendo assim a primeira inteligência artificial também. Aplicava a computabilidade em tudo na sua vida e assim criou um teste capaz de dizer se um computador é dotado de inteligência artificial ou não. Em 1938 se uniu à inteligência britânica para a decodificação de mensagens para, assim, conseguir quebrar a criptografia da Máquina Enigma, uma máquina de criptografia de mensagens que mudava seus códigos diariamente, o que a tornava quase imbatível. Em 1939 começou a construção de uma máquina eletromecânica, a Bombe, para quebrar a criptografia das mensagens interceptadas. Em 1950 foi humilhado em público por ser homossexual e impedido de participar de qualquer pesquisa sobre computadores, aceitou tomar hormônios e se submeter à castração química como solução à prisão. Foi encontrado morto em 1954, supostamente havia se envenenado.',
    quote: 'Nós só podemos ver um pouco do futuro, mas é o suficiente para perceber que há muito a fazer.',
    highlights: ['Pai da ciência da computação', 'Ajudou a formalizar o conceito de algoritmo', 'Pioneiro na inteligência artifical', 'Criou a máquina de Turing', 'Chefiou a Hut 8', 'Criou o primeiro computador do Reino Unido'],
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { bios: bios });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});

module.exports = router;
