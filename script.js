// Obtenha a referência das imagens
const cabinImage = document.getElementById('cabinImage');
const cabinaImage = document.getElementById('cabinaImage');
const maquinaImage = document.getElementById('maquinaImage');
const passwordKeyboard = document.getElementById('passwordKeyboard');

// Define as coordenadas do local onde as imagens devem ser alteradas
const targetX1 = 500; // Coordenada X da cabana
const targetY1 = 390; // Coordenada Y da cabana
const targetRadius1 = 50; // Raio do local clicável da cabana (em pixels)

const targetX2 = 750; // Coordenada X da cabana interna
const targetY2 = 200; // Coordenada Y da cabana interna
const targetRadius2 = 100; // Raio do local clicável da cabana interna (em pixels)

const targetX3 = 400; // Coordenada X da máquina
const targetY3 = 250; // Coordenada Y da máquina
const targetRadius3 = 100; // Raio do local clicável da máquina (em pixels)


// Adicione o evento de clique à imagem da máquina
maquinaImage.addEventListener('click', (event) => {
    // Obtenha as coordenadas do clique
    const rect = maquinaImage.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
  
    // Verifique se o clique está dentro do raio da máquina
    if (
      Math.sqrt((clickX - targetX3) ** 2 + (clickY - targetY3) ** 2) <= targetRadius3
    ) {
      // Exibir o teclado de senha
      passwordKeyboard.style.display = 'block';
      machineClicked = true;
    }
  });


// Adicione o evento de clique à imagem da cabana
cabinImage.addEventListener('click', (event) => {
    // Obtenha as coordenadas do clique
    const rect = cabinImage.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
  
    // Verifique se o clique está dentro do raio da cabana
    if (
      Math.sqrt((clickX - targetX1) ** 2 + (clickY - targetY1) ** 2) <= targetRadius1
    ) {
      // Exibir a próxima imagem (cabana interna)
      cabinImage.style.display = 'none';
      cabinaImage.style.display = 'block';
      passwordKeyboard.style.display = 'none'; // Esconder o teclado de senha
      machineClicked = false; // Resetar a variável de controle
    }
  });
  
  
  // Adicione o evento de clique à imagem da cabana interna
  cabinaImage.addEventListener('click', (event) => {
    // Obtenha as coordenadas do clique
    const rect = cabinaImage.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
  
    // Verifique se o clique está dentro do raio da cabana interna
    if (
      Math.sqrt((clickX - targetX2) ** 2 + (clickY - targetY2) ** 2) <= targetRadius2
    ) {
      // Exibir a próxima imagem (máquina)
      cabinaImage.style.display = 'none';
      maquinaImage.style.display = 'block';
      passwordKeyboard.style.display = 'none'; // Esconder o teclado de senha
      machineClicked = false; // Resetar a variável de controle
    }
  });

  let activeKeys = [];
  const correctPassword = ['A', 'B', 'C', '1', '3'];
  
  const keys = document.querySelectorAll('.key');
  
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const keyContent = key.querySelector('.key-content').textContent;
  
      // Verifica se a tecla já está ativa
      if (activeKeys.includes(keyContent)) {
        // Remove a tecla da lista de ativas
        activeKeys = activeKeys.filter(k => k !== keyContent);
        key.classList.remove('active');
      } else {
        // Adiciona a tecla à lista de ativas
        activeKeys.push(keyContent);
        key.classList.add('active');
      }
  
      // Lógica para verificar a senha
      console.log('Senha digitada:', activeKeys.join(''));
  
      // Verifica se a senha está correta (independentemente da ordem)
      if (activeKeys.length === correctPassword.length && correctPassword.every(k => activeKeys.includes(k))) {
        // Muda a cor das teclas corretas para verde
        activeKeys.forEach(k => {
          document.querySelectorAll('.key .key-content').forEach(keyEl => {
            if (keyEl.textContent === k) {
              keyEl.parentElement.classList.add('correct');
            }
          });
        });
  
        // Espera 2 segundos e redireciona para a página audio.html
        setTimeout(() => {
          window.location.href = 'audio.html';
        }, 2000);
      } else {
        // Remove a classe "correct" de todas as teclas
        document.querySelectorAll('.key.correct').forEach(key => {
          key.classList.remove('correct');
        });
      }
    });
  });
  