     // ===============================
        // ANIMAÇÕES DE SCROLL
        // ===============================
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animate');
                }
            });
        }

        // ===============================
        // HEADER SCROLL EFFECT
        // ===============================
        function handleHeaderScroll() {
            const header = document.getElementById('header');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // ===============================
        // SMOOTH SCROLL PARA NAVEGAÇÃO
        // ===============================
        function handleSmoothScroll() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const header = document.getElementById('header');
                        const headerHeight = header ? header.offsetHeight : 0;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

        // ===============================
        // FAQ ACCORDION
        // ===============================
        function handleFAQ() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    const isActive = question.classList.contains('active');
                    
                    // Fechar todas as outras perguntas
                    faqQuestions.forEach(q => {
                        q.classList.remove('active');
                        q.nextElementSibling.classList.remove('active');
                    });
                    
                    // Alternar a pergunta clicada
                    if (!isActive) {
                        question.classList.add('active');
                        answer.classList.add('active');
                    }
                });
            });
        }

        // ===============================
        // FORMULÁRIO DE CONTATO
        // ===============================
        function handleContactForm() {
            const form = document.querySelector('.contact-form form');
            if (!form) return;

            // Não intercepta se houver action (uso de serviço externo)
            if (form.getAttribute('action')) {
                form.addEventListener('submit', () => {
                    const submitButton = form.querySelector('button[type="submit"]');
                    if (submitButton) {
                        submitButton.disabled = true;
                        submitButton.textContent = 'Enviando...';
                    }

                    // Se marcado, abrir conversa no WhatsApp com a mesma mensagem
                    const sendWhats = document.getElementById('sendWhatsApp');
                    if (sendWhats && sendWhats.checked) {
                        const name = (document.getElementById('name')?.value || '').trim();
                        const email = (document.getElementById('email')?.value || '').trim();
                        const phone = (document.getElementById('phone')?.value || '').trim();
                        const message = (document.getElementById('message')?.value || '').trim();
                        const parts = [];
                        if (name) parts.push(`Nome: ${name}`);
                        if (email) parts.push(`Email: ${email}`);
                        if (phone) parts.push(`Telefone: ${phone}`);
                        if (message) parts.push(`Mensagem: ${message}`);
                        const text = encodeURIComponent(parts.join('\n'));
                        const whatsappNumber = '5551983012611'; // mesmo número do botão flutuante
                        const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
                        // Abre em nova guia para não interromper a submissão do formulário
                        window.open(waUrl, '_blank', 'noopener');
                    }
                });
                return;
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                form.reset();
            });
        }

        // ===============================
        // MOBILE MENU (OPCIONAL)
        // ===============================
        function handleMobileMenu() {
            const mobileMenu = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                const expanded = mobileMenu.getAttribute('aria-expanded') === 'true';
                mobileMenu.setAttribute('aria-expanded', String(!expanded));
            });
        }

        // ===============================
        // INICIALIZAÇÃO
        // ===============================
        document.addEventListener('DOMContentLoaded', () => {
            // Executar animações na primeira carga
            animateOnScroll();
            
            // Configurar event listeners
            handleSmoothScroll();
            handleFAQ();
            handleContactForm();
            handleMobileMenu();
            
            // Event listeners de scroll
            window.addEventListener('scroll', () => {
                handleHeaderScroll();
                animateOnScroll();
            });
        });

        // ===============================
        // UTILITÁRIOS PARA EDIÇÃO FÁCIL
        // ===============================
        
        // Função para alterar cores do tema
        function changeTheme(primaryColor, accentColor) {
            document.documentElement.style.setProperty('--primary-color', primaryColor);
            document.documentElement.style.setProperty('--accent-color', accentColor);
        }
        
        // Função para trocar imagens facilmente
        function changeImage(selector, newImageUrl) {
            const element = document.querySelector(selector);
            if (element) {
                element.src = newImageUrl;
            }
        }
        
        // Função para trocar textos facilmente
        function changeText(selector, newText) {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = newText;
            }
        }
        
        // Exemplo de uso das funções utilitárias:
        // changeTheme('#2c3e50', '#e74c3c'); // Azul escuro e vermelho
        // changeImage('.hero', 'nova-imagem.jpg');
        // changeText('.hero h1', 'Novo Nome');
        
        // ===============================
        // DADOS PARA FÁCIL EDIÇÃO
        // ===============================
        const portfolioData = {
            name: "fulano de tal",
            title: "Personal Trainer e Especialista em Performance Física",
            quote: "Disciplina supera talento quando o talento não se disciplina.",
            phone: "(11) 99999-9999",
            email: "contato@fulanodetal.com",
            instagram: "@personal__fulanodetal",
            location: "Estrela RS"
        };
        
        // Função para atualizar dados do portfólio
        function updatePortfolioData(newData) {
            Object.assign(portfolioData, newData);
            
            // Atualizar elementos na página
            document.querySelector('.hero h1').textContent = portfolioData.name;
            document.querySelector('.hero .subtitle').textContent = portfolioData.title;
            document.querySelector('.hero .quote').textContent = `"${portfolioData.quote}"`;
            
            // Atualizar outras informações conforme necessário
        }