# Preparar e enviar projeto ao GitHub

Status: Ready for Review — arquivos preparados e validados para envio.

Solicitação explícita: enviar ao repositório `https://github.com/henriquedowebs/dwsequipamentos.git`.

## Aceite
- [x] Repositório independente na pasta do projeto.
- [x] Recursos usados pelo site copiados para assets, sem dependência do backup WordPress.
- [x] Backup WordPress, wp-config, ZIP, temporários e brandbook original excluídos do versionamento.
- [x] Documentação de execução e limitações.
- [x] Caminhos locais e sintaxe JS válidos.
- [ ] Commit enviado e hash remoto conferido.

## File list
- `.gitignore`
- `README.md`
- `Site/index.html`
- `Site/institucional-anterior.html`
- `Site/styles.css`
- `Site/assets/acervo/` (apenas arquivos referenciados)
- `Site/assets/OFL-Instrument-Sans.txt`
- `Site/LEIA-ME.md`
- `docs/stories/envio-github.md`

## Validação
41 arquivos preparados. Todas as referências HTML/CSS locais correspondem a arquivos rastreados, incluindo a versão anterior. Nenhum arquivo acima de 100 MiB. Backup WordPress, brandbook, temporários e ZIP ignorados. JavaScript válido em `node --check`. Gates npm já tentados nas stories anteriores: indisponíveis por ausência de package.json no site estático. Nenhum build ou código TypeScript. Sem PR; CodeRabbit não se aplica à criação de PR neste envio direto solicitado pelo usuário.
