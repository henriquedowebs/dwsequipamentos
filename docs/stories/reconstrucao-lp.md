# Reconstrução aproximada da LP institucional

Status: concluída. Solicitação aprovada pelo usuário: montar estrutura semelhante com o material disponível.

## Aceite
- [x] LP local com apresentação, empresa, linhas de produtos e contato.
- [x] Usar somente imagens existentes e preservar backup.
- [x] Identificar a página como aproximação, sem alegar recuperação fiel.
- [x] Navegação adaptada a celular e links locais válidos.

## File list
- `Site/index.html`
- `Site/LEIA-ME.md`
- `docs/stories/reconstrucao-lp.md`

## Validação
Links locais e arquivos de mídia/PDF conferidos. Página servida por HTTP e aberta no navegador Orca; menu móvel abre e fecha via Escape, sem imagens quebradas ou overflow horizontal a 390px. Captura móvel inspecionada. Prévia desktop aberta a 1366px. `npm run lint`, `npm run typecheck` e `npm test` foram tentados e não executam: ENOENT, sem package.json nesta página estática. Não há código TypeScript nem dependências npm.
