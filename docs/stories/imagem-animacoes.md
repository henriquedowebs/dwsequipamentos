# Imagem de postos e animações

Status: concluída para análise local. Solicitação explícita do usuário.

## Aceite
- [x] Substituir somente a imagem do segmento Postos de combustível pela foto fornecida.
- [x] Entradas suaves e sequenciais, interações de cards e botões, abertura do FAQ.
- [x] Respeitar movimento reduzido e manter navegação, formulário e conteúdo acessíveis.
- [x] Validar desktop, celular e ausência de erros.

## File list
- `Site/index.html`
- `Site/styles.css`
- `Site/app.js`
- `Site/assets/posto-combustivel.jpg`
- `Site/LEIA-ME.md`
- `docs/stories/imagem-animacoes.md`

## Validação
Capturas inspecionadas a 1440px e 390px. Foto local carregada com largura natural de 1500px. Sem overflow horizontal no celular. Inicialização de 26 elementos de revelação conferida e sem erros no console. Sintaxe JS validada com `node --check`. Movimento reduzido implementado por media query e listener; a preferência do sistema não foi alterada durante a verificação. Sem novas dependências. Gates `npm run lint`, `npm run typecheck` e `npm test` tentados; ENOENT por inexistência de package.json no site estático.
