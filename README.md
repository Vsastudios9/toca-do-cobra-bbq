# Toca Do Cobra BBQ

Crie um site one-page completo em React + Tailwind para o restaurante Toca do Cobra, um American BBQ com tempero da Bahia em Salvador. Construa tudo em uma única passada, seguindo exatamente o design system abaixo — não use paleta genérica (nada de bege+terracota, nada de dark+verde neon padrão). Gere todo o código de uma vez, sem me perguntar nada no meio, já com dados reais do cliente preenchidos (nunca use lorem ipsum ou texto placeholder).

1. DNA da marca (baseado no perfil real do Instagram @tocadocobra)

Estética rústica-western-BBQ: chapéu de couro, avental, fumaça, fogo, luminárias de varal (string lights) em ambiente ao ar livre, madeira crua, ferro preto, e o ícone-símbolo da marca (chama estilizada dentro de um círculo vermelho). Tom de voz: direto, caloroso, com humor sutil de "dono do pedaço" — nunca corporativo.

2. Design tokens (siga à risca, não improvise variações)

Cores:


--bg-base: #12100E (preto amadeirado, quase carvão)
--bg-surface: #1D1916 (painéis/cards)
--red-ember: #B3241F (vermelho-brasa, cor de marca — botões primários, ícones)
--orange-fire: #E07A2E (laranja-fogo, acentos e hover)
--gold-brass: #C79A4B (detalhes finos, linhas divisórias, preço)
--cream-bone: #F1E7D3 (texto claro, ícone de chama)


Tipografia:


Display (títulos/hero): uma slab serif robusta e western, tipo "Rye", "Ultra" ou "Bevan" (Google Fonts) — usar com peso alto, tracking levemente aberto em maiúsculas.
Corpo: sans-serif humanista simples e legível, tipo "Inter" ou "Work Sans".
Utilitário (preços, badges, horários): mono ou sans condensada, tipo "Oswald", para reforçar o clima de "quadro-negro de churrascaria".


Layout / conceito:
Hero em tela cheia com fundo escuro texturizado (textura sutil de madeira/fumaça via CSS gradient, sem imagem pesada), logo/ícone da chama centralizado ou à esquerda, título grande em slab serif, e uma foto de destaque do churrasco à direita (usar <img> com um placeholder de arroz caption "adicionar foto do carrossel" caso eu não tenha subido as imagens ainda — mas estruture o grid para receber fotos reais). Nada de layout de "SaaS genérico" (sem cards com ícone-título-texto repetidos 3x de forma robótica) — cada seção deve ter uma composição própria.

Elemento-assinatura: um "selo" circular vermelho com a chama (igual ao ícone de perfil do Instagram) usado como marca d'água/divisor entre seções, e um efeito de "fumaça subindo" sutil (CSS, leve, sem exagero) atrás do hero.

Motion: apenas o essencial — fade/slide suave ao entrar em cada seção no scroll, e um leve glow pulsante no botão de WhatsApp. Nada de animação excessiva.

3. Estrutura da página (nesta ordem)


Header fixo/sticky: logo "Toca do Cobra", menu (Início, Cardápio, Sobre, Localização), botão CTA "Reservar Mesa" destacado à direita.
Hero:

Headline: algo como "American BBQ com tempero da Bahia"
Subheadline: churrasco de costela, cortes nobres, ambiente ao ar livre
Badges rápidos: ⭐ 4,5 (971 avaliações) · R$ 60–140 por pessoa · Pet Friendly
Dois CTAs: "Fazer Reserva" (vermelho/laranja, principal) e "Ver Cardápio" (secundário, outline)



Sobre / Destaques (grid de 3 a 4 "selos" circulares, inspirados nos Destaques do Instagram): Executivo, Toca, Happy Hour, Pet Friendly — cada um com ícone simples e frase curta.
Cardápio em destaque (grid de cards, não lista genérica): puxar os pratos mais pedidos:

Churrasco Costela de Boi
Costela Maravilhosa
Pastel de Churrasco
Panceta
Bife Ancho
Maminha
Baguete de Cupim / Baguete de Costela
Tábua de Legumes
Cada card com nome do prato + selo "Mais pedido" quando aplicável. No fim da seção, botão "Ver cardápio completo" linkando para https://www.dguests.com/tocadocobra.



Galeria (grid tipo mosaico do Instagram, 6 a 8 fotos, usar aspect-ratio quadrado): estrutura pronta para receber fotos reais do restaurante (churrasco, ambiente com luminárias, chef com chapéu).
Avaliações: mostrar nota 4,5 com estrelas, "971 avaliações no Google", e 2 a 3 depoimentos curtos reais (parafraseados, sem copiar texto literal):

Elogio ao atendimento e variedade de opções de churrasco com bom custo-benefício
Observação sobre o cardápio variado com boas opções de entrada e preços de happy hour
Incluir botão "Ver mais avaliações no Google" linkando para o perfil do Google Maps do restaurante.



Localização e horário:

Endereço: Rua Alceu Amoroso Lima, 789 — Caminho das Árvores, Salvador - BA, 41820-770
Horário: Quarta a Domingo, a partir das 12h — fecha às 23h
Embed do Google Maps (iframe simples com o endereço)
Botão "Como chegar" linkando pro Google Maps



Footer: logo, endereço, telefone (71) 99697-2263, links redes sociais (Instagram @tocadocobra), e o CTA de reserva repetido.


4. Funcionalidades obrigatórias


Botão flutuante do WhatsApp fixo no canto inferior direito, em todas as seções, linkando para https://wa.me/5571996972263 com mensagem pré-preenchida: "Olá! Vim pelo site e gostaria de fazer uma reserva na Toca do Cobra 🔥"
Botão/CTA de Reserva (no header e no hero) linkando para https://bit.ly/tocadocobra-reservas
Site 100% responsivo (mobile-first — a maioria do tráfego de restaurante vem de Instagram no celular)
Foco visível em elementos interativos (acessibilidade de teclado)
Performance: nada de imagens pesadas sem otimização, usar loading="lazy" nas imagens da galeria


5. Regras de execução (para economizar créditos)


Gere o site completo em um único ciclo de geração — não pare no meio para perguntar sobre cores, fontes ou textos, já está tudo definido acima.
Não crie páginas extras nem rotas adicionais — é uma one-page com âncoras (#cardapio, #localizacao, etc).
Não gere conteúdo fictício de placeholder (nome de prato inventado, endereço genérico, texto "lorem ipsum") — use exclusivamente os dados reais fornecidos acima.
Escreva todo o texto de copy (headlines, botões, microtextos) pronto, em português, com tom direto e caloroso — não deixe texto de exemplo em inglês.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/527231db-6695-4930-a968-8c8c9131afeb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
