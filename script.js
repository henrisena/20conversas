
document.querySelectorAll(".menu-button").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".menu").classList.toggle("open")));
const mapData=[
  {
    "id": "alfredo-atual",
    "titulo": "Professor da rede estadual e doutorando em História",
    "categoria": "egressos",
    "nome": "Alfredo Pinto da Silva Júnior",
    "cidade": "Cachoeira",
    "local": "SEC-BA e PPGH/UFBA",
    "ano": 2026,
    "periodo": "2008–atual",
    "lat": -12.6016,
    "lng": -38.9658,
    "imagem": "assets/alfredo-jornada-pedagogica.jpeg",
    "pageImagem": "../assets/alfredo-jornada-pedagogica.jpeg",
    "pagina": "egresso-alfredo-pinto.html",
    "descricao": "Egresso da turma que concluiu o curso em 2011.2. Atua como professor da rede estadual e cursa doutorado em História na UFBA.",
    "fonte": "Informações e fotografias enviadas e autorizadas por Alfredo Pinto da Silva Júnior."
  },
  {
    "id": "alfredo-2013",
    "titulo": "Qualificação do mestrado",
    "categoria": "egressos",
    "nome": "Alfredo Pinto da Silva Júnior",
    "cidade": "Salvador",
    "local": "Universidade Federal da Bahia (UFBA)",
    "ano": 2013,
    "periodo": "2013",
    "lat": -13.0018,
    "lng": -38.5087,
    "imagem": "assets/alfredo-qualificacao.jpg",
    "pageImagem": "../assets/alfredo-qualificacao.jpg",
    "pagina": "egresso-alfredo-pinto.html",
    "descricao": "Celebração da qualificação do mestrado com colegas e amigos da UFRB.",
    "fonte": "Informações e fotografia enviadas e autorizadas pelo egresso."
  },
  {
    "id": "alfredo-2025",
    "titulo": "II Fórum Internacional Indígenas no Trabalho",
    "categoria": "egressos",
    "nome": "Alfredo Pinto da Silva Júnior",
    "cidade": "Salvador",
    "local": "UNEB, Campus I",
    "ano": 2025,
    "periodo": "2025",
    "lat": -12.9527,
    "lng": -38.4594,
    "imagem": "assets/alfredo-forum-indigenas.jpg",
    "pageImagem": "../assets/alfredo-forum-indigenas.jpg",
    "pagina": "egresso-alfredo-pinto.html",
    "descricao": "Participação no fórum ao lado de Fabrício Lyrio e Solon Santos.",
    "fonte": "Informações e fotografia enviadas e autorizadas pelo egresso."
  },
  {
    "id": "alfredo-2026",
    "titulo": "Jornada Pedagógica e educação antirracista",
    "categoria": "egressos",
    "nome": "Alfredo Pinto da Silva Júnior",
    "cidade": "Cachoeira",
    "local": "Colégio Estadual da Cachoeira",
    "ano": 2026,
    "periodo": "2026",
    "lat": -12.6012,
    "lng": -38.9665,
    "imagem": "assets/alfredo-fred-igor.jpeg",
    "pageImagem": "../assets/alfredo-fred-igor.jpeg",
    "pagina": "egresso-alfredo-pinto.html",
    "descricao": "Oficina sobre o Plano Municipal de Educação Antirracista de Cachoeira e reencontro com o colega de graduação Fred Igor.",
    "fonte": "Informações e fotografia enviadas e autorizadas pelo egresso."
  },
  {
    "id": "leila-atual",
    "titulo": "Professora de História na educação pública",
    "categoria": "egressos",
    "nome": "Leila Maria de Jesus Pereira",
    "cidade": "Sapeaçu",
    "local": "Escola Moisés Alves",
    "ano": 2026,
    "periodo": "2024–atual",
    "lat": -12.72944,
    "lng": -39.18623,
    "imagem": "assets/egressos/leila/leila-atual.jpg",
    "pageImagem": "../assets/egressos/leila/leila-atual.jpg",
    "pagina": "egresso-leila-maria.html",
    "descricao": "Atua como professora na Escola Moisés Alves, em Sapeaçu. Este registro representa sua atuação profissional atual.",
    "fonte": "Informações e fotografia enviadas e autorizadas por Leila Maria de Jesus Pereira."
  },
  {
    "id": "leila-2019-uefs",
    "titulo": "Ingresso no mestrado em História Social",
    "categoria": "egressos",
    "nome": "Leila Maria de Jesus Pereira",
    "cidade": "Feira de Santana",
    "local": "Universidade Estadual de Feira de Santana (UEFS)",
    "ano": 2019,
    "periodo": "2019",
    "lat": -12.19997,
    "lng": -38.97115,
    "pagina": "egresso-leila-maria.html",
    "descricao": "Ingresso no mestrado em História Social da Universidade Estadual de Feira de Santana.",
    "fonte": "Informação enviada e autorizada pela egressa."
  },
  {
    "id": "leila-2019-sapeacu",
    "titulo": "Início da docência em História",
    "categoria": "egressos",
    "nome": "Leila Maria de Jesus Pereira",
    "cidade": "Sapeaçu",
    "local": "Cursinho popular e rede municipal",
    "ano": 2019,
    "periodo": "2019",
    "lat": -12.72944,
    "lng": -39.18623,
    "imagem": "assets/egressos/leila/momento-2019-sapeacu.jpg",
    "pageImagem": "../assets/egressos/leila/momento-2019-sapeacu.jpg",
    "pagina": "egresso-leila-maria.html",
    "descricao": "Começou a dar aulas de História no cursinho popular e na rede municipal de Sapeaçu.",
    "fonte": "Informações e fotografia enviadas e autorizadas pela egressa."
  },
  {
    "id": "leila-2024-posse",
    "titulo": "Posse como Professora de História efetiva",
    "categoria": "egressos",
    "nome": "Leila Maria de Jesus Pereira",
    "cidade": "Sapeaçu",
    "local": "Prefeitura Municipal de Sapeaçu",
    "ano": 2024,
    "periodo": "2024",
    "lat": -12.72944,
    "lng": -39.18623,
    "imagem": "assets/egressos/leila/momento-2024-posse.jpg",
    "pageImagem": "../assets/egressos/leila/momento-2024-posse.jpg",
    "pagina": "egresso-leila-maria.html",
    "descricao": "Tomada de posse no cargo de Professora de História efetiva da Prefeitura Municipal de Sapeaçu.",
    "fonte": "Informações e fotografia enviadas e autorizadas pela egressa."
  },
  {
    "id": "viviane-atual",
    "titulo": "Atuação atual",
    "categoria": "egressos",
    "nome": "Viviane dos Santos Silva",
    "cidade": "Muritiba",
    "local": "Escola Alcides Almeida",
    "ano": 2026,
    "periodo": "atual",
    "lat": -12.9167,
    "lng": -39.25,
    "imagem": "assets/egressos/viviane/atual-viviane.jpg",
    "pageImagem": "../assets/egressos/viviane/atual-viviane.jpg",
    "pagina": "egresso-viviane-santos-silva.html",
    "descricao": "Servidora pública vinculada à Escola Alcides Almeida, em Muritiba.",
    "fonte": "Informações e fotografia autorizadas por Viviane dos Santos Silva."
  },
  {
    "id": "viviane-2023-mestrado",
    "titulo": "Mestrado em História — UNEB Campus V",
    "categoria": "egressos",
    "nome": "Viviane dos Santos Silva",
    "cidade": "Santo Antônio de Jesus",
    "local": "UNEB Campus V",
    "ano": 2023,
    "periodo": "2021–2023",
    "lat": -12.9683,
    "lng": -39.2619,
    "imagem": "assets/egressos/viviane/trajetoria-mestrado-uneb.jpg",
    "pageImagem": "../assets/egressos/viviane/trajetoria-mestrado-uneb.jpg",
    "pagina": "egresso-viviane-santos-silva.html",
    "descricao": "Mestrado em História no Campus V da UNEB; fotografia da defesa.",
    "fonte": "Informações e fotografia fornecidas por Viviane dos Santos Silva."
  },
  {
    "id": "viviane-2023-sacramentinas",
    "titulo": "Atuação docente no Colégio Sacramentinas",
    "categoria": "egressos",
    "nome": "Viviane dos Santos Silva",
    "cidade": "Cachoeira",
    "local": "Colégio Sacramentinas",
    "ano": 2023,
    "periodo": "2023",
    "lat": -12.6014,
    "lng": -38.9659,
    "imagem": "assets/egressos/viviane/trajetoria-sacramentinas-2023.jpg",
    "pageImagem": "../assets/egressos/viviane/trajetoria-sacramentinas-2023.jpg",
    "pagina": "egresso-viviane-santos-silva.html",
    "descricao": "Atuação docente no Colégio Sacramentinas, em Cachoeira.",
    "fonte": "Informações e fotografia fornecidas por Viviane dos Santos Silva."
  },
  {
    "id": "viviane-2024-eja",
    "titulo": "Atuação na EJA",
    "categoria": "egressos",
    "nome": "Viviane dos Santos Silva",
    "cidade": "Muritiba",
    "local": "Escola Alcides Almeida",
    "ano": 2024,
    "periodo": "2024",
    "lat": -12.9167,
    "lng": -39.25,
    "imagem": "assets/egressos/viviane/trajetoria-eja-2024.jpg",
    "pageImagem": "../assets/egressos/viviane/trajetoria-eja-2024.jpg",
    "pagina": "egresso-viviane-santos-silva.html",
    "descricao": "Atuação na Educação de Jovens e Adultos, vinculada à Escola Alcides Almeida, em Muritiba.",
    "fonte": "Informações e fotografia fornecidas por Viviane dos Santos Silva."
  },
  {
    "id": "viviane-2025-campo",
    "titulo": "Aula de campo",
    "categoria": "egressos",
    "nome": "Viviane dos Santos Silva",
    "cidade": "Cachoeira",
    "local": "Cachoeira",
    "ano": 2025,
    "periodo": "2025",
    "lat": -12.6014,
    "lng": -38.9659,
    "imagem": "assets/egressos/viviane/trajetoria-aula-campo-2025.jpg",
    "pageImagem": "../assets/egressos/viviane/trajetoria-aula-campo-2025.jpg",
    "pagina": "egresso-viviane-santos-silva.html",
    "descricao": "Aula de campo realizada em Cachoeira com estudantes da Escola Alcides Almeida, de Muritiba.",
    "fonte": "Informações e fotografia fornecidas por Viviane dos Santos Silva."
  }
];
function letterFor(cat){return {ensino:"E",pesquisa:"P",extensao:"X",egressos:"G",professores:"D"}[cat]||"•"}
function iconFor(item){return L.divIcon({className:"leaflet-marker-icon",html:`<div class="pin ${item.categoria}"><span>${letterFor(item.categoria)}</span></div>`,iconSize:[34,34],iconAnchor:[17,34]})}
function initHomeMap(){if(!document.getElementById("homeMap")||typeof L==="undefined")return;const map=L.map("homeMap",{zoomControl:false,scrollWheelZoom:false}).setView([-12.56,-38.93],9);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:""}).addTo(map);mapData.forEach(i=>L.marker([i.lat,i.lng],{icon:iconFor(i)}).addTo(map).bindPopup(`<b>${i.titulo}</b><br>${i.cidade}`))}
function detailHTML(i){return `<img class="map-detail-image" src="${i.pageImagem||i.imagem}" alt="${i.titulo}"><span class="tag">${i.categoria}</span><h2>${i.nome||i.titulo}</h2><p><strong>${i.titulo}</strong></p><p><strong>Cidade:</strong> ${i.cidade}</p><p><strong>Local:</strong> ${i.local}</p><p><strong>Período:</strong> ${i.periodo}</p><p>${i.descricao}</p><p><strong>Fonte:</strong> ${i.fonte}</p><a class="button-outline" href="${i.pagina||'egressa-juliana.html'}">Abrir página completa</a>`}
function initFullMap(){if(!document.getElementById("mapFull")||typeof L==="undefined")return;let active="todos",year=2026;const map=L.map("mapFull",{scrollWheelZoom:false}).setView([-12.56,-38.93],9);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap"}).addTo(map);const layer=L.layerGroup().addTo(map),detail=document.getElementById("mapDetail");function render(){layer.clearLayers();const items=mapData.filter(i=>(active==="todos"||i.categoria===active)&&i.ano<=year);items.forEach(i=>{const m=L.marker([i.lat,i.lng],{icon:iconFor(i)}).addTo(layer).bindPopup(`<b>${i.titulo}</b><br>${i.cidade}`);m.on("click",()=>detail.innerHTML=detailHTML(i))});if(items.length)map.fitBounds(L.latLngBounds(items.map(i=>[i.lat,i.lng])),{padding:[40,40],maxZoom:10})}document.querySelectorAll(".filter-btn").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.filter;render()}));const range=document.getElementById("yearRange"),lab=document.getElementById("yearLabel");if(range)range.addEventListener("input",()=>{year=Number(range.value);lab.textContent=year;render()});render();detail.innerHTML=detailHTML(mapData[0])}

// Versão 26 — carrosséis automáticos da página inicial
(function(){
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.auto-carousel').forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll(':scope > img'));
    if (slides.length < 2) return;
    let index = Math.max(0, slides.findIndex(slide => slide.classList.contains('active')));
    let timer = null;
    const interval = Number(carousel.dataset.interval) || 4000;
    const show = next => {
      slides[index].classList.remove('active');
      index = (next + slides.length) % slides.length;
      slides[index].classList.add('active');
    };
    const start = () => {
      if (reduced || timer) return;
      timer = window.setInterval(() => show(index + 1), interval);
    };
    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);
    start();
  });

  document.querySelectorAll('.wide-carousel').forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll('.wide-slide'));
    const dotsWrap = carousel.querySelector('.wide-carousel-dots');
    const prev = carousel.querySelector('.wide-carousel-button.prev');
    const next = carousel.querySelector('.wide-carousel-button.next');
    if (slides.length < 2 || !dotsWrap) return;
    let index = Math.max(0, slides.findIndex(slide => slide.classList.contains('active')));
    let timer = null;
    const interval = Number(carousel.dataset.interval) || 6500;
    const dots = slides.map((slide, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Mostrar slide ${i + 1}`);
      button.addEventListener('click', () => { show(i); restart(); });
      dotsWrap.appendChild(button);
      return button;
    });
    const show = nextIndex => {
      slides[index].classList.remove('active');
      dots[index].classList.remove('active');
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    };
    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };
    const start = () => {
      if (reduced || timer) return;
      timer = window.setInterval(() => show(index + 1), interval);
    };
    const restart = () => { stop(); start(); };
    dots[index].classList.add('active');
    prev && prev.addEventListener('click', () => { show(index - 1); restart(); });
    next && next.addEventListener('click', () => { show(index + 1); restart(); });
    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', start);
    start();
  });
})();

// Links dos formulários: substituir os hrefs no HTML quando os endereços definitivos forem fornecidos.
document.querySelectorAll('[data-form-link][href="#"]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});

// Versão 30 — mapa resumido dos egressos na página inicial
function initHomeEgressMap(){
  const el=document.getElementById('homeEgressMap');
  if(!el||typeof L==='undefined')return;
  const items=mapData.filter(item=>item.categoria==='egressos');
  const map=L.map(el,{scrollWheelZoom:false,zoomControl:true}).setView([-12.62,-38.86],8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; OpenStreetMap'
  }).addTo(map);
  items.forEach(item=>{
    L.marker([item.lat,item.lng],{icon:iconFor(item)})
      .addTo(map)
      .bindPopup(`<b>${item.nome||item.titulo}</b><br>${item.cidade}<br>${item.local}`);
  });
  if(items.length){
    map.fitBounds(L.latLngBounds(items.map(item=>[item.lat,item.lng])),{padding:[45,45],maxZoom:9});
  }
  setTimeout(()=>map.invalidateSize(),100);
}

document.addEventListener('DOMContentLoaded',initHomeEgressMap);


// Versão 32 — abertura das fotografias da galeria com descrição
(function(){
  const modal=document.getElementById('galleryModal');
  if(!modal)return;
  const items=Array.from(document.querySelectorAll('.gallery-item'));
  const image=document.getElementById('galleryModalImage');
  const title=document.getElementById('galleryModalTitle');
  const description=document.getElementById('galleryModalDescription');
  let current=0;
  const show=index=>{
    current=(index+items.length)%items.length;
    const item=items[current];
    const thumb=item.querySelector('img');
    image.src=thumb.src;
    image.alt=thumb.alt;
    title.textContent=item.dataset.title||thumb.alt;
    description.textContent=item.dataset.description||'';
    modal.hidden=false;
    document.body.classList.add('gallery-modal-open');
    modal.querySelector('.gallery-modal-close').focus();
  };
  const close=()=>{modal.hidden=true;document.body.classList.remove('gallery-modal-open');items[current]&&items[current].focus();};
  items.forEach((item,index)=>item.addEventListener('click',()=>show(index)));
  modal.querySelectorAll('[data-gallery-close]').forEach(el=>el.addEventListener('click',close));
  modal.querySelector('.gallery-modal-nav.prev').addEventListener('click',()=>show(current-1));
  modal.querySelector('.gallery-modal-nav.next').addEventListener('click',()=>show(current+1));
  document.addEventListener('keydown',event=>{
    if(modal.hidden)return;
    if(event.key==='Escape')close();
    if(event.key==='ArrowLeft')show(current-1);
    if(event.key==='ArrowRight')show(current+1);
  });
})();


/* Base única da produção docente — embutida para evitar falha de carregamento no GitHub Pages. */
window.PRODUCAO_DOCENTES = [
  {
    "slug": "bimba-pastinha-besouro",
    "titulo": "Bimba, Pastinha e Besouro de Mangangá",
    "subtitulo": "três personagens da capoeira baiana",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor"
    },
    "tipo": "Livro",
    "ano": "2002",
    "editora": "UNITINS / Grafset",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "Estudo sobre personagens centrais da história da capoeira baiana.",
    "temas": [
      "Capoeira",
      "Bahia",
      "Cultura negra"
    ],
    "imagem": "../assets/producao/capas/bimba-pastinha-besouro.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "capoeira-bahia-todos-santos",
    "titulo": "A capoeira na Bahia de Todos os Santos",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor"
    },
    "tipo": "Livro",
    "ano": "2005",
    "editora": "Grafset",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Capoeira",
      "Bahia",
      "Cultura popular"
    ],
    "imagem": "../assets/producao/capas/capoeira-bahia-todos-santos.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "associacoes-homens-cor",
    "titulo": "As Associações de Homens de Cor e a Imprensa Negra Paulista",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor"
    },
    "tipo": "Livro",
    "ano": "2006",
    "editora": "Daliana / MEC",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Imprensa negra",
      "Associativismo",
      "Pós-abolição"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "culturas-circulares",
    "titulo": "Culturas Circulares",
    "subtitulo": "A formação histórica da capoeira contemporânea",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor"
    },
    "tipo": "Livro",
    "ano": "2010",
    "editora": "Editora Progressiva",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Capoeira",
      "Cultura",
      "História social"
    ],
    "imagem": "../assets/producao/capas/culturas-circulares.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "memorias-resistencias-negras",
    "titulo": "Memórias de resistências negras",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor"
    },
    "tipo": "Livro",
    "ano": "2015",
    "editora": "Fundação Cultural Palmares",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Resistência negra",
      "Memória",
      "História negra"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "reconcavo-olhar-jomar",
    "titulo": "O Recôncavo no Olhar de Jomar Lima",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Organizador"
    },
    "tipo": "Livro",
    "ano": "2015",
    "editora": "UFRB / Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Recôncavo",
      "Fotografia",
      "Memória"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "da-escravidao-liberdade",
    "titulo": "Da escravidão e da liberdade",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires",
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Organizador",
      "Walter da Silva Fraga Filho": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "UFRB / Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Escravidão",
      "Liberdade",
      "Pós-abolição"
    ],
    "imagem": "../assets/producao/capas/da-escravidao-liberdade.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "territorios-gente-negra",
    "titulo": "Territórios de Gente Negra",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Organizador"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "UFRB / Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Território",
      "População negra",
      "Recôncavo"
    ],
    "imagem": "../assets/producao/capas/territorios-gente-negra.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "atlantico-de-dor",
    "titulo": "Atlântico de Dor",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Organizador"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "UFRB / Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Atlântico",
      "Escravidão",
      "Diáspora"
    ],
    "imagem": "../assets/producao/capas/atlantico-de-dor.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "capoeira-multiplos-olhares",
    "titulo": "Capoeira em Múltiplos Olhares",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Organizador e autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "Fino Traço / EDUFBA",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Capoeira",
      "Cultura afro-brasileira"
    ],
    "imagem": "../assets/producao/capas/capoeira-multiplos-olhares.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "vidas-impressas",
    "titulo": "Vidas impressas",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "Selo Negro / Summus",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Biografia",
      "História negra"
    ],
    "imagem": "../assets/producao/capas/vidas-impressas.jpg?v=4",
    "observacao": "Dados editoriais complementares em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "mulheres-negras-brasil",
    "titulo": "Mulheres negras no Brasil escravista e do pós-emancipação",
    "subtitulo": "",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires",
      "Isabel Cristina Ferreira dos Reis"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor de capítulo",
      "Isabel Cristina Ferreira dos Reis": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "Selo Negro / Summus",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Mulheres negras",
      "Escravidão",
      "Pós-emancipação"
    ],
    "imagem": "../assets/producao/capas/mulheres-negras-brasil.jpg?v=4",
    "observacao": "Dados do capítulo e da edição em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "dicionario-escravidao-liberdade",
    "titulo": "Dicionário da escravidão e liberdade",
    "subtitulo": "50 textos críticos",
    "docentes": [
      "Antonio Liberac Cardoso Simões Pires",
      "Isabel Cristina Ferreira dos Reis",
      "Luciana da Cruz Brito",
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Antonio Liberac Cardoso Simões Pires": "Autor de verbete/capítulo",
      "Isabel Cristina Ferreira dos Reis": "Autor de verbete/capítulo",
      "Luciana da Cruz Brito": "Autor de verbete/capítulo",
      "Walter da Silva Fraga Filho": "Autor de verbete/capítulo"
    },
    "tipo": "Livro",
    "ano": "2018",
    "editora": "Companhia das Letras",
    "isbn": "978-85-359-3094-8",
    "paginas": "496",
    "link": "https://www.companhiadasletras.com.br/livro/9788535930948/dicionario-da-escravidao-e-liberdade",
    "resumo": "Coletânea de referência sobre escravidão, liberdade e pós-abolição no Brasil.",
    "temas": [
      "Escravidão",
      "Liberdade",
      "Pós-abolição"
    ],
    "imagem": "../assets/producao/capas/dicionario-escravidao-liberdade.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "novas-historias-povos-indigenas",
    "titulo": "Novas Histórias dos Povos Indígenas no Brasil",
    "subtitulo": "territorialidades da escrita interdisciplinar indígena e não-indígena",
    "docentes": [
      "André de Almeida Rego"
    ],
    "participacoes": {
      "André de Almeida Rego": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2018",
    "editora": "Sagga",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Povos indígenas",
      "Território",
      "Historiografia"
    ],
    "imagem": "../assets/producao/capas/novas-historias-povos-indigenas.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "indios-historia-bahia",
    "titulo": "Os Índios na História da Bahia",
    "subtitulo": "",
    "docentes": [
      "Fabrício Lyrio Santos",
      "André de Almeida Rego"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Organizador",
      "André de Almeida Rego": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "EDUFRB / Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "https://www.finotracoeditora.com.br/os-indios-na-historia-da-bahia",
    "resumo": "",
    "temas": [
      "Povos indígenas",
      "Bahia",
      "Colonização"
    ],
    "imagem": "../assets/producao/capas/indios-historia-bahia.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "vila-ricas-festas",
    "titulo": "A Vila em Ricas Festas",
    "subtitulo": "Celebrações promovidas pela Câmara de Vila Rica (1711–1744)",
    "docentes": [
      "Camila Fernanda Guimarães Santiago"
    ],
    "participacoes": {
      "Camila Fernanda Guimarães Santiago": "Autora"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Festas",
      "Vila Rica",
      "Cultura política"
    ],
    "imagem": "../assets/producao/capas/vila-ricas-festas.jpg?v=2",
    "observacao": "Ano, editora e ISBN em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "igrejas-cachoeira",
    "titulo": "As igrejas de Cachoeira",
    "subtitulo": "história, arquitetura e ornamentação",
    "docentes": [
      "Camila Fernanda Guimarães Santiago"
    ],
    "participacoes": {
      "Camila Fernanda Guimarães Santiago": "Coautora"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "Clio Gestão Cultural e Editora",
    "isbn": "978-65-89378-01-3",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Cachoeira",
      "Patrimônio",
      "Arquitetura",
      "Arte sacra"
    ],
    "imagem": "../assets/producao/capas/igrejas-cachoeira.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "barroco-america-portuguesa",
    "titulo": "O Barroco na América Portuguesa",
    "subtitulo": "novos olhares",
    "docentes": [
      "Camila Fernanda Guimarães Santiago"
    ],
    "participacoes": {
      "Camila Fernanda Guimarães Santiago": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "2019",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "Inclui capítulo de Camila sobre a Ordem Terceira do Carmo de Cachoeira.",
    "temas": [
      "Barroco",
      "Arte sacra",
      "Cachoeira"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "Editora e ISBN em atualização.",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "republica-atenienses",
    "titulo": "A República dos Atenienses",
    "subtitulo": "Aristóteles",
    "docentes": [
      "Dênis Renan Corrêa"
    ],
    "participacoes": {
      "Dênis Renan Corrêa": "Tradução, introdução e notas"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "Madamu",
    "isbn": "978-65-86224-40-5",
    "paginas": "136",
    "link": "https://www.madamu.com.br/atenienses",
    "resumo": "",
    "temas": [
      "Grécia antiga",
      "Atenas",
      "Historiografia antiga"
    ],
    "imagem": "../assets/producao/capas/republica-atenienses.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "crises-staseis-metabolai",
    "titulo": "Crises (Staseis) and Changes (Metabolai)",
    "subtitulo": "Athenian Democracy in the Making",
    "docentes": [
      "Dênis Renan Corrêa"
    ],
    "participacoes": {
      "Dênis Renan Corrêa": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2022",
    "editora": "Firenze University Press",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Atenas",
      "Democracia",
      "Antiguidade"
    ],
    "imagem": "../assets/producao/capas/crises-staseis-metabolai.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "our-beloved-polites",
    "titulo": "Our Beloved Polites",
    "subtitulo": "Studies presented to P. J. Rhodes",
    "docentes": [
      "Dênis Renan Corrêa"
    ],
    "participacoes": {
      "Dênis Renan Corrêa": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2022",
    "editora": "Archaeopress",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Historiografia grega",
      "Heródoto",
      "Hecateu"
    ],
    "imagem": "../assets/producao/capas/our-beloved-polites.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "misinformation-greek-historiography",
    "titulo": "Misinformation, Disinformation, and Propaganda in Greek Historiography",
    "subtitulo": "",
    "docentes": [
      "Dênis Renan Corrêa"
    ],
    "participacoes": {
      "Dênis Renan Corrêa": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2024",
    "editora": "Bloomsbury",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Historiografia grega",
      "Informação",
      "Propaganda"
    ],
    "imagem": "../assets/producao/capas/misinformation-greek-historiography.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "problemas-historiografia-antiga-moderna",
    "titulo": "Problemas de historiografia antiga e moderna",
    "subtitulo": "",
    "docentes": [
      "Dênis Renan Corrêa"
    ],
    "participacoes": {
      "Dênis Renan Corrêa": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2024",
    "editora": "Milfontes",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Historiografia",
      "Antiguidade",
      "Tempo"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "catequese-civilizacao",
    "titulo": "Da catequese à civilização",
    "subtitulo": "colonização e povos indígenas na Bahia",
    "docentes": [
      "Fabrício Lyrio Santos"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Autor"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "EDUFRB",
    "isbn": "978-85-61346-67-6",
    "paginas": "288",
    "link": "https://www.ufrb.edu.br/editora/component/chronoforms5/?chronoform=ver-livro&id=9",
    "resumo": "",
    "temas": [
      "Povos indígenas",
      "Jesuítas",
      "Colonização",
      "Bahia"
    ],
    "imagem": "../assets/producao/capas/catequese-civilizacao.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "te-deum-laudamus",
    "titulo": "Te Deum laudamus",
    "subtitulo": "A expulsão dos jesuítas da Bahia (1758–1763)",
    "docentes": [
      "Fabrício Lyrio Santos"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Autor"
    },
    "tipo": "Livro",
    "ano": "2019",
    "editora": "Sagga",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Jesuítas",
      "Bahia",
      "Período pombalino"
    ],
    "imagem": "../assets/producao/capas/te-deum-laudamus.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "guerras-da-conquista",
    "titulo": "Guerras da conquista",
    "subtitulo": "Da invasão dos portugueses até os dias de hoje",
    "docentes": [
      "Fabrício Lyrio Santos"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Coautor"
    },
    "tipo": "Livro",
    "ano": "2021",
    "editora": "HarperCollins Brasil",
    "isbn": "978-65-5511-114-9",
    "paginas": "304",
    "link": "https://books.google.com/books/about/Guerras_da_conquista.html?id=ZUcdEAAAQBAJ",
    "resumo": "Obra de Felipe Milanez e Fabrício Lyrio Santos sobre as guerras de conquista, a invasão portuguesa e as resistências indígenas no Brasil.",
    "temas": [
      "Povos indígenas",
      "Colonização",
      "Conquista",
      "Resistência indígena",
      "Brasil"
    ],
    "imagem": "../assets/producao/capas/guerras-da-conquista.jpg?v=2",
    "observacao": "Coautoria com Felipe Milanez.",
    "capa_status": "local"
  },
  {
    "slug": "ensinar-historia-seculo-xxi",
    "titulo": "Ensinar História no Século XXI",
    "subtitulo": "Dilemas e perspectivas",
    "docentes": [
      "Fabrício Lyrio Santos",
      "Sérgio Armando Diniz Guerra Filho",
      "Leandro Antonio de Almeida"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Coorganizador",
      "Sérgio Armando Diniz Guerra Filho": "Coorganizador",
      "Leandro Antonio de Almeida": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2019",
    "editora": "EDUFRB",
    "isbn": "",
    "paginas": "",
    "link": "https://ri.ufrb.edu.br/jspui/bitstream/prefix/989/1/Ensinar_Historia_Seculo_Livro_2019.pdf",
    "resumo": "",
    "temas": [
      "Ensino de História",
      "Formação docente"
    ],
    "imagem": "../assets/producao/capas/ensinar-historia-seculo-xxi.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "fazer-historia-reconcavo",
    "titulo": "Fazer História no Recôncavo da Bahia",
    "subtitulo": "",
    "docentes": [
      "Fabrício Lyrio Santos",
      "Luciana da Cruz Brito",
      "Martha Rosa Figueira Queiroz",
      "Nuno Gonçalves Pereira",
      "Camila Fernanda Guimarães Santiago",
      "Solyane Silveira Lima",
      "Sérgio Armando Diniz Guerra Filho"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Coorganizador",
      "Luciana da Cruz Brito": "Coorganizadora",
      "Martha Rosa Figueira Queiroz": "Coorganizadora",
      "Nuno Gonçalves Pereira": "Coorganizador",
      "Camila Fernanda Guimarães Santiago": "Autora de capítulo",
      "Solyane Silveira Lima": "Autora de capítulo",
      "Sérgio Armando Diniz Guerra Filho": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2021",
    "editora": "EDUFRB",
    "isbn": "978-65-84508-02-6",
    "paginas": "182",
    "link": "https://www.ufrb.edu.br/editora/component/chronoforms5/?chronoform=ver-livro&id=142",
    "resumo": "",
    "temas": [
      "Recôncavo",
      "História",
      "Pesquisa",
      "Ensino"
    ],
    "imagem": "https://www1.ufrb.edu.br/editora/components/com_chronoforms5/chronoforms/uploads/livro/20210922135709_Fazer_histria.jpg",
    "observacao": "",
    "capa_status": "real"
  },
  {
    "slug": "diretorio-indios-america-portuguesa",
    "titulo": "O Diretório dos Índios na América Portuguesa",
    "subtitulo": "aplicações e adaptações (1757–1808)",
    "docentes": [
      "Fabrício Lyrio Santos"
    ],
    "participacoes": {
      "Fabrício Lyrio Santos": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2025",
    "editora": "EDUFBA",
    "isbn": "978-65-5630-763-3",
    "paginas": "489",
    "link": "https://edufba.ufba.br/livros-publicados/catalogo/o-diretorio-dos-indios-na-america-portuguesa-aplicacoes-e-adaptacoes-1757",
    "resumo": "",
    "temas": [
      "Diretório dos Índios",
      "Povos indígenas",
      "América Portuguesa",
      "Século XVIII"
    ],
    "imagem": "../assets/producao/capas/diretorio-indios-america-portuguesa.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "epistemologia-conflito",
    "titulo": "Epistemologia em Conflito",
    "subtitulo": "uma contribuição à história das Guerras da Ciência",
    "docentes": [
      "Gabriel da Costa Ávila"
    ],
    "participacoes": {
      "Gabriel da Costa Ávila": "Autor"
    },
    "tipo": "Livro",
    "ano": "2013",
    "editora": "Fino Traço",
    "isbn": "978-85-8054-112-0",
    "paginas": "104",
    "link": "",
    "resumo": "",
    "temas": [
      "História da ciência",
      "Epistemologia",
      "Guerras da Ciência"
    ],
    "imagem": "../assets/producao/capas/epistemologia-conflito.jpg?v=2",
    "observacao": "Livro derivado da dissertação de mestrado.",
    "capa_status": "local"
  },
  {
    "slug": "ciencia-objeto-historia",
    "titulo": "Ciência, objeto da História",
    "subtitulo": "",
    "docentes": [
      "Gabriel da Costa Ávila"
    ],
    "participacoes": {
      "Gabriel da Costa Ávila": "Autor"
    },
    "tipo": "Livro",
    "ano": "2019",
    "editora": "Alameda Editorial",
    "isbn": "978-85-7939-580-2",
    "paginas": "322",
    "link": "https://www.alamedaeditorial.com.br/historia/ciencia-objeto-historia-gabriel-costa-avila",
    "resumo": "",
    "temas": [
      "História da ciência",
      "Historiografia",
      "Epistemologia"
    ],
    "imagem": "../assets/producao/capas/ciencia-objeto-historia.jpg?v=2",
    "observacao": "Livro derivado da tese de doutorado.",
    "capa_status": "local"
  },
  {
    "slug": "sport-cidade-modernidade",
    "titulo": "Os sports e as cidades brasileiras",
    "subtitulo": "transição dos séculos XIX e XX",
    "docentes": [
      "Henrique Sena dos Santos"
    ],
    "participacoes": {
      "Henrique Sena dos Santos": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2010",
    "editora": "Apicuri",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "Henrique Sena dos Santos participa de capítulo dedicado a Salvador, em volume organizado por Victor Andrade de Melo.",
    "temas": [
      "Esporte",
      "Cidade",
      "Modernidade",
      "Salvador"
    ],
    "imagem": "../assets/producao/capas/sport-cidade-modernidade.jpg?v=2",
    "observacao": "Participação em capítulo; a capa corresponde ao livro coletivo.",
    "capa_status": "local"
  },
  {
    "slug": "pugnas-renhidas",
    "titulo": "Pugnas Renhidas",
    "subtitulo": "futebol, cultura e sociedade em Salvador (1901–1924)",
    "docentes": [
      "Henrique Sena dos Santos"
    ],
    "participacoes": {
      "Henrique Sena dos Santos": "Autor"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "EDUFBA",
    "isbn": "978-85-232-1289-2",
    "paginas": "396",
    "link": "https://cev.org.br/biblioteca/pugnas-renhidas-futebol-cultura-e-sociedade-em-salvador-1901-1924-colecao-e-futebol/",
    "resumo": "",
    "temas": [
      "Futebol",
      "Salvador",
      "Cultura urbana",
      "Imprensa",
      "Raça"
    ],
    "imagem": "../assets/pugnas-renhidas.jpg?v=2",
    "observacao": "",
    "capa_status": "real"
  },
  {
    "slug": "primordios-esporte-salvador",
    "titulo": "Primórdios do Esporte no Brasil: Salvador",
    "subtitulo": "",
    "docentes": [
      "Henrique Sena dos Santos"
    ],
    "participacoes": {
      "Henrique Sena dos Santos": "Coautor com Coriolano Pereira da Rocha Junior"
    },
    "tipo": "Livro",
    "ano": "2015",
    "editora": "Reggo",
    "isbn": "978-85-63651-67-9",
    "paginas": "",
    "link": "https://www.cev.org.br/biblioteca/primordios-do-esporte-no-brasil-salvador/",
    "resumo": "",
    "temas": [
      "Esporte",
      "Salvador",
      "Modernidade"
    ],
    "imagem": "https://cdn.awsli.com.br/600x700/765/765972/produto/35940453/f50b432207.jpg",
    "observacao": "",
    "capa_status": "real"
  },
  {
    "slug": "historias-vida-familiar-afetiva",
    "titulo": "Histórias de vida familiar e afetiva de escravos na Bahia do século XIX",
    "subtitulo": "",
    "docentes": [
      "Isabel Cristina Ferreira dos Reis"
    ],
    "participacoes": {
      "Isabel Cristina Ferreira dos Reis": "Autora"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "Centro de Estudos Baianos / UFBA",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Escravidão",
      "Família",
      "Afetividade",
      "Bahia"
    ],
    "imagem": "../assets/producao/capas/historias-vida-familiar-afetiva.jpg?v=2",
    "observacao": "Ano e demais dados editoriais em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "diaspora-africana-americas",
    "titulo": "Diáspora Africana nas Américas",
    "subtitulo": "",
    "docentes": [
      "Isabel Cristina Ferreira dos Reis"
    ],
    "participacoes": {
      "Isabel Cristina Ferreira dos Reis": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "Coleção UNIAFRO / UFRB-Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Diáspora africana",
      "Américas",
      "Escravidão"
    ],
    "imagem": "../assets/producao/capas/diaspora-africana-americas.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "bahia-ensaios-historia-social",
    "titulo": "Bahia: Ensaios de História Social e Ensino de História",
    "subtitulo": "",
    "docentes": [
      "Isabel Cristina Ferreira dos Reis",
      "Sérgio Armando Diniz Guerra Filho"
    ],
    "participacoes": {
      "Isabel Cristina Ferreira dos Reis": "Participação em coletânea",
      "Sérgio Armando Diniz Guerra Filho": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "EDUNEB",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Bahia",
      "História social",
      "Ensino de História"
    ],
    "imagem": "../assets/producao/capas/bahia-ensaios-historia-social.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "reflexoes-africa-contemporanea",
    "titulo": "Reflexões sobre a África Contemporânea",
    "subtitulo": "",
    "docentes": [
      "Juvenal de Carvalho Conceição"
    ],
    "participacoes": {
      "Juvenal de Carvalho Conceição": "Organizador"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "Coleção UNIAFRO / UFRB-Fino Traço",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "África",
      "História contemporânea",
      "Diáspora"
    ],
    "imagem": "../assets/producao/capas/reflexoes-africa-contemporanea.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "descolonizacao-conhecimento-afro",
    "titulo": "Descolonização do conhecimento no contexto afro-brasileiro",
    "subtitulo": "",
    "docentes": [
      "Juvenal de Carvalho Conceição"
    ],
    "participacoes": {
      "Juvenal de Carvalho Conceição": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Descolonização",
      "Conhecimento",
      "Afro-brasileiro"
    ],
    "imagem": "../assets/producao/capas/descolonizacao-conhecimento-afro.jpg?v=2",
    "observacao": "Dados editoriais em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "encruzilhadas-historia-educacao-diaspora",
    "titulo": "Encruzilhadas entre história e educação na diáspora",
    "subtitulo": "",
    "docentes": [
      "Juvenal de Carvalho Conceição",
      "Leandro Antonio de Almeida"
    ],
    "participacoes": {
      "Juvenal de Carvalho Conceição": "Coorganizador",
      "Leandro Antonio de Almeida": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "EDUFRB",
    "isbn": "978-65-87743-39-4",
    "paginas": "320",
    "link": "https://www.ufrb.edu.br/editora/component/chronoforms5/?chronoform=ver-livro&id=119",
    "resumo": "",
    "temas": [
      "Educação",
      "Diáspora",
      "História",
      "Relações étnico-raciais"
    ],
    "imagem": "../assets/producao/capas/encruzilhadas-historia-educacao-diaspora.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "nas-margens-tempo",
    "titulo": "Nas margens do tempo",
    "subtitulo": "histórias em construção",
    "docentes": [
      "Leandro Antonio de Almeida",
      "Nuno Gonçalves Pereira",
      "Antonio Liberac Cardoso Simões Pires"
    ],
    "participacoes": {
      "Leandro Antonio de Almeida": "Coorganizador",
      "Nuno Gonçalves Pereira": "Coorganizador",
      "Antonio Liberac Cardoso Simões Pires": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2010",
    "editora": "Editora Progressiva / Coleção UNIAFRO",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História",
      "Recôncavo",
      "Ensino"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "caminhos-lei-11645",
    "titulo": "Caminhos para a efetivação da Lei n.º 11.645/2008",
    "subtitulo": "",
    "docentes": [
      "Leandro Antonio de Almeida"
    ],
    "participacoes": {
      "Leandro Antonio de Almeida": "Organizador"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "Coleção UNIAFRO / NEAB-UFRB",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Lei 11.645/2008",
      "Ensino de História",
      "Povos indígenas",
      "História afro-brasileira"
    ],
    "imagem": "../assets/producao/capas/caminhos-lei-11645.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "professor-historia-produtor",
    "titulo": "O Professor de História como Produtor",
    "subtitulo": "experiências de elaboração de materiais didáticos de História — Recôncavo da Bahia (2014–2025)",
    "docentes": [
      "Leandro Antonio de Almeida"
    ],
    "participacoes": {
      "Leandro Antonio de Almeida": "Autor"
    },
    "tipo": "Livro",
    "ano": "2026",
    "editora": "Roda de Histórias",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Ensino de História",
      "Materiais didáticos",
      "Recôncavo"
    ],
    "imagem": "../assets/producao/capas/professor-historia-produtor.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "charuteiras-sala-aula",
    "titulo": "Charuteiras na sala de aula",
    "subtitulo": "experiência docente: histórias de vida das fumageiras de Cachoeira",
    "docentes": [
      "Leandro Antonio de Almeida"
    ],
    "participacoes": {
      "Leandro Antonio de Almeida": "Prefácio"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Charuteiras",
      "Cachoeira",
      "Ensino de História"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "Dados editoriais em atualização.",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "topicos-historia-negro",
    "titulo": "Tópicos sobre a história do negro na sociedade brasileira",
    "subtitulo": "",
    "docentes": [
      "Luciana da Cruz Brito"
    ],
    "participacoes": {
      "Luciana da Cruz Brito": "Autora"
    },
    "tipo": "Livro",
    "ano": "2011/2014",
    "editora": "NEPRE",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História negra",
      "Brasil",
      "Relações raciais"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "temores-africa",
    "titulo": "Temores da África",
    "subtitulo": "segurança, legislação e população africana na Bahia oitocentista",
    "docentes": [
      "Luciana da Cruz Brito"
    ],
    "participacoes": {
      "Luciana da Cruz Brito": "Autora"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "EDUFBA",
    "isbn": "978-85-232-1444-9",
    "paginas": "229",
    "link": "https://edufba.ufba.br/livros-publicados/temores-da-africa-seguranca-legislacao-e-populacao-africana-na-bahia-oitocentista",
    "resumo": "",
    "temas": [
      "Africanos",
      "Bahia",
      "Século XIX",
      "Legislação"
    ],
    "imagem": "../assets/producao/capas/temores-africa.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "ventres-livres",
    "titulo": "Ventres Livres?",
    "subtitulo": "Gênero, maternidade e legislação",
    "docentes": [
      "Luciana da Cruz Brito"
    ],
    "participacoes": {
      "Luciana da Cruz Brito": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2021",
    "editora": "Editora Unesp",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Gênero",
      "Maternidade",
      "Escravidão",
      "Legislação"
    ],
    "imagem": "../assets/producao/capas/ventres-livres.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "avesso-raca",
    "titulo": "O avesso da raça",
    "subtitulo": "escravidão, abolicionismo e racismo entre os Estados Unidos e o Brasil",
    "docentes": [
      "Luciana da Cruz Brito"
    ],
    "participacoes": {
      "Luciana da Cruz Brito": "Autora"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "Bazar do Tempo",
    "isbn": "",
    "paginas": "",
    "link": "https://clubef.bazardotempo.com.br/edicoes/o-avesso-da-raca/",
    "resumo": "",
    "temas": [
      "Raça",
      "Abolicionismo",
      "Brasil",
      "Estados Unidos"
    ],
    "imagem": "../assets/producao/capas/avesso-raca.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "reparacao-memoria-reconhecimento",
    "titulo": "Reparação",
    "subtitulo": "memória e reconhecimento",
    "docentes": [
      "Luciana da Cruz Brito"
    ],
    "participacoes": {
      "Luciana da Cruz Brito": "Organização/participação"
    },
    "tipo": "Livro",
    "ano": "2025",
    "editora": "Fósforo",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Reparação",
      "Memória",
      "Reconhecimento"
    ],
    "imagem": "../assets/producao/capas/reparacao-memoria-reconhecimento.jpg?v=2",
    "observacao": "Detalhes da participação em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "praticas-vivencias-religiosas",
    "titulo": "Práticas e vivências religiosas",
    "subtitulo": "temas da história colonial à contemporaneidade luso-brasileira",
    "docentes": [
      "Marco Antônio Nunes da Silva"
    ],
    "participacoes": {
      "Marco Antônio Nunes da Silva": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "EDUFBA",
    "isbn": "978-85-232-1340-4",
    "paginas": "403",
    "link": "",
    "resumo": "",
    "temas": [
      "Religião",
      "Mundo luso-brasileiro",
      "História"
    ],
    "imagem": "../assets/producao/capas/praticas-vivencias-religiosas.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "estudos-inquisitoriais",
    "titulo": "Estudos inquisitoriais",
    "subtitulo": "história e historiografia",
    "docentes": [
      "Marco Antônio Nunes da Silva"
    ],
    "participacoes": {
      "Marco Antônio Nunes da Silva": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2019",
    "editora": "EDUFRB",
    "isbn": "978-85-5971-092-2",
    "paginas": "446",
    "link": "https://www.ufrb.edu.br/editora/component/chronoforms5/?chronoform=ver-livro&id=83",
    "resumo": "",
    "temas": [
      "Inquisição",
      "Historiografia",
      "Religião"
    ],
    "imagem": "../assets/producao/capas/estudos-inquisitoriais.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "inquisicoes-modernas",
    "titulo": "As Inquisições Modernas",
    "subtitulo": "poder político, religião e sociedade entre a Europa e o Atlântico",
    "docentes": [
      "Marco Antônio Nunes da Silva"
    ],
    "participacoes": {
      "Marco Antônio Nunes da Silva": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "EDUFBA",
    "isbn": "978-65-5630-019-1",
    "paginas": "389",
    "link": "",
    "resumo": "",
    "temas": [
      "Inquisição",
      "Poder",
      "Religião",
      "Atlântico"
    ],
    "imagem": "../assets/producao/capas/inquisicoes-modernas.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "poder-religiao-ibero-atlantico",
    "titulo": "Poder, religião e sociedade no mundo Ibero-Atlântico",
    "subtitulo": "",
    "docentes": [
      "Marco Antônio Nunes da Silva"
    ],
    "participacoes": {
      "Marco Antônio Nunes da Silva": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2022",
    "editora": "EDUFBA",
    "isbn": "978-65-5630-327-7",
    "paginas": "358",
    "link": "",
    "resumo": "",
    "temas": [
      "Religião",
      "Poder",
      "Mundo Ibero-Atlântico"
    ],
    "imagem": "../assets/producao/capas/poder-religiao-ibero-atlantico.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "estertor-santo-oficio",
    "titulo": "O Estertor do Santo Ofício",
    "subtitulo": "do Iluminismo à extinção",
    "docentes": [
      "Marco Antônio Nunes da Silva"
    ],
    "participacoes": {
      "Marco Antônio Nunes da Silva": "Organizador/participação"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Inquisição",
      "Iluminismo",
      "Santo Ofício"
    ],
    "imagem": "../assets/producao/capas/estertor-santo-oficio.jpg?v=4",
    "observacao": "Editora, ano e demais dados em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "caderno-dialogo-cultura-afro",
    "titulo": "Caderno de Diálogo",
    "subtitulo": "Plano Setorial para a Cultura Afro-Brasileira",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Cultura afro-brasileira",
      "Políticas culturais"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "ensino-historia-relacoes-etnico-raciais",
    "titulo": "Ensino de História e Relações Étnico-Raciais",
    "subtitulo": "olhares interioranos",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2021",
    "editora": "Editora Unitins",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Ensino de História",
      "Relações étnico-raciais"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "abibiman",
    "titulo": "Abibiman",
    "subtitulo": "uma voz negra do sertão pernambucano",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "FacForm",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História negra",
      "Pernambuco",
      "Memória"
    ],
    "imagem": "../assets/producao/capas/abibiman.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "feira-negra",
    "titulo": "A Feira Negra",
    "subtitulo": "construindo as nossas histórias",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Coautora com Suzana Lima Ribeiro"
    },
    "tipo": "Livro",
    "ano": "2024",
    "editora": "EDUFRB",
    "isbn": "",
    "paginas": "",
    "link": "https://www.ufrb.edu.br/editora/component/phocadownload/category/2-e-books?download=432:a-feira-negra-construindo-as-nossas-historias",
    "resumo": "",
    "temas": [
      "História negra",
      "Educação",
      "Memória"
    ],
    "imagem": "../assets/producao/capas/feira-negra.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "tramas-negras",
    "titulo": "Tramas negras",
    "subtitulo": "",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História negra"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "Dados editoriais em atualização.",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "grios-diaspora",
    "titulo": "Griôs da Diáspora",
    "subtitulo": "",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Diáspora",
      "Memória"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "Dados editoriais em atualização.",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "sinfonia-prosa",
    "titulo": "Sinfonia em prosa",
    "subtitulo": "",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Cultura",
      "Memória"
    ],
    "imagem": "../assets/producao/capas/sinfonia-prosa.jpg?v=4",
    "observacao": "Dados editoriais em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "africanidades-relacoes-raciais",
    "titulo": "Africanidades e relações raciais",
    "subtitulo": "",
    "docentes": [
      "Martha Rosa Figueira Queiroz"
    ],
    "participacoes": {
      "Martha Rosa Figueira Queiroz": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Africanidades",
      "Relações raciais"
    ],
    "imagem": "../assets/producao/capas/africanidades-relacoes-raciais.jpg?v=4",
    "observacao": "Dados editoriais em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "dialogos-ufrb-escolas",
    "titulo": "Diálogos entre a UFRB, as escolas de ensino médio e as comunidades populares do Recôncavo",
    "subtitulo": "",
    "docentes": [
      "Paulo César Oliveira de Jesus"
    ],
    "participacoes": {
      "Paulo César Oliveira de Jesus": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2008",
    "editora": "UFRB",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "Inclui o capítulo “Sobre o Recôncavo da Bahia”.",
    "temas": [
      "Recôncavo",
      "Educação",
      "História"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "barganhas-querelas-escravidao",
    "titulo": "Barganhas e querelas da escravidão",
    "subtitulo": "tráfico, alforria e liberdade (séculos XVIII e XIX)",
    "docentes": [
      "Paulo César Oliveira de Jesus"
    ],
    "participacoes": {
      "Paulo César Oliveira de Jesus": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "EDUFBA",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "Inclui capítulo de Paulo César Oliveira de Jesus.",
    "temas": [
      "Escravidão",
      "Tráfico",
      "Alforria",
      "Liberdade"
    ],
    "imagem": "../assets/producao/capas/barganhas-querelas-escravidao.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "capitulos-historia-bahia",
    "titulo": "Capítulos de História da Bahia",
    "subtitulo": "",
    "docentes": [
      "Paulo César Oliveira de Jesus"
    ],
    "participacoes": {
      "Paulo César Oliveira de Jesus": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2017",
    "editora": "Assembleia Legislativa da Bahia / EDUNEB",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "Inclui o capítulo “Anúncios de tempestade...”.",
    "temas": [
      "Bahia",
      "História social"
    ],
    "imagem": "../assets/producao/capas/capitulos-historia-bahia.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "guerras-toda-parte",
    "titulo": "Guerras por Toda a Parte",
    "subtitulo": "conflitos armados que impactaram as Independências do Brasil",
    "docentes": [
      "Sérgio Armando Diniz Guerra Filho"
    ],
    "participacoes": {
      "Sérgio Armando Diniz Guerra Filho": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "Alameda",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Independência",
      "Guerras",
      "Brasil"
    ],
    "imagem": "../assets/producao/capas/guerras-toda-parte.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "dois-julho-escola",
    "titulo": "Dois de Julho na Escola",
    "subtitulo": "",
    "docentes": [
      "Sérgio Armando Diniz Guerra Filho"
    ],
    "participacoes": {
      "Sérgio Armando Diniz Guerra Filho": "Coorganizador"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "EDUFRB",
    "isbn": "978-65-88622-11-7",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Dois de Julho",
      "Ensino de História",
      "Independência da Bahia"
    ],
    "imagem": "../assets/producao/capas/dois-julho-escola.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "dois-julho-200-anos",
    "titulo": "2 de julho",
    "subtitulo": "200 anos da luta de um povo",
    "docentes": [
      "Sérgio Armando Diniz Guerra Filho"
    ],
    "participacoes": {
      "Sérgio Armando Diniz Guerra Filho": "Organizador e autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2025",
    "editora": "Hucitec / Fundação Perseu Abramo",
    "isbn": "978-85-8404-489-4",
    "paginas": "335",
    "link": "https://fpabramo.org.br/livro/2-de-julho-200-anos-de-um-povo/",
    "resumo": "",
    "temas": [
      "Independência da Bahia",
      "Dois de Julho",
      "Memória",
      "Lutas populares"
    ],
    "imagem": "../assets/producao/capas/dois-julho-200-anos.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "recruta-los-jovens",
    "titulo": "Recrutá-los jovens",
    "subtitulo": "a formação de aprendizes marinheiros em Sergipe e Lisboa (1868–1905)",
    "docentes": [
      "Solyane Silveira Lima"
    ],
    "participacoes": {
      "Solyane Silveira Lima": "Autora"
    },
    "tipo": "Livro",
    "ano": "2015",
    "editora": "EDISE",
    "isbn": "978-85-63318-39-8",
    "paginas": "268",
    "link": "",
    "resumo": "",
    "temas": [
      "História da Educação",
      "Aprendizes marinheiros",
      "Sergipe",
      "Lisboa"
    ],
    "imagem": "../assets/producao/capas/recruta-los-jovens.jpg?v=4",
    "observacao": "Livro derivado da tese de doutorado.",
    "capa_status": "local"
  },
  {
    "slug": "programa-universidade-todos-ufrb",
    "titulo": "O Programa Universidade Para Todos UFRB",
    "subtitulo": "sujeitos plurais, trajetórias e acesso à universidade",
    "docentes": [
      "Solyane Silveira Lima"
    ],
    "participacoes": {
      "Solyane Silveira Lima": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "",
    "editora": "Paco Editorial",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Universidade",
      "Acesso",
      "Educação"
    ],
    "imagem": "../assets/producao/capas/programa-universidade-todos-ufrb.jpg?v=4",
    "observacao": "Ano e ISBN em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "historias-memorias-educacao-brasileira",
    "titulo": "Histórias e Memórias da Educação Brasileira",
    "subtitulo": "",
    "docentes": [
      "Solyane Silveira Lima"
    ],
    "participacoes": {
      "Solyane Silveira Lima": "Participação"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "Editora Fi",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História da Educação",
      "Memória"
    ],
    "imagem": "../assets/producao/capas/historias-memorias-educacao-brasileira.jpg?v=4",
    "observacao": "Tipo de participação e dados completos em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "sujeitos-culturas-instituicoes-educacao",
    "titulo": "Sujeitos, Culturas e Instituições na Educação",
    "subtitulo": "",
    "docentes": [
      "Solyane Silveira Lima"
    ],
    "participacoes": {
      "Solyane Silveira Lima": "Participação"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "Appris",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Educação",
      "Cultura",
      "Instituições"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "Tipo de participação e dados completos em atualização.",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "novas-viagens-pedagogicas",
    "titulo": "Novas Viagens Pedagógicas",
    "subtitulo": "",
    "docentes": [
      "Solyane Silveira Lima"
    ],
    "participacoes": {
      "Solyane Silveira Lima": "Participação"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "Appris",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Educação",
      "História da Educação"
    ],
    "imagem": "../assets/producao/capas/novas-viagens-pedagogicas.jpg?v=2",
    "observacao": "Tipo de participação e dados completos em atualização.",
    "capa_status": "local"
  },
  {
    "slug": "descaminhos-fe",
    "titulo": "(Des)caminhos da Fé",
    "subtitulo": "religiões e religiosidades no Mundo Atlântico",
    "docentes": [
      "Tânia Maria Pinto de Santana"
    ],
    "participacoes": {
      "Tânia Maria Pinto de Santana": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "Sagga",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Religião",
      "Mundo Atlântico",
      "Religiosidades"
    ],
    "imagem": "../assets/producao/capas/descaminhos-fe.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "negros-cristaos-catolicos",
    "titulo": "Os negros cristãos católicos e o culto aos santos na Bahia colonial",
    "subtitulo": "",
    "docentes": [
      "Tânia Maria Pinto de Santana"
    ],
    "participacoes": {
      "Tânia Maria Pinto de Santana": "Autora"
    },
    "tipo": "Livro",
    "ano": "2022",
    "editora": "Sagga",
    "isbn": "",
    "paginas": "146",
    "link": "",
    "resumo": "",
    "temas": [
      "Catolicismo",
      "População negra",
      "Bahia colonial"
    ],
    "imagem": "../assets/producao/capas/negros-cristaos-catolicos.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "charitas-misericordia",
    "titulo": "Charitas et misericordia",
    "subtitulo": "morte, caridade e salvação nos testamentos de Cachoeira – Bahia (século XVIII)",
    "docentes": [
      "Tânia Maria Pinto de Santana"
    ],
    "participacoes": {
      "Tânia Maria Pinto de Santana": "Autora"
    },
    "tipo": "Livro",
    "ano": "2022",
    "editora": "EDUFBA",
    "isbn": "",
    "paginas": "266",
    "link": "",
    "resumo": "",
    "temas": [
      "Cachoeira",
      "Morte",
      "Religiosidade",
      "Século XVIII"
    ],
    "imagem": "../assets/producao/capas/charitas-misericordia.jpg?v=2",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "fontes-viver-religioso",
    "titulo": "Fontes do viver religioso na Bahia",
    "subtitulo": "séculos XVI–XIX",
    "docentes": [
      "Tânia Maria Pinto de Santana"
    ],
    "participacoes": {
      "Tânia Maria Pinto de Santana": "Coorganizadora"
    },
    "tipo": "Livro",
    "ano": "2024",
    "editora": "Paco Editorial",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Religião",
      "Bahia",
      "Fontes históricas"
    ],
    "imagem": "../assets/producao/capas/fontes-viver-religioso.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "mendigos-moleques-vadios",
    "titulo": "Mendigos, moleques e vadios na Bahia do século XIX",
    "subtitulo": "",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Autor"
    },
    "tipo": "Livro",
    "ano": "1996",
    "editora": "Hucitec / EDUFBA",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Pobreza",
      "Bahia",
      "Século XIX",
      "História social"
    ],
    "imagem": "../assets/producao/capas/mendigos-moleques-vadios.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "luz-noite-brasil",
    "titulo": "Uma luz na noite do Brasil",
    "subtitulo": "",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Autor"
    },
    "tipo": "Livro",
    "ano": "2000",
    "editora": "Design Editora",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História negra",
      "Brasil"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "Dados complementares em atualização.",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "historia-negro-brasil",
    "titulo": "Uma História do Negro no Brasil",
    "subtitulo": "",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Autor"
    },
    "tipo": "Livro",
    "ano": "2006",
    "editora": "Fundação Cultural Palmares",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "História negra",
      "Brasil",
      "Escravidão"
    ],
    "imagem": "../assets/producao/capas/historia-negro-brasil.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "encruzilhadas-liberdade",
    "titulo": "Encruzilhadas da liberdade",
    "subtitulo": "histórias de escravos e libertos na Bahia (1870–1910)",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Autor"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "Civilização Brasileira",
    "isbn": "978-85-200-1091-4",
    "paginas": "364",
    "link": "https://www.record.com.br/products/encruzilhadas-da-liberdade-historias-de-escravos-e-libertos-na-bahia-1870-1910",
    "resumo": "Edição da Civilização Brasileira; obra publicada originalmente pela Editora da Unicamp em 2006.",
    "temas": [
      "Escravidão",
      "Abolição",
      "Pós-abolição",
      "Bahia"
    ],
    "imagem": "../assets/producao/capas/encruzilhadas-liberdade.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "historia-cultura-afro-brasileira",
    "titulo": "Uma história da cultura afro-brasileira",
    "subtitulo": "",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Coautor com Wlamyra Albuquerque"
    },
    "tipo": "Livro",
    "ano": "2009",
    "editora": "Moderna",
    "isbn": "",
    "paginas": "",
    "link": "https://www.moderna.com.br/literatura/livro/uma-historia-da-cultura-afro-brasileira",
    "resumo": "",
    "temas": [
      "Cultura afro-brasileira",
      "História negra",
      "Brasil"
    ],
    "imagem": "https://down-br.img.susercontent.com/file/1b3ab3bed19356635d2e3362130c2df1",
    "observacao": "",
    "capa_status": "real"
  },
  {
    "slug": "que-ha-africa-nos",
    "titulo": "O que há de África em nós",
    "subtitulo": "",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Coautor com Wlamyra Albuquerque"
    },
    "tipo": "Livro",
    "ano": "2013",
    "editora": "Moderna",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "África",
      "Cultura afro-brasileira",
      "Diáspora"
    ],
    "imagem": "../assets/producao/capas/que-ha-africa-nos.jpg?v=4",
    "observacao": "",
    "capa_status": "local"
  },
  {
    "slug": "crossroads-freedom",
    "titulo": "Crossroads of Freedom",
    "subtitulo": "Slaves and Freed People in Bahia, Brazil, 1870–1910",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Autor"
    },
    "tipo": "Livro",
    "ano": "2016",
    "editora": "Duke University Press",
    "isbn": "",
    "paginas": "",
    "link": "",
    "resumo": "",
    "temas": [
      "Slavery",
      "Freedom",
      "Bahia",
      "Post-emancipation"
    ],
    "imagem": "../assets/producao/capa-nao-localizada.svg?v=2",
    "observacao": "",
    "capa_status": "nao-localizada"
  },
  {
    "slug": "longe-muito-longe",
    "titulo": "Longe, muito longe",
    "subtitulo": "Manoel Benício dos Passos, um capoeira no ativismo do pós-abolição",
    "docentes": [
      "Walter da Silva Fraga Filho"
    ],
    "participacoes": {
      "Walter da Silva Fraga Filho": "Autor"
    },
    "tipo": "Livro",
    "ano": "2023",
    "editora": "Zahar",
    "isbn": "978-65-5979-118-7",
    "paginas": "",
    "link": "https://www.companhiadasletras.com.br/livro/9786559791187/longe-muito-longe",
    "resumo": "",
    "temas": [
      "Capoeira",
      "Pós-abolição",
      "Ativismo negro",
      "Bahia"
    ],
    "imagem": "../assets/longe-muito-longe.jpg?v=2",
    "observacao": "",
    "capa_status": "real"
  },
  {
    "slug": "luiza-mahin",
    "titulo": "Luiza Mahin",
    "subtitulo": "Uma Rainha Africana no Brasil",
    "docentes": [
      "Aline Najara da Silva Gonçalves"
    ],
    "participacoes": {
      "Aline Najara da Silva Gonçalves": "Autora"
    },
    "tipo": "Livro",
    "ano": "2011",
    "editora": "CEAP",
    "isbn": "978-85-99889-24-4",
    "paginas": "",
    "link": "https://mst.org.br/download/luiza-mahin-uma-rainha-africana-no-brasil-aline-najara-da-silva-goncalves/",
    "resumo": "",
    "temas": [
      "Luiza Mahin",
      "História negra",
      "Memória"
    ],
    "imagem": "https://covers.openlibrary.org/b/isbn/9788599889244-L.jpg?default=false",
    "observacao": "",
    "capa_status": "isbn"
  },
  {
    "slug": "festa-cultura-sociabilidade-america-portuguesa",
    "titulo": "Festa: cultura e sociabilidade na América Portuguesa",
    "subtitulo": "Volume II",
    "docentes": [
      "Camila Fernanda Guimarães Santiago"
    ],
    "participacoes": {
      "Camila Fernanda Guimarães Santiago": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "2001",
    "editora": "Hucitec / Edusp / Imprensa Oficial / FAPESP",
    "isbn": "978-85-314-0620-1",
    "paginas": "2 v., 992 p.",
    "link": "https://www.edusp.com.br/livros/festa/",
    "resumo": "Coletânea organizada por István Jancsó e Iris Kantor sobre cultura festiva e sociabilidade na América Portuguesa. Camila Santiago participa do volume II com o capítulo “Os gastos do Senado da Câmara de Vila Rica com festas: destaque para Corpus Christi (1720–1750)”, p. 487–501.",
    "temas": [
      "Festas",
      "América Portuguesa",
      "Vila Rica",
      "Corpus Christi",
      "Cultura política",
      "Sociabilidade"
    ],
    "imagem": "../assets/producao/capas/festa-cultura-sociabilidade-america-portuguesa.jpg?v=4",
    "observacao": "Capítulo de Camila Santiago: “Os gastos do Senado da Câmara de Vila Rica com festas: destaque para Corpus Christi (1720–1750)”, v. 2, p. 487–501.",
    "capa_status": "local"
  },
  {
    "slug": "um-mundo-sobre-papel",
    "titulo": "Um mundo sobre papel",
    "subtitulo": "Livros, gravuras e impressos flamengos nos Impérios português e espanhol (séculos XVI–XVIII)",
    "docentes": [
      "Camila Fernanda Guimarães Santiago"
    ],
    "participacoes": {
      "Camila Fernanda Guimarães Santiago": "Autora de capítulo"
    },
    "tipo": "Livro",
    "ano": "2014",
    "editora": "Edusp / Editora UFMG",
    "isbn": "978-85-314-1353-7",
    "paginas": "584 p.",
    "link": "https://www.edusp.com.br/livros/mundo-sobre-papel/",
    "resumo": "Coletânea organizada por Werner Thomas, Eddy Stols, Iris Kantor e Júnia Furtado sobre circulação de livros, gravuras e impressos flamengos nos mundos ibéricos. Camila Santiago assina o capítulo “Circulação e usos em Minas Gerais de gravuras religiosas da oficina Plantiniana”, p. 495–511.",
    "temas": [
      "História do livro",
      "Gravuras",
      "Oficina Plantiniana",
      "Minas Gerais",
      "História da arte",
      "Circulação de impressos"
    ],
    "imagem": "../assets/producao/capas/um-mundo-sobre-papel.jpg?v=4",
    "observacao": "Capítulo de Camila Santiago: “Circulação e usos em Minas Gerais de gravuras religiosas da oficina Plantiniana”, p. 495–511.",
    "capa_status": "local"
  },
  {
    "slug": "depois-da-avenida-central",
    "titulo": "Depois da Avenida Central",
    "subtitulo": "Cultura, lazer e esportes nos sertões do Brasil",
    "docentes": [
      "Henrique Sena dos Santos"
    ],
    "participacoes": {
      "Henrique Sena dos Santos": "Autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2020",
    "editora": "Editora Jaguatirica",
    "isbn": "978-85-5662-260-0",
    "paginas": "302 p.",
    "link": "https://museudofutebol.org.br/crfb/acervo/797674",
    "resumo": "Coletânea organizada por Cleber Dias dedicada à cultura, ao lazer e aos esportes para além do eixo Rio–São Paulo. Henrique Sena dos Santos assina o capítulo “Futebol no interior da Bahia, 1920–1940”, iniciado na p. 153.",
    "temas": [
      "Futebol",
      "Interior da Bahia",
      "Esporte",
      "Lazer",
      "Sertões",
      "Cultura urbana"
    ],
    "imagem": "../assets/producao/capas/depois-da-avenida-central.jpg?v=4",
    "observacao": "Capítulo de Henrique Sena dos Santos: “Futebol no interior da Bahia, 1920–1940”, p. 153–196.",
    "capa_status": "local"
  },
  {
    "slug": "alem-do-riso",
    "titulo": "Além do riso",
    "subtitulo": "Reflexões sobre o humor em toda parte",
    "docentes": [
      "Leandro Antonio de Almeida"
    ],
    "participacoes": {
      "Leandro Antonio de Almeida": "Organizador e autor de capítulo"
    },
    "tipo": "Livro",
    "ano": "2021",
    "editora": "LiberArs",
    "isbn": "978-65-5953-042-7",
    "paginas": "330 p.",
    "link": "https://www.liberars.com.br/alem-do-riso-reflexoes-sobre-o-humor-em-toda-parte.html",
    "resumo": "Coletânea organizada por Elias Thomé Saliba, Thaís Leão Vieira e Leandro Antonio de Almeida sobre a história cultural do humor. Leandro também assina o capítulo “O mistério dos Sherlocks risíveis”, p. 109–130.",
    "temas": [
      "Humor",
      "Riso",
      "História cultural",
      "Imprensa",
      "Sherlock Holmes",
      "Modernidade"
    ],
    "imagem": "../assets/producao/capas/alem-do-riso.jpg?v=4",
    "observacao": "Leandro Antonio de Almeida é coorganizador e autor do capítulo “O mistério dos Sherlocks risíveis”, p. 109–130.",
    "capa_status": "local"
  },
  {
    "slug": "imagem-devocao-escravidao",
    "titulo": "Imagem, devoção e escravidão",
    "subtitulo": "",
    "docentes": [
      "Tânia Maria Pinto de Santana"
    ],
    "participacoes": {
      "Tânia Maria Pinto de Santana": "Autora"
    },
    "tipo": "Livro",
    "ano": "2018",
    "editora": "EDUFRB",
    "isbn": "978-85-5971-074-8",
    "paginas": "162",
    "link": "https://www.ufrb.edu.br/editora/component/chronoforms5/?chronoform=ver-livro&id=68",
    "resumo": "Estudo sobre devoções a santos negros e outros santos católicos, catequese e experiências religiosas das populações negras na América Portuguesa, com atenção às relações entre imagem, escravidão e religiosidade.",
    "temas": [
      "Escravidão",
      "Religiosidade",
      "Devoções católicas",
      "Santos negros",
      "América Portuguesa",
      "População negra"
    ],
    "imagem": "../assets/producao/capas/imagem-devocao-escravidao.jpg?v=4",
    "observacao": "Livro eletrônico publicado pela EDUFRB, com acesso gratuito.",
    "capa_status": "local"
  }
];

(function(){
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.renderProfessorBooks = function(nome){
    const grid=document.getElementById('profileBookGrid');
    if(!grid || !Array.isArray(window.PRODUCAO_DOCENTES)) return;
    const items=window.PRODUCAO_DOCENTES.filter(i => Array.isArray(i.docentes) && i.docentes.includes(nome));
    if(!items.length){
      grid.innerHTML='<p class="muted">Produção em atualização.</p>';
      return;
    }
    grid.innerHTML=items.map(i=>{
      const role=(i.participacoes&&i.participacoes[nome])||'Participação';
      const meta=[i.ano,i.editora].filter(Boolean).join(' · ') || 'Dados em atualização';
      return `<article class="profile-book-card">
        <a class="profile-book-cover" href="producao.html#${encodeURIComponent(i.slug)}"><img src="${i.imagem}" alt="Capa de ${esc(i.titulo)}" loading="lazy"></a>
        <div><span class="production-type">${esc(role)}</span><h3><a href="producao.html#${encodeURIComponent(i.slug)}">${esc(i.titulo)}</a></h3>
        ${i.subtitulo?`<p>${esc(i.subtitulo)}</p>`:''}<small>${esc(meta)}</small><a class="profile-book-details" href="producao.html#${encodeURIComponent(i.slug)}">Ver detalhes</a></div>
      </article>`;
    }).join('');
  };

  const file=(location.pathname.split('/').pop()||'').toLowerCase();
  const professorByPage={
    'professor-antonio-liberac.html':'Antonio Liberac Cardoso Simões Pires',
    'professor-andre-rego.html':'André de Almeida Rego',
    'professora-camila.html':'Camila Fernanda Guimarães Santiago',
    'professor-denis-correa.html':'Dênis Renan Corrêa',
    'professor-fabricio.html':'Fabrício Lyrio Santos',
    'professor-gabriel-avila.html':'Gabriel da Costa Ávila',
    'professor-henrique-sena.html':'Henrique Sena dos Santos',
    'professora-isabel.html':'Isabel Cristina Ferreira dos Reis',
    'professor-juvenal-conceicao.html':'Juvenal de Carvalho Conceição',
    'professor-leandro-almeida.html':'Leandro Antonio de Almeida',
    'professora-luciana-brito.html':'Luciana da Cruz Brito',
    'professor-marco-nunes.html':'Marco Antônio Nunes da Silva',
    'professora-martha.html':'Martha Rosa Figueira Queiroz',
    'professor-nuno-pereira.html':'Nuno Gonçalves Pereira',
    'professor-paulo-cesar.html':'Paulo César Oliveira de Jesus',
    'professor-sergio.html':'Sérgio Armando Diniz Guerra Filho',
    'professora-solyane-lima.html':'Solyane Silveira Lima',
    'professora-tania-santana.html':'Tânia Maria Pinto de Santana',
    'professor-walter.html':'Walter da Silva Fraga Filho',
    'professora-aline-goncalves.html':'Aline Najara da Silva Gonçalves'
  };
  const nome=professorByPage[file];
  if(!nome) return;
  const main=document.querySelector('main'); if(!main) return;
  if(!document.getElementById('profileBookGrid')){
    const section=document.createElement('section');
    section.className='profile-books';
    section.dataset.professor=nome;
    section.innerHTML='<div class="section-heading-row"><div><p class="eyebrow">Produção intelectual</p><h2>Livros</h2><p>Livros de autoria, organização, tradução ou com participação em capítulos.</p></div><a class="button-outline" href="producao.html">Ver catálogo completo</a></div><div class="profile-book-grid" id="profileBookGrid"></div>';
    main.appendChild(section);
  }
  window.renderProfessorBooks(nome);
})();
