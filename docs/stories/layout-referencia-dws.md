# LP DWS baseada na referência visual

Status: concluída para análise local.

Solicitação: reproduzir uma composição semelhante à imagem enviada, com textos e design system da DWS. Implementação explicitamente autorizada pelo usuário.

## Aceite
- [x] Hero com texto à esquerda, produto à direita e recorte diagonal.
- [x] Grade de seis entradas, apresentação institucional, seção escura e rodapé.
- [x] Instrument Sans e cores identificadas no brandbook.
- [x] Usar imagens existentes; manter cópia da LP anterior.
- [x] Conferir desktop, celular, links e interações.

## File list
- `Site/index.html`
- `Site/styles.css`
- `Site/app.js`
- `Site/assets/instrument-sans-{0,1,2,3}.ttf`
- `Site/institucional-anterior.html`
- `Site/LEIA-ME.md`
- `docs/stories/layout-referencia-dws.md`

## Validação
Inspeção por capturas desktop (1440px) e celular (390px); menu abre/fecha a 320px; sem overflow horizontal. Todos os arquivos locais de imagens, fontes, CSS, JS e PDFs existem. Imagens carregadas e fontes carregadas no navegador. Sintaxe de JavaScript validada com `node --check`. Sem erros de console. Testados seleção automática de categoria, validação nativa e geração do resumo do formulário. Sem envio externo de dados.

`npm run lint`, `npm run typecheck` e `npm test` foram tentados e retornaram ENOENT: esta página estática não tem package.json. Sem scripts npm ou TypeScript para executar.

Limitação conhecida: WhatsApp não ativado sem confirmação do número oficial. O resumo pode ser copiado. A imagem de referência orienta a composição; fotografias e produtos são os arquivos existentes da DWS.
