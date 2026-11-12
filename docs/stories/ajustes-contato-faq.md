# Ajustes solicitados nas capturas

Status: concluída para análise local. Alterações específicas explicitamente autorizadas pelo usuário.

## Aceite
- [x] Ícones relacionados ao conteúdo dos dois catálogos.
- [x] Contatos e endereço na seção de solicitação e no rodapé.
- [x] Remover moldura azul externa em todas as larguras.
- [x] FAQ expansível entre solicitação e rodapé.
- [x] Verificar desktop, celular, links e FAQ.

## Fontes
Catálogo local `Catalagos/CATÁLOGO DWS EQUIPAMENTOS (11).pdf`: página 3, foto da fachada, apresenta 3491-5694 e 96530-5624; página 39 apresenta localização da loja na Rua Projetada, 43, Jardim Primavera, Duque de Caxias/RJ. DDD 21 correspondente à localização e às consultas públicas. CEP omitido por divergência entre diretórios públicos. Nenhum e-mail inventado. Número móvel apresentado como telefone, sem presumir que recebe WhatsApp. O fluxo de WhatsApp continua pendente de confirmação.

## File list
- `Site/index.html`
- `Site/styles.css`
- `Site/LEIA-ME.md`
- `docs/stories/ajustes-contato-faq.md`

## Validação
Capturas desktop 1440px e celular 390px inspecionadas. Sem overflow horizontal; contêiner ocupa toda largura útil da página. Seis itens FAQ com abertura nativa testada por clique. Links de arquivos locais válidos; telefones usam protocolo tel e mapa usa consulta com endereço. Sintaxe JS validada com node --check. `npm run lint`, `npm run typecheck` e `npm test` tentados: ENOENT por ausência de package.json nesta página estática.
