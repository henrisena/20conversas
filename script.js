
document.querySelectorAll(".menu-button").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".menu").classList.toggle("open")));
const mapData=[{"id":"juliana","nome":"Juliana Andrade dos Santos","titulo":"Doutoranda em História Social","cidade":"Salvador","estado":"Bahia","pais":"Brasil","local":"Universidade Federal da Bahia (UFBA)","ingresso":"2007.1","conclusao":"Não informado","atuacao":["Pós-graduação","Pesquisa"],"lat":-12.9994,"lng":-38.509,"imagem":"assets/ufba-exemplo.svg","pageImagem":"../assets/ufba-exemplo.svg","pagina":"egressa-juliana.html","descricao":"Egressa da Licenciatura em História da UFRB e doutoranda em História Social na UFBA.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"ana-clara","nome":"Ana Clara dos Santos","titulo":"Professora de História na educação básica","cidade":"Salvador","estado":"Bahia","pais":"Brasil","local":"Colégio Estadual da Bahia","ingresso":"2009.1","conclusao":"2014","atuacao":["Educação básica"],"lat":-12.9714,"lng":-38.5014,"imagem":"assets/egresso-local-ana-clara.jpg","pageImagem":"../assets/egresso-local-ana-clara.jpg","pagina":"egresso-ana-clara.html","descricao":"Atua na rede estadual de ensino e desenvolve projetos de história local, patrimônio e memória.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"lucas-menezes","nome":"Lucas Menezes Oliveira","titulo":"Mestrando e pesquisador em História","cidade":"Feira de Santana","estado":"Bahia","pais":"Brasil","local":"Universidade Estadual de Feira de Santana (UEFS)","ingresso":"2011.2","conclusao":"2016","atuacao":["Pós-graduação","Pesquisa"],"lat":-12.2003,"lng":-38.9707,"imagem":"assets/egresso-local-lucas-menezes.jpg","pageImagem":"../assets/egresso-local-lucas-menezes.jpg","pagina":"egresso-lucas-menezes.html","descricao":"Prosseguiu na pós-graduação, pesquisando relações de trabalho, associativismo e culturas políticas.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"mariana-jose","nome":"Mariana José de Almeida","titulo":"Professora e coordenadora pedagógica","cidade":"Santo Amaro","estado":"Bahia","pais":"Brasil","local":"Escola Municipal de Santo Amaro","ingresso":"2013.1","conclusao":"2018","atuacao":["Educação básica","Gestão educacional"],"lat":-12.5467,"lng":-38.7119,"imagem":"assets/egresso-local-mariana-jose.jpg","pageImagem":"../assets/egresso-local-mariana-jose.jpg","pagina":"egresso-mariana-jose.html","descricao":"Atua na educação básica e participa de ações de educação patrimonial no Recôncavo.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"rafael-conceicao","nome":"Rafael Conceição Souza","titulo":"Historiador e pesquisador de acervos","cidade":"Cachoeira","estado":"Bahia","pais":"Brasil","local":"Arquivo Público Municipal de Cachoeira","ingresso":"2014.2","conclusao":"2017","atuacao":["Patrimônio, museus e arquivos","Pesquisa"],"lat":-12.6015,"lng":-38.9658,"imagem":"assets/egresso-local-rafael-conceicao.jpg","pageImagem":"../assets/egresso-local-rafael-conceicao.jpg","pagina":"egresso-rafael-conceicao.html","descricao":"Trabalha com organização documental, pesquisa histórica e difusão de acervos.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"beatriz-nascimento","nome":"Beatriz Nascimento Lima","titulo":"Técnica em assuntos educacionais e pesquisadora","cidade":"Cruz das Almas","estado":"Bahia","pais":"Brasil","local":"Universidade Federal do Recôncavo da Bahia (UFRB)","ingresso":"2016.1","conclusao":"2020","atuacao":["Ensino superior","Gestão educacional","Pesquisa"],"lat":-12.6597,"lng":-39.0897,"imagem":"assets/egresso-local-beatriz-nascimento.jpg","pageImagem":"../assets/egresso-local-beatriz-nascimento.jpg","pagina":"egresso-beatriz-nascimento.html","descricao":"Atua na universidade e desenvolve estudos sobre políticas educacionais e permanência estudantil.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"joao-victor","nome":"João Victor Ferreira","titulo":"Mestrando e professor da educação básica","cidade":"Alagoinhas","estado":"Bahia","pais":"Brasil","local":"Universidade do Estado da Bahia (UNEB)","ingresso":"2018.2","conclusao":"2021","atuacao":["Educação básica","Pós-graduação"],"lat":-12.1356,"lng":-38.4192,"imagem":"assets/egresso-local-joao-victor.jpg","pageImagem":"../assets/egresso-local-joao-victor.jpg","pagina":"egresso-joao-victor.html","descricao":"Combina docência na rede pública com pesquisa sobre ensino de História e cultura digital.","fonte":"Perfil demonstrativo; substituir por resposta autorizada ao formulário.","categoria":"egressos"},{"id":"alfredo","nome":"Alfredo Pinto da Silva Júnior","titulo":"Professor da rede estadual e doutorando em História","cidade":"Cachoeira","estado":"Bahia","pais":"Brasil","local":"Colégio Estadual Rômulo Galvão (São Félix) e PPGH/UFBA (Salvador)","ingresso":"2008.1","conclusao":"2011.2","atuacao":["Educação básica","Pós-graduação","Pesquisa"],"lat":-12.6016,"lng":-38.9658,"imagem":"assets/alfredo-jornada-pedagogica.jpeg","pageImagem":"../assets/alfredo-jornada-pedagogica.jpeg","pagina":"egresso-alfredo-pinto.html","descricao":"Professor efetivo da Rede Estadual de Educação da Bahia e doutorando em História pela UFBA. Também participou do PIBID História da UFRB como professor supervisor.","fonte":"Informações e fotografias enviadas e autorizadas por Alfredo Pinto da Silva Júnior.","categoria":"egressos","momentos":[{"ano":"2013","cidade":"Salvador","estado":"Bahia","pais":"Brasil","instituicao":"Universidade Federal da Bahia (UFBA)","atividade":"Celebração da qualificação do mestrado com colegas e amigos da UFRB.","lat":-12.9994,"lng":-38.509,"imagem":"assets/alfredo-qualificacao.jpg","pageImagem":"../assets/alfredo-qualificacao.jpg","atuacao":["Pós-graduação"]},{"ano":"2025","cidade":"Salvador","estado":"Bahia","pais":"Brasil","instituicao":"Universidade do Estado da Bahia (UNEB), Campus I","atividade":"Participação no II Fórum Internacional “Indígenas no Trabalho”.","lat":-12.9537,"lng":-38.4575,"imagem":"assets/alfredo-forum-indigenas.jpg","pageImagem":"../assets/alfredo-forum-indigenas.jpg","atuacao":["Pesquisa","Evento acadêmico"]},{"ano":"2026","cidade":"Cachoeira","estado":"Bahia","pais":"Brasil","instituicao":"Colégio Estadual da Cachoeira","atividade":"Jornada Pedagógica e oficina sobre o Plano Municipal de Educação Antirracista de Cachoeira.","lat":-12.6021,"lng":-38.9648,"imagem":"assets/alfredo-fred-igor.jpeg","pageImagem":"../assets/alfredo-fred-igor.jpeg","atuacao":["Educação básica","Formação de professores"]}]}];
function letterFor(){return "E"}
function iconFor(item){return L.divIcon({className:"leaflet-marker-icon",html:`<div class="pin egressos"><span>${letterFor()}</span></div>`,iconSize:[34,34],iconAnchor:[17,34]})}
function initHomeMap(){if(!document.getElementById("homeMap")||typeof L==="undefined")return;const map=L.map("homeMap",{zoomControl:false,scrollWheelZoom:false}).setView([-12.56,-38.93],9);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:""}).addTo(map);mapData.forEach(i=>L.marker([i.lat,i.lng],{icon:iconFor(i)}).addTo(map).bindPopup(`<b>${i.nome}</b><br>${i.cidade} — ${i.estado}`))}
function detailHTML(i){const tags=(i.atuacao||[]).map(a=>`<span>${a}</span>`).join("");const moments=(i.momentos||[]);const timeline=moments.length?`<div class="map-mini-timeline"><h3>Momentos da trajetória</h3>${moments.map(m=>`<div><strong>${m.ano}</strong><span>${m.cidade} — ${m.instituicao}</span></div>`).join("")}</div>`:"";return `<img class="map-detail-image" src="${i.pageImagem||i.imagem}" alt="${i.nome}"><span class="tag">Egresso</span><h2>${i.nome}</h2><p><strong>${i.titulo}</strong></p><p><strong>Ingresso:</strong> ${i.ingresso||"Não informado"}</p><p><strong>Conclusão:</strong> ${i.conclusao||"Não informado"}</p><p><strong>Localização atual:</strong> ${i.cidade}, ${i.estado}, ${i.pais}</p><p><strong>Instituição:</strong> ${i.local}</p><div class="theme-list">${tags}</div><p>${i.descricao}</p>${timeline}${moments.length?`<button class="button-outline trajectory-toggle" type="button" data-trajectory aria-pressed="false">Ver trajetória no mapa</button>`:""}<p class="map-source"><strong>Fonte:</strong> ${i.fonte}</p>${i.pagina?`<a class="button-outline" href="${i.pagina}">Conheça a trajetória</a>`:""}`}
function initFullMap(){
 const directoryToggle=document.getElementById("toggleAlumniDirectory"),directoryPanel=document.getElementById("alumniDirectoryPanel");
 if(directoryToggle&&directoryPanel)directoryToggle.addEventListener("click",()=>{const open=directoryToggle.getAttribute("aria-expanded")==="true";directoryToggle.setAttribute("aria-expanded",String(!open));directoryToggle.textContent=open?"Ver todos os egressos":"Ocultar lista de egressos";directoryPanel.hidden=open});
 const el=document.getElementById("mapFull");if(!el||typeof L==="undefined")return;
 const map=L.map(el).setView([-12.56,-38.93],8);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap"}).addTo(map);
 const layer=L.layerGroup().addTo(map),trajectoryLayer=L.layerGroup().addTo(map);
 let markerById=new Map(),historicalMode=false,trajectoryPerson=null;
 const search=document.getElementById("alumniName"),local=document.getElementById("alumniLocation"),activity=document.getElementById("alumniActivity"),yearStart=document.getElementById("alumniYearStart"),yearEnd=document.getElementById("alumniYearEnd"),yearOutput=document.getElementById("alumniYearRangeOutput"),yearRange=document.querySelector(".alumni-year-range .dual-range"),clear=document.getElementById("clearAlumniFilters"),count=document.getElementById("alumniResultCount"),list=document.getElementById("alumniResultList"),detail=document.getElementById("mapDetail"),mapLayout=document.getElementById("alumniMapLayout"),historySidebar=document.getElementById("historyRecordsSidebar"),historyRecordsList=document.getElementById("historyRecordsList"),historyRecordsCount=document.getElementById("historyRecordsCount"),historyRecordsPeriod=document.getElementById("historyRecordsPeriod"),modeSummary=document.getElementById("alumniMapModeSummary"),timelineStart=document.getElementById("alumniTimelineStart"),timelineEnd=document.getElementById("alumniTimelineEnd"),timelineOutput=document.getElementById("alumniTimelineRangeOutput"),timelineRange=document.getElementById("alumniTimelineRange"),timelineMode=document.getElementById("alumniTimelineMode"),historyToggle=document.getElementById("toggleHistoryExplorer"),historyPanel=document.getElementById("historyExplorerPanel"),showHistorical=document.getElementById("showHistoricalPeriod"),returnCurrent=document.getElementById("returnCurrentMap");
 const year=v=>String(v||"").match(/\d{4}/)?.[0]||"";const ingressoYear=i=>Number(year(i.ingresso));const unique=a=>[...new Set(a.filter(Boolean))].sort((x,y)=>String(x).localeCompare(String(y),"pt-BR"));
 function updateDualRange(aInput,bInput,output,track,prefix=""){let a=Number(aInput.value),b=Number(bInput.value);if(a>b){if(document.activeElement===aInput)b=a;else a=b;aInput.value=a;bInput.value=b}const min=2006,max=2026;track?.style.setProperty("--range-start",`${((a-min)/(max-min))*100}%`);track?.style.setProperty("--range-end",`${((b-min)/(max-min))*100}%`);if(output)output.textContent=a===b?`${prefix}${a}`:`${a}–${b}`;return{start:a,end:b}}
 function updateYearRange(){return updateDualRange(yearStart,yearEnd,yearOutput,yearRange,"Ingresso em ")}
 function updateTimelineRange(){return updateDualRange(timelineStart,timelineEnd,timelineOutput,timelineRange,"Registros em ")}
 function eligiblePeople(){const q=search.value.trim().toLocaleLowerCase("pt-BR"),{start,end}=updateYearRange(),full=start===2006&&end===2026;return mapData.filter(i=>{const y=ingressoYear(i),yearMatch=Number.isFinite(y)?y>=start&&y<=end:full;return(!q||i.nome.toLocaleLowerCase("pt-BR").includes(q))&&yearMatch})}
 function currentRecord(i){return{id:`${i.id}-current`,person:i,isCurrent:true,ano:2026,cidade:i.cidade,estado:i.estado,pais:i.pais,instituicao:i.local,atividade:i.titulo,lat:i.lat,lng:i.lng,imagem:i.pageImagem||i.imagem,atuacao:i.atuacao||[]}}
 function historicalRecords(i){const{start,end}=updateTimelineRange(),mode=timelineMode.value;return(i.momentos||[]).filter(m=>{const y=Number(m.ano);return mode==="until"?y<=end:y>=start&&y<=end}).map((m,idx)=>({id:`${i.id}-m${idx}`,person:i,isCurrent:false,...m,ano:Number(m.ano),imagem:m.pageImagem||m.imagem}))}
 function baseRecords(){const people=eligiblePeople();return historicalMode?people.flatMap(historicalRecords):people.map(currentRecord)}
 function rebuildSelects(){const records=baseRecords(),oldLoc=local.value,oldAct=activity.value;local.innerHTML='<option value="">Todas as localizações</option>'+unique(records.map(r=>`${r.cidade}|${r.estado}|${r.pais}`)).map(v=>{const[c,e,p]=v.split("|");return`<option value="${v}">${c} — ${e}${p!=="Brasil"?`, ${p}`:""}</option>`}).join("");activity.innerHTML='<option value="">Todas as atuações</option>'+unique(records.flatMap(r=>r.atuacao||[])).map(v=>`<option value="${v}">${v}</option>`).join("");if([...local.options].some(o=>o.value===oldLoc))local.value=oldLoc;if([...activity.options].some(o=>o.value===oldAct))activity.value=oldAct}
 function filteredRecords(){return baseRecords().filter(r=>(!local.value||`${r.cidade}|${r.estado}|${r.pais}`===local.value)&&(!activity.value||(r.atuacao||[]).includes(activity.value)))}
 function recordPopup(r){const tags=(r.atuacao||[]).map(a=>`<span>${a}</span>`).join("");return`<div class="trajectory-popup"><img src="${r.imagem}" alt="${r.person.nome}: ${r.ano}"><strong>${historicalMode?`${r.ano} — `:""}${r.person.nome}</strong><span>${r.cidade} — ${r.instituicao}</span><div class="moment-activity-tags">${tags}</div><p>${r.atividade}</p></div>`}
 function markerIcon(r){return L.divIcon({className:"leaflet-marker-icon",html:`<div class="pin ${r.isCurrent?"egressos":"trajectory activity-match"}"><span>${r.isCurrent?"E":String(r.ano).slice(-2)}</span></div>`,iconSize:[36,36],iconAnchor:[18,36]})}
 function historicalCard(r,index){const tags=(r.atuacao||[]).map(a=>`<span>${a}</span>`).join("");return `<article class="history-record-card" data-record-id="${r.id}"><img src="${r.imagem}" alt="${r.person.nome}: registro de ${r.ano}"><div class="history-record-copy"><div class="history-record-meta"><strong>${r.person.nome}</strong><span>${r.ano} · ${r.cidade}, ${r.estado||r.person.estado}</span></div><div class="moment-activity-tags">${tags}</div><p>${r.atividade}</p><small>${r.instituicao}</small><div class="history-record-actions"><button type="button" class="button-outline" data-focus-record="${r.id}">Ver no mapa</button>${(r.person.momentos||[]).length?`<button type="button" class="button-outline" data-history-trajectory="${r.person.id}">Ver trajetória completa</button>`:""}</div></div></article>`}
 function updateHistorySidebar(records,periodLabel){if(!historySidebar)return;historySidebar.hidden=!historicalMode;detail.hidden=historicalMode;if(mapLayout)mapLayout.classList.toggle("history-sidebar-active",historicalMode);if(!historicalMode)return;historyRecordsCount.textContent=`${records.length} ${records.length===1?"momento":"momentos"}`;historyRecordsPeriod.textContent=`Registros informados ${periodLabel}. Clique em um cartão ou marcador para aproximar o local.`;historyRecordsList.innerHTML=records.length?records.map(historicalCard).join(""):'<p class="empty-results">Nenhum momento registrado corresponde ao período e aos filtros selecionados.</p>';historyRecordsList.querySelectorAll("[data-focus-record]").forEach(btn=>btn.addEventListener("click",()=>{const marker=markerById.get(btn.dataset.focusRecord);if(marker){map.setView(marker.getLatLng(),Math.max(map.getZoom(),9));marker.openPopup()}historyRecordsList.querySelectorAll(".history-record-card").forEach(c=>c.classList.toggle("active",c.dataset.recordId===btn.dataset.focusRecord))}));historyRecordsList.querySelectorAll("[data-history-trajectory]").forEach(btn=>btn.addEventListener("click",()=>showTrajectory(mapData.find(i=>i.id===btn.dataset.historyTrajectory))))}
 function exitTrajectory(shouldRender=true){trajectoryPerson=null;trajectoryLayer.clearLayers();document.body.classList.remove("trajectory-view-active");if(shouldRender)render()}
 function showTrajectory(item){trajectoryPerson=item;historicalMode=false;layer.clearLayers();trajectoryLayer.clearLayers();document.body.classList.add("trajectory-view-active");if(historySidebar)historySidebar.hidden=true;if(detail)detail.hidden=false;if(mapLayout)mapLayout.classList.remove("history-sidebar-active");const pts=[];(item.momentos||[]).forEach((m,idx)=>{pts.push([m.lat,m.lng]);L.marker([m.lat,m.lng],{icon:L.divIcon({className:"leaflet-marker-icon",html:`<div class="pin trajectory"><span>${idx+1}</span></div>`,iconSize:[34,34],iconAnchor:[17,34]})}).addTo(trajectoryLayer).bindPopup(recordPopup({person:item,isCurrent:false,...m,ano:Number(m.ano),imagem:m.pageImagem||m.imagem}))});pts.push([item.lat,item.lng]);L.marker([item.lat,item.lng],{icon:L.divIcon({className:"leaflet-marker-icon",html:'<div class="pin egressos"><span>H</span></div>',iconSize:[38,38],iconAnchor:[19,38]})}).addTo(trajectoryLayer).bindPopup(recordPopup(currentRecord(item)));if(pts.length>1)L.polyline(pts,{weight:4,opacity:.75,dashArray:"8 7"}).addTo(trajectoryLayer);map.fitBounds(L.latLngBounds(pts),{padding:[55,55],maxZoom:10});count.textContent=`Trajetória de ${item.nome}`;modeSummary.textContent="Exibindo somente os momentos registrados deste egresso.";detail.innerHTML=detailHTML(item).replace('Ver trajetória no mapa','Voltar ao mapa geral');const btn=detail.querySelector("[data-trajectory]");if(btn)btn.addEventListener("click",()=>exitTrajectory(true))}
 function bindDetailActions(item){const btn=detail.querySelector("[data-trajectory]");if(btn)btn.addEventListener("click",()=>showTrajectory(item))}
 function selectPerson(item){if(!item)return;if(trajectoryPerson)exitTrajectory(false);detail.innerHTML=detailHTML(item);bindDetailActions(item);const marker=markerById.get(item.id);if(marker){map.setView(marker.getLatLng(),Math.max(map.getZoom(),8));marker.openPopup()}if(directoryPanel&&directoryToggle&&window.innerWidth<900){directoryPanel.hidden=true;directoryToggle.setAttribute("aria-expanded","false");directoryToggle.textContent="Ver todos os egressos"}}
 function render(){if(trajectoryPerson)return;trajectoryLayer.clearLayers();layer.clearLayers();markerById=new Map();rebuildSelects();const records=filteredRecords(),people=unique(records.map(r=>r.person.id)).map(id=>mapData.find(i=>i.id===id)).filter(Boolean).sort((a,b)=>a.nome.localeCompare(b.nome,"pt-BR")),bounds=[];records.forEach(r=>{const m=L.marker([r.lat,r.lng],{icon:markerIcon(r)}).addTo(layer).bindPopup(recordPopup(r));m.on("click",()=>{if(historicalMode&&historyRecordsList){historyRecordsList.querySelectorAll(".history-record-card").forEach(c=>c.classList.toggle("active",c.dataset.recordId===r.id));const card=historyRecordsList.querySelector(`[data-record-id="${r.id}"]`);if(card)card.scrollIntoView({behavior:"smooth",block:"nearest"})}else{detail.innerHTML=detailHTML(r.person);bindDetailActions(r.person)}});markerById.set(historicalMode?r.id:r.person.id,m);bounds.push([r.lat,r.lng])});const tr=updateTimelineRange(),periodLabel=timelineMode.value==="until"?`até ${tr.end}`:(tr.start===tr.end?`em ${tr.start}`:`entre ${tr.start} e ${tr.end}`);count.textContent=historicalMode?`${records.length} ${records.length===1?"registro encontrado":"registros encontrados"} ${periodLabel}`:`${people.length} ${people.length===1?"egresso encontrado":"egressos encontrados"}`;modeSummary.textContent=historicalMode?`Exibindo os registros informados ${periodLabel}.`:`Exibindo a situação atual dos egressos.`;list.innerHTML=people.map((i,index)=>`<button type="button" class="alumni-result" data-id="${i.id}" aria-current="${index===0?"true":"false"}"><span class="alumni-result-initial" aria-hidden="true">${i.nome.trim().charAt(0).toLocaleUpperCase("pt-BR")}</span><span class="alumni-result-copy"><strong>${i.nome}</strong><span>${historicalMode?`Registros ${periodLabel}`:`${i.cidade} — ${i.estado}`}</span><small>${i.titulo}</small></span></button>`).join("")||'<p class="empty-results">Nenhum registro corresponde aos filtros selecionados.</p>';list.querySelectorAll("[data-id]").forEach(b=>b.addEventListener("click",()=>selectPerson(mapData.find(i=>i.id===b.dataset.id))));updateHistorySidebar(records,periodLabel);if(bounds.length)map.fitBounds(L.latLngBounds(bounds),{padding:[45,45],maxZoom:10});if(!historicalMode){detail.hidden=false;if(people.length){detail.innerHTML=detailHTML(people[0]);bindDetailActions(people[0])}else detail.innerHTML=`<h2>Nenhum resultado</h2><p>Altere ou limpe os filtros para visualizar outros egressos.</p>`}setTimeout(()=>map.invalidateSize(),50)}
 search.addEventListener("input",render);[local,activity].forEach(e=>e.addEventListener("change",render));[yearStart,yearEnd].forEach(e=>e.addEventListener("input",render));[timelineStart,timelineEnd].forEach(e=>e.addEventListener("input",()=>{updateTimelineRange();if(historicalMode)render()}));timelineMode.addEventListener("change",()=>{if(historicalMode)render()});historyToggle.addEventListener("click",()=>{const open=historyToggle.getAttribute("aria-expanded")==="true";historyToggle.setAttribute("aria-expanded",String(!open));historyToggle.textContent=open?"Explorar momentos das trajetórias":"Fechar exploração histórica";historyPanel.hidden=open});showHistorical.addEventListener("click",()=>{historicalMode=true;render()});returnCurrent.addEventListener("click",()=>{historicalMode=false;render()});clear.addEventListener("click",()=>{if(trajectoryPerson)exitTrajectory(false);search.value="";local.value="";activity.value="";yearStart.value="2006";yearEnd.value="2026";timelineStart.value="2006";timelineEnd.value="2026";timelineMode.value="during";historicalMode=false;render()});updateTimelineRange();render();setTimeout(()=>map.invalidateSize(),100)
}


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
