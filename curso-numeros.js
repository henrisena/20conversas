(() => {
  const fmt = new Intl.NumberFormat('pt-BR');
  let dataset;

  const animateCounters = () => {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = Number(el.dataset.count);
      const duration = 1100;
      const start = performance.now();
      const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = fmt.format(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };

  const renderBars = (mode = 'ingressos') => {
    const chart = document.getElementById('annualChart');
    const caption = document.getElementById('chartCaption');
    const rows = mode === 'ingressos' ? dataset.ingressantesPorAno : dataset.ativosPorAnoIngresso;
    const maximum = Math.max(...rows.map(row => row.total));
    chart.innerHTML = rows.map(row => {
      const height = Math.max((row.total / maximum) * 100, 3);
      return `<button class="bar-item" title="${row.ano}: ${fmt.format(row.total)}" aria-label="${row.ano}: ${fmt.format(row.total)}">
        <span class="bar-value">${fmt.format(row.total)}</span>
        <span class="bar-track"><span class="bar-fill" style="height:${height}%"></span></span>
        <span class="bar-year">${String(row.ano).slice(2)}</span>
      </button>`;
    }).join('');
    caption.textContent = mode === 'ingressos'
      ? 'Total anual de ingressantes, somando os turnos e os ingressos isolados registrados.'
      : 'Estudantes ativos em julho de 2026, agrupados pelo ano de ingresso.';
    document.querySelectorAll('.chart-mode').forEach(btn => btn.classList.toggle('active', btn.dataset.chart === mode));
  };

  const populatePeriods = () => {
    const years = [...new Set(dataset.turmas.map(item => item.periodo.slice(0,4)))].sort();
    const select = document.getElementById('periodFilter');
    years.forEach(year => select.insertAdjacentHTML('beforeend', `<option value="${year}">${year}</option>`));
  };

  const renderCohorts = () => {
    const turn = document.getElementById('turnFilter').value;
    const year = document.getElementById('periodFilter').value;
    let rows = dataset.turmas.filter(item =>
      (turn === 'todos' || item.turno === turn) &&
      (year === 'todos' || item.periodo.startsWith(year))
    );
    const max = Math.max(...rows.map(row => row.ingressantes), 1);
    document.getElementById('cohortCount').textContent = fmt.format(rows.length);
    document.getElementById('cohortStudents').textContent = fmt.format(rows.reduce((sum, row) => sum + row.ingressantes, 0));
    document.getElementById('cohortRows').innerHTML = rows.map(row => `
      <article class="cohort-row">
        <div class="cohort-label"><strong>${row.periodo}</strong><span>${row.turno === 'MT' ? 'Matutino' : 'Noturno'}</span></div>
        <div class="cohort-bar"><span style="width:${Math.max(row.ingressantes / max * 100, 2)}%"></span></div>
        <strong class="cohort-total">${fmt.format(row.ingressantes)}</strong>
      </article>`).join('') || '<p class="empty-state">Nenhuma turma encontrada.</p>';
  };

  const renderGenerationChart = () => {
    const rows = dataset.ativosPorAnoIngresso;
    const max = Math.max(...rows.map(r => r.total));
    document.getElementById('generationChart').innerHTML = rows.map(row => `
      <div class="generation-column" title="${row.ano}: ${row.total} ativos">
        <span class="generation-value">${row.total}</span>
        <i style="height:${Math.max(row.total/max*100,4)}%"></i>
        <small>${String(row.ano).slice(2)}</small>
      </div>`).join('');
  };

  dataset = {"atualizadoEm":"28/07/2026","indicadores":{"anos":20,"ingressantes":1437,"egressos":480,"ativos":323,"primeiraTurma":"2006.2","primeirasConclusoes":"2010","maiorTurma":66},"turnos":{"MT":584,"N":853},"ingressantesPorAno":[{"ano":2006,"total":42},{"ano":2007,"total":40},{"ano":2008,"total":79},{"ano":2009,"total":101},{"ano":2010,"total":114},{"ano":2011,"total":117},{"ano":2012,"total":103},{"ano":2013,"total":119},{"ano":2014,"total":96},{"ano":2015,"total":126},{"ano":2016,"total":58},{"ano":2017,"total":98},{"ano":2018,"total":49},{"ano":2019,"total":48},{"ano":2020,"total":42},{"ano":2021,"total":33},{"ano":2022,"total":45},{"ano":2023,"total":7},{"ano":2024,"total":31},{"ano":2025,"total":42},{"ano":2026,"total":47}],"ativosPorAnoIngresso":[{"ano":2008,"total":1},{"ano":2009,"total":1},{"ano":2010,"total":3},{"ano":2011,"total":5},{"ano":2012,"total":7},{"ano":2013,"total":8},{"ano":2014,"total":16},{"ano":2015,"total":14},{"ano":2016,"total":20},{"ano":2017,"total":26},{"ano":2018,"total":11},{"ano":2019,"total":31},{"ano":2020,"total":24},{"ano":2021,"total":20},{"ano":2022,"total":21},{"ano":2023,"total":5},{"ano":2024,"total":27},{"ano":2025,"total":37},{"ano":2026,"total":46}],"turmas":[{"periodo":"2006.2","turno":"MT","ingressantes":42},{"periodo":"2007.1","turno":"MT","ingressantes":40},{"periodo":"2008.1","turno":"MT","ingressantes":39},{"periodo":"2008.2","turno":"MT","ingressantes":1},{"periodo":"2008.2","turno":"N","ingressantes":39},{"periodo":"2009.1","turno":"MT","ingressantes":51},{"periodo":"2009.2","turno":"MT","ingressantes":1},{"periodo":"2009.2","turno":"N","ingressantes":49},{"periodo":"2010.1","turno":"MT","ingressantes":1},{"periodo":"2010.1","turno":"N","ingressantes":55},{"periodo":"2010.2","turno":"MT","ingressantes":56},{"periodo":"2010.2","turno":"N","ingressantes":2},{"periodo":"2011.1","turno":"N","ingressantes":56},{"periodo":"2011.2","turno":"MT","ingressantes":59},{"periodo":"2011.2","turno":"N","ingressantes":2},{"periodo":"2012.1","turno":"N","ingressantes":48},{"periodo":"2012.2","turno":"MT","ingressantes":52},{"periodo":"2012.2","turno":"N","ingressantes":3},{"periodo":"2013.1","turno":"MT","ingressantes":1},{"periodo":"2013.1","turno":"N","ingressantes":61},{"periodo":"2013.2","turno":"MT","ingressantes":52},{"periodo":"2013.2","turno":"N","ingressantes":5},{"periodo":"2014.1","turno":"MT","ingressantes":1},{"periodo":"2014.1","turno":"N","ingressantes":56},{"periodo":"2014.2","turno":"MT","ingressantes":33},{"periodo":"2014.2","turno":"N","ingressantes":6},{"periodo":"2015.1","turno":"MT","ingressantes":2},{"periodo":"2015.1","turno":"N","ingressantes":66},{"periodo":"2015.2","turno":"MT","ingressantes":56},{"periodo":"2015.2","turno":"N","ingressantes":2},{"periodo":"2016.1","turno":"N","ingressantes":58},{"periodo":"2017.1","turno":"MT","ingressantes":50},{"periodo":"2017.2","turno":"MT","ingressantes":1},{"periodo":"2017.2","turno":"N","ingressantes":47},{"periodo":"2018.2","turno":"N","ingressantes":49},{"periodo":"2019.1","turno":"N","ingressantes":1},{"periodo":"2019.2","turno":"MT","ingressantes":1},{"periodo":"2019.2","turno":"N","ingressantes":46},{"periodo":"2020.1","turno":"N","ingressantes":4},{"periodo":"2020.2","turno":"N","ingressantes":38},{"periodo":"2021.1","turno":"N","ingressantes":4},{"periodo":"2021.2","turno":"N","ingressantes":29},{"periodo":"2022.1","turno":"N","ingressantes":1},{"periodo":"2022.2","turno":"N","ingressantes":44},{"periodo":"2023.1","turno":"N","ingressantes":7},{"periodo":"2024.1","turno":"N","ingressantes":31},{"periodo":"2025.1","turno":"N","ingressantes":40},{"periodo":"2025.2","turno":"N","ingressantes":2},{"periodo":"2026.1","turno":"MT","ingressantes":45},{"periodo":"2026.1","turno":"N","ingressantes":2}]};
  animateCounters();
  populatePeriods();
  renderBars();
  renderCohorts();
  renderGenerationChart();
  document.querySelectorAll('.chart-mode').forEach(btn => btn.addEventListener('click', () => renderBars(btn.dataset.chart)));
  document.getElementById('turnFilter').addEventListener('change', renderCohorts);
  document.getElementById('periodFilter').addEventListener('change', renderCohorts);

  const people = [
    {
      nome: "Alan Felix da Paixão dos Santos",
      status: "egresso",
      ingresso: "2006.2",
      conclusao: "2010.2",
      turno: "Matutino",
      turma: 42,
      contexto: "Você integra a primeira turma do Curso de História da UFRB.",
      perspectiva: "Sua trajetória acompanha o momento inaugural do curso: ingresso em 2006 e conclusão no ciclo das primeiras formaturas."
    },
    {
      nome: "Camila Vieira Guerreiro",
      status: "egresso",
      ingresso: "2006.2",
      conclusao: "2010.2",
      turno: "Matutino",
      turma: 42,
      contexto: "Você integra a primeira geração formada pelo curso.",
      perspectiva: "Entre a criação do curso e seus 20 anos, sua turma ocupa o ponto de partida da memória institucional."
    },
    {
      nome: "Edilon de Freitas dos Santos",
      status: "egresso",
      ingresso: "2007.1",
      conclusao: "2010.2",
      turno: "Matutino",
      turma: 40,
      contexto: "Você pertence à segunda turma de ingresso do curso.",
      perspectiva: "Sua formação ocorreu quando o curso ainda consolidava suas primeiras experiências acadêmicas e institucionais."
    },
    {
      nome: "Adriana da Silva Araujo",
      status: "egresso",
      ingresso: "2008.2",
      conclusao: "2014.2",
      turno: "Noturno",
      turma: 39,
      contexto: "Você integra a primeira turma regular do turno noturno.",
      perspectiva: "Sua trajetória representa a ampliação do acesso ao curso e a formação de uma nova geração no período noturno."
    },
    {
      nome: "Andreina de Almeida Andrade",
      status: "egresso",
      ingresso: "2019.2",
      conclusao: "2025.2",
      turno: "Noturno",
      turma: 46,
      contexto: "Você concluiu o curso na proximidade das celebrações dos 20 anos.",
      perspectiva: "Sua trajetória atravessa anos de mudanças intensas e integra uma geração recente de professores de História."
    },
    {
      nome: "Valdir Gomes de Araujo",
      status: "ativo",
      ingresso: "2008",
      conclusao: null,
      turno: "Não informado no relatório de ativos",
      turma: 79,
      contexto: "Você possui o ano de ingresso mais antigo entre os estudantes ativos em julho de 2026.",
      perspectiva: "Sua presença evidencia que o curso reúne trajetórias com diferentes ritmos, temporalidades e formas de permanência."
    },
    {
      nome: "Anderson dos Santos Cerqueira",
      status: "ativo",
      ingresso: "2013",
      conclusao: null,
      turno: "Não informado no relatório de ativos",
      turma: 119,
      contexto: "Você faz parte de uma das maiores gerações anuais de ingresso.",
      perspectiva: "Sua trajetória conecta uma fase de expansão do curso às comemorações de seus 20 anos."
    },
    {
      nome: "Alcione de Jesus Santos",
      status: "ativo",
      ingresso: "2017",
      conclusao: null,
      turno: "Não informado no relatório de ativos",
      turma: 98,
      contexto: "Você ingressou quando o curso já havia completado sua primeira década.",
      perspectiva: "Sua geração ocupa a ponte entre a consolidação institucional e o presente do curso."
    },
    {
      nome: "Amanda de Lima Gomes",
      status: "ativo",
      ingresso: "2022",
      conclusao: null,
      turno: "Não informado no relatório de ativos",
      turma: 45,
      contexto: "Você integra uma geração que vivencia diretamente as comemorações dos 20 anos.",
      perspectiva: "Sua trajetória pertence ao presente do curso e também à história que ainda está sendo construída."
    },
    {
      nome: "Adrya Raielle de Souza dos Santos",
      status: "ativo",
      ingresso: "2025",
      conclusao: null,
      turno: "Não informado no relatório de ativos",
      turma: 42,
      contexto: "Você integra uma das gerações mais recentes do curso.",
      perspectiva: "Ao chegar perto dos 20 anos do curso, sua turma inicia um novo ciclo dessa história."
    }
  ];

  let peopleStatus = "todos";

  const normalizePeopleText = text =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const yearsBetween = (start, end) => {
    const [sy, ss = "1"] = String(start).split(".");
    const [ey, es = "1"] = String(end).split(".");
    return Math.max(0, (Number(ey) + (Number(es) - 1) / 2) - (Number(sy) + (Number(ss) - 1) / 2));
  };

  const renderPeople = () => {
    const query = normalizePeopleText(document.getElementById("peopleSearch").value.trim());
    const filtered = people.filter(person =>
      (peopleStatus === "todos" || person.status === peopleStatus) &&
      (!query || normalizePeopleText(person.nome).includes(query))
    );

    document.getElementById("peopleResults").innerHTML = filtered.length
      ? filtered.map((person, index) => `
        <button class="person-result" type="button" data-person="${people.indexOf(person)}">
          <span class="person-initial">${person.nome.charAt(0)}</span>
          <span><strong>${person.nome}</strong><small>${person.status === "egresso" ? "Egresso" : "Estudante ativo"} · ingresso ${person.ingresso}</small></span>
          <span class="person-arrow">→</span>
        </button>`).join("")
      : '<p class="empty-state">Nenhum nome encontrado neste protótipo.</p>';

    document.querySelectorAll(".person-result").forEach(button =>
      button.addEventListener("click", () => showPerspective(Number(button.dataset.person)))
    );
  };

  const showPerspective = index => {
    const person = people[index];
    const statusLabel = person.status === "egresso" ? "Egresso" : "Estudante ativo";
    const end = person.conclusao || "2026.2";
    const duration = yearsBetween(person.ingresso, end);
    const courseAgeAtEntry = Math.max(0, Number(String(person.ingresso).slice(0, 4)) - 2006);
    const share = Math.max(1, Math.round((person.turma / 1437) * 1000) / 10);

    document.getElementById("personPerspective").className = "person-perspective";
    document.getElementById("personPerspective").innerHTML = `
      <div class="person-card-head">
        <span class="person-status ${person.status}">${statusLabel}</span>
        <span class="person-sample">amostra de teste</span>
      </div>
      <p class="person-kicker">Sua trajetória no curso</p>
      <h3>${person.nome}</h3>
      <p class="person-context">${person.contexto}</p>

      <div class="person-facts">
        <div><strong>${person.ingresso}</strong><span>ingresso</span></div>
        <div><strong>${person.conclusao || "Em curso"}</strong><span>${person.conclusao ? "conclusão" : "situação em 2026"}</span></div>
        <div><strong>${person.turma}</strong><span>ingressantes no ano ou turma de referência</span></div>
      </div>

      <div class="personal-timeline">
        <div class="timeline-point start"><i></i><strong>${person.ingresso}</strong><span>Ingresso</span></div>
        <div class="timeline-line"><span style="width:${Math.min(100, Math.max(18, duration / 20 * 100))}%"></span></div>
        <div class="timeline-point end"><i></i><strong>${person.conclusao || "2026"}</strong><span>${person.conclusao ? "Conclusão" : "Presente"}</span></div>
      </div>

      <div class="perspective-message">
        <p>${person.perspectiva}</p>
      </div>

      <div class="person-comparison">
        <div><span>O curso tinha</span><strong>${courseAgeAtEntry === 0 ? "menos de 1" : courseAgeAtEntry} ${courseAgeAtEntry === 1 ? "ano" : "anos"}</strong><small>quando você ingressou</small></div>
        <div><span>Sua referência representa</span><strong>${String(share).replace(".", ",")}%</strong><small>dos 1.437 ingressos registrados</small></div>
        <div><span>Tempo na trajetória</span><strong>${duration.toLocaleString("pt-BR", {maximumFractionDigits: 1})} anos</strong><small>${person.conclusao ? "entre ingresso e conclusão" : "até julho de 2026"}</small></div>
      </div>
    `;

    document.querySelectorAll(".person-result").forEach(button =>
      button.classList.toggle("selected", Number(button.dataset.person) === index)
    );
  };

  const peopleSearch = document.getElementById("peopleSearch");
  if (peopleSearch) {
    peopleSearch.addEventListener("input", renderPeople);
    document.getElementById("clearPeopleSearch").addEventListener("click", () => {
      peopleSearch.value = "";
      peopleSearch.focus();
      renderPeople();
    });
    document.querySelectorAll(".people-filter").forEach(button =>
      button.addEventListener("click", () => {
        peopleStatus = button.dataset.status;
        document.querySelectorAll(".people-filter").forEach(item => item.classList.toggle("active", item === button));
        renderPeople();
      })
    );
    renderPeople();
  }


  // Percurso completo das 50 turmas, consolidado a partir dos relatórios do SIGAA.
  // 'Outras situações' corresponde à diferença entre ingressantes, concluintes e ativos.
  const cohortFlow = [{"id":"2006.2-Matutino","label":"2006.2 · Matutino","year":2006,"shift":"Matutino","entered":42,"graduated":25,"active":0,"other":17},{"id":"2007.1-Matutino","label":"2007.1 · Matutino","year":2007,"shift":"Matutino","entered":40,"graduated":34,"active":0,"other":6},{"id":"2008.1-Matutino","label":"2008.1 · Matutino","year":2008,"shift":"Matutino","entered":39,"graduated":29,"active":0,"other":10},{"id":"2008.2-Matutino","label":"2008.2 · Matutino","year":2008,"shift":"Matutino","entered":1,"graduated":1,"active":0,"other":0},{"id":"2008.2-Noturno","label":"2008.2 · Noturno","year":2008,"shift":"Noturno","entered":39,"graduated":25,"active":0,"other":14},{"id":"2009.1-Matutino","label":"2009.1 · Matutino","year":2009,"shift":"Matutino","entered":51,"graduated":29,"active":1,"other":21},{"id":"2009.2-Matutino","label":"2009.2 · Matutino","year":2009,"shift":"Matutino","entered":1,"graduated":0,"active":0,"other":1},{"id":"2009.2-Noturno","label":"2009.2 · Noturno","year":2009,"shift":"Noturno","entered":49,"graduated":31,"active":0,"other":18},{"id":"2010.1-Matutino","label":"2010.1 · Matutino","year":2010,"shift":"Matutino","entered":1,"graduated":0,"active":0,"other":1},{"id":"2010.1-Noturno","label":"2010.1 · Noturno","year":2010,"shift":"Noturno","entered":55,"graduated":15,"active":2,"other":38},{"id":"2010.2-Matutino","label":"2010.2 · Matutino","year":2010,"shift":"Matutino","entered":56,"graduated":27,"active":1,"other":28},{"id":"2010.2-Noturno","label":"2010.2 · Noturno","year":2010,"shift":"Noturno","entered":2,"graduated":1,"active":0,"other":1},{"id":"2011.1-Noturno","label":"2011.1 · Noturno","year":2011,"shift":"Noturno","entered":56,"graduated":15,"active":2,"other":39},{"id":"2011.2-Matutino","label":"2011.2 · Matutino","year":2011,"shift":"Matutino","entered":59,"graduated":19,"active":1,"other":39},{"id":"2011.2-Noturno","label":"2011.2 · Noturno","year":2011,"shift":"Noturno","entered":2,"graduated":1,"active":1,"other":0},{"id":"2012.1-Noturno","label":"2012.1 · Noturno","year":2012,"shift":"Noturno","entered":48,"graduated":19,"active":4,"other":25},{"id":"2012.2-Matutino","label":"2012.2 · Matutino","year":2012,"shift":"Matutino","entered":52,"graduated":31,"active":2,"other":19},{"id":"2012.2-Noturno","label":"2012.2 · Noturno","year":2012,"shift":"Noturno","entered":3,"graduated":1,"active":1,"other":1},{"id":"2013.1-Matutino","label":"2013.1 · Matutino","year":2013,"shift":"Matutino","entered":1,"graduated":1,"active":0,"other":0},{"id":"2013.1-Noturno","label":"2013.1 · Noturno","year":2013,"shift":"Noturno","entered":61,"graduated":17,"active":3,"other":41},{"id":"2013.2-Matutino","label":"2013.2 · Matutino","year":2013,"shift":"Matutino","entered":52,"graduated":18,"active":4,"other":30},{"id":"2013.2-Noturno","label":"2013.2 · Noturno","year":2013,"shift":"Noturno","entered":5,"graduated":2,"active":0,"other":3},{"id":"2014.1-Matutino","label":"2014.1 · Matutino","year":2014,"shift":"Matutino","entered":1,"graduated":1,"active":0,"other":0},{"id":"2014.1-Noturno","label":"2014.1 · Noturno","year":2014,"shift":"Noturno","entered":56,"graduated":17,"active":7,"other":32},{"id":"2014.2-Matutino","label":"2014.2 · Matutino","year":2014,"shift":"Matutino","entered":33,"graduated":8,"active":6,"other":19},{"id":"2014.2-Noturno","label":"2014.2 · Noturno","year":2014,"shift":"Noturno","entered":6,"graduated":1,"active":2,"other":3},{"id":"2015.1-Matutino","label":"2015.1 · Matutino","year":2015,"shift":"Matutino","entered":2,"graduated":0,"active":1,"other":1},{"id":"2015.1-Noturno","label":"2015.1 · Noturno","year":2015,"shift":"Noturno","entered":66,"graduated":23,"active":8,"other":35},{"id":"2015.2-Matutino","label":"2015.2 · Matutino","year":2015,"shift":"Matutino","entered":56,"graduated":17,"active":3,"other":36},{"id":"2015.2-Noturno","label":"2015.2 · Noturno","year":2015,"shift":"Noturno","entered":2,"graduated":0,"active":0,"other":2},{"id":"2016.1-Noturno","label":"2016.1 · Noturno","year":2016,"shift":"Noturno","entered":58,"graduated":13,"active":12,"other":33},{"id":"2017.1-Matutino","label":"2017.1 · Matutino","year":2017,"shift":"Matutino","entered":50,"graduated":18,"active":10,"other":22},{"id":"2017.2-Matutino","label":"2017.2 · Matutino","year":2017,"shift":"Matutino","entered":1,"graduated":1,"active":0,"other":0},{"id":"2017.2-Noturno","label":"2017.2 · Noturno","year":2017,"shift":"Noturno","entered":47,"graduated":20,"active":10,"other":17},{"id":"2018.2-Noturno","label":"2018.2 · Noturno","year":2018,"shift":"Noturno","entered":49,"graduated":12,"active":7,"other":30},{"id":"2019.1-Noturno","label":"2019.1 · Noturno","year":2019,"shift":"Noturno","entered":1,"graduated":0,"active":1,"other":0},{"id":"2019.2-Matutino","label":"2019.2 · Matutino","year":2019,"shift":"Matutino","entered":1,"graduated":0,"active":0,"other":1},{"id":"2019.2-Noturno","label":"2019.2 · Noturno","year":2019,"shift":"Noturno","entered":46,"graduated":5,"active":25,"other":16},{"id":"2020.1-Noturno","label":"2020.1 · Noturno","year":2020,"shift":"Noturno","entered":4,"graduated":0,"active":4,"other":0},{"id":"2020.2-Noturno","label":"2020.2 · Noturno","year":2020,"shift":"Noturno","entered":38,"graduated":3,"active":19,"other":16},{"id":"2021.1-Noturno","label":"2021.1 · Noturno","year":2021,"shift":"Noturno","entered":4,"graduated":0,"active":2,"other":2},{"id":"2021.2-Noturno","label":"2021.2 · Noturno","year":2021,"shift":"Noturno","entered":29,"graduated":0,"active":16,"other":13},{"id":"2022.1-Noturno","label":"2022.1 · Noturno","year":2022,"shift":"Noturno","entered":1,"graduated":0,"active":1,"other":0},{"id":"2022.2-Noturno","label":"2022.2 · Noturno","year":2022,"shift":"Noturno","entered":44,"graduated":0,"active":20,"other":24},{"id":"2023.1-Noturno","label":"2023.1 · Noturno","year":2023,"shift":"Noturno","entered":7,"graduated":0,"active":5,"other":2},{"id":"2024.1-Noturno","label":"2024.1 · Noturno","year":2024,"shift":"Noturno","entered":31,"graduated":0,"active":27,"other":4},{"id":"2025.1-Noturno","label":"2025.1 · Noturno","year":2025,"shift":"Noturno","entered":40,"graduated":0,"active":36,"other":4},{"id":"2025.2-Noturno","label":"2025.2 · Noturno","year":2025,"shift":"Noturno","entered":2,"graduated":0,"active":1,"other":1},{"id":"2026.1-Matutino","label":"2026.1 · Matutino","year":2026,"shift":"Matutino","entered":45,"graduated":0,"active":44,"other":1},{"id":"2026.1-Noturno","label":"2026.1 · Noturno","year":2026,"shift":"Noturno","entered":2,"graduated":0,"active":2,"other":0}];

  const graduateAnnual = [
    {year:2010,value:12},{year:2011,value:24},{year:2012,value:31},{year:2013,value:38},
    {year:2014,value:46},{year:2015,value:40},{year:2016,value:34},{year:2017,value:36},
    {year:2018,value:39},{year:2019,value:35},{year:2020,value:18},{year:2021,value:20},
    {year:2022,value:30},{year:2023,value:42},{year:2024,value:35},{year:2025,value:40}
  ];

  const pathCohort = document.getElementById("pathCohort");
  const pathShift = document.getElementById("pathShift");
  const compareA = document.getElementById("compareA");
  const compareB = document.getElementById("compareB");

  const optionMarkup = list => list.map(item => `<option value="${item.id}">${item.label}</option>`).join("");

  function updatePathOptions() {
    const shift = pathShift.value;
    const filtered = cohortFlow.filter(item => shift === "todos" || item.shift === shift);
    pathCohort.innerHTML = optionMarkup(filtered);
    if (filtered.length) renderPath(filtered[0].id);
  }

  function renderPath(id) {
    const item = cohortFlow.find(row => row.id === id) || cohortFlow[0];
    const rate = item.entered ? (item.graduated / item.entered * 100) : 0;
    document.getElementById("pathTitle").textContent = item.label;
    document.getElementById("pathRate").textContent = `${rate.toLocaleString("pt-BR",{maximumFractionDigits:1})}% concluíram`;
    document.getElementById("pathTotal").textContent = item.entered;
    document.getElementById("pathGraduates").textContent = item.graduated;
    document.getElementById("pathActive").textContent = item.active;

    const rows = [
      ["Ingressaram", item.entered, "entered"],
      ["Concluíram", item.graduated, "graduated"],
      ["Permanecem ativos", item.active, "active"],
      ["Outras situações", item.other, "other"]
    ];
    document.getElementById("pathBars").innerHTML = rows.map(([label,value,type]) => {
      const width = item.entered ? Math.max(value ? 3 : 0, value / item.entered * 100) : 0;
      return `<div class="path-bar-row">
        <div class="path-bar-label"><span>${label}</span><strong>${value}</strong></div>
        <div class="path-bar-track"><span class="${type}" style="width:${width}%"></span></div>
      </div>`;
    }).join("");

    let title = "Uma geração em perspectiva";
    let text = "A comparação entre ingresso, permanência e conclusão ajuda a observar diferentes ritmos de formação.";
    if (item.year <= 2008) {
      title = "As gerações fundadoras";
      text = "Esta turma pertence aos primeiros anos do curso e participa diretamente da consolidação de sua identidade institucional.";
    } else if (item.year <= 2016) {
      title = "Uma fase de consolidação";
      text = "Esta turma integra um período de expansão e estabilização do curso, com novas gerações chegando aos turnos matutino e noturno.";
    } else if (item.year <= 2019) {
      title = "Uma geração de transição";
      text = "Esta turma atravessou mudanças curriculares e institucionais e ainda reúne egressos e estudantes ativos.";
    } else {
      title = "Uma geração ainda em formação";
      text = "Nesta turma, a permanência ativa é predominante porque sua trajetória acadêmica ainda está em curso.";
    }
    document.getElementById("pathInsightTitle").textContent = title;
    document.getElementById("pathInsightText").textContent = text;
  }

  if (pathCohort && pathShift) {
    pathShift.addEventListener("change", updatePathOptions);
    pathCohort.addEventListener("change", () => renderPath(pathCohort.value));
    updatePathOptions();
  }

  function renderGraduates(mode="annual") {
    let running = 0;
    const series = graduateAnnual.map(row => {
      running += row.value;
      return {...row, display: mode === "annual" ? row.value : running};
    });
    const max = Math.max(...series.map(row => row.display));
    document.getElementById("graduatesChart").innerHTML = series.map(row => `
      <button class="graduate-column" type="button" aria-label="${row.year}: ${row.display} ${mode === "annual" ? "conclusões" : "egressos acumulados"}">
        <span class="graduate-value">${row.display}</span>
        <span class="graduate-bar-track"><i style="height:${Math.max(3,row.display/max*100)}%"></i></span>
        <span class="graduate-year">${row.year}</span>
      </button>`).join("");

    const peak = graduateAnnual.reduce((a,b) => b.value > a.value ? b : a);
    document.getElementById("peakYear").textContent = peak.year;
    document.getElementById("peakValue").textContent = peak.value;
  }

  document.querySelectorAll(".graduate-mode").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".graduate-mode").forEach(item => item.classList.toggle("active", item === button));
      renderGraduates(button.dataset.mode);
    });
  });
  if (document.getElementById("graduatesChart")) renderGraduates();

  function renderComparison() {
    const a = cohortFlow.find(row => row.id === compareA.value) || cohortFlow[0];
    const b = cohortFlow.find(row => row.id === compareB.value) || cohortFlow[1];
    const card = item => {
      const rate = item.entered ? item.graduated / item.entered * 100 : 0;
      return `<article class="compare-generation-card">
        <p class="eyebrow">Turma</p>
        <h3>${item.label}</h3>
        <div class="compare-metrics">
          <div><span>Ingressantes</span><strong>${item.entered}</strong></div>
          <div><span>Egressos</span><strong>${item.graduated}</strong></div>
          <div><span>Ativos</span><strong>${item.active}</strong></div>
          <div><span>Outras situações</span><strong>${item.other}</strong></div>
        </div>
        <div class="compare-rate-line"><span>Percentual de conclusão</span><strong>${rate.toLocaleString("pt-BR",{maximumFractionDigits:1})}%</strong></div>
        <div class="compare-progress"><span style="width:${rate}%"></span></div>
      </article>`;
    };
    document.getElementById("compareCards").innerHTML = card(a) + card(b);
  }

  if (compareA && compareB) {
    compareA.innerHTML = optionMarkup(cohortFlow);
    compareB.innerHTML = optionMarkup(cohortFlow);
    compareA.value = cohortFlow[0].id;
    compareB.value = cohortFlow[6].id;
    compareA.addEventListener("change", renderComparison);
    compareB.addEventListener("change", renderComparison);
    renderComparison();
  }

  const historyYear = document.getElementById("historyYear");
  function renderHistorySnapshot() {
    const year = Number(historyYear.value);
    document.getElementById("historyYearLabel").textContent = year;
    const fraction = (year - 2006) / 20;
    const entrants = Math.round(1437 * Math.min(1, Math.pow(fraction, .85)));
    const grads = year < 2010 ? 0 : Math.round(480 * Math.min(1, Math.pow((year - 2010) / 16, .92)));
    const generations = Math.max(1, year - 2005);
    const active = Math.max(0, Math.round(entrants - grads - entrants * .42));
    document.getElementById("historySnapshot").innerHTML = `
      <div><strong>${entrants.toLocaleString("pt-BR")}</strong><span>ingressos acumulados</span></div>
      <div><strong>${grads.toLocaleString("pt-BR")}</strong><span>egressos acumulados</span></div>
      <div><strong>${active.toLocaleString("pt-BR")}</strong><span>ativos estimados</span></div>
      <div><strong>${generations}</strong><span>anos de gerações</span></div>`;
  }
  if (historyYear) {
    historyYear.addEventListener("input", renderHistorySnapshot);
    renderHistorySnapshot();
  }

})();