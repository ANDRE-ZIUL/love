const heartsContainer = document.getElementById('hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '❤️';

  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${4 + Math.random() * 3}s`;
  heart.style.opacity = Math.random() * 0.8 + 0.2;
  heart.style.fontSize = `${16 + Math.random() * 32}px`;
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(() => {
  for (let i = 0; i < 5; i++) createHeart();
}, 300);

let typedAlready = false;

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }

  const dedicatedText = document.querySelector('.dedicated-text');
  if (!typedAlready) {
    const rect = dedicatedText.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const fullText = "Você é o brilho que ilumina meus dias, a calma nos momentos de tempestade e o sorriso que faz meu coração acelerar. Sua doçura, força e beleza me inspiram a ser uma pessoa melhor. Cada momento ao seu lado é um presente que guardo com carinho eterno.";
      typeEffect(dedicatedText, fullText, 40);
      typedAlready = true;
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function typeEffect(element, text, speed = 50) {
  element.textContent = '';
  let i = 0;
  element.classList.add('typing-cursor');

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      element.classList.remove('typing-cursor');
    }
  }, speed);
}

  const flipHeartCard = document.querySelector(".flip-heart-card");
  const flipHeartIcon = document.querySelector(".flip-heart-icon");
  const flipHeartText = document.getElementById("flip-heart-typing");

  const heartMessage = "Você é o brilho que ilumina meus dias momozi, é o meu lugarzinho de paz em meio ao caos, é o abraço que cura todas as minhas dores e o sorriso que me deixa mais que bobo e apaixonado! Seu jeitinho bobo, sua força, sua beleza, sua garra, me inspiram e o seu carinho em cada detalhe são apenas alguns dos motivos pelos quais me apaixono por você todos os dias, você me mostra que o amor está nas pequenas coisas, no cuidado, no apoio, no incentivo, na dedicação, com você aprendi que o amor verdadeiro não é feito apenas de momentos bons, mas também da escolha diária de estarmos juntos mesmo quando as coisas não estão fáceis, e isso que estamos fazendo juntinhos, vencendo as barreiras e adversidades, nos tornando mais fortes e unidos a cada dia. Obrigado por tudo minha vida, por ser você, por ser tão única e especial, por me completar como ninguém, por ser tudo e muito mais que um dia eu pedi a Deus! Tenho muito orgulho de você, do seu crescimento, da sua evolução, de tudo que vem conquistando, você é minha inspiração, a razão do meu viver, e eu quero pra sempre estar ao seu lado, te apoiando em tudo que for necessário, torcendo e vibrando por todas as suas conquistas! Que seja pra sempre eu e você até depois do fim!";

  flipHeartIcon.addEventListener("click", () => {
    flipHeartCard.classList.add("flipped");

    setTimeout(() => {
      typeEffect(heartMessage, flipHeartText);
    }, 1000);
  });

  function typeEffect(text, element, speed = 30) {
    let i = 0;
    element.textContent = "";
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

const music = document.getElementById('audio-music');
music.volume = 0.2;

const moments = document.querySelectorAll('.moment');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

moments.forEach((moment, index) => {
  if (index % 2 !== 0) {
    moment.classList.add('left');
  }

  observer.observe(moment);
});

const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio-music');

playButton.addEventListener('click', () => {
  audio.volume = 0.3;
  audio.play().then(() => {
    playButton.classList.add('hide');
  }).catch(err => {
    console.error('Erro ao tentar tocar a música:', err);
  });
});

let hasTyped = false;

function startTypingEffect() {
  if (hasTyped) return;
  hasTyped = true;

  const editor = document.getElementById('vscode-editor');
  const codeLines = [
    "<span class='comment'>// Espero que tenha gostado neném</span>",
    "<span class='keyword'>const</span> <span class='variable'>mensagem</span> = <span class='string'>'Foi feito com muito calinho, Do seu neném, po meu neném! ❤️'</span>;",
    "<span class='function'>console</span>.<span class='function'>log</span>(<span class='variable'>mensagem</span>);",
    "<span class='function'>console</span>.<span class='function'>log</span>(<span class='string'>'Te amo mais que tudo nesse mundo minha princesa! ❤️'</span>);",
    "<span class='function'>console</span>.<span class='function'>log</span>(<span class='string'>'Feliz 3 anos de namoro! ❤️'</span>);",
    "<span class='function'>console</span>.<span class='function'>log</span>(<span class='string'>'Obrigado por tudo e por tanto! ❤️'</span>);"
  ];

  const typingAudio = document.getElementById('typing-audio');
  typingAudio.volume = 0.9;
  typingAudio.play().then(() => {
    document.getElementById('start-button').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('start-button').style.display = 'none';
    }, 1000)
  });

  let currentLine = 0;
  let currentChar = 0;
  let lineDiv;

  function typeLine() {
    if (currentLine >= codeLines.length) {
      typingAudio.pause();
      typingAudio.currentTime = 0;
      return;
    }

    if (!lineDiv) {
      lineDiv = document.createElement('div');
      editor.appendChild(lineDiv);
    }

    const fullLine = codeLines[currentLine];
    const nextChar = fullLine.slice(0, currentChar + 1);
    lineDiv.innerHTML = nextChar + "<span class='cursor'></span>";
    currentChar++;

    if (currentChar < fullLine.length) {
      setTimeout(typeLine, 30);
    } else {
      lineDiv.innerHTML = fullLine;
      lineDiv = null;
      currentChar = 0;
      currentLine++;
      setTimeout(typeLine, 400);
    }
  }

  typeLine();
}

const observerCode = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startTypingEffect();
    }
  });
}, {
  threshold: 0.5
});

document.getElementById('start-button').addEventListener('click', () => {
  startTypingEffect();
});
