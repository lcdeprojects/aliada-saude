import { useState, useRef } from 'react';
import { Sparkle, ShieldCheck, SealCheck, Clock, ArrowDown, PlayCircle, Lightbulb, ShoppingCartSimple, Info, Heartbeat, Key, ArrowsClockwise, Leaf } from '@phosphor-icons/react';
import FaqAccordion from '../components/FaqAccordion';

export default function EbookPage() {
    const [quizState, setQuizState] = useState('start'); // start | questions | loading | result
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const quizCardRef = useRef(null);

    const questions = [
        {
            id: 1,
            question: "Você sente sono, sonolência intensa ou falta de energia logo após as refeições (especialmente no almoço)?",
            yesText: "Sim, com frequência",
            noText: "Não / Raramente"
        },
        {
            id: 2,
            question: "Você sente que tem extrema dificuldade para perder peso, mesmo reduzindo a comida e fechando a boca?",
            yesText: "Sim, exatamente assim",
            noText: "Não, emagreço com facilidade"
        },
        {
            id: 3,
            question: "Poucas horas após uma refeição completa, você volta a sentir fome ou tem uma necessidade incontrolável de comer doces/carboidratos?",
            yesText: "Sim, sinto essa fome constante",
            noText: "Não, fico satisfeito por horas"
        },
        {
            id: 4,
            question: "Você percebe que o seu ganho de peso se concentra principalmente na região da barriga (circunferência abdominal aumentada)?",
            yesText: "Sim, acumula mais na barriga",
            noText: "Não, é distribuído ou não tenho"
        },
        {
            id: 5,
            question: "Você tem histórico na família de diabetes tipo 2, pressão alta ou gordura no fígado (esteatose hepática)?",
            yesText: "Sim, tenho familiares com isso",
            noText: "Não que eu saiba"
        }
    ];

    const startQuiz = () => {
        setQuizState('questions');
        setCurrentStep(1);
        setAnswers({});
    };

    const handleAnswer = (yes) => {
        const nextAnswers = { ...answers, [currentStep]: yes };
        setAnswers(nextAnswers);

        if (currentStep < questions.length) {
            setCurrentStep(currentStep + 1);
        } else {
            setQuizState('loading');
            
            if (quizCardRef.current) {
                quizCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            setTimeout(() => {
                setQuizState('result');
            }, 1500);
        }
    };

    const getYesCount = () => {
        return Object.values(answers).filter(val => val === true).length;
    };

    const getResultContent = () => {
        const count = getYesCount();
        if (count >= 3) {
            return {
                badge: "Alerta de Risco Alto",
                badgeBg: "rgba(31, 80, 158, 0.15)",
                badgeColor: "var(--color-blue-cta)",
                title: "Sinais Fortes de Resistência à Insulina",
                description: `Com base nas suas respostas (${count} de 5 sintomas), seu organismo apresenta <strong>claros indícios de resistência metabólica</strong>. Suas células estão "resistindo" à insulina, o que faz seu pâncreas trabalhar em sobrecarga e bloqueia a queima de gordura natural, acumulando principalmente na região abdominal e causando cansaço constante.`
            };
        } else if (count >= 1) {
            return {
                badge: "Risco Moderado / Atenção",
                badgeBg: "var(--color-bg-secondary)",
                badgeColor: "var(--color-blue-rich)",
                title: "Primeiros Sinais de Lentidão Metabólica",
                description: `Você marcou ${count} sinal de alerta. Embora você ainda não esteja em um nível crítico de resistência à insulina, seu corpo já começou a enviar as primeiras mensagens de que o metabolismo não está processando a energia com eficiência total. Agir de forma preventiva agora é a melhor estratégia para evitar a evolução para o efeito sanfona severo e diabetes.`
            };
        } else {
            return {
                badge: "Foco em Prevenção",
                badgeBg: "rgba(67, 121, 242, 0.1)",
                badgeColor: "var(--color-blue-highlight)",
                title: "Metabolismo sob Controle, mas Requer Cuidado",
                description: `Parabéns, você não relatou sintomas clássicos de resistência à insulina ativa. No entanto, em um mundo com abundância de alimentos ultraprocessados e estresse constante, blindar o seu corpo contra esses problemas é fundamental para manter sua longevidade, disposição e peso saudável estáveis a longo prazo.`
            };
        }
    };

    const result = getResultContent();

    const faqItems = [
        {
            question: "Para quem é recomendado este manual?",
            answer: "O manual é perfeito para qualquer pessoa que sente dificuldades para emagrecer, vive com sono pós-refeições, tem fome frequente, ou recebeu diagnóstico de resistência à insulina, pré-diabetes, gordura no fígado ou deseja prevenir esses problemas de forma prática."
        },
        {
            question: "Como vou receber o manual após o pagamento?",
            answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail da Kiwify contendo o link para baixar o manual completo em formato PDF. Você poderá ler no celular, tablet ou computador."
        },
        {
            question: "O manual possui receitas ou cardápios prontos?",
            answer: "Ele foca em explicar a ciência e fornecer orientações sobre grupos de alimentos (fibras, proteínas, gorduras boas) e substituições inteligentes. Não substitui um cardápio individualizado, mas dá a base necessária para que você faça escolhas certas no seu dia a dia."
        },
        {
            question: "E se eu não gostar do material?",
            answer: "Você tem 7 dias de garantia incondicional. Se ler o manual e achar que ele não agregou valor à sua saúde, basta solicitar o reembolso na plataforma e devolveremos 100% do seu dinheiro, sem burocracia."
        }
    ];

    return (
        <div className="ebook-page-body">
            {/* Header */}
            <header className="main-header">
                <div className="container header-container">
                    <a href="/" className="logo">
                        <span className="logo-serif">Nutri Leti</span>
                        <span className="logo-sans">Boettcher</span>
                    </a>
                    <nav className="desktop-nav">
                        <a href="#sobre-o-livro">O Manual</a>
                        <a href="#sobre-a-autora">A Leti</a>
                        <a href="#faq">Perguntas Frequentes</a>
                    </nav>
                    <a href="#quiz-section" className="btn btn-secondary-outline nav-cta">Fazer o Teste</a>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container hero-container">
                        <div className="hero-badge">
                            <Sparkle size={14} weight="fill" />
                            <span>Desconto de Aniversário Ativo</span>
                        </div>
                        <h1 className="hero-title">
                            O seu cansaço constante e a dificuldade de emagrecer têm um <span className="highlight-serif">culpado silencioso.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Descubra se a <strong>Resistência à Insulina</strong> está agindo como uma trava metabólica no seu corpo, impedindo a queima de gordura e gerando fome constante.
                        </p>
                        <div className="hero-actions">
                            <a href="#quiz-section" className="btn btn-primary pulse-effect">
                                Fazer o Teste Metabólico (1 Min)
                                <ArrowDown size={18} weight="bold" />
                            </a>
                            <a href="https://pay.kiwify.com.br/placeholder" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Comprar Manual Direto — R$ 19,90</a>
                        </div>
                        <div className="hero-trust">
                            <span><ShieldCheck size={18} weight="fill" className="text-blue-rich" /> Chega de Efeito Sanfona</span>
                            <span><SealCheck size={18} weight="fill" className="text-blue-rich" /> Base Científica Simples</span>
                            <span><Clock size={18} weight="fill" className="text-blue-muted" /> Teste Rápido de 1 Minuto</span>
                        </div>
                    </div>
                </section>

                {/* Quiz Section */}
                <section id="quiz-section" className="quiz-section">
                    <div className="container quiz-centered-container" ref={quizCardRef}>
                        <div className="quiz-card">
                            
                            {/* Screen 1: Start Screen */}
                            {quizState === 'start' && (
                                <div className="quiz-screen-start active">
                                    <span className="eyebrow">Avaliação Metabólica</span>
                                    <h2 className="quiz-card-title">Como está a sua saúde hormonal?</h2>
                                    <p className="quiz-card-lead">
                                        Mapeie seus sintomas em 5 perguntas rápidas de sim ou não para identificar se a resistência à insulina está bloqueando seu emagrecimento.
                                    </p>
                                    
                                    <div className="quiz-start-actions">
                                        <button className="btn btn-primary btn-start-quiz pulse-effect" onClick={startQuiz}>
                                            Começar Avaliação Gratuita
                                            <PlayCircle size={20} weight="fill" />
                                        </button>
                                        
                                        <div className="direct-buy-link-box">
                                            <span>ou</span>
                                            <a href="https://pay.kiwify.com.br/placeholder" target="_blank" rel="noopener noreferrer" className="direct-buy-link">
                                                Pular teste e comprar manual direto (R$ 19,90) →
                                            </a>
                                            <p className="direct-buy-hint">
                                                <Lightbulb size={16} weight="fill" />
                                                Recomendamos fazer o teste primeiro. Ele mostra onde focar as mudanças no manual.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Screen 2: Questions */}
                            {quizState === 'questions' && (
                                <div className="quiz-questions-wrapper">
                                    <div className="quiz-header">
                                        <div className="progress-bar-wrapper">
                                            <div className="progress-bar" style={{ width: `${(currentStep / questions.length) * 100}%` }}></div>
                                        </div>
                                        <span className="quiz-step">Pergunta {currentStep} de {questions.length}</span>
                                    </div>

                                    <div className="quiz-step-content active">
                                        <h2 className="quiz-question">{questions[currentStep - 1].question}</h2>
                                        <div className="quiz-answers">
                                            <button className="quiz-btn-ans btn-yes" onClick={() => handleAnswer(true)}>{questions[currentStep - 1].yesText}</button>
                                            <button className="quiz-btn-ans btn-no" onClick={() => handleAnswer(false)}>{questions[currentStep - 1].noText}</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Screen 3: Loading */}
                            {quizState === 'loading' && (
                                <div className="quiz-loading active">
                                    <div className="spinner"></div>
                                    <p>Analisando suas respostas metabólicas…</p>
                                </div>
                            )}

                            {/* Screen 4: Results */}
                            {quizState === 'result' && (
                                <div className="quiz-result active">
                                    <div className="result-badge" style={{ backgroundColor: result.badgeBg, color: result.badgeColor }}>
                                        {result.badge}
                                    </div>
                                    <h3 className="result-title">{result.title}</h3>
                                    <p className="result-description" dangerouslySetInnerHTML={{ __html: result.description }} />
                                    
                                    <div className="solution-box">
                                        <div className="solution-tag">Como Quebrar Esse Ciclo?</div>
                                        <p className="solution-text">
                                            A boa notícia é que a resistência à insulina <strong>pode ser revertida</strong> através de escolhas estratégicas na alimentação e no seu estilo de vida. E você não precisa de dietas restritivas malucas para isso.
                                        </p>
                                        <p className="solution-subtext">
                                            No manual prático <strong>"O Seu Inimigo Invisível"</strong>, eu explico passo a passo como desinflamar o seu organismo e fazer as pazes com a balança de maneira científica e sem sofrimento.
                                        </p>
                                        
                                        {/* Offer Widget */}
                                        <div className="offer-widget">
                                            <div className="price-strike">De R$ 29,90</div>
                                            <div className="price-current">
                                                <span>Por apenas</span>
                                                <span className="price-val">R$ 19,90</span>
                                            </div>
                                            <p className="offer-note">*Desconto especial ativo no mês de aniversário da nutri.</p>
                                            <a href="https://pay.kiwify.com.br/placeholder" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-checkout pulse-effect">
                                                Quero Garantir Meu Manual
                                                <ShoppingCartSimple size={18} weight="bold" />
                                            </a>
                                            <div className="secure-checkout">
                                                <span><ShieldCheck size={16} weight="fill" className="text-blue-rich" /> Compra Segura via Kiwify</span>
                                                <span><ArrowsClockwise size={16} weight="bold" className="text-blue-rich" /> 7 dias de garantia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>

                {/* Empathetic Copy Section */}
                <section id="sobre-o-livro" className="about-book-section">
                    <div className="container split-container">
                        <div className="info-block">
                            <span className="eyebrow">Você está lutando contra a biologia</span>
                            <h2 className="section-title">Por que fazer dieta e passar fome não funciona no seu corpo?</h2>
                            <div className="text-content">
                                <p>
                                    Quando você tenta emagrecer diminuindo radicalmente as calorias, o seu cérebro (o hipotálamo) interpreta essa perda de peso como uma ameaça à sobrevivência.
                                </p>
                                <p>
                                    <strong>A resposta do seu corpo é implacável:</strong> ele aumenta os seus hormônios da fome, reduz o seu gasto energético e desacelera o seu metabolismo para recuperar o peso perdido.
                                </p>
                                <p>
                                    Se somarmos isso à <strong>Resistência à Insulina</strong> — onde as células fecham a porta para a glicose, obrigando o pâncreas a produzir mais e mais insulina —, o seu corpo fica quimicamente trancado no modo de <strong>armazenamento de gordura</strong>.
                                </p>
                                <p className="highlight-text">
                                    Não é falta de disciplina. É uma alteração hormonal crônica que precisa do estímulo correto para ser curada.
                                </p>
                            </div>
                        </div>
                        <div className="book-card-visual">
                            <div className="visual-inner">
                                <div className="book-mockup">
                                    <span className="book-tag">Manual Prático</span>
                                    <h3 className="book-title">O Seu Inimigo Invisível</h3>
                                    <p className="book-subtitle">Como domar a resistência à insulina, acabar com o efeito sanfona e recuperar a sua saúde metabólica.</p>
                                    <span className="book-author">Nutri Leti Boettcher</span>
                                </div>
                                <div className="visual-caption">
                                    <Info size={16} />
                                    <span>Leitura leve e objetiva criada especificamente para pacientes, não profissionais.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Will Learn Section */}
                <section className="modules-section">
                    <div className="container">
                        <span className="eyebrow">O Conteúdo do Manual</span>
                        <h2 className="section-title centered">O que você vai aprender no guia definitivo:</h2>
                        
                        <div className="modules-grid">
                            <div className="module-card">
                                <div className="module-icon"><Heartbeat size={32} weight="fill" /></div>
                                <h3 className="module-title">1. A Verdadeira Face da Obesidade</h3>
                                <p className="module-desc">Como o excesso de gordura atua como um órgão inflamatório e por que emagrecer não é apenas força de vontade.</p>
                            </div>
                            <div className="module-card">
                                <div className="module-icon"><Key size={32} weight="fill" /></div>
                                <h3 className="module-title">2. O Inimigo Silencioso</h3>
                                <p className="module-desc">O funcionamento da insulina no seu corpo e os exames metabólicos que você deve investigar imediatamente.</p>
                            </div>
                            <div className="module-card">
                                <div className="module-icon"><ArrowsClockwise size={32} weight="fill" /></div>
                                <h3 className="module-title">3. O Ciclo Vicioso da Fome</h3>
                                <p className="module-desc">A diferença entre fome física, fome emocional e a temida fome hormonal que altera a sua saciedade.</p>
                            </div>
                            <div className="module-card">
                                <div className="module-icon"><Leaf size={32} weight="fill" /></div>
                                <h3 className="module-title">4. Alimentos que Ajudam ou Sabotam</h3>
                                <p className="module-desc">O segredo das fibras, gorduras boas e proteínas magras para alimentar as bactérias benéficas do seu intestino (microbiota).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Leticia Section */}
                <section id="sobre-a-autora" className="author-section">
                    <div className="container split-container reverse">
                        <div className="info-block">
                            <span className="eyebrow">Sua Acompanhante nessa Jornada</span>
                            <h2 className="section-title">Quem é Nutri Leti Boettcher?</h2>
                            <div className="text-content">
                                <p>
                                    Sou nutricionista clínica e trabalho há <strong>quase 10 anos</strong> com o tratamento da obesidade e de todas as doenças causadas ou agravadas por ela. 
                                </p>
                                <p>
                                    No meu consultório, atendi centenas de pessoas que carregavam a culpa de não conseguir emagrecer. Meu trabalho é mostrar a verdade científica: que a regulação do peso depende de hormônios e desinflamação, e não de sofrimento.
                                </p>
                                <p>
                                    Desenvolvi este manual de leitura simples e prática para que você entenda exatamente o que está acontecendo no seu corpo e assuma o controle do seu metabolismo hoje mesmo.
                                </p>
                            </div>
                            <div className="author-stats">
                                <div className="stat-item">
                                    <span className="stat-num">10+</span>
                                    <span className="stat-label">Anos de Prática</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">1000+</span>
                                    <span className="stat-label">Vidas Transformadas</span>
                                </div>
                            </div>
                        </div>
                        <div className="author-visual">
                            <div className="profile-photo-wrapper">
                                <img src="/leticia.jpeg" alt="Nutri Leti Boettcher" className="profile-photo" width="380" height="380" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Direct Offer Call To Action */}
                <section className="direct-offer-section">
                    <div className="container offer-container-box">
                        <span className="promo-pill">Oferta de Aniversário da Nutri</span>
                        <h2 className="offer-title">Transforme sua saúde metabólica por menos do que o valor de um café.</h2>
                        <p className="offer-subtitle">Adquira o e-book com o desconto especial de aniversário hoje e comece a combater a resistência à insulina imediatamente.</p>
                        
                        <div className="cta-price-box">
                            <div className="strike">De R$ 29,90</div>
                            <div className="promo">R$ 19,90</div>
                            <div className="installments">Pago uma única vez</div>
                        </div>

                        <a href="https://pay.kiwify.com.br/placeholder" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large pulse-effect">
                            Adquirir Manual por R$ 19,90
                            <ShoppingCartSimple size={18} weight="bold" />
                        </a>

                        <div className="guarantees">
                            <span><ShieldCheck size={16} weight="fill" /> Pagamento 100% Seguro</span>
                            <span><Sparkle size={16} weight="fill" /> Acesso imediato no e-mail</span>
                            <span><ShieldCheck size={16} weight="fill" /> Garantia incondicional de 7 dias</span>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="faq-section">
                    <div className="container faq-container">
                        <span className="eyebrow">Dúvidas Frequentes</span>
                        <h2 className="section-title centered">Perguntas Respondidas</h2>
                        
                        <FaqAccordion items={faqItems} />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="main-footer">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <span className="logo-serif">Nutri Leti</span>
                        <span className="logo-sans">Boettcher</span>
                        <p>Nutricionista | CRN-10 8444</p>
                        <p className="copyright">&copy; 2026 Nutri Leti Boettcher. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Navegação</h4>
                        <a href="#quiz-section">Teste metabólico</a>
                        <a href="#sobre-o-livro">O Manual</a>
                        <a href="#sobre-a-autora">Sobre Leti</a>
                        <a href="#faq">Perguntas Frequentes</a>
                    </div>
                    <div className="footer-disclaimer">
                        <h4>Aviso Legal</h4>
                        <p>As informações contidas neste e-book e página têm caráter informativo e educacional. Não substituem em hipótese alguma o diagnóstico, tratamento ou aconselhamento de profissionais médicos e nutricionistas em consulta presencial.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
