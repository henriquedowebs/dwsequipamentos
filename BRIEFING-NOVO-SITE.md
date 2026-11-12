# Briefing — Novo site DWS Equipamentos

Data: 10/11/2026. Status: proposta inicial para validação, sem implementação.

## 1. Resumo do projeto

Renovar a presença digital da DWS com uma apresentação clara da empresa, organização das linhas de produtos e um caminho simples para o contato comercial. A direção proposta é um site institucional com catálogo e solicitação de orçamento.

O formato de catálogo é uma hipótese de trabalho baseada na variedade de materiais identificada e na existência de catálogo público. Não representa uma decisão já aprovada sobre o modelo de vendas.

## 2. Fontes e limites da análise

Foram examinados os arquivos do backup em `dws/`, a estrutura de plugins e tema, a biblioteca de mídia e o logotipo existente. Também foi consultado o resultado indexado do catálogo hospedado no domínio público da empresa.

Confirmado no backup:

- Estrutura de WordPress, tema Hello Elementor e plugins Elementor e Elementor Pro presentes. A presença dos arquivos não confirma quais estavam ativos.
- Plugins de migração, analytics e botão de chat presentes.
- Biblioteca com imagens WebP, versões redimensionadas, ícones SVG e logotipos.
- Logotipo com o nome “DWS Peças e Equipamentos LTDA”, azul e verde.
- Fontes locais de várias famílias; a existência dos arquivos não permite determinar a tipografia efetivamente usada nas páginas.

Não foi localizada exportação de banco de dados nos arquivos examinados. Em WordPress, páginas, menus, configurações e conteúdo do Elementor normalmente dependem desse banco. Por isso, este documento não reproduz a arquitetura original nem afirma ter recuperado todos os textos ou produtos.

O acesso à página inicial pública falhou; a consulta por HTTP retornou erro 500. Isso limita esta análise e não comprova uma indisponibilidade permanente. Não houve inspeção visual das páginas renderizadas nem medição de desempenho, acessibilidade, tráfego ou conversão.

