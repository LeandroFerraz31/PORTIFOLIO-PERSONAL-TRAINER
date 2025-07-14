# 🌟 Site de Portfólio para Personal Trainer

Este é um site de portfólio **moderno, responsivo e interativo**, desenvolvido especialmente para personal trainers que desejam destacar seus serviços, resultados de alunos, metodologia de trabalho, depoimentos e formas de contato.  

> **Tecnologias:** HTML5, CSS3 e JavaScript  
> **Destaques:** Design adaptável, animações suaves e elementos dinâmicos.

---

## 📋 Índice

- [🚀 Funcionalidades](#-funcionalidades)  
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)  
- [📂 Estrutura de Arquivos](#-estrutura-de-arquivos)  
- [⚙️ Instalação e Configuração](#️-instalação-e-configuração)  
- [🎨 Personalização](#-personalização)  
- [📱 Como Funciona](#-como-funciona)  
- [📏 Design Responsivo](#-design-responsivo)  
- [🤝 Contribuição](#-contribuição)  
- [📜 Licença](#-licença)

---

## 🚀 Funcionalidades

- **💻 Design Responsivo:** Compatível com desktops, tablets e celulares.  
- **✨ Animações de Scroll:** Elementos aparecem suavemente conforme o usuário navega.  
- **❓ FAQ Interativo:** Acordeão para perguntas frequentes.  
- **📧 Formulário de Contato:** Pronto para integração com backend.  
- **🍔 Menu Mobile:** Menu hambúrguer otimizado para telas pequenas.  
- **💬 Botões Flutuantes:** WhatsApp e botão de voltar ao topo com efeitos de hover.  
- **🎨 Tema Personalizável:** Cores e textos facilmente editáveis via CSS e JS.  
- **📊 Dados Centralizados:** Alterações dinâmicas com objeto `portfolioData`.

---

## 🛠 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e acessível.  
- **CSS3:** Design moderno com Flexbox, Grid, variáveis e animações.  
- **JavaScript:** Lógica, interações e dinamicidade.  
- **FontAwesome:** Ícones prontos via CDN.  
- **Google Fonts:** Tipografia consistente com a fonte *Inter*.

---

## 📂 Estrutura de Arquivos

```

personal-trainer-website/
├── index.html     # Estrutura principal do site
├── style.css      # Estilos, temas e responsividade
├── script.js      # Interatividade e animações
└── README.md      # Documentação do projeto

````

---

## ⚙️ Instalação e Configuração

1. Clone ou baixe este repositório.  
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estão na mesma pasta.  
3. Abra o `index.html` diretamente no navegador.  
4. *(Opcional)* Use um servidor local (ex.: `live-server`) para melhor experiência.

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari etc).  
- Conexão com a internet para carregar recursos externos (Google Fonts, FontAwesome, imagens).  
- *(Opcional)* Editor como VS Code para personalizar.

---

## 🎨 Personalização

### 🔧 Atualizar Dados Pessoais  
No `script.js`, edite o objeto:

```js
const portfolioData = {
  name: "Seu Nome",
  title: "Seu Título",
  quote: "Sua Frase",
  phone: "Seu Telefone",
  email: "Seu Email",
  instagram: "Seu Instagram",
  location: "Sua Localização"
};
````

Use `updatePortfolioData(newData)` para aplicar mudanças.

---

### 🎨 Alterar Cores do Tema

**CSS (style.css):**

```css
:root {
  --primary-color: #1a1a1a;
  --accent-color: #FFD700;
}
```

**JS (script.js):**

```js
changeTheme('#2c3e50', '#e74c3c'); // Exemplo: Azul escuro e vermelho
```

---

### 🖼 Atualizar Imagens

No HTML ou via função:

```js
changeImage('.hero', 'nova-imagem.jpg');
```

---

### 📝 Modificar Textos

No HTML diretamente ou via função:

```js
changeText('.hero h1', 'Novo Título');
```

---

## 📱 Como Funciona

* **🧭 Navegação:** Rolagem suave entre seções via menu.
* **❓ FAQ:** Clique nas perguntas para expandir/recolher.
* **📧 Formulário de Contato:** Mostra alerta de sucesso (pronto para backend).
* **🍔 Menu Mobile:** Ícone hamburguer abre/fecha a navegação.
* **💬 Botões Flutuantes:**

  * WhatsApp: Link personalizável.
  * Topo: Retorna ao início da página.

---

## 📏 Design Responsivo

O site adapta-se a diversos dispositivos:

* **🖥 Desktop:** Layout em grid com seções amplas.
* **📱 Mobile/Tablet:** Coluna única e menu mobile.
* **🖨 Impressão:** Fundo branco, sem botões flutuantes.

Exemplo de media query no `style.css`:

```css
@media (max-width: 768px) {
  .nav-links { display: none; }
  .mobile-menu { display: flex; }
  /* Outros ajustes */
}
```

---

## 🤝 Contribuição

Contribuições são bem-vindas!

1. Faça um *fork* do repositório
2. Crie uma *branch* (`git checkout -b feature/SuaFuncionalidade`)
3. *Commit* suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o seu fork (`git push origin feature/SuaFuncionalidade`)
5. Abra um *pull request*

> Certifique-se de seguir o estilo do código existente e comentar suas mudanças.

---

## 📜 Licença

© 2024 **Fulano de Tal - Personal Trainer**
Todos os direitos reservados.
Desenvolvido por [Leandro Ferraz](https://github.com/leandroferraz).