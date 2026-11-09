# Ficha de execução — Vazão Engenharia e Montagem · Inspeção NR13

> Origem: migração da LP em HTML (mockups com a identidade do site da Vazão, importada em 06/11/2026) para o padrão B2 v2.8.0. Conteúdo tirado da página anterior, enxugado aos limites do padrão, com as decisões tomadas com a B2 em 09/11/2026 (registradas em `docs/BRIEFING.md`).

```yaml
ficha: 1
padrao: 2.8.0
cliente: Vazão Engenharia e Montagem
produto: Inspeção e adequação NR13
data: 2026-11-09

site:
  brand: Vazão Engenharia e Montagem
  brandShort: Vazão
  product: Inspeção e adequação NR13
  context: indústrias em Pernambuco e Ceará
  url: https://www.vazao.com.br/lp-inspecao-nr13/ # PROVISÓRIA: confirmar a URL no WordPress da Vazão
  address: Av. Barão de Bonito, 880 - Várzea, Recife - PE, 50740-080
  privacyUrl: ''
  whatsapp: ''
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: inspeção nr13
  negatives: []
  forbidden: []
  areaAtendida: Pernambuco e Ceará
  onde: selo
  familias:
    - nome: servico
      termos: [inspeção nr13, adequação nr13, laudo nr13, documentação nr13]
      responde: linhas
    - nome: aplicacao
      termos: [nr13 vasos de pressão, nr13 caldeiras, nr13 compressor, nr13 tubulações]
      responde: aplicacoes
    - nome: duvida
      termos: [o que é laudo nr13, quando fazer inspeção nr13, compressor precisa de nr13]
      responde: perguntas
    - nome: geografia
      termos: [inspeção nr13 recife, inspeção nr13 fortaleza]
      responde: null

publico: [Manutenção, Engenharia, Segurança do trabalho, Diretoria industrial]

marcas:
  usarLogos: false
  nomes: []
  autorizacao: não se aplica — serviço próprio, sem marcas de terceiros

tokens:
  padrao: false
  cores:
    primary-dark: '#0b3f8a' # marinho Vazão
    primary-dark-800: '#1550aa'
    primary-dark-900: '#0a2b57'
    accent: '#e1062f' # vermelho Vazão
    accent-dark: '#c10428'
  fonte: Manrope

conteudo:
  title: Inspeção NR13 e adequação em PE e CE | Vazão Engenharia
  description: Inspeção NR13, adequação e laudo para vasos de pressão, caldeiras, ar comprimido e tubulações. Atendimento em Pernambuco e Ceará.
  hero:
    eyebrow: Engenharia especializada em NR13
    title: Inspeção NR13, adequação e laudo para sua indústria
    text: Inspeção, adequação e documentação para vasos de pressão, caldeiras, ar comprimido e tubulações.
    points:
      - icon: search
        line1: Levantamento
        line2: em campo
      - icon: file
        line1: Inspeção e
        line2: documentação
      - icon: clock
        line1: Desde 1991
        line2: na indústria
  quote:
    eyebrow: Avaliação técnica NR13
    title: Fale com quem entende de inspeção NR13.
    text: Nossa equipe avalia os equipamentos da sua planta e indica o que precisa ser inspecionado, documentado ou adequado. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: shield
        label: Especialistas em NR13
      - icon: clock
        label: Experiência desde 1991
      - icon: pin
        label: Atendimento em PE e CE

blocos:
  linhas:
    veredicto: completo
    responde: [servico]
    papeis: [Manutenção, Engenharia, Segurança do trabalho]
    eyebrow: Serviços NR13
    title: Serviços NR13 para a sua indústria
    text: Regularize equipamentos e instalações enquadrados na NR13 com suporte de engenharia especializada.
    items:
      - id: inspecao
        tag: Inspeção
        title: Inspeção NR13
        description: Avaliação técnica dos equipamentos e da instalação conforme a norma.
        features: [Levantamento em campo, Dispositivos de segurança, Teste hidrostático]
        photo: Inspetor anotando a leitura do manômetro de um vaso de pressão
        dark: false
      - id: adequacao
        tag: Adequação
        title: Adequação NR13
        description: Do diagnóstico à execução das intervenções de engenharia necessárias.
        features: [Diagnóstico técnico, Plano de adequação, Intervenções de engenharia]
        photo: Técnico ajustando os rotores internos de um equipamento industrial
        dark: false
      - id: laudo
        tag: Documentação
        title: Laudo e documentação NR13
        description: Relatórios de inspeção e documentos exigíveis para cada equipamento.
        features: [Relatórios de inspeção, Prontuário do equipamento, Registro de segurança]
        photo: Engenheiro da Vazão preenchendo o checklist NR13 ao lado de um vaso de pressão
        dark: false
      - id: gestao
        tag: Gestão
        title: Gestão NR13
        description: Registros, documentação e acompanhamento das inspeções ao longo da operação.
        features: [Dados dos equipamentos, Registros e documentação, Controle das inspeções]
        photo: Notebook com o painel de controle NR13 e capacete da Vazão
        dark: true

  processo:
    veredicto: completo
    responde: [servico]
    papeis: [Manutenção, Engenharia]
    eyebrow: Como funciona
    title: Como funciona uma adequação NR13?
    microcopy: Do diagnóstico à adequação
    text: Tudo começa com um levantamento técnico na sua planta, para definir o que precisa ser inspecionado, documentado ou adequado.
    steps:
      - id: levantamento
        icon: search
        title: Levantamento e diagnóstico
        description: Identificação dos equipamentos em campo e dos requisitos aplicáveis a cada um.
      - id: inspecao
        icon: shield
        title: Inspeção dos equipamentos
        description: Verificações conforme o tipo, a categoria, as condições e o histórico do equipamento.
      - id: documentacao
        icon: file
        title: Documentação técnica
        description: Elaboração ou organização dos documentos decorrentes da inspeção e da adequação.
      - id: adequacoes
        icon: wrench
        title: Plano e adequações
        description: Indicação das intervenções e, quando preciso, execução de reparos e instalações.

  aplicacoes:
    veredicto: completo
    responde: [aplicacao]
    papeis: [Manutenção, Engenharia]
    eyebrow: Equipamentos atendidos
    title: Inspeção NR13 por tipo de equipamento
    text: Inspeção, adequação e laudo NR13 para os equipamentos enquadrados na norma.
    items:
      - id: vasos-de-pressao
        label: Vasos de pressão
        description: Inspeção, avaliação e documentação de vasos de pressão enquadrados.
        photo: Vaso de pressão horizontal em área industrial
      - id: ar-comprimido
        label: Ar comprimido
        description: Vasos e reservatórios do sistema avaliados quanto ao enquadramento na NR13.
        photo: Compressor de ar e reservatório em sala de máquinas
      - id: caldeiras
        label: Caldeiras
        description: Inspeção e avaliação técnica de caldeiras enquadradas na NR13.
        photo: Caldeira industrial com queimador em casa de caldeiras
      - id: tubulacoes
        label: Tubulações industriais
        description: Avaliação de tubulações enquadradas, com inspeção e documentação.
        photo: Tubulações industriais com válvula e flanges

  perguntas:
    veredicto: completo
    responde: [duvida, aplicacao]
    papeis: [Manutenção, Segurança do trabalho, Diretoria industrial]
    eyebrow: Perguntas frequentes
    title: Dúvidas sobre inspeção e laudo NR13
    text: Não encontrou sua resposta? Fale com um especialista da Vazão.
    items:
      - id: quando
        question: Quando uma empresa precisa de inspeção NR13?
        answer: A necessidade depende dos equipamentos existentes, de seu enquadramento na NR13 e das condições e prazos aplicáveis. Um levantamento técnico identifica quais equipamentos precisam ser considerados e quais ações são necessárias.
      - id: laudo
        question: O que é um laudo NR13?
        answer: É uma expressão comum nas buscas por adequação. Tecnicamente, a norma prevê documentos diferentes conforme o equipamento, como relatórios de inspeção de segurança, prontuários e registros de segurança, quando aplicáveis.
      - id: vasos
        question: A NR13 se aplica a vasos de pressão?
        answer: Sim, aos vasos de pressão que estejam dentro do campo de aplicação da norma. O enquadramento considera as características técnicas de cada equipamento.
      - id: compressor
        question: Compressor de ar precisa de NR13?
        answer: Em sistemas de ar comprimido, os vasos de pressão e demais componentes são avaliados quanto ao enquadramento na NR13. A análise considera as características da instalação e dos equipamentos.
      - id: adequacao
        question: A Vazão realiza adequação NR13?
        answer: Sim. A Vazão faz o levantamento em campo, avalia os equipamentos e identifica os requisitos a atender, do diagnóstico à execução das intervenções de engenharia.
      - id: caldeiras
        question: A Vazão realiza inspeção NR13 em caldeiras?
        answer: Sim. A Vazão faz a inspeção e a avaliação técnica de caldeiras enquadradas na NR13, com verificação das condições de segurança e da documentação aplicável.
      - id: documentacao
        question: A Vazão pode ajudar na documentação NR13?
        answer: Sim. A Vazão avalia a documentação existente e apoia a organização ou a elaboração dos documentos técnicos aplicáveis a cada equipamento.

  diferenciais:
    veredicto: completo
    responde: [servico]
    papeis: [Diretoria industrial]
    eyebrow: Por que a Vazão
    titleLines: [Sua indústria, dentro da NR13.]
    text: Experiência industrial, engenharia própria e avaliação feita na sua planta.
    reasons:
      - icon: clock
        title: Desde 1991
        description: Experiência em soluções para o mercado industrial.
      - icon: shield
        title: Especialistas em NR13
        description: Inspeção, levantamento e adequação de equipamentos.
      - icon: gear
        title: Engenharia especializada
        description: Suporte para avaliar e desenvolver as intervenções.
      - icon: search
        title: Levantamento em campo
        description: Avaliação da situação real encontrada na instalação.
      - icon: factory
        title: Soluções para indústrias
        description: Foco em ambientes e processos industriais.

  especificacoes:
    veredicto: nao-se-aplica
    falta: a oferta é serviço de engenharia, não produto que se distingue por medida

  vitrine:
    veredicto: nao-se-aplica
    falta: a oferta é serviço, não catálogo de produtos

  situacoes:
    veredicto: insuficiente
    falta: o cliente não descreveu as situações (fiscalização, auditoria, acidente) em que é procurado

  identificar:
    veredicto: nao-se-aplica
    falta: o atrito do visitante é "como funciona", respondido pelo processo

  segmentos:
    veredicto: insuficiente
    falta: nenhum setor atendido foi listado

  clientes:
    veredicto: insuficiente
    falta: sem logos de clientes autorizados nem números com fonte

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta não é consolidação de compras

assets:
  pendentes: [diferenciais]

conflitos:
  - pede: chat próprio em JS que manda o lead para o WhatsApp (81) 99203-9379
    regra: o chat é sempre o shortcode do plugin de atendimento
  - pede: formulário próprio de 7 campos
    regra: formulário é sempre o shortcode do plugin de atendimento
  - pede: menu de navegação com âncoras no header
    regra: uma rota, uma página — header sem menu
  - pede: footer de 4 colunas com telefone, menu e logo
    regra: footer em uma linha — copyright, endereço e crédito da B2

naoAplicado:
  - telefone (81) 3228-8378 no header, na cotação e no rodapé
  - banner intermediário "Fale com um especialista" (a Cotação cumpre o papel)
  - quarto ponto do hero "Atendimento em Pernambuco e Ceará" (vai para os selos da cotação)
```

## Resumo para revisão

- **Palavra-chave:** "inspeção nr13", no H1 e no title.
- **Composição esperada:** Serviços (linhas) · Como funciona (processo, navy) · Equipamentos (aplicacoes) · Perguntas frequentes · Diferenciais (navy).
- **CTA principal:** "Solicite sua avaliação técnica" (celular: "Avaliação"), no lugar de "Solicite sua cotação".
- **Cores:** marinho `#0b3f8a` e vermelho `#e1062f` do site da Vazão, fonte Manrope.
- **Pendências:** URL final no WordPress da Vazão, logo em alta resolução, foto de pessoa recortada para os Diferenciais, fotos em resolução maior (as atuais têm 300–450 px de largura), política de privacidade.
