(function(){
  'use strict';
  const items = Array.isArray(window.PRODUCAO_DOCENTES) ? window.PRODUCAO_DOCENTES : [];
  const $ = sel => document.querySelector(sel);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  let currentType = 'Todos';

  function coverSrc(item){
    return item && item.imagem ? item.imagem : '../assets/producao/capa-nao-localizada.svg';
  }

  function renderStats(){
    const docentes = new Set(items.flatMap(i => Array.isArray(i.docentes) ? i.docentes : []));
    $('#countAll').textContent = items.length;
    $('#countBooks').textContent = items.filter(i => i.tipo === 'Livro').length;
    $('#countArticles').textContent = items.filter(i => i.tipo === 'Artigo').length;
    $('#countAuthors').textContent = docentes.size;
  }

  function filteredItems(){
    const field = $('#productionSearch');
    const q = (field ? field.value : '').toLowerCase().trim();
    return items.filter(i => {
      const tipoOk = currentType === 'Todos' || i.tipo === currentType;
      const docentes = Array.isArray(i.docentes) ? i.docentes.join(' ') : '';
      const temas = Array.isArray(i.temas) ? i.temas.join(' ') : '';
      const participacoes = i.participacoes && typeof i.participacoes === 'object' ? Object.values(i.participacoes).join(' ') : '';
      const haystack = [i.titulo, i.subtitulo, docentes, i.editora, temas, participacoes].filter(Boolean).join(' ').toLowerCase();
      return tipoOk && haystack.includes(q);
    }).sort((a, b) => String(a.titulo || '').localeCompare(String(b.titulo || ''), 'pt-BR', {
      sensitivity: 'base',
      ignorePunctuation: true
    }));
  }

  function cardHtml(i){
    const title = esc(i.titulo || 'Título em atualização');
    const docentes = Array.isArray(i.docentes) ? esc(i.docentes.join('; ')) : '';
    const meta = esc([i.ano, i.editora].filter(Boolean).join(' · ') || 'Dados em atualização');
    const slug = encodeURIComponent(i.slug || '');
    return `<article class="book-card" tabindex="0" data-book-slug="${slug}">
      <div class="book-cover-wrap">
        <img src="${coverSrc(i)}" alt="Capa de ${title}" loading="lazy" onerror="this.onerror=null;this.src='../assets/producao/capa-nao-localizada.svg';">
        <span class="book-hover">Ver detalhes</span>
      </div>
      <div class="book-card-copy">
        <span class="production-type">${esc(i.tipo || 'Livro')}</span>
        <h3>${title}</h3>
        <p>${docentes}</p>
        <small>${meta}</small>
      </div>
    </article>`;
  }

  function renderBooks(){
    const grid = $('#bookGrid');
    if(!grid) return;
    const filtered = filteredItems();
    grid.innerHTML = filtered.length ? filtered.map(cardHtml).join('') : '<p class="muted">Nenhuma produção encontrada.</p>';
  }

  function openBook(slug, push=true){
    const decoded = decodeURIComponent(slug || '');
    const i = items.find(x => x.slug === decoded);
    if(!i) return;
    const roles = (Array.isArray(i.docentes) ? i.docentes : []).map(n => `${esc(n)} — ${esc((i.participacoes && i.participacoes[n]) || 'Participação')}`).join('<br>');
    const meta = [
      i.ano && `<p><strong>Ano:</strong> ${esc(i.ano)}</p>`,
      i.editora && `<p><strong>Editora:</strong> ${esc(i.editora)}</p>`,
      i.isbn && `<p><strong>ISBN:</strong> ${esc(i.isbn)}</p>`,
      i.paginas && `<p><strong>Páginas:</strong> ${esc(i.paginas)}</p>`
    ].filter(Boolean).join('');
    const note = i.observacao ? `<p class="book-note"><strong>Nota:</strong> ${esc(i.observacao)}</p>` : '';
    const themes = Array.isArray(i.temas) ? i.temas.map(t => `<span>${esc(t)}</span>`).join('') : '';
    const actions = i.link ? `<a class="button-outline" href="${esc(i.link)}" target="_blank" rel="noopener noreferrer">Ver livro</a>` : '<span class="book-link-pending">Link em atualização</span>';
    const body = $('#bookModalBody');
    if(!body) return;
    body.innerHTML = `<div class="book-detail">
      <img src="${coverSrc(i)}" alt="Capa de ${esc(i.titulo)}" onerror="this.onerror=null;this.src='../assets/producao/capa-nao-localizada.svg';">
      <div>
        <span class="production-type">${esc(i.tipo || 'Livro')}</span>
        <h2>${esc(i.titulo)}</h2>
        ${i.subtitulo ? `<h3>${esc(i.subtitulo)}</h3>` : ''}
        <p><strong>Participação docente:</strong><br>${roles}</p>
        ${meta}
        ${i.resumo ? `<p>${esc(i.resumo)}</p>` : ''}
        ${note}
        <div class="theme-list">${themes}</div>
        <div class="book-actions">${actions}</div>
      </div>
    </div>`;
    const modal = $('#bookModal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    if(push && location.hash !== `#${decoded}`) history.replaceState(null,'',`#${decoded}`);
  }

  function closeModal(){
    const modal = $('#bookModal');
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    if(location.hash) history.replaceState(null,'',location.pathname + location.search);
  }

  document.addEventListener('click', e => {
    const card = e.target.closest('[data-book-slug]');
    if(card) openBook(card.dataset.bookSlug);
    if(e.target.closest('[data-close-modal]')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if(e.key === 'Enter' && e.target.matches('[data-book-slug]')) openBook(e.target.dataset.bookSlug);
    if(e.key === 'Escape') closeModal();
  });
  $('#productionSearch')?.addEventListener('input', renderBooks);
  document.querySelectorAll('[data-type]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    renderBooks();
  }));

  renderStats();
  renderBooks();
  if(location.hash) openBook(location.hash.slice(1), false);
})();
