  // URL do seu Apps Script Web App (deploy via doGet)
    const SHEETS_URL = "https://script.google.com/macros/s/AKfycbyA0y3DFmyYzu7jzPIkT6oKVKBaR4vMagXLrTUrP2i6TnXCaJHO-9rjrkv2TOvSFHF6/exec";

    // Mapeamento das 16 perguntas para a dimensão D, I, S ou C
    const perguntas = [
      { nome: "q1",  letra: "D" },
      { nome: "q2",  letra: "I" },
      { nome: "q3",  letra: "S" },
      { nome: "q4",  letra: "C" },
      { nome: "q5",  letra: "I" },
      { nome: "q6",  letra: "S" },
      { nome: "q7",  letra: "C" },
      { nome: "q8",  letra: "D" },
      { nome: "q9",  letra: "I" },
      { nome: "q10", letra: "C" },
      { nome: "q11", letra: "S" },
      { nome: "q12", letra: "C" },
      { nome: "q13", letra: "D" },
      { nome: "q14", letra: "I" },
      { nome: "q15", letra: "C" },
      { nome: "q16", letra: "S" }
    ];

    // Aqui você deve inserir o objeto completo com todas as descrições
    // para cada perfil ("D", "I", "S" e "C"). Exemplo resumido:
    const perfisCompletos = {
      D: {
        avatar: "⚡",
        titulo: "Dominância",
        descricaoCentral: "Pessoas do tipo D são focadas, determinadas e orientadas para resultados...",
        caracteristicas: [
          "Assertividade",
          "Foco em metas",
          "Decisão rápida",
          "Autoconfiança"
        ],
        forcas: [
          "Liderança",
          "Visão estratégica",
          "Eficiência"
        ],
        pontosAtencao: [
          "Impaciência",
          "Tendência a exigir resultados imediatos"
        ],
        estiloComunicacao: "Comunicação direta, objetiva e assertiva.",
        ambientesTrabalho: "Ambientes competitivos, com prazos curtos e metas claras.",
        motivadores: "Desafios, metas ousadas, autonomia.",
        medos: "Sentir-se fraco ou perder o controle.",
        relacoes: {
          equipe: "Ele assume o comando e orienta para a ação, mas deve cuidar para não parecer autoritário.",
          familia: "Pode priorizar resultados e esquecer de demonstrar afeto, tente ouvir mais e ser paciente.",
          afetivo: "Gosta de relacionamentos intensos, mas deve tentar exercitar a empatia e o tempo de qualidade."
        },
        dicas: [
          "Praticar escuta ativa",
          "Exercitar a empatia",
          "Delegar sem microgerenciar"
        ],
        crescimento: [
          "Aprender a ouvir o outro antes de julgar",
          "Cultivar paciência e empatia",
          "Reconhecer a importância do trabalho em equipe"
        ]
      },
      I: {
        avatar: "💬",
        titulo: "Influência",
        descricaoCentral: "Pessoas de perfil I são comunicativas, entusiasmadas e inspiradoras...",
        caracteristicas: [
          "Otimismo",
          "Carisma",
          "Networking"
        ],
        forcas: [
          "Facilidade de comunicação",
          "Energia contagiante",
          "Criatividade"
        ],
        pontosAtencao: [
          "Pode falar demais sem filtrar",
          "Tendência a se dispersar"
        ],
        estiloComunicacao: "Comunicação calorosa, entusiasmada e persuasiva.",
        ambientesTrabalho: "Ambientes dinâmicos, colaborativos e que valorizem redes de relacionamento.",
        motivadores: "Aprovação social, reconhecimento público, colaboração.",
        medos: "Ser ignorado ou ficar isolado socialmente.",
        relacoes: {
          equipe: "Trabalha bem em grupo, motiva colegas, mas cuidado para não desviar o foco das tarefas.",
          familia: "É carinhoso e traz alegria, mas procure ouvir mais e dar atenção aos detalhes.",
          afetivo: "Romântico e expansivo, mas valorize espaços de reflexão em casal."
        },
        dicas: [
          "Criar rotinas para manter foco",
          "Planejar antes de agir",
          "Praticar a escuta ativa"
        ],
        crescimento: [
          "Estabelecer prioridades",
          "Desenvolver disciplina para concluir tarefas",
          "Aprender a absorver críticas de forma equilibrada"
        ]
      },
      S: {
        avatar: "🛡️",
        titulo: "Estabilidade",
        descricaoCentral: "Pessoas de perfil S são calmas, pacientes e cooperativas...",
        caracteristicas: [
          "Paciência",
          "Lealdade",
          "Trabalho em equipe"
        ],
        forcas: [
          "Apoio confiável",
          "Escuta ativa",
          "Constância"
        ],
        pontosAtencao: [
          "Pode resistir a mudanças",
          "Tendência a evitar conflitos"
        ],
        estiloComunicacao: "Comunicação tranquila, acolhedora e equilibrada.",
        ambientesTrabalho: "Ambientes estáveis, com processos claros e pouco conflito diário.",
        motivadores: "Harmonia, segurança, relacionamentos duradouros.",
        medos: "Conflito, instabilidade, pressa excessiva.",
        relacoes: {
          equipe: "Excelente suporte aos colegas, mas deve aprender a tomar iniciativa e expor opiniões.",
          familia: "Protetor e acolhedor, mas cuidado para não sacrificar suas próprias necessidades.",
          afetivo: "Busca relacionamentos estáveis e seguros, mas pratique a expressão de seus próprios desejos."
        },
        dicas: [
          "Abraçar mudanças gradualmente",
          "Desenvolver assertividade",
          "Expor opiniões de forma construtiva"
        ],
        crescimento: [
          "Aprender a lidar com imprevistos",
          "Tomar decisões mais rapidamente",
          "Valorizar a própria voz em discussões"
        ]
      },
      C: {
        avatar: "🔍",
        titulo: "Conformidade",
        descricaoCentral: "Pessoas de perfil C são analíticas, precisas e orientadas a detalhes...",
        caracteristicas: [
          "Precisão",
          "Meticulosidade",
          "Raciocínio lógico"
        ],
        forcas: [
          "Organização",
          "Análise crítica",
          "Qualidade de trabalho"
        ],
        pontosAtencao: [
          "Perfeccionismo exagerado",
          "Dificuldade em delegar"
        ],
        estiloComunicacao: "Comunicação cautelosa, detalhada e fundamentada em dados.",
        ambientesTrabalho: "Ambientes organizados, padronizados e que valorizem processos bem definidos.",
        motivadores: "Qualidade, precisão, controle de processos.",
        medos: "Erros, falhas, falta de referências claras.",
        relacoes: {
          equipe: "Garante qualidade, mas deve exercitar flexibilidade e tolerância às divergências.",
          familia: "Cuidadoso e protetor, mas procure demonstrar mais emoção espontânea.",
          afetivo: "Valoriza relacionamentos baseados em confiança e resultados, mas mostre carinho com mais frequência."
        },
        dicas: [
          "Aprender a delegar tarefas confidencialmente",
          "Confiar no trabalho dos outros",
          "Equilibrar perfeccionismo com produtividade"
        ],
        crescimento: [
          "Aceitar que nem tudo precisa ser 100%",
          "Desenvolver soluções mais ágeis",
          "Aproveitar a criatividade em vez de só dados"
        ]
      }
    };

    // Função principal: coleta e envia para o Sheets, depois exibe resultado
    function processarFormulario() {
      // Captura campos de texto
      const nome      = document.getElementById("nome").value.trim();
      const email     = document.getElementById("email").value.trim();
      const whatsapp  = document.getElementById("whatsapp").value.trim();

      if (!nome || !email || !whatsapp) {
        alert("Preencha nome, email e WhatsApp antes de prosseguir.");
        return;
      }

      // Calcula pontuação por dimensão
      const pontuacao = { D: 0, I: 0, S: 0, C: 0 };
      for (const item of perguntas) {
        const selecionado = document.querySelector(`input[name="${item.nome}"]:checked`);
        if (!selecionado) {
          alert("Por favor, responda todas as perguntas antes de continuar.");
          return;
        }
        const valor = parseInt(selecionado.value, 10);
        // Se for 4 ou 5, conta +1 ponto na dimensão correspondente
        if (valor >= 4) {
          pontuacao[item.letra]++;
        }
      }

      // Descobre qual dimensão tem o maior score
      let perfil = "D";
      let max = pontuacao.D;
      for (const letra of ["I","S","C"]) {
        if (pontuacao[letra] > max) {
          max = pontuacao[letra];
          perfil = letra;
        }
      }

      // Prepara query string para envio via GET
      const params = new URLSearchParams({
        nome:      nome,
        email:     email,
        whatsapp:  whatsapp,
        perfil:    perfil,
        D:         pontuacao.D,
        I:         pontuacao.I,
        S:         pontuacao.S,
        C:         pontuacao.C
      });

      // Dispara a requisição (GET + no-cors) para o doGet do Apps Script
      fetch(`${SHEETS_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors'
      })
        .then(() => console.log("Enviando a planilha:", params.toString()))
        .catch(err => console.error("Erro ao enviar para o Sheets:", err));

      // Exibe o resultado na própria página
      exibirResultado(nome, perfil);
    }

    // Função para renderizar o perfil completo
    function exibirResultado(nome, sigla) {
      // Esconde o formulário
      document.getElementById("form-container").style.display = 'none';
      // Mostra área de resultado
      const container = document.getElementById("resultado-container");
      container.classList.add('active');

      const perfilObj = perfisCompletos[sigla];
      let html = `
        <div class="perfil-section">
          <div class="avatar">${perfilObj.avatar}</div>
          <h2>Perfil ${sigla} – ${perfilObj.titulo}</h2>
          <p><strong>Olá, ${nome}!</strong></p>
          <p>${perfilObj.descricaoCentral}</p>
        </div>
        <div class="perfil-section">
          <h2>Características Principais</h2>
          <ul>
            ${perfilObj.caracteristicas.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="perfil-section">
          <h2>Forças Naturais</h2>
          <ul>
            ${perfilObj.forcas.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="perfil-section">
          <h2>Pontos de Atenção</h2>
          <ul>
            ${perfilObj.pontosAtencao.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="perfil-section">
          <h2>Estilo de Comunicação</h2>
          <p>${perfilObj.estiloComunicacao}</p>
        </div>
        <div class="perfil-section">
          <h2>Ambientes de Trabalho Ideais</h2>
          <p>${perfilObj.ambientesTrabalho}</p>
        </div>
        <div class="perfil-section">
          <h2>Motivadores e Medos</h2>
          <p><strong>Motivadores:</strong> ${perfilObj.motivadores}</p>
          <p><strong>Medos:</strong> ${perfilObj.medos}</p>
        </div>
        <div class="perfil-section">
          <h2>Relações</h2>
          <p><strong>Equipe:</strong> ${perfilObj.relacoes.equipe}</p>
          <p><strong>Família:</strong> ${perfilObj.relacoes.familia}</p>
          <p><strong>Afetivo:</strong> ${perfilObj.relacoes.afetivo}</p>
        </div>
        <div class="perfil-section">
          <h2>Dicas de Desenvolvimento</h2>
          <ul>
            ${perfilObj.dicas.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="perfil-section">
          <h2>Caminho de Crescimento</h2>
          <ol>
            ${perfilObj.crescimento.map(item => `<li>${item}</li>`).join('')}
          </ol>
        </div>
      `;
      container.innerHTML = html;
    }

