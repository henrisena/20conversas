# Memorial 20 anos — História UFRB v2

Versão reconstruída do site.

## Como testar

1. Descompacte o ZIP.
2. Abra `index.html`.
3. Para o mapa real aparecer, use internet ativa.

## O que já tem

- imagem de Cachoeira na abertura;
- páginas independentes para os tópicos;
- página própria de depoimentos;
- aba/página de mapa colaborativo com mapa real;
- exemplo de egressa no doutorado da UFBA em 2015;
- exemplo de professora Camila Santiago;
- galeria, documentos, projetos e linha do tempo.

## Próxima etapa

Podemos integrar o mapa a Google Forms + Google Sheets para alimentação colaborativa.


## Versão v3 — Professores
Foram acrescentadas páginas individuais para Walter Fraga, Isabel Reis, Fabrício Lyrio, Martha e Sérgio, usando as fotografias fornecidas.


## Protótipo para apresentação aos colegas

Esta versão reúne, como exemplos de navegação:

- página inicial com a imagem de Cachoeira;
- páginas individuais de Camila Santiago, Walter Fraga, Isabel Reis, Fabrício Lyrio, Martha e Sérgio;
- página de Produção Intelectual com capas de livros e artigos demonstrativos;
- mapa colaborativo real com exemplos de ensino, pesquisa, extensão e egressos;
- páginas de depoimentos, egressos, linha do tempo, galeria e documentos.

Os textos, datas, artigos e alguns dados são provisórios ou fictícios. O objetivo é demonstrar visualmente como o memorial poderá funcionar.


## Protótipo 0.5
Novo título da home e imagens históricas nas páginas O Curso, Projetos, Linha do Tempo, Mapa e Galeria. Professores, Produção Intelectual e Mapa foram mantidos.


## Protótipo 0.6
As fotografias históricas agora também aparecem visivelmente na página inicial, dentro dos cartões de navegação.


## Protótipo 0.7 — Aberturas com imagens

Sem alterar os conteúdos e funcionalidades, foram adicionadas imagens de abertura em:
- Professores: mosaico com Camila, Walter, Isabel, Fabrício, Martha e Sérgio;
- Depoimentos: mosaico de retratos;
- Produção Intelectual: composição com as capas fornecidas;
- Egressos, Pesquisa e Documentos: fotografias históricas já fornecidas no protótipo;
- permanecem as aberturas já aplicadas em O Curso, Projetos, Linha do Tempo, Mapa e Galeria.


## Protótipo 0.8 — aberturas corrigidas

As páginas internas agora abrem efetivamente com uma fotografia ampla, título e subtítulo
sobrepostos, seguindo o mesmo princípio visual da home. O conteúdo e as funcionalidades
das páginas foram preservados.


## Protótipo 0.9 — correção dos caminhos das imagens

O problema foi identificado: as imagens chamadas pelo CSS usavam `../assets/`,
mas o arquivo `style.css` está na raiz do site. O navegador procurava as fotografias
fora da pasta do projeto. Os caminhos foram corrigidos para `assets/` e foi acrescentada
uma versão ao link do CSS para evitar cache antigo.


## Protótipo 0.10 — Depoimentos do YouTube

A página de depoimentos foi reduzida aos dois vídeos selecionados:
- D-QxZgPeKeM
- 83XpTUB7lNg

As miniaturas oficiais aparecem no site. Ao clicar, o vídeo abre no YouTube, evitando o erro 153 ao testar o site diretamente pelo arquivo `index.html`.


## Protótipo 0.11 — O curso em números

Nova página: `pages/curso-em-numeros.html`

Dados agregados: `data/curso-numeros.json`

Interatividade: `curso-numeros.js`

A página foi construída com dados agregados dos quatro relatórios do SIGAA fornecidos em 28/07/2026. Não publica nomes, matrículas, e-mails ou telefones. Para testar localmente os gráficos, use um servidor local; no GitHub Pages eles funcionam normalmente.


## Protótipo 0.12 — interações funcionando localmente

Os dados do painel foram incorporados diretamente em `curso-numeros.js`.
Assim, não há mais `fetch` de arquivo JSON e as interações funcionam ao abrir os HTMLs diretamente no computador.

Para testar:
1. Abra `index.html`.
2. Clique no bloco “O curso em números”.
3. Use os botões “Ingressantes” e “Ativos por ano de ingresso”.
4. Use os filtros de turno e período na seção “As turmas de ingresso”.


## Protótipo 0.13 — Encontre sua história

A página `pages/curso-em-numeros.html` agora contém uma busca experimental com dez pessoas:
- cinco egressos;
- cinco estudantes ativos.

A interação permite filtrar, pesquisar e visualizar um cartão de perspectiva histórica. Nenhuma matrícula, nota, e-mail ou telefone foi incorporado ao site. Os nomes são uma amostra para teste e devem ser substituídos por participantes autorizados antes da publicação definitiva.


## Protótipo 0.14 — ciclo acadêmico completo

A página “O curso em números” foi reorganizada para mostrar:
- a entrada das gerações;
- o percurso das turmas;
- a formação anual e acumulada dos egressos;
- a comparação entre duas turmas;
- um controle temporal de 2006 a 2026;
- a seção “Encontre sua história”, preservada com os dez exemplos.

Os números detalhados por turma e por ano de conclusão usados nas novas interações são demonstrativos. Devem ser substituídos pelos dados consolidados antes da publicação pública.


## Versão 0.16
- percurso acadêmico ampliado para todas as 50 turmas dos relatórios SIGAA;
- base completa de 310 TCCs incorporada ao JavaScript para funcionar também sem servidor local;
- imagem de abertura dos TCCs substituída por fotografia histórica de Cachoeira;
- alinhamento da navegação superior revisado.

Versão 18: substituída exclusivamente a imagem de abertura da página Mapa Colaborativo pela imagem histórica fornecida pelo usuário.


Versão 39: cartões da página Egressos usam retratos individuais; páginas individuais e mapa usam a mesma fotografia contextual de cada egresso.


Versão 40: retratos individuais mantidos na listagem; fotografias contextuais aplicadas diretamente como capa dos seis perfis e reutilizadas nos pop-ups do mapa.
