
document.querySelectorAll(".menu-button").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".menu").classList.toggle("open")));
const mapData=[
{id:"juliana",titulo:"Egressa no doutorado em História Social",categoria:"egressos",nome:"Juliana Andrade dos Santos",cidade:"Salvador",local:"Universidade Federal da Bahia (UFBA)",ano:2015,periodo:"2015",lat:-12.9994,lng:-38.5090,imagem:"assets/ufba-exemplo.svg",pageImagem:"../assets/ufba-exemplo.svg",descricao:"Egressa da Licenciatura em História da UFRB. Em 2015, ingressa no doutorado em História Social na UFBA, desenvolvendo pesquisa sobre memória, cultura popular e educação patrimonial no Recôncavo Baiano.",fonte:"Exemplo demonstrativo: formulário colaborativo, currículo Lattes, foto autorizada ou imagem institucional."},
{id:"camila",titulo:"Atividade de ensino de História e cultura visual",categoria:"professores",nome:"Camila Santiago",cidade:"Cachoeira",local:"CAHL/UFRB",ano:2024,periodo:"2024",lat:-12.5996,lng:-38.9653,imagem:"assets/camila-santiago.jpg",pageImagem:"../assets/camila-santiago.jpg",descricao:"Atividade formativa com estudantes da licenciatura, articulando ensino de História, imagens e memórias do Recôncavo.",fonte:"Exemplo demonstrativo: cartaz, fotos e relatório de atividade."},
{id:"pibid",titulo:"PIBID História em escola pública",categoria:"ensino",cidade:"Conceição da Feira",local:"Colégio Estadual de Conceição da Feira",ano:2018,periodo:"2018–2020",lat:-12.5076,lng:-38.9995,imagem:"assets/projeto-exemplo.svg",pageImagem:"../assets/projeto-exemplo.svg",descricao:"Atividades de iniciação à docência, observação escolar e produção de materiais didáticos para o ensino de História.",fonte:"Relatório de atividades do PIBID; fotografias da escola; depoimentos de supervisores."},
{id:"pesquisa",titulo:"Grupo de pesquisa Memória e Patrimônio",categoria:"pesquisa",cidade:"Cachoeira",local:"Centro Histórico de Cachoeira",ano:2014,periodo:"2014–2017",lat:-12.6020,lng:-38.9687,imagem:"assets/galeria-3.svg",pageImagem:"../assets/galeria-3.svg",descricao:"Pesquisa sobre memória urbana, patrimônio, arquivos locais e narrativas históricas no Recôncavo.",fonte:"Projeto de pesquisa cadastrado; comunicações em eventos; produção bibliográfica."},
{id:"africanidades",titulo:"Projeto Africanidades no Recôncavo",categoria:"extensao",cidade:"São Félix",local:"Comunidades, escolas e espaços culturais",ano:2016,periodo:"2016–2019",lat:-12.6127,lng:-38.9732,imagem:"assets/projeto-exemplo.svg",pageImagem:"../assets/projeto-exemplo.svg",descricao:"Ações extensionistas voltadas à história afro-brasileira, educação antirracista e memória local.",fonte:"Projeto de extensão; cartazes; registros fotográficos; relatos de participantes."},
{id:"santo",titulo:"Egressa atuando na educação básica",categoria:"egressos",cidade:"Santo Amaro",local:"Rede estadual de ensino",ano:2012,periodo:"2012–atual",lat:-12.5467,lng:-38.7119,imagem:"assets/estudante-exemplo.svg",pageImagem:"../assets/estudante-exemplo.svg",descricao:"Egressa do curso de História atuando como professora da educação básica no Recôncavo.",fonte:"Formulário colaborativo; autorização de uso; link para currículo ou declaração."},
{id:"cruz",titulo:"Educação patrimonial em Cruz das Almas",categoria:"extensao",cidade:"Cruz das Almas",local:"Escolas e espaços de memória",ano:2023,periodo:"2023",lat:-12.6675,lng:-39.1008,imagem:"assets/galeria-2.svg",pageImagem:"../assets/galeria-2.svg",descricao:"Atividades com estudantes da educação básica sobre patrimônio, memória e história local.",fonte:"Relatório de extensão; plano de oficina; imagens das atividades."},
{id:"ana-clara",titulo:"Professora de História na educação básica",categoria:"egressos",nome:"Ana Clara dos Santos",cidade:"Salvador",local:"Colégio Estadual da Bahia",ano:2014,periodo:"2014–atual",lat:-12.9714,lng:-38.5014,imagem:"assets/egresso-local-ana-clara.jpg",pageImagem:"../assets/egresso-local-ana-clara.jpg",pagina:"egresso-ana-clara.html",descricao:"Depois da graduação, passou a atuar na rede estadual de ensino. Desenvolve projetos de história local, patrimônio e memória com estudantes do ensino médio.",fonte:"Perfil, fotografia e instituição fictícios para demonstração do memorial."},
{id:"lucas-menezes",titulo:"Mestrando e pesquisador em História",categoria:"egressos",nome:"Lucas Menezes Oliveira",cidade:"Feira de Santana",local:"Universidade Estadual de Feira de Santana (UEFS)",ano:2016,periodo:"2016–atual",lat:-12.2003,lng:-38.9707,imagem:"assets/egresso-local-lucas-menezes.jpg",pageImagem:"../assets/egresso-local-lucas-menezes.jpg",pagina:"egresso-lucas-menezes.html",descricao:"Prosseguiu na pós-graduação, pesquisando relações de trabalho, associativismo e culturas políticas no interior da Bahia.",fonte:"Perfil, fotografia e instituição fictícios para demonstração do memorial."},
{id:"mariana-jose",titulo:"Professora e coordenadora pedagógica",categoria:"egressos",nome:"Mariana José de Almeida",cidade:"Santo Amaro",local:"Escola Municipal de Santo Amaro",ano:2018,periodo:"2018–atual",lat:-12.5467,lng:-38.7119,imagem:"assets/egresso-local-mariana-jose.jpg",pageImagem:"../assets/egresso-local-mariana-jose.jpg",pagina:"egresso-mariana-jose.html",descricao:"Atua na educação básica e participa de ações de educação patrimonial voltadas às histórias das comunidades do Recôncavo.",fonte:"Perfil, fotografia e instituição fictícios para demonstração do memorial."},
{id:"rafael-conceicao",titulo:"Historiador e pesquisador de acervos",categoria:"egressos",nome:"Rafael Conceição Souza",cidade:"Cachoeira",local:"Arquivo Público Municipal de Cachoeira",ano:2017,periodo:"2017–atual",lat:-12.6015,lng:-38.9658,imagem:"assets/egresso-local-rafael-conceicao.jpg",pageImagem:"../assets/egresso-local-rafael-conceicao.jpg",pagina:"egresso-rafael-conceicao.html",descricao:"Trabalha com organização documental, pesquisa histórica e ações de difusão de acervos sobre Cachoeira e o Recôncavo.",fonte:"Perfil, fotografia e instituição fictícios para demonstração do memorial."},
{id:"beatriz-nascimento",titulo:"Técnica em assuntos educacionais e pesquisadora",categoria:"egressos",nome:"Beatriz Nascimento Lima",cidade:"Cruz das Almas",local:"Universidade Federal do Recôncavo da Bahia (UFRB)",ano:2020,periodo:"2020–atual",lat:-12.6597,lng:-39.0897,imagem:"assets/egresso-local-beatriz-nascimento.jpg",pageImagem:"../assets/egresso-local-beatriz-nascimento.jpg",pagina:"egresso-beatriz-nascimento.html",descricao:"Atua na universidade e desenvolve estudos sobre políticas educacionais, permanência estudantil e formação docente.",fonte:"Perfil, fotografia e instituição fictícios para demonstração do memorial."},
{id:"joao-victor",titulo:"Mestrando e professor da educação básica",categoria:"egressos",nome:"João Victor Ferreira",cidade:"Alagoinhas",local:"Universidade do Estado da Bahia (UNEB)",ano:2021,periodo:"2021–atual",lat:-12.1356,lng:-38.4192,imagem:"assets/egresso-local-joao-victor.jpg",pageImagem:"../assets/egresso-local-joao-victor.jpg",pagina:"egresso-joao-victor.html",descricao:"Combina docência na rede pública com pesquisa sobre ensino de História, cultura digital e juventudes.",fonte:"Perfil, fotografia e instituição fictícios para demonstração do memorial."}
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
