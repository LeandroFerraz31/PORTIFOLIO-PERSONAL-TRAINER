🌟 Site de Portfólio para Personal Trainer
Este é um site de portfólio moderno e responsivo desenvolvido para um personal trainer, destacando serviços, resultados de alunos, metodologia, depoimentos e informações de contato. Construído com HTML, CSS e JavaScript, o projeto oferece animações suaves, design adaptável para dispositivos móveis e elementos interativos, como um FAQ em formato de acordeão e um formulário de contato.
📋 Índice

🚀 Funcionalidades
🛠 Tecnologias Utilizadas
📂 Estrutura de Arquivos
⚙️ Configuração e Instalação
🎨 Personalização
📱 Como Funciona
📏 Design Responsivo
🤝 Contribuição
📜 Licença

🚀 Funcionalidades

Design Responsivo: 🖥📱 Adapta-se perfeitamente a desktops, tablets e dispositivos móveis.
Animações de Scroll: ✨ Elementos aparecem suavemente ao rolar a página.
Seção FAQ Interativa: ❓ Acordeão interativo para exibir respostas ao clicar nas perguntas.
Formulário de Contato: 📧 Formulário com mensagem de sucesso (pronto para integração com backend).
Menu Mobile: 🍔 Menu hamburguer para navegação em telas menores.
Botões Flutuantes: 💬 Botão de WhatsApp e 🔝 botão de voltar ao topo com efeitos de hover.
Tema Personalizável: 🎨 Fácil alteração de cores e conteúdos via variáveis CSS e funções JavaScript.
Gestão de Dados: 📊 Objeto centralizado para atualizar informações pessoais em todo o site.

🛠 Tecnologias Utilizadas

HTML5: 📜 Estrutura semântica para acessibilidade e SEO.
CSS3: 🎨 Estilos com variáveis CSS, Flexbox, Grid e animações.
JavaScript: ⚡ Interatividade, animações e manipulação do DOM.
FontAwesome: 🖼 Ícones para enriquecer a interface visual (incluso via CDN no HTML).
Google Fonts: 🅰 Fonte Inter para tipografia consistente.

📂 Estrutura de Arquivos
personal-trainer-website/
├── index.html        # 📄 Arquivo HTML principal com a estrutura do site
├── style.css         # 🎨 Estilos CSS com variáveis e design responsivo
├── script.js         # ⚡ JavaScript para interatividade e animações
└── README.md         # 📖 Documentação do projeto

⚙️ Configuração e Instalação

Clone ou baixe o repositório do projeto.
Certifique-se de que os arquivos (index.html, style.css, script.js) estão no mesmo diretório.
Abra o index.html em um navegador para visualizar o site.
(Opcional) Use um servidor local (ex.: live-server ou um servidor Node.js simples) para uma melhor experiência de desenvolvimento.

Pré-requisitos

Navegador moderno (Chrome, Firefox, Safari, etc.).
Conexão à internet para carregar recursos externos (Google Fonts, FontAwesome e imagens do Unsplash).
(Opcional) Editor de código como o VS Code para personalização.

🎨 Personalização
Atualizando Informações Pessoais
Modifique o objeto portfolioData no script.js para atualizar dados pessoais:
const portfolioData = {
    name: "Seu Nome",
    title: "Seu Título",
    quote: "Sua Frase",
    phone: "Seu Telefone",
    email: "Seu Email",
    instagram: "Seu Instagram",
    location: "Sua Localização"
};

Use a função updatePortfolioData(newData) para aplicar mudanças dinamicamente.
Alterando Cores do Tema
Ajuste as variáveis CSS no style.css na seção :root:
:root {
    --primary-color: #1a1a1a;
    --accent-color: #FFD700;
}

Ou use a função changeTheme no script.js:
changeTheme('#2c3e50', '#e74c3c'); // Exemplo: Azul escuro e vermelho

Atualizando Imagens
Substitua URLs de imagens no index.html ou use a função changeImage no script.js:
changeImage('.hero', 'nova-imagem.jpg');

Modificando Textos
Atualize textos diretamente no index.html ou use a função changeText:
changeText('.hero h1', 'Novo Título');

📱 Como Funciona

Navegação: 🧭 Clique nos links do menu para rolar suavemente até as seções.
FAQ: ❓ Clique nas perguntas para expandir ou recolher as respostas.
Formulário de Contato: 📧 Preencha e envie o formulário (atualmente exibe um alerta de sucesso; pode ser estendido com integração de backend).
Menu Mobile: 🍔 Em dispositivos móveis, clique no ícone de hamburguer para abrir/fechar o menu de navegação.
Botões Flutuantes: 💬 Use o botão do WhatsApp para iniciar uma conversa (atualize o link no index.html) ou o botão 🔝 para voltar ao topo.

📏 Design Responsivo
O site é totalmente responsivo:

Desktop: 🖥 Layout em largura total com seções baseadas em grid.
Tablet/Mobile: 📱 Layout de coluna única, menu mobile e tamanhos de fonte ajustados.
Impressão: 🖨 Estilizado para impressão com fundo branco e sem botões interativos.

As media queries no style.css gerenciam a responsividade:
@media (max-width: 768px) {
    .nav-links { display: none; }
    .mobile-menu { display: flex; }
    /* Outros estilos responsivos */
}

🤝 Contribuição
Contribuições são bem-vindas! Para contribuir:

Faça um fork do repositório.
Crie uma branch para sua funcionalidade (git checkout -b feature/SuaFuncionalidade).
Commit suas alterações (git commit -m 'Adiciona SuaFuncionalidade').
Envie para a branch (git push origin feature/SuaFuncionalidade).
Abra um pull request.

Certifique-se de que o código segue o estilo existente e inclua comentários claros.
📜 Licença
© 2024 Fulano de Tal Personal Trainer. Todos os direitos reservados. Desenvolvido por Leandro Ferraz.