Fonte externa: [catálogo DWS no domínio da empresa](https://dwsequipamentos.com.br/wp-content/uploads/2025/11/CATALOGO-DWS-EQUIPAMENTOS-11.pdf). A descrição indexada apresenta fornecimento de EPI, EPC, equipamentos para caminhão-tanque, sinalização, uniformes e ferramentas, localização em Jardim Primavera, Duque de Caxias, e atendimento nacional. Esses dados precisam de confirmação comercial antes da publicação; o PDF completo não foi analisado.

## 3. Entendimento do negócio

A DWS apresenta uma oferta que reúne segurança do trabalho e equipamentos para operações profissionais. O novo site precisa explicar essa amplitude sem fazer o visitante depender de uma lista longa e pouco organizada.

Linhas identificadas na fonte pública:

| Linha                             | Papel sugerido no novo site                                          |
| --------------------------------- | -------------------------------------------------------------------- |
| EPI                               | Acesso próprio para materiais de proteção individual                 |
| EPC                               | Acesso próprio para materiais de proteção coletiva                   |
| Equipamentos para caminhão-tanque | Destaque específico para uma linha especializada                     |
| Sinalização                       | Categoria com produtos e suas aplicações, conforme cadastro validado |
| Uniformes                         | Categoria com informações comerciais confirmadas                     |
| Ferramentas                       | Categoria com agrupamento conforme o catálogo real                   |
|                                   |                                                                      |

Não foram confirmados estoque, preços, marcas representadas, certificações, prazo de entrega ou condições comerciais. Não publicar essas promessas sem documentação.

## 4. Objetivos propostos

1. Explicar rapidamente o que a DWS fornece e para quem atende.
2. Facilitar a localização de uma linha ou produto.
3. Gerar contatos com informações suficientes para preparar um orçamento.
4. Reforçar confiança por meio de dados verificáveis, fotos reais e informações comerciais claras.
5. Permitir que a equipe mantenha produtos e contatos atualizados.

Indicadores sugeridos: contatos recebidos pelo site, solicitações qualificadas, categorias mais consultadas e conversão de visitas em contatos. Metas numéricas dependem de uma linha de base e da capacidade comercial da empresa. Cliques no WhatsApp são sinais de interesse, não vendas confirmadas.

## 5. Público — hipóteses a validar

| Público provável | Necessidade | Resposta proposta do site |
| --- | --- | --- |
| Compradores de empresas | Encontrar fornecedor e solicitar cotação | Categorias claras e contato comercial acessível |
| Profissionais de segurança do trabalho | Identificar materiais adequados | Informações técnicas fornecidas e verificadas pela DWS |
| Transportadoras e operadores de caminhão-tanque | Localizar equipamentos da linha | Entrada direta para a categoria especializada |
| Profissionais de manutenção e operações | Consultar ferramentas e materiais | Navegação simples e identificação precisa dos produtos |

Esses perfis são inferências sobre as linhas identificadas, sem entrevistas ou dados de clientes. Confirmar quais geram mais receita e quais a DWS quer priorizar.

## 6. Posicionamento e comunicação propostos

Direção: uma fornecedora que facilita a compra de peças, equipamentos e materiais para operações profissionais.

Tom de voz: direto, técnico quando necessário e acessível. Explicar o produto e a próxima ação com clareza. Evitar superlativos e alegações como “líder”, “melhor preço”, “entrega imediata” ou “produto certificado” sem comprovação.

Exemplo de mensagem de abertura, ainda como rascunho:

> Peças e equipamentos para a segurança e a operação da sua empresa.
>
> Conheça nossas linhas de EPI, EPC, sinalização, uniformes, ferramentas e equipamentos para caminhão-tanque.

Chamadas sugeridas: “Solicitar orçamento” e “Conhecer produtos”. Se o WhatsApp for confirmado como canal principal, usar “Falar com a DWS” com destino e identificação claros.

## 7. Estrutura proposta do site

| Página | Conteúdo e finalidade |
| --- | --- |
| Início | Apresentação, linhas de produtos, informações de confiança e contato |
| A DWS | História validada, atuação, estrutura e fotos reais |
| Produtos | Visão geral das categorias |
| Categoria | Produtos agrupados e descrição objetiva da linha |
| Produto, se houver dados suficientes | Foto, identificação, especificações verificadas e pedido de orçamento |
| Contato | Canais oficiais, horário, localização e formulário, conforme aprovação |
| Privacidade | Informações correspondentes à coleta de dados efetivamente implementada |

A quantidade de páginas depende da recuperação do catálogo e dos dados disponíveis. Não criar páginas individuais vazias apenas para aumentar o número de URLs.

## 8. Organização sugerida da página inicial

Esta é uma descrição editorial da proposta, sem wireframe ou imagem gerada.

1. **Cabeçalho:** logotipo, navegação curta e ação de contato. No celular, menu simples e acesso fácil ao orçamento.
2. **Abertura:** título que explique a oferta, texto breve, botões de orçamento e produtos e, se aprovada, foto real pertinente da biblioteca. Evitar uma composição que esconda a mensagem principal.
3. **Linhas de produtos:** seis entradas correspondentes às linhas identificadas. Cada uma deve apresentar nome, explicação curta e acesso ao conteúdo da categoria.
4. **Apresentação da DWS:** resumo da empresa e imagem real da estrutura, após validação. Localização e alcance de atendimento devem refletir a operação atual.
5. **Produtos em destaque:** seleção feita pela equipe comercial, com nome legível, imagem e acesso ao orçamento. Não presumir quais são os mais vendidos.
6. **Razões para comprar com a DWS:** apenas diferenciais comprováveis. Omitir a seção enquanto não houver informações suficientes.
7. **Chamada de contato:** orientar o visitante a informar produto, quantidade e cidade para facilitar o atendimento, se esse fluxo for adequado à equipe.
8. **Rodapé:** contatos oficiais, navegação, dados empresariais validados e privacidade.

## 9. Direção visual proposta

Preservar a continuidade da marca com o logotipo existente e avaliar azul e verde como cores principais. Confirmar a versão oficial e a legibilidade antes de definir os tons finais.

Adotar fundo claro, boa separação entre blocos, títulos legíveis e destaque consistente para as ações comerciais. Dar prioridade às fotos reais dos produtos, com enquadramento e tamanho consistentes. Escolher uma tipografia principal com boa leitura em telas pequenas; as fontes encontradas no backup não precisam ser todas reaproveitadas.

A biblioteca deve passar por seleção: existência de uma imagem no backup não comprova qualidade, atualidade, autorização de uso ou correspondência com um produto ainda vendido. Nenhuma nova imagem foi gerada.

## 10. Conteúdo de cada produto

Cadastro mínimo sugerido, sujeito à disponibilidade de dados:

- Nome comercial e categoria.
- Foto correspondente ao item.
- Descrição objetiva e aplicação informada pela DWS.
- Modelo, referência, medidas, materiais e variações quando aplicáveis.
- Marca e documentação técnica quando verificadas.
- Ação de orçamento com identificação do produto.

Informações de proteção, certificação e adequação de uso devem seguir documentação válida do fabricante. Não deduzir especificações por fotografias.

## 11. Escopo inicial proposto e decisões pendentes

Priorizar apresentação institucional, categorias, contato e um catálogo compatível com os dados disponíveis. Busca, filtros e páginas detalhadas devem ser avaliados depois do inventário de produtos.

Carrinho, pagamento online, estoque sincronizado, área do cliente, integrações comerciais e automações não têm necessidade confirmada neste levantamento. Só devem entrar no escopo após definição do processo de venda.

WordPress é a tecnologia encontrada no backup. A plataforma do novo site permanece em aberto e deve considerar quem atualizará o conteúdo, volume do catálogo, hospedagem e manutenção.

## 12. Proposta de cuidados na construção e migração

- Projetar a experiência para celular e computador, com navegação por teclado, contraste e formulários compreensíveis.
- Dimensionar e otimizar as imagens selecionadas, evitando carregar versões grandes sem necessidade.
- Criar títulos e descrições específicos para páginas com conteúdo real.
- Inventariar URLs antigas quando houver acesso ao banco ou a uma fonte confiável, para planejar redirecionamentos.
- Confirmar domínio, hospedagem, canais comerciais e recebimento de formulários antes da publicação.
- Configurar medição somente após definir quais eventos comerciais interessam e quais dados serão coletados.

Esses itens são recomendações de projeto, não resultados de uma auditoria técnica do site existente. A aplicação depende da aprovação da proposta.

## 13. Materiais necessários

1. Exportação do banco de dados ou exportação das páginas do Elementor, caso seja necessário recuperar o conteúdo original.
2. Catálogo atualizado e relação dos produtos prioritários.
3. WhatsApp, telefones, e-mail, endereço e horários oficiais.
4. História da empresa e diferenciais que possam ser comprovados.
5. Logotipo oficial e fotos autorizadas da empresa e dos produtos.
6. Condições reais de atendimento, região de atuação e entrega.
7. Especificações técnicas e documentação dos produtos que serão publicados.

## 14. Perguntas para fechar o briefing

1. O site deve receber pedidos de orçamento ou vender com pagamento online?
2. Qual linha de produto tem maior prioridade comercial?
3. Quem é o cliente principal e qual região deve receber mais atenção?
4. A marca atual deve ser preservada integralmente ou pode evoluir visualmente?
5. Qual canal deve receber os contatos e quem fará o atendimento?
6. Quantos produtos estarão disponíveis no lançamento e quem atualizará o catálogo?
7. Há preferência por WordPress ou outra plataforma, orçamento e prazo definidos?

## 15. Entregas sugeridas após validação

Briefing aprovado → inventário de conteúdo e produtos → mapa de páginas → textos e descritivo estrutural → layout → implementação → validação → publicação.

Este documento entrega o levantamento e a proposta para discussão. Nenhum arquivo do site original foi alterado.
