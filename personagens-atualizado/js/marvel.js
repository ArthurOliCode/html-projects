const cards = document.querySelectorAll(".character-card");
const overlay = document.getElementById("characterOverlay");
const overlayImg = document.getElementById("overlayImg");
const overlayName = document.getElementById("overlayName");
const overlayDescription = document.getElementById("overlayDescription");
const overlayPowers = document.getElementById("overlayPowers");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imgElement = card.querySelector("img");
    const name = imgElement.alt.trim();

    let description = "";
    let powers = "";

    switch (name) {
      case "Homem-Aranha":
        description =
          "O Homem-Aranha é um herói criado por Stan Lee e Steve Ditko em 1962.Peter Parker ganha poderes após ser picado por uma aranha radioativa e decide lutar contra o crime.Mesmo com suas habilidades, ele enfrenta desafios pessoais e aprende que “com grandes poderes vêm grandes responsabilidades.";
        powers =
          "Agilidade sobre-humana, sentido-aranha, escalada de paredes, lançamento de teias.";
        break;

      case "Homem de Ferro":
        description =
          "Tony Stark é um gênio bilionário que cria uma armadura tecnológica poderosa.Com ela, torna-se o Homem de Ferro e luta para proteger o mundo.Aprende que o verdadeiro herói é movido pela responsabilidade, não pelo ego.";
        powers =
          "Armadura tecnológica, voo, mísseis guiados, inteligência estratégica.";
        break;

      case "Hood":
        description =
          "Parker Robbins ganha poderes após roubar um manto mágico.Mistura o mundo do crime com o sobrenatural.Ambicioso e imprevisível, busca poder a qualquer custo.";
        powers =
          "Invisibilidade, levitação, pacto demoníaco, manipulação de energia mística.";
        break;

      case "Thor":
        description =
          "Deus do Trovão e príncipe de Asgard, Thor empunha o poderoso martelo Mjölnir.Aprende o valor da humildade e da liderança ao viver entre os humanos.Defende os Nove Reinos com coragem e honra.";
        powers =
          "Controle do clima, força divina, voo com Mjölnir, resistência sobre-humana";
        break;

      case "Hulk":
        description =
          "Bruce Banner se transforma em um monstro verde quando perde o controle.O Hulk possui força praticamente ilimitada, mas luta contra sua fúria interior.Entre destruição e heroísmo, busca equilíbrio entre homem e besta.";
        powers = "Força ilimitada, regeneração acelerada, resistência extrema.";
        break;

      case "Capitão América":
        description =
          "Steve Rogers é um soldado corajoso aprimorado com o soro do super soldado.Empunha seu escudo indestrutível e luta pela justiça e liberdade.É símbolo de coragem, honra e sacrifício.";
        powers =
          "Força aprimorada, liderança tática, escudo vibranium, agilidade militar.";
        break;

      case "Viúva Negra":
        description =
          "Natasha Romanoff é uma espiã altamente treinada e ex-agente da KGB.Redimida de seu passado sombrio, luta ao lado dos Vingadores.Une inteligência, agilidade e bravura em cada missão.";
        powers =
          "Combate corpo a corpo, espionagem, armas ocultas, agilidade furtiva.";
        break;

      case "Gavião Arqueiro":
        description =
          "Clint Barton é um arqueiro habilidoso com mira impecável.Mesmo sem poderes, prova que coragem e precisão bastam para ser herói.Sua lealdade e determinação o tornam essencial aos Vingadores.";
        powers = "Mira perfeita, flechas especiais, combate estratégico.";
        break;

      case "Doutor Estranho":
        description =
          "Stephen Strange era um cirurgião arrogante que perdeu tudo em um acidente.Ao buscar cura, descobre a magia e se torna o Mago Supremo.Protege o multiverso das forças místicas e caóticas.";
        powers =
          "Manipulação do tempo, portais dimensionais, feitiços arcanos, levitação.";
        break;

      case "Feiticeira Escarlate":
        description =
          "Wanda Maximoff domina a magia do caos e pode alterar a realidade.Marcada pela dor e pela perda, busca redenção e controle de seu poder.É uma das figuras mais poderosas e complexas do universo Marvel.";
        powers =
          "Alteração da realidade, telecinese, feitiços caóticos, projeção de energia.";
        break;

      case "Visão":
        description =
          "Criado por Ultron e a Joia da Mente, Visão é uma fusão de inteligência artificial e humanidade.Possui força, sabedoria e um coração que o liga à Feiticeira Escarlate.Luta para entender o que significa ser humano.";
        powers = "Intangibilidade, raio solar, superinteligência, voo.";
        break;

      case "Pantera Negra":
        description =
          "T’Challa é o rei de Wakanda, uma nação tecnologicamente avançada.Como Pantera Negra, protege seu povo e honra seus ancestrais.Representa força, sabedoria e justiça.";
        powers =
          "Agilidade felina, traje vibranium, sentidos aguçados, combate tribal.";
        break;

      case "Homem-Formiga":
        description =
          "Scott Lang é um ex-ladrão que assume o traje do Homem-Formiga.Com a tecnologia Pym, pode encolher e aumentar de tamanho.Mostra que até os menores heróis podem fazer grande diferença.";
        powers =
          "Alteração de tamanho, força proporcional, comunicação com insetos.";
        break;

      case "Vespa":
        description =
          "Hope van Dyne é filha do criador das Partículas Pym e parceira do Homem-Formiga.Usa uma armadura com asas e poder de encolhimento.Combina inteligência, coragem e determinação.";
        powers = "Voo, disparo de energia, miniaturização, combate aéreo.";
        break;

      case "Falcão":
        description =
          "Sam Wilson é um ex-soldado que voa com asas mecânicas avançadas.Torna-se o novo Capitão América após provar seu valor.Luta por igualdade, justiça e esperança.";
        powers = "Voo, combate aéreo, drones inteligentes.";
        break;

      case "Soldado Invernal":
        description =
          "Bucky Barnes foi o melhor amigo do Capitão América.Capturado e transformado em assassino cibernético, busca sua redenção.É um herói atormentado pelo passado, mas guiado pela lealdade.";
        powers = "Braço metálico, força aprimorada, habilidades militares.";
        break;

      case "Capitã Marvel":
        description =
          "Carol Danvers ganha poderes cósmicos após um acidente com tecnologia alienígena.Com força, velocidade e energia pura, defende o universo.É símbolo de coragem e empoderamento.";
        powers = "Voo interestelar, absorção de energia, superforça.";
        break;

      case "Senhor das Estrelas":
        description =
          "Peter Quill é um aventureiro espacial com um passado misterioso.Líder dos Guardiões da Galáxia, mistura humor e heroísmo.Mesmo rebelde, luta para proteger quem ama.";
        powers = "Armas elementais, estratégia intergaláctica, combate aéreo.";
        break;

      case "Gamora":
        description =
          "Filha adotiva de Thanos, foi treinada como assassina implacável.Arrepende-se do passado e busca redenção ao lado dos Guardiões.É uma guerreira forte e leal.";
        powers = "Espadas alienígenas, agilidade, força aprimorada.";
        break;

      case "Drax":
        description =
          "Sobrevivente da destruição de sua família, busca vingança contra Thanos.Apesar de sério, é conhecido por seu humor literal e força brutal.Encontra nos Guardiões uma nova família.";
        powers = "Força extrema, resistência física, combate direto.";
        break;

      case "Rocket Raccoon":
        description =
          "Rocket é um guaxinim modificado geneticamente com mente genial e temperamento explosivo.Especialista em armas e tecnologia, é um dos Guardiões da Galáxia.Por trás do sarcasmo, esconde um coração leal.";
        powers = "Armas pesadas, inteligência tática, engenharia avançada.";
        break;

      case "Groot":
        description =
          "Ser vegetal alienígena que só diz “Eu sou Groot”.Mesmo com vocabulário limitado, é corajoso e leal aos amigos.Sacrifica-se pelo grupo, mostrando que heróis vêm em todas as formas.";
        powers = "Regeneração, crescimento de galhos, força natural.";
        break;

      case "Deadpool":
        description =
          "Wade Wilson é um mercenário irreverente com fator de cura acelerado.Quebra a quarta parede e traz humor caótico ao universo Marvel.Mistura loucura, comédia e heroísmo à sua maneira única.";
        powers = "Regeneração, combate com espadas, humor letal.";
        break;

      case "Wolverine":
        description =
          "Logan é um mutante com garras de adamantium e regeneração poderosa.É feroz, solitário e movido por um senso de justiça instintivo.Apesar da dureza, possui um coração nobre.";
        powers = "Fator de cura, garras retráteis, sentidos aguçados.";
        break;

      case "Tempestade":
        description =
          "Ororo Munroe controla o clima com sua mente.Rainha e mutante poderosa, é símbolo de força e sabedoria.Lidera os X-Men com empatia e determinação.";
        powers = "Controle climático, voo, eletricidade atmosférica.";
        break;

      case "Ciclope":
        description =
          "Scott Summers dispara rajadas de energia pelos olhos.É o líder estratégico dos X-Men e exemplo de disciplina.Mesmo sob pressão, mantém a equipe unida.";
        powers = "Raio óptico, liderança estratégica, combate tático.";
        break;

      case "Jean Grey":
        description =
          "Mutante telepata e telecinética de poder imenso.Quando controlada pela Força Fênix, torna-se quase divina.Luta entre o amor e o perigo de seu próprio poder.";
        powers = "Telepatia, telecinese, Fênix interior.";
        break;

      case "Magneto":
        description =
          "Controla campos magnéticos e acredita na supremacia mutante.Antigo amigo de Xavier, tornou-se um rival ideológico.Busca proteger os mutantes, mesmo por meios extremos.";
        powers = "Manipulação de metais, campos magnéticos, voo.";

        break;

      case "Mística":
        description =
          "Metamorfa capaz de assumir qualquer aparência humana.Vive entre o heroísmo e a traição, guiada por sobrevivência.É uma das mutantes mais imprevisíveis e intrigantes.";
        powers = "Transformação corporal, espionagem, agilidade furtiva.";
        break;

      case "Dentes-de-Sabre":
        description =
          "Rival selvagem de Wolverine com força e instintos animais.Movido pela fúria, representa o lado brutal da natureza mutante.Sua violência o torna um inimigo temido.";
        powers = "Fator de cura, garras, força animal.";
        break;

      case "Fanático":
        description =
          "Com poder místico, é praticamente imparável quando em movimento.Irmão de Charles Xavier, mas com visão oposta de poder.É força bruta personificada";
        powers = "Impulso destrutivo, invulnerabilidade, força bruta.";
        break;

      case "Emma Frost":
        description =
          "Telepata poderosa que pode transformar sua pele em diamante. De vilã a aliada dos X-Men, é elegante e estratégica, equilibrando frieza e humanidade.";
        powers = "Agilidade, força, intelecto científico.";
        break;

      case "Homem de Gelo":
        description =
          "Bobby Drake manipula o gelo com criatividade e humor. É um dos X-Men originais e usa seus poderes com leveza e coragem.";
        powers =
          "Criação de gelo, escorregamento congelado, resistência térmica.";
        break;

      case "Fera":
        description =
          "Hank McCoy é um cientista brilhante com aparência de fera azul. Combina força física e intelecto avançado, defendendo a paz entre humanos e mutantes.";
        powers = "Agilidade, força, intelecto científico.";
        break;

      case "Colosso":
        description =
          "Pode transformar seu corpo em aço orgânico, tornando-se quase invulnerável. Apesar da aparência imponente, é gentil e artístico, o coração bondoso dos X-Men.";
        powers = "Força sobre-humana, invulnerabilidade metálica.";
        break;

      case "Noturno":
        description =
          "Mutante azul com cauda e habilidade de se teletransportar. De alma gentil e fé profunda, prova que aparência não define o herói.";
        powers = "eletransporte, agilidade acrobática, camuflagem nas sombras.";
        break;

      case "Vampira":
        description =
          "Rouba poderes e memórias com um simples toque. Luta contra o isolamento causado por seu dom e encontra nos X-Men uma nova família.";
        powers = "Absorção de energia, força temporária, voo (após absorção).";
        break;

      case "Pyro":
        description =
          "Controla o fogo, embora não consiga criá-lo. Rebelde e impulsivo, alterna entre vilão e aliado, com uma chama que reflete sua natureza intensa.";
        powers = "Energia cósmica, voo intergaláctico, resistência universal.";
        break;

      case "Surfista Prateado":
        description =
          "Ex-arauto de Galactus, vaga pelo cosmos em busca de redenção. Possui o poder cósmico e representa sacrifício e solidão.";
        powers = "Energia cósmica, voo intergaláctico, resistência universal.";
        break;

      case "Galactus":
        description =
          "Devorador de mundos e entidade cósmica quase divina. Não é vilão, mas uma força inevitável do universo, símbolo do equilíbrio entre criação e destruição.";
        powers =
          "Absorção planetária, manipulação cósmica, existência transcendental.";
        break;

      case "Thanos":
        description =
          "Titã poderoso obcecado pelo equilíbrio do universo. Busca as Joias do Infinito para impor sua visão de ordem, sendo um dos inimigos mais temidos da galáxia.";
        powers =
          "Força titânica, manipulação cósmica, uso das Joias do Infinito.";
        break;

      case "Loki":
        description =
          "Deus da Trapaça e irmão de Thor, mestre das ilusões. Alterna entre vilão e herói, guiado por ego e emoção, sendo carismático e imprevisível.";
        powers = "Magia, metamorfose, manipulação mental, ilusões.";
        break;

      case "Hela":
        description =
          "Deusa da Morte e irmã de Thor, ambiciosa e implacável. Busca dominar Asgard e restaurar seu poder, simbolizando destruição e vingança.";
        powers = "Necromancia, armas místicas, força divina.";
        break;

      case "Ultron":
        description =
          "Inteligência artificial criada por Tony Stark que se volta contra a humanidade. Acredita que a paz só virá com a extinção humana, sendo o reflexo do perigo tecnológico.";
        powers =
          "Corpo indestrutível, superinteligência, controle de máquinas.";
        break;

      case "Caveira Vermelha":
        description =
          "Vilão nazista e inimigo mortal do Capitão América. Busca poder através da Joia da Alma e representa a corrupção e tirania.";
        powers =
          "Estratégia militar, manipulação política, uso do Cubo Cósmico.";
        break;

      case "Barão Zemo":
        description =
          "Gênio tático que busca vingança contra os Vingadores. Mesmo sem poderes, manipula e divide seus inimigos com frieza e cálculo.";
        powers =
          "Inteligência tática, engenharia química, controle psicológico.";
        break;

      case "Abominável":
        description =
          "Inimigo do Hulk transformado por radiação gama. Possui força comparável, mas sem humanidade, simbolizando o poder corrompido.";
        powers = "Força bruta, resistência extrema, durabilidade monstruosa.";
        break;

      case "Treinador":
        description =
          "Pode copiar qualquer movimento que vê, tornando-se um lutador letal. Mercenário sem lealdade, é um inimigo estratégico e habilidoso.";
        powers = "Memória muscular, imitação de técnicas, combate adaptativo.";
        break;

      case "Rei do Crime":
        description =
          "Wilson Fisk é um poderoso chefão do crime em Nova York. Usa inteligência e brutalidade para controlar a cidade, sendo um vilão humano e perigoso";
        powers = "Força física, influência criminosa, estratégia implacável.";
        break;

      default:
        description = `Características de ${imgElement.alt} não cadastradas ainda.`;
        powers = "Poderes não disponíveis.";
        imageSrc = imgElement.src;
    }

    overlayImg.src = imgElement.src;
    overlayName.textContent = name;
    overlayDescription.textContent = description;
    overlayPowers.textContent = powers;
    overlay.style.display = "flex";
  });
});

function closeOverlay() {
  overlay.style.display = "none";
}
