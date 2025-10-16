const cards = document.querySelectorAll('.character-card');
const overlay = document.getElementById('characterOverlay');
const overlayImg = document.getElementById('overlayImg');
const overlayName = document.getElementById('overlayName');
const overlayDescription = document.getElementById('overlayDescription');
const overlayPowers = document.getElementById('overlayPowers');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const imgElement = card.querySelector('img');
    const name = imgElement.alt.trim();

    let description = '';
    let powers = '';

    switch (name) {
        case 'Super-Homem':
        description = 'Símbolo da esperança com poderes sobre-humanos. É o último filho de Krypton e defensor da Terra contra ameaças cósmicas. Representa justiça, coragem e altruísmo.';
        powers = 'Superforça, visão de calor, voo, invulnerabilidade.';
        imageSrc = '';
        break

      case 'Batman':
        description = 'Vigilante sombrio e estrategista implacável de Gotham. Usa sua inteligência e preparo para combater o crime. Mesmo sem poderes, é um dos maiores heróis do mundo.';
        powers = 'Intelecto genial, artes marciais, tecnologia avançada, preparo absoluto.';
        imageSrc = '';
        break

      case 'Mulher-Maravilha':
        description = 'Guerreira amazona e símbolo de força e verdade. Criada por deuses, luta pela paz entre os humanos. É uma das maiores heroínas do mundo.';
        powers = 'Superforça, voo, laço da verdade, braceletes indestrutíveis.';
        imageSrc = '';
        break;

      case 'Flash':
        description = 'O homem mais rápido do mundo e guardião da Força de Aceleração. Usa sua velocidade para salvar vidas e corrigir o tempo. É o coração da Liga da Justiça.';
        powers = 'Supervelocidade, viagem temporal, reflexos instantâneos.';
        imageSrc = '';
        break;
      
      case 'Aquaman':
        description = 'Rei dos mares e protetor de Atlântida. Divide sua vida entre o mundo da superfície e o oceano. Comanda exércitos e criaturas marinhas.';
        powers = 'Comunicação com criaturas marinhas, superforça, tridente mágico.';
        imageSrc = '';
        break

      case 'Lanterna Verde':
        description = 'Guardião intergaláctico movido pela força de vontade. Usa seu anel de poder para criar qualquer coisa que imaginar. Protetor do setor espacial 2814.';
        powers = 'Criação de construtos, voo, escudos de energia.';
        imageSrc = '';
        break
      
      case 'Ciborgue':
        description = 'Herói cibernético com corpo feito de tecnologia alienígena. Metade humano, metade máquina, luta por aceitação e justiça. Membro vital da Liga.';
        powers = 'Transformação mecânica, acesso a redes, armas integradas.';
        imageSrc = '';
        break

      case 'Caçador de Marte':
        description = 'Alienígena empático e sobrevivente de Marte. Usa seus dons para ajudar a humanidade e manter a paz. Um dos heróis mais poderosos da DC.';
        powers = 'Telepatia, intangibilidade, metamorfose, superforça.';
        imageSrc = '';
        break

      case 'Shazam':
        description = 'Garoto que se transforma em campeão mágico. Recebe os dons dos deuses para combater o mal. Representa pureza e esperança.';
        powers = 'Superforça, magia, raio místico, voo.';
        imageSrc = '';
        break

      case 'Supergirl':
        description = 'Prima do Superman com o mesmo poder e coragem. Luta para proteger a Terra e honrar seu planeta natal Krypton. Jovem e determinada.';
        powers = 'Superforça, visão de calor, voo, invulnerabilidade.';
        imageSrc = '';
        break;
    case 'Batgirl':
        description = 'Heroína inteligente e destemida de Gotham. Usa sua mente e habilidades para combater o crime ao lado do Batman. Inspiração para muitos.';
        powers = 'Combate corpo a corpo, tecnologia, estratégia tática.';
        imageSrc = '';
        break

      case 'Robin':
        description = 'Parceiro leal e ágil do Batman. Representa esperança e juventude no combate ao crime. Ágil, confiante e corajoso';
        powers = 'Acrobacia, artes marciais, gadgets táticos.';
        imageSrc = '';
        break

      case 'Asa Noturna':
        description = 'Ex-Robin que se tornou um herói independente. Líder nato e defensor de Blüdhaven. Une agilidade e sabedoria.';
        powers = 'Combate acrobático, liderança, inteligência tática.';
        imageSrc = '';
        break;

      case 'Zatanna':
        description = 'Feiticeira poderosa e artista de palco. Usa magia verbal para combater ameaças místicas. Mistura charme e poder sobrenatural.';
        powers = 'Magia verbal, manipulação de realidade, encantamentos';
        imageSrc = '';
        break;
      
      case 'Constantine':
        description = 'Ocultista sarcástico e caçador de demônios. Enfrenta o inferno e entidades sombrias com astúcia. Vive entre o bem e o mal';
        powers = 'Magia negra, exorcismo, conhecimento sobrenatural.';
        imageSrc = '';
        break

      case 'Besouro Azul':
        description = 'Jovem herói com armadura alienígena simbiótica. Une ciência e coragem em batalhas intergalácticas. Carismático e engenhoso';
        powers = 'Voo, armas energéticas, escudos, adaptação tática.';
        imageSrc = '';
        break
      
      case 'Gladiador Dourado':
        description = 'Herói do futuro em busca de reconhecimento. Usa tecnologia avançada para proteger o passado. Mistura humor e heroísmo.';
        powers = 'Tecnologia temporal, escudo de energia, voo.';
        imageSrc = '';
        break

      case 'Gavião Negro':
        description = 'Guerreiro reencarnado em busca de justiça. Empunha armas místicas e protege o mundo. Determinado e feroz.';
        powers = 'Voo, combate aéreo, maça mística.';
        imageSrc = '';
        break

      case 'Mulher-Gavião':
        description = 'Parceira e guerreira lendária. Compartilha o destino e as batalhas com Gavião Negro. Implacável e corajosa.';
        powers = 'Voo, força aprimorada, armas místicas.';
        imageSrc = '';
        break

      case 'Nuclear':
        description = 'Fusão de dois homens em um ser atômico. Pode manipular energia e matéria com precisão. Herói poderoso e instável';
        powers = 'Manipulação de matéria, explosões nucleares, voo.';
        imageSrc = '';
        break;
    case 'Canário Negro':
        description = 'Heroína ágil e destemida. Usa seu grito sônico e habilidades de combate para proteger inocentes. Forte e inspiradora.';
        powers = 'Grito supersônico, artes marciais, agilidade.';
        imageSrc = '';
        break

      case 'Arqueiro Verde':
        description = 'Justiceiro urbano com arco e flechas especiais. Luta contra o crime com humor e determinação. Defensor dos fracos.';
        powers = 'Mira perfeita, flechas especiais, estratégia.';
        imageSrc = '';
        break

      case 'Átomo':
        description = 'Cientista capaz de mudar de tamanho. Usa a física quântica para combater o crime. Inteligente e corajoso.';
        powers = 'Encolhimento quântico, força proporcional, viagem subatômica';
        imageSrc = '';
        break;

      case 'Tornado Vermelho':
        description = 'Android elemental com emoções humanas. Controla o ar e protege a humanidade. Símbolo de sacrifício.';
        powers = 'Controle do vento, voo, superforça';
        imageSrc = '';
        break;
      
      case 'Vixen':
        description = 'Heroína que canaliza o poder dos animais. Defende a natureza e a justiça. Graciosa e poderosa.';
        powers = 'Força de leão, velocidade de guepardo, visão de águia.';
        imageSrc = '';
        break

      case 'Ravena':
        description = 'Mística poderosa que luta contra sua herança demoníaca. Usa suas habilidades para o bem. Misteriosa e sábia.';
        powers = 'Magia sombria, teletransporte, empatia emocional.';
        imageSrc = '';
        break
      
      case 'Estelar':
        description = 'Princesa alienígena com energia solar. Gentil, forte e protetora. Une esperança e poder cósmico.';
        powers = 'Projeção de energia, voo, superforça.';
        imageSrc = '';
        break

      case 'Mutano':
        description = 'Jovem divertido com dons de transformação. Usa o humor para mascarar a dor. Parte essencial dos Jovens Titãs.';
        powers = 'Metamorfose em qualquer criatura, agilidade, adaptação.';
        imageSrc = '';
        break

      case 'Terra':
        description = 'Controla os elementos do solo com maestria. É poderosa, mas emocionalmente instável. Determinada e intensa.';
        powers = 'Manipulação de terra e rochas, defesa geológica.';
        imageSrc = '';
        break

      case 'Exterminador':
        description = 'Mercenário mortal e estrategista supremo. Rival do Batman e líder nato. Calculista e frio.';
        powers = 'Força aprimorada, reflexos sobre-humanos, táticas de guerra.';
        imageSrc = '';
        break;
    case 'Lex Luthor':
        description = 'Gênio do mal e inimigo do Superman. Usa poder e dinheiro para dominar o mundo. Arrogante e brilhante.';
        powers = 'Intelecto extremo, tecnologia avançada, influência global.';
        imageSrc = '';
        break

      case 'Coringa':
        description = 'Palhaço do crime e símbolo do caos. Inteligente, cruel e imprevisível. O oposto perfeito do Batman.';
        powers = 'Manipulação psicológica, imprevisibilidade, química mortal.';
        imageSrc = '';
        break

      case 'Arlequina':
        description = 'Ex-psiquiatra transformada em anti-heroína. Louca, divertida e perigosa. Vive entre o amor e o caos.';
        powers = 'Acrobacia, armas improvisadas, imunidade a toxinas.';
        imageSrc = '';
        break;

      case 'Mulher-Gato':
        description = 'Ladra ágil e moral ambígua. Divide sua vida entre o crime e o amor. Misteriosa e habilidosa.';
        powers = 'Reflexos felinos, furtividade, chicote de combate.';
        imageSrc = '';
        break;
      
      case 'Charada':
        description = 'Vilão obcecado por enigmas e desafios. Usa a lógica para enganar e manipular. Egoísta e genial.';
        powers = 'Intelecto lógico, armadilhas mentais, manipulação.';
        imageSrc = '';
        break

      case 'Pinguim':
        description = 'Chefão do crime com estilo e sofisticação. Controla o submundo de Gotham. Astuto e perigoso.';
        powers = 'Armas ocultas, influência criminosa, estratégia.';
        imageSrc = '';
        break
      
      case 'Duas-Caras':
        description = 'Vilão dividido entre a justiça e o acaso. Sua moeda decide o destino das vítimas. Trágico e implacável.';
        powers = 'Decisão aleatória, armas de fogo, liderança criminosa.';
        imageSrc = '';
        break

      case 'Espantalho':
        description = 'Mestre do medo e do terror psicológico. Usa sua mente e toxinas para controlar. Manipulador nato';
        powers = 'Gás do medo, psicologia, manipulação mental.';
        imageSrc = '';
        break

      case 'Hera Venenosa':
        description = 'Vilã ecológica ligada à natureza. Quer proteger as plantas a qualquer custo. Bela e letal.';
        powers = 'Controle de plantas, toxinas, sedução química.';
        imageSrc = '';
        break

      case 'Bane':
        description = 'Vilão brutal e estrategista. Derrotou o Batman usando força e mente. Representa poder puro.';
        powers = 'Veneno muscular, força extrema, resistência.';
        imageSrc = '';
        break;
    case 'Darkseid':
        description = 'Tirano cósmico e inimigo dos deuses. Busca dominar toda a existência. Frio e implacável.';
        powers = 'Raios Ômega, força divina, manipulação cósmica.';
        imageSrc = '';
        break;
      
      case 'Brainiac':
        description = 'Vilão cibernético e colecionador de mundos. Usa sua mente para conquistar civilizações. Gênio artificial.';
        powers = 'Intelecto superior, controle tecnológico, telepatia.';
        imageSrc = '';
        break

      case 'Sinestro':
        description = 'Ex-Lanterna Verde corrompido pelo medo. Líder da Tropa Sinestro. Calculista e poderoso.';
        powers = 'Anel amarelo, construtos de medo, voo.';
        imageSrc = '';
        break
      
      case 'Adão Negro':
        description = 'Anti-herói com poder divino egípcio. Busca vingança e equilíbrio. Orgulhoso e destrutivo.';
        powers = 'Superforça, magia, voo, resistência.';
        imageSrc = '';
        break

      case 'Guepardo':
        description = 'Inimiga selvagem da Mulher-Maravilha. Movida pela inveja e fúria. Rápida e feroz.';
        powers = 'Agilidade felina, força, instinto predatório.';
        imageSrc = '';
        break

      case 'Crocodilo':
        description = 'Criminoso mutante com aparência reptiliana. Vive nos esgotos de Gotham. Selvagem e resistente.';
        powers = 'Força bruta, resistência, mordida letal.';
        imageSrc = '';
        break

      case 'Capitão Frio':
        description = 'Vilão com senso de honra e código próprio. Usa o frio como arma de controle. Calculista e frio.';
        powers = 'Pistola de gelo, congelamento, estratégia.';
        imageSrc = '';
        break;
    case 'Mestre dos Espelhos':
        description = 'Vilão que usa reflexos para enganar e atacar. Misterioso e criativo. Manipula realidades visuais.';
        powers = 'Reflexos dimensionais, armadilhas ópticas, teletransporte.';
        imageSrc = '';
        break;
    case 'Magia':
        description = 'Feiticeira poderosa que abriga um espírito sombrio dentro de si. Divide sua alma entre o bem e o mal, lutando para manter o controle. Membro instável do Esquadrão Suicida';
        powers = 'Magia caótica, teletransporte, manipulação dimensional, feitiços arcanos.';
        imageSrc = '';
        break;
      
      case 'Safira Estrela':
        description = 'Guerreira movida pela força do amor e integrante da Tropa Safira Estrela. Já foi inimiga e aliada dos Lanternas Verdes. Seu poder nasce das emoções mais intensas.';
        powers = 'Construtos energéticos, voo, escudos de energia, controle emocional.';
        imageSrc = '';
        break

      default:
        description = `Características de ${imgElement.alt} não cadastradas ainda.`;
        powers = 'Poderes não disponíveis.';
        imageSrc = imgElement.src;
    }

    overlayImg.src = imgElement.src; 
    overlayName.textContent = name;
    overlayDescription.textContent = description;
    overlayPowers.textContent = powers;
    overlay.style.display = 'flex';
  });
});

function closeOverlay() {
  overlay.style.display = 'none';
}
