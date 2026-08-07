import { useState } from 'react';
import { ArrowUpRight, CheckCircle, WhatsappLogo, Copy, ShieldCheck, Sparkle, ArrowLeft } from '@phosphor-icons/react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function QuizPage() {
    useScrollReveal();

    const [currentStep, setCurrentStep] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [copied, setCopied] = useState(false);

    const questions = [
        {
            id: 1,
            topic: "Módulo 1: Sinais de Alerta",
            question: "Logo após o almoço ou refeições ricas em carboidratos, qual destas sensações você costuma vivenciar com mais frequência?",
            options: [
                {
                    letter: "A",
                    text: "Sonolência intensa, cansaço repentino e vontade incontrolável de comer um doce pouco tempo depois.",
                    explanation: "Sinal clássico de pico e queda de glicose/insulina (hiperinsulinemia e hipoglicemia reativa)."
                },
                {
                    letter: "B",
                    text: "Sensação de estufamento passageiro, sem qualquer alteração na minha energia ou fome.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Energia constante e saciedade plena por 4 a 5 horas sem pensar em comida.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Apenas uma leve sede, que passa rapidamente ao beber um copo de água.",
                    explanation: ""
                }
            ]
        },
        {
            id: 2,
            topic: "Módulo 1: O Mecanismo da Insulina",
            question: "De acordo com o e-book 'O Seu Inimigo Invisível', qual é a função exata da Insulina no seu organismo?",
            options: [
                {
                    letter: "A",
                    text: "Ela funciona como uma 'chave' que abre a porta das células para a glicose entrar. Na resistência à insulina, essa fechadura enguiça.",
                    explanation: "Quando as células resistem à insulina, a glicose fica no sangue e o pâncreas sobrecarrega."
                },
                {
                    letter: "B",
                    text: "Ela é um ácido estomacal responsável apenas pela digestão de proteínas e gorduras no estômago.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Ela converte a água consumida em massa muscular de forma direta.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Ela só é produzida pelo corpo quando a pessoa passa mais de 24 horas em jejum absoluto.",
                    explanation: ""
                }
            ]
        },
        {
            id: 3,
            topic: "Módulo 1 & 2: Trava Metabólica & Gordura Visceral",
            question: "Em qual região do seu corpo você percebe que o acúmulo de gordura é mais resistente e difícil de eliminar?",
            options: [
                {
                    letter: "A",
                    text: "Na região abdominal (barriga), parecendo uma trava metabólica que não responde a dietas comuns.",
                    explanation: "A insulina alta em excesso sinaliza continuamente ao corpo para estocar gordura visceral."
                },
                {
                    letter: "B",
                    text: "Apenas nos braços e pernas, sem qualquer acúmulo na região da cintura.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Distribuída de forma leve e fácil de eliminar com qualquer caminhada simples.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Não percebo acúmulo de gordura localizado no meu corpo.",
                    explanation: ""
                }
            ]
        },
        {
            id: 4,
            topic: "Módulo 3: Os 4 Tipos de Fome",
            question: "Quando você sente uma necessidade urgente de comer pouco tempo após uma refeição completa, a ciência explica que isso se deve a:",
            options: [
                {
                    letter: "A",
                    text: "Fome Hormonal / Metabólica: desregulação entre a insulina alta e a resistência à leptina (o cérebro não recebe o sinal de saciedade).",
                    explanation: "Não é falta de força de vontade! É uma falha na comunicação entre pâncreas, estômago e o cérebro."
                },
                {
                    letter: "B",
                    text: "Fome Física Pura: o estômago está totalmente vazio pedindo qualquer alimento natural.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Falta de disciplina moral ou fraqueza de caráter.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Apenas necessidade passageira de beber água mineral.",
                    explanation: ""
                }
            ]
        },
        {
            id: 5,
            topic: "Módulo 4: Microbiota Intestinal",
            question: "Para desinflamar o organismo e melhorar a resistência à insulina, qual nutriente o e-book destaca como essencial para suas 'bactérias boas'?",
            options: [
                {
                    letter: "A",
                    text: "Consumo diário de ao menos 25g a 30g de Fibras (verduras, legumes, feijões, aveia, chia e psyllium).",
                    explanation: "As bactérias benéficas produzem ácidos graxos de cadeia curta que reduzem a inflamação e aumentam a saciedade."
                },
                {
                    letter: "B",
                    text: "Consumo frequente de alimentos ultraprocessados, frituras e gorduras saturadas.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Substituição de todas as refeições por sucos detox sem fibras sólidas.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Consumo exclusivo de adoçantes artificiais em excesso.",
                    explanation: ""
                }
            ]
        },
        {
            id: 6,
            topic: "Módulo 4: A Ordem do Prato",
            question: "Qual estratégia simples na hora da refeição ajuda a evitar picos elevados de glicose e excesso de liberação de insulina?",
            options: [
                {
                    letter: "A",
                    text: "Comer primeiro as Fibras/Saladas -> depois as Proteínas/Gorduras boas -> e por último o Carboidrato.",
                    explanation: "As fibras desaceleram a absorção da glicose no trato digestivo, evitando picos glicêmicos."
                },
                {
                    letter: "B",
                    text: "Comer primeiro o doce ou carboidrato refinado de estômago totalmente vazio.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Ingerir refrigerantes açucarados antes de qualquer vegetais.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Eliminar totalmente a água e os vegetais do almoço.",
                    explanation: ""
                }
            ]
        },
        {
            id: 7,
            topic: "Conclusão: A Verdadeira Face do Emagrecimento",
            question: "A partir dos ensinamentos da Nutri Leticia Boettcher, como o emagrecimento definitivo deve ser encarado?",
            options: [
                {
                    letter: "A",
                    text: "Como um tratamento clínico-nutricional que regula a fisiologia, ajusta hormônios e desinflama o corpo sem sofrimento.",
                    explanation: "Tratamos a causa raiz da obesidade (a fisiologia metabólica) e não através da culpa ou dietas restritivas."
                },
                {
                    letter: "B",
                    text: "Como uma punição dolorosa de passar fome severa pelo resto da vida.",
                    explanation: ""
                },
                {
                    letter: "C",
                    text: "Como um processo que depende 100% apenas de 'fechar a boca' sem olhar exames.",
                    explanation: ""
                },
                {
                    letter: "D",
                    text: "Como algo impossível de ser mantido a longo prazo.",
                    explanation: ""
                }
            ]
        }
    ];

    const currentQuestion = questions[currentStep - 1];

    const handleSelectOption = (index) => {
        setSelectedOptions({
            ...selectedOptions,
            [currentStep]: index
        });
    };

    const handleNext = () => {
        if (selectedOptions[currentStep] === undefined) return;

        if (currentStep < questions.length) {
            setCurrentStep(currentStep + 1);
            window.scrollTo({ top: 120, behavior: 'smooth' });
        } else {
            setIsSubmitting(true);
            window.scrollTo({ top: 100, behavior: 'smooth' });
            setTimeout(() => {
                setIsSubmitting(false);
                setIsCompleted(true);
            }, 1200);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const copyCoupon = () => {
        navigator.clipboard.writeText('ALIADA5');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const whatsappMessage = encodeURIComponent("Olá! Fiz o Quiz do E-book no site e gostaria de resgatar meu cupom ALIADA5 de 5% de desconto para agendar meu tratamento clínico!");
    const whatsappLink = `https://wa.me/5547996887437?text=${whatsappMessage}`;

    return (
        <div className="premium-clinic-body quiz-page-wrapper">
            {/* Header */}
            <header className="clinic-header">
                <div className="container header-grid-nav">
                    <a href="/" className="clinic-logo">
                        <span className="logo-serif">Aliada</span>
                        <span className="logo-tagline">Medicina & Saúde</span>
                    </a>
                    <nav className="clinic-nav">
                        <a href="/">Clínica</a>
                        <a href="/ebook">E-book</a>
                    </nav>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-clinic-primary nav-cta pulse-effect">
                        Falar no WhatsApp
                    </a>
                </div>
            </header>

            <main className="quiz-main-container">
                <div className="container quiz-boxed-layout">
                    
                    {!isCompleted && !isSubmitting && (
                        <div className="quiz-card-box scroll-reveal">
                            {/* Quiz Top Progress */}
                            <div className="quiz-progress-header">
                                <div className="quiz-progress-meta">
                                    <span className="quiz-topic-badge">{currentQuestion.topic}</span>
                                    <span className="quiz-counter-text">Pergunta {currentStep} de {questions.length}</span>
                                </div>
                                <div className="quiz-progress-bar-bg">
                                    <div 
                                        className="quiz-progress-bar-fill"
                                        style={{ width: `${(currentStep / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Question Content */}
                            <div className="quiz-question-body">
                                <h1 className="quiz-main-title">{currentQuestion.question}</h1>
                                <p className="quiz-instruction-subtitle">Selecione a opção que melhor descreve a sua realidade ou o aprendizado do e-book:</p>

                                <div className="quiz-options-list">
                                    {currentQuestion.options.map((opt, idx) => {
                                        const isSelected = selectedOptions[currentStep] === idx;
                                        return (
                                            <button
                                                key={idx}
                                                type="button"
                                                className={`quiz-option-card ${isSelected ? 'option-selected' : ''}`}
                                                onClick={() => handleSelectOption(idx)}
                                            >
                                                <div className="option-letter-badge">{opt.letter}</div>
                                                <div className="option-text-content">
                                                    <p>{opt.text}</p>
                                                </div>
                                                <div className="option-checkbox-indicator">
                                                    {isSelected && <CheckCircle size={24} weight="fill" className="text-blue-cta" />}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Navigation Actions */}
                                <div className="quiz-action-bar">
                                    {currentStep > 1 ? (
                                        <button 
                                            type="button" 
                                            className="btn btn-clinic-secondary btn-quiz-prev"
                                            onClick={handlePrevious}
                                        >
                                            <ArrowLeft size={18} weight="bold" /> Anterior
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}

                                    <button
                                        type="button"
                                        className={`btn btn-clinic-primary btn-quiz-next ${selectedOptions[currentStep] === undefined ? 'disabled' : 'pulse-effect'}`}
                                        disabled={selectedOptions[currentStep] === undefined}
                                        onClick={handleNext}
                                    >
                                        {currentStep === questions.length ? "Ver Meu Diagnóstico & Cupom" : "Próxima Pergunta"}
                                        <ArrowUpRight size={18} weight="bold" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submitting Loading State */}
                    {isSubmitting && (
                        <div className="quiz-loading-card scroll-reveal">
                            <div className="spinner-clinic"></div>
                            <h2>Analisando seu Perfil Metabólico...</h2>
                            <p>Cruzando suas respostas com a conduta científica de reversão da resistência à insulina da Aliada Medicina & Saúde.</p>
                        </div>
                    )}

                    {/* Result & Coupon Screen */}
                    {isCompleted && (
                        <div className="quiz-result-card scroll-reveal">
                            <div className="result-badge-pill">
                                <Sparkle size={18} weight="fill" className="text-amber" />
                                <span>Quiz Concluído — Diagnóstico Mapeado</span>
                            </div>

                            <h1 className="result-main-title">Parabéns por cuidar da sua saúde metabólica!</h1>
                            <p className="result-main-lead">
                                Suas 7 respostas confirmam que você entende o papel fundamental da <strong>Resistência à Insulina</strong> no ganho de peso. Entender a sua fisiologia é o primeiro passo para parar de se culpar e conquistar um emagrecimento sustentável.
                            </p>

                            {/* Coupon Ticket Box */}
                            <div className="coupon-ticket-box">
                                <div className="coupon-header">
                                    <span className="coupon-eyebrow">PRESENTE EXCLUSIVO DO QUIZ</span>
                                    <h3 className="coupon-title">5% OFF no Tratamento Integrativo</h3>
                                    <p className="coupon-desc">Válido para sua consulta inicial e acompanhamento médico + nutricional na Aliada.</p>
                                </div>

                                <div className="coupon-code-container">
                                    <div className="coupon-code-display">
                                        <span className="coupon-code-text">ALIADA5</span>
                                        <span className="coupon-discount-tag">5% OFF</span>
                                    </div>
                                    <button 
                                        type="button" 
                                        className={`btn-copy-coupon ${copied ? 'copied' : ''}`}
                                        onClick={copyCoupon}
                                    >
                                        <Copy size={18} weight="bold" />
                                        {copied ? "Copiado!" : "Copiar Cupom"}
                                    </button>
                                </div>
                                {copied && <p className="copied-toast-msg">✓ Código ALIADA5 copiado para a sua área de transferência!</p>}
                            </div>

                            {/* CTA Action Box */}
                            <div className="result-cta-section">
                                <a 
                                    href={whatsappLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-clinic-primary btn-whatsapp-discount pulse-effect"
                                >
                                    <WhatsappLogo size={24} weight="fill" />
                                    Agendar Tratamento com 5% OFF no WhatsApp
                                </a>

                                <div className="result-trust-guarantee">
                                    <span><ShieldCheck size={18} className="text-blue-cta" /> Atendimento Médico & Nutricional 100% Online</span>
                                    <span><Sparkle size={18} className="text-amber" /> Cupom aplicado automaticamente ao chamar</span>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>

            {/* Footer */}
            <footer className="clinic-footer">
                <div className="container footer-grid-editorial">
                    <div className="footer-brand-info">
                        <span className="logo-serif">Aliada</span>
                        <span className="logo-tagline">Medicina & Saúde</span>
                        <p className="copyright-editorial">&copy; 2026 Aliada Medicina e Saúde. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-links-editorial">
                        <h4>Navegação</h4>
                        <a href="/">Clínica</a>
                        <a href="/ebook">E-book</a>
                        <a href="/quiz">Quiz Metabólico</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
