# DWS Equipamentos

Site institucional e catálogo da DWS Peças e Equipamentos, em HTML, CSS e JavaScript, com arquivos locais e sem dependências de WordPress.

## Executar localmente

Na raiz do projeto:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8765/Site/`. Também é possível abrir `Site/index.html` diretamente no navegador. Mantenha os diretórios `Site` e `Catalagos` juntos.

## Estrutura

- `Site/index.html`: página atual.
- `Site/styles.css`: identidade visual, responsividade e animações.
- `Site/app.js`: navegação, seleção de linha, resumo da solicitação e animações progressivas.
- `Site/assets/`: fontes, fotografias e recursos usados pelo site.
- `Site/institucional-anterior.html`: primeira reconstrução institucional preservada.
- `Catalagos/`: catálogos em PDF usados pela página.
- `docs/stories/`: registro dos trabalhos e verificações.
- `BRIEFING-NOVO-SITE.md`: briefing e decisões iniciais.

## Atendimento e formulário

O formulário gera um resumo local que pode ser copiado. Não há checkout, pagamento, backend ou envio automático de dados. O redirecionamento ao WhatsApp ainda depende da confirmação do número oficial. Telefones, endereço, Instagram e links para o mapa estão na página.

## Validação

```sh
node --check Site/app.js
```

Foram conferidos os caminhos dos arquivos locais, imagens, fontes, responsividade e interações no navegador. Não há `package.json`, TypeScript ou scripts npm neste projeto estático; `npm run lint`, `npm run typecheck` e `npm test` não se aplicam à estrutura atual.

## Materiais

Fotografias, logotipo e imagens de produtos pertencem ao acervo fornecido para a DWS. Instrument Sans é distribuída sob SIL Open Font License, incluída em `Site/assets/OFL-Instrument-Sans.txt`. Os arquivos de backup WordPress, o ZIP original, os temporários e o PDF original do brandbook não fazem parte deste repositório.
