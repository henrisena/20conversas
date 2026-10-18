/* Recôncavo na pesquisa discente — leitura exploratória dos títulos (2026).
   Contagens de registros, não de projetos independentes; revisão documental pendente. */
(function(){
'use strict';
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const lugares=[
 ['Cachoeira',/\bcachoeira\b/],['São Félix',/\bsao felix\b/],['Muritiba',/\bmuritiba\b/],
 ['Maragogipe',/\bmaragogipe\b/],['Cruz das Almas',/\bcruz das almas\b/],
 ['São Gonçalo dos Campos',/\bsao goncalo dos campos\b/],['Governador Mangabeira',/\bgovernador mangabeira\b/],
 ['Conceição da Feira',/\bconceicao da feira\b/],['Santo Amaro',/\bsanto amaro\b/],
 ['Saubara',/\bsaubara\b/],['São Francisco do Conde',/\bsao francisco do conde\b/],
 ['Cabaceiras do Paraguaçu',/\bcabaceiras do paraguacu\b/],['Sapeaçu',/\bsapeacu\b/],
 ['Santo Antônio de Jesus',/\bsanto antonio de jesus\b/],['Vale do Iguape',/\b(vale|bacia) (do |e )?iguape\b/],
 ['Rio Paraguaçu',/\bparaguacu\b/],['Recôncavo',/\breconcavo\b/]
];
const eixos=[
 ['Escravidão e pós-abolição',/escrav|abolic|alforria|libert|cativ|negociantes de escravos/],
 ['Educação e ensino',/educa|escola|colegio|ensino|professor|didatic|pedagog|alfabet|instituic.*educativ/],
 ['Comunidades e relações étnico-raciais',/quilomb|afric|negra|negro|indigen|comunidade|marisqueir/],
 ['Religiões e devoções',/igreja|relig|devo|carmo|irmandade|capela|sagrado|santa casa|rezadeir|benzed|batism|testament|morte/],
 ['Cultura, memória e patrimônio',/memori|patrimon|festa|carnaval|mascara|fotograf|musica|arte|iconograf|azulej|tradicao|cultura/],
 ['Trabalho e economia',/trabalh|operari|charut|fumageir|ferrovia|fabrica|engenho|econom|comerc|propriedade|agric|tabuleir/],
 ['Cidades e política',/cidade|urbana|municip|politic|independencia|imprensa|jornal|crime|criminal|rua/]
];
function classify(r,tipo){
 const title=norm(r.titulo);const loc=lugares.filter(([,re])=>re.test(title)).map(([name])=>name);
 // A ocorrência no título é indício de recorte territorial, não prova de análise do lugar.
 if(!loc.length)return null;
 const temas=eixos.filter(([,re])=>re.test(title)).map(([name])=>name);
 return {tipo,ano:r.ano,autor:r.autor||r.estudante,orientador:r.orientador,titulo:r.titulo,locais:loc,temas:temas.length?temas:['Outros temas']};
}
const escape=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function init(){
 const root=document.getElementById('discente-reconcavo');if(!root)return;
 if(typeof TCC_DATA==='undefined'||typeof IC_DATA==='undefined'){root.textContent='Os dados da pesquisa discente não puderam ser carregados.';return;}
 const tcc=TCC_DATA.map(r=>classify(r,'TCC')).filter(Boolean),ic=IC_DATA.map(r=>classify(r,'IC')).filter(Boolean),all=[...tcc,...ic];
 const pct=(n,d)=>(100*n/d).toLocaleString('pt-BR',{maximumFractionDigits:1})+'%';
 const state={tipo:'todos',tema:'todos',local:'todos'};
 const card=(label,n,total)=>'<article class="rec-num"><strong>'+n+'</strong><span>'+label+'</span><small>'+pct(n,total)+' dos '+total+' registros do catálogo</small></article>';
 root.innerHTML='<div class="rec-head"><p class="eyebrow">Território e formação histórica</p><h2>O Recôncavo na pesquisa discente</h2><p>Como os estudantes do curso investigam as experiências, os sujeitos e os lugares do Recôncavo? Esta leitura exploratória aproxima os títulos de trabalhos de conclusão de curso e iniciações científicas das localidades e questões históricas da região.</p></div>'+
 '<div class="rec-numbers">'+card('TCCs com referência regional no título',tcc.length,TCC_DATA.length)+card('Registros de IC com referência regional no título',ic.length,IC_DATA.length)+'</div>'+
 '<p class="rec-caution"><strong>Leitura preliminar:</strong> os números indicam títulos que mencionam explicitamente o Recôncavo ou localidades selecionadas. Não equivalem ainda ao número definitivo de pesquisas cujo objeto é a região. Trabalhos sem referência territorial no título podem tratar do Recôncavo; outros podem apenas mencioná-lo. A contagem de ICs é de registros de orientação, que podem compartilhar um mesmo projeto.</p>'+
 '<div class="rec-views"><div><h3>Quando o Recôncavo aparece?</h3><p>Distribuição dos registros identificados por ano.</p><div id="rec-years"></div></div><div><h3>Quais questões são pesquisadas?</h3><p>Temas inferidos dos títulos; um trabalho pode aparecer em mais de um eixo.</p><div id="rec-themes"></div></div></div>'+
 '<div class="rec-places"><h3>Localidades mencionadas</h3><p>Ocorrências explícitas nos títulos, sem pressupor cobertura de todo o território.</p><div id="rec-locations"></div></div>'+
 '<div class="rec-results"><div><h3>Explore os trabalhos identificados</h3><p>Consulte os registros que fundamentam esta leitura.</p></div><div class="rec-filters"><label>Modalidade <select id="rec-tipo"><option value="todos">TCCs e ICs</option><option value="TCC">TCCs</option><option value="IC">Iniciação científica</option></select></label><label>Tema <select id="rec-tema"><option value="todos">Todos os temas</option></select></label><label>Localidade <select id="rec-local"><option value="todos">Todas as localidades</option></select></label></div><p id="rec-count" aria-live="polite"></p><div id="rec-list"></div><button id="rec-more" type="button">Mostrar mais registros</button></div>'+
 '<div class="rec-method"><h3>Como foi feito o levantamento?</h3><p>A base é composta pelos títulos e demais metadados já publicados nos catálogos de TCCs e iniciação científica do Memorial, extraídos dos currículos Lattes. A triagem identifica referências explícitas a localidades do Recôncavo e a expressões territoriais, como Vale do Iguape e rio Paraguaçu. Os eixos temáticos são agrupamentos editoriais baseados em palavras dos títulos. As localidades e os eixos podem se sobrepor; não devem ser somados como pesquisas independentes.</p><p>Esta etapa não verifica resumos, textos integrais, arquivos escolares ou a delimitação geográfica adotada pelos autores. Uma revisão qualitativa posterior deverá separar o Recôncavo como objeto histórico, como território de pesquisa ou como referência secundária e confirmar casos que não mencionam localidades no título.</p></div>';
 const opts=(id,values)=>{const el=document.getElementById(id);values.forEach(x=>{const op=document.createElement('option');op.value=x;op.textContent=x;el.append(op)})};
 opts('rec-tema',eixos.map(x=>x[0]).concat('Outros temas'));
 opts('rec-local',lugares.map(x=>x[0]));
 const bar=(name,n,max)=>'<div class="rec-bar"><span>'+escape(name)+'</span><div class="rec-bar-track"><div style="width:'+Math.max(2,100*n/max)+'%"></div></div><strong>'+n+'</strong></div>';
 const counts=(items,fn)=>{const m=new Map();items.forEach(r=>fn(r).forEach(x=>m.set(x,(m.get(x)||0)+1)));return [...m].sort((a,b)=>b[1]-a[1])};
 const themes=counts(all,r=>r.temas),locs=counts(all,r=>r.locais);
 document.getElementById('rec-themes').innerHTML=themes.map(([a,b])=>bar(a,b,Math.max(1,themes[0][1]))).join('');
 document.getElementById('rec-locations').innerHTML=locs.map(([a,b])=>bar(a,b,Math.max(1,locs[0][1]))).join('');
 const years=[...new Set(all.map(x=>x.ano))].sort((a,b)=>a-b),ymax=Math.max(1,...years.map(y=>all.filter(r=>r.ano===y).length));
 document.getElementById('rec-years').innerHTML=years.map(y=>bar(String(y),all.filter(r=>r.ano===y).length,ymax)).join('');
 let limit=15;
 const filtered=()=>all.filter(r=>(state.tipo==='todos'||r.tipo===state.tipo)&&(state.tema==='todos'||r.temas.includes(state.tema))&&(state.local==='todos'||r.locais.includes(state.local))).sort((a,b)=>b.ano-a.ano||a.titulo.localeCompare(b.titulo,'pt-BR'));
 function render(){const arr=filtered();document.getElementById('rec-count').textContent=arr.length+' registros encontrados nesta triagem';document.getElementById('rec-list').innerHTML=arr.slice(0,limit).map(r=>'<article class="rec-item"><span>'+r.tipo+' · '+escape(r.ano)+' · '+escape(r.locais.join(', '))+'</span><h4>'+escape(r.titulo)+'</h4><p>'+escape(r.autor)+' · Orientação: '+escape(r.orientador)+'</p></article>').join('')||'<p>Nenhum registro corresponde aos filtros.</p>';document.getElementById('rec-more').hidden=arr.length<=limit}
 [['rec-tipo','tipo'],['rec-tema','tema'],['rec-local','local']].forEach(([id,key])=>document.getElementById(id).addEventListener('change',e=>{state[key]=e.target.value;limit=15;render()}));
 document.getElementById('rec-more').addEventListener('click',()=>{limit+=15;render()});render();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();