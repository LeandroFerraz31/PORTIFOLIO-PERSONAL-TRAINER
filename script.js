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
            initAssistant();
            
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

        // ===============================
        // ASSISTENTE DE TREINOS (FRONT-ONLY)
        // ===============================
        function initAssistant() {
            const fab = document.querySelector('.assistant-fab');
            const modal = document.querySelector('.assistant-modal');
            const dialog = document.querySelector('.assistant-dialog');
            const btnClose = document.querySelector('.assistant-close');
            const btnPrev = document.querySelector('.assistant-prev');
            const btnNext = document.querySelector('.assistant-next');
            const stepsContainer = document.querySelector('.assistant-steps');
            const actionsContainer = document.querySelector('.assistant-actions');
            const result = document.querySelector('.assistant-result');
            const planContainer = document.querySelector('.plan-container');
            const shareWA = document.querySelector('.assistant-share-wa');
            const backToSteps = document.querySelector('.assistant-back-to-steps');

            if (!fab || !modal) return;

            let step = 1;
            const totalSteps = 3;
            const answers = { goal: 'perda_gordura', level: 'iniciante', equip: ['sem_equipamento'] };

            function openModal() {
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                if (result.hidden) {
                    step = 1;
                    updateStepUI();
                    setResultOnlyView(false);
                } else {
                    // Já existe plano: mostrar somente o resultado
                    setResultOnlyView(true);
                }
            }
            function closeModal() {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
            }
            function updateStepUI() {
                btnPrev.disabled = step === 1;
                if (!result.hidden) {
                    btnNext.textContent = step === totalSteps ? 'Atualizar plano' : 'Continuar';
                } else {
                    btnNext.textContent = step === totalSteps ? 'Gerar plano' : 'Continuar';
                }
                document.querySelectorAll('.assistant-step').forEach(s => {
                    s.style.display = s.getAttribute('data-step') === String(step) ? 'block' : 'none';
                });
            }

            function setResultOnlyView(enabled) {
                if (enabled) {
                    if (stepsContainer) stepsContainer.style.display = 'none';
                    if (actionsContainer) actionsContainer.style.display = 'none';
                    result.hidden = false;
                } else {
                    if (stepsContainer) stepsContainer.style.display = '';
                    if (actionsContainer) actionsContainer.style.display = '';
                }
            }

            function readAnswers() {
                const goal = document.querySelector('input[name="goal"]:checked')?.value;
                const level = document.querySelector('input[name="level"]:checked')?.value;
                const equip = Array.from(document.querySelectorAll('input[name="equip"]:checked')).map(i => i.value);
                if (goal) answers.goal = goal;
                if (level) answers.level = level;
                answers.equip = equip.length ? equip : ['sem_equipamento'];
            }

            async function loadExercises() {
                const res = await fetch('exercises.json', { cache: 'no-store' });
                if (!res.ok) throw new Error('Falha ao carregar exercícios');
                return res.json();
            }

            function pickByGoal(exercises, goal) {
                const groupsByGoal = {
                    perda_gordura: ['pernas', 'peito', 'costas', 'ombros', 'core'],
                    ganho_massa: ['peito', 'costas', 'pernas', 'ombros', 'biceps', 'triceps', 'core'],
                    condicionamento: ['pernas', 'core', 'peito', 'costas', 'ombros']
                };
                const order = groupsByGoal[goal] || groupsByGoal.condicionamento;
                const byGroup = Object.fromEntries(order.map(g => [g, []]));
                exercises.forEach(ex => {
                    if (byGroup[ex.grupo]) byGroup[ex.grupo].push(ex);
                });
                return { order, byGroup };
            }

            function filterByLevelAndEquip(exercises, level, equip) {
                return exercises.filter(ex => (ex.nivel === level || level === 'iniciante') && (equip.includes(ex.equip)));
            }

            function buildWeekPlan(exercises, goal) {
                const { order, byGroup } = pickByGoal(exercises, goal);
                const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
                const plan = days.map((day, idx) => ({ day, items: [] }));

                let cursor = 0;
                for (let i = 0; i < plan.length; i++) {
                    const group = order[cursor % order.length];
                    const list = byGroup[group] || [];
                    const picks = list.slice(0, 3);
                    plan[i].items = picks.map(ex => ({
                        id: ex.id,
                        nome: ex.nome,
                        grupo: ex.grupo,
                        prescricao: goal === 'ganho_massa' ? '4x8-12' : goal === 'perda_gordura' ? '3x12-15' : '3x10-12',
                        video: ex.video
                    }));
                    cursor++;
                }
                return plan;
            }

            function renderPlan(plan) {
                planContainer.innerHTML = '';
                plan.forEach(day => {
                    const div = document.createElement('div');
                    div.className = 'plan-day';
                    const items = day.items.map(it => `
                        <div class="exercise-item">
                            <div>
                                <div>${it.nome}</div>
                                <div class="exercise-meta">${it.grupo} • ${it.prescricao}</div>
                            </div>
                            <div class="exercise-links">
                                <a href="${it.video}" target="_blank" rel="noopener noreferrer">Vídeo</a>
                            </div>
                        </div>
                    `).join('');
                    div.innerHTML = `<h5>${day.day}</h5>${items}`;
                    planContainer.appendChild(div);
                });
            }

            function sharePlanWhatsApp(plan) {
                const header = '*Plano semanal sugerido*%0A';
                const lines = plan.map(d => {
                    const ex = d.items.map(i => `- ${i.nome} (${i.prescricao})`).join('%0A');
                    return `*${d.day}*%0A${ex}`;
                }).join('%0A%0A');
                const text = header + lines;
                const number = '5551983012611';
                const url = `https://wa.me/${number}?text=${text}`;
                window.open(url, '_blank', 'noopener');
            }

            fab.addEventListener('click', openModal);
            btnClose.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
            if (backToSteps) {
                backToSteps.addEventListener('click', () => {
                    setResultOnlyView(false);
                    // volta para etapa de equipamentos
                    step = 3;
                    updateStepUI();
                });
            }

            btnPrev.addEventListener('click', () => {
                if (step > 1) { step--; updateStepUI(); }
            });
            async function generateAndRenderPlan() {
                try {
                    readAnswers();
                    btnNext.disabled = true;
                    btnNext.textContent = result.hidden ? 'Gerando...' : 'Atualizando...';
                    const all = await loadExercises();
                    const filtered = filterByLevelAndEquip(all, answers.level, answers.equip);
                    const plan = buildWeekPlan(filtered, answers.goal);
                    renderPlan(plan);
                    setResultOnlyView(true);
                    shareWA.onclick = () => sharePlanWhatsApp(plan);
                } catch (err) {
                    alert('Não foi possível gerar o plano agora. Tente novamente.');
                } finally {
                    btnNext.disabled = false;
                    btnNext.textContent = 'Atualizar plano';
                }
            }

            btnNext.addEventListener('click', async () => {
                if (step < totalSteps) {
                    readAnswers();
                    step++;
                    updateStepUI();
                    return;
                }
                await generateAndRenderPlan();
            });

            // Atualização dinâmica da prévia de exercícios por equipamento
            const previewList = document.querySelector('.assistant-preview-list');
            async function updatePreview() {
                if (!previewList) return;
                readAnswers();
                try {
                    const all = await loadExercises();
                    const filtered = filterByLevelAndEquip(all, answers.level, answers.equip);
                    // Remover duplicados por nome
                    const map = new Map();
                    filtered.forEach(ex => { if (!map.has(ex.nome)) map.set(ex.nome, ex); });
                    const uniques = Array.from(map.values()).slice(0, 24);
                    previewList.innerHTML = uniques.map(ex => `<span class="assistant-preview-pill" title="${ex.nome}">${ex.nome}</span>`).join('');
                } catch (_) {
                    previewList.innerHTML = '<span class="assistant-preview-pill">Não foi possível carregar</span>';
                }
            }
            // Ouvir mudanças em qualquer checkbox de equipamento e também em nível
            document.querySelectorAll('input[name="equip"], input[name="level"]').forEach(input => {
                input.addEventListener('change', async (e) => {
                    console.log('Mudança detectada:', e.target.name, e.target.value, 'Plano atualizado automaticamente? NÃO');
                    await updatePreview();
                    // NÃO atualiza o plano automaticamente - só quando clicar em "Atualizar plano"
                });
            });
            document.querySelectorAll('input[name="goal"]').forEach(input => {
                input.addEventListener('change', async (e) => {
                    console.log('Mudança de objetivo detectada:', e.target.value, 'Plano atualizado automaticamente? NÃO');
                    // NÃO atualiza o plano automaticamente - só quando clicar em "Atualizar plano"
                });
            });
            // Carregar prévia inicial quando abrir
            setTimeout(updatePreview, 0);
        }