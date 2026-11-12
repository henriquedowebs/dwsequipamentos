# Prévia DWS — layout baseado na referência

A versão principal em `index.html` segue a referência enviada em 12/11: hero diagonal, grade de seis categorias, apresentação da empresa, seção escura de segmentos e rodapé. Foram adicionados acesso aos PDFs e formulário de solicitação. Os cards preenchem a linha no formulário; os dados geram um resumo local copiável. O WhatsApp ainda depende do número oficial, não há envio de dados.

Design system: Instrument Sans Regular, Medium, Semibold e Bold; azul `#002855`, verde `#22A300`, off-white `#F7F6ED`, preto `#27282A` e azul escuro `#062644`. As cores foram identificadas nos preenchimentos do PDF de apresentação da marca. Semibold é um peso complementar para a interface. Fonte baixada de Google Fonts e servida localmente. Logotipo e imagens de produtos são do backup; não houve geração de imagens.

## Estrutura da versão principal

Animações: entrada sequencial do hero, revelação única por IntersectionObserver, interações suaves em cards/botões/links e abertura do FAQ. Sem bibliotecas adicionais e sem alterar a rolagem nativa. `prefers-reduced-motion` desativa os movimentos; sem JavaScript o conteúdo continua visível. A foto do segmento Postos de combustível é a imagem enviada pelo usuário, copiada para `assets/posto-combustivel.jpg`.

Atualização das capturas do usuário: contêiner sem moldura externa; catálogos com ícones vetoriais de capacete e abastecimento; endereço e telefones do material da DWS na seção de contato e rodapé; FAQ de seis perguntas antes do rodapé. Consulte `docs/stories/ajustes-contato-faq.md` para rastreabilidade dos contatos. WhatsApp permanece pendente de confirmação; os telefones têm links para ligação.

- Hero: texto à esquerda e equipamentos à direita sobre recorte diagonal claro; botão para as linhas de produtos.
- Grade: três colunas e duas linhas no desktop, duas colunas no celular; cada card apresenta linha, produto e ação de solicitação.
- Empresa: apresentação à esquerda, três pilares Protege/Move/Conecta abaixo e foto vertical à direita. Os pilares substituem os números sem comprovação da referência.
- Segmentos: fundo fotográfico escuro com sobreposição azul, texto e três entradas com imagens.
- Catálogos: dois PDFs existentes e suas quantidades de páginas.
- Solicitação: identificação, contato, linha e descrição; resumo local.
- Rodapé: navegação, localização e perfil social.

## Versão anterior

A primeira reconstrução foi preservada em `institucional-anterior.html` e continua independente dos novos CSS e JavaScript.

---

Abra `index.html` no navegador. As imagens usadas foram copiadas para `assets/acervo/`; o site não depende do backup WordPress. Os catálogos permanecem em `../Catalagos/`; mantenha a estrutura do projeto.

É uma reconstrução aproximada solicitada pelo usuário, não a restauração do Elementor. Textos e ordem das seções foram recompostos; fotografias e logotipo são do backup. A tipografia e o layout não têm fidelidade histórica comprovada. Nenhuma imagem foi gerada.

Estrutura: cabeçalho → abertura com banner antigo → resumo das linhas → apresentação da empresa → categorias → chamada institucional → PDFs → contato → rodapé.

O WhatsApp não foi ativado porque não há número oficial validado. Não há envio de dados nem compra online. Esta prévia é separada do projeto do novo catálogo com formulário.

Para servir localmente, a partir da pasta `dwsequipamentos`: `python -m http.server 8765 --bind 127.0.0.1`. Acesse `http://127.0.0.1:8765/Site/`.
