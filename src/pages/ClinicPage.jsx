import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ArrowUpRight, VideoCamera, ShieldCheck, CaretLeft, CaretRight } from '@phosphor-icons/react';
import FaqAccordion from '../components/FaqAccordion';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ClinicPage() {
    useScrollReveal();

    const faqItems = [
        {
            question: "Como funciona a consulta médica e nutricional 100% online?",
            answer: "Os atendimentos ocorrem por videoconferência pelo Google Meet no conforto de sua residência. Nossa equipe envia o link de acesso antes de cada consulta. O acompanhamento corporal é feito através do controle de peso, medidas e fotos padronizadas seguindo nossa metodologia digital exclusiva."
        },
        {
            question: "Como recebo as receitas de medicamentos controlados?",
            answer: "A Dra. Maria Eduarda emite as receitas médicas assinadas digitalmente e válidas em todo o Brasil. Você recebe a receita via SMS ou WhatsApp com código de barras, pronta para ser apresentada ou lida digitalmente em qualquer farmácia nacional."
        },
        {
            question: "Como é feito o suporte diário pelo WhatsApp?",
            answer: "Você terá um canal direto com a equipe clínica durante o acompanhamento. Isso garante suporte rápido para tirar dúvidas sobre a dieta, relatar reações de medicamentos, fazer substituições de pratos ou adaptar treinos de segunda a sexta, em horário comercial."
        },
        {
            question: "Vocês solicitam exames de sangue?",
            answer: "Sim. Se você tiver exames dos últimos 3 meses, nós os avaliaremos no primeiro encontro. Caso contrário, nossa médica solicitará a bateria de exames exata necessária para investigar sua fisiologia metabólica detalhadamente na consulta inicial."
        }
    ];

    return (
        <div className="premium-clinic-body">
            {/* Header */}
            <header className="clinic-header">
                <div className="container header-grid-nav">
                    <a href="/" className="clinic-logo">
                        <span className="logo-serif">Aliada</span>
                        <span className="logo-tagline">Medicina & Saúde</span>
                    </a>
                    <nav className="clinic-nav">
                        <a href="#resultados">Depoimentos</a>
                        <a href="#especialistas">As Especialistas</a>
                        <a href="/quiz">Quiz Metabólico</a>
                    </nav>
                    <a href="https://wa.me/5547996887437?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20vagas%20e%20saber%20mais%20sobre%20o%20Acompanhamento%20Aliada." target="_blank" rel="noopener noreferrer" className="btn btn-clinic-primary nav-cta pulse-effect">
                        Agendar Consulta
                    </a>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero-premium-section">
                    <div className="container hero-premium-grid">
                        <div className="hero-premium-content scroll-reveal-left">
                            <span className="eyebrow-premium" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span className="pulse-dot-live"></span>
                                Acompanhamento Integrado e Exclusivo
                            </span>
                            <h1 className="hero-premium-title">
                                Tratar a obesidade não é sobre culpa. É sobre regular a sua <span className="highlight-serif">fisiologia.</span>
                            </h1>
                            <p className="hero-premium-subtitle">
                                Desenhamos um acompanhamento médico-nutricional focado em reverter a resistência à insulina, controlar a fome hormonal e bloquear o efeito rebote.
                            </p>
                            <div className="hero-premium-actions">
                                <a href="https://wa.me/5547996887437?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20vagas%20e%20saber%20mais%20sobre%20o%20Acompanhamento%20Aliada." target="_blank" rel="noopener noreferrer" className="btn btn-clinic-primary btn-hero-cta pulse-effect">
                                    Falar com Equipe de Agendamento
                                    <ArrowUpRight size={18} weight="bold" />
                                </a>
                                <a href="#resultados" className="btn btn-clinic-secondary">Depoimentos</a>
                            </div>
                            <div className="hero-premium-trust">
                                <span><VideoCamera size={18} /> 100% Online via Google Meet</span>
                                <span><ShieldCheck size={18} /> Suporte Médico & Nutricional Direto</span>
                            </div>
                        </div>

                        {/* Hero Right Visual Column - Contextualized Team Card */}
                        <div className="hero-team-card-wrapper scroll-reveal-right reveal-delay-2">
                            <div className="hero-team-card">
                                <div className="hero-team-card-header">
                                    <span className="hero-team-tag">Corpo Clínico Integrado</span>
                                    <h3 className="hero-team-names">Leticia Boettcher & Dra. Maria Eduarda</h3>
                                </div>
                                <div className="hero-team-photo-container">
                                    <img src="/leticia-maria.jpeg" alt="Leticia Boettcher e Dra. Maria Eduarda Busko" className="hero-team-photo" />
                                </div>
                                <div className="hero-team-card-body">
                                    <p className="hero-team-desc">
                                        Sua saúde tratada por nutricionista e médica juntas em uma conduta integrada para regular seus hormônios e acelerar o emagrecimento.
                                    </p>
                                    <div className="hero-team-features">
                                        <span><ShieldCheck size={16} /> Medicina & Nutrição</span>
                                        <span><VideoCamera size={16} /> 100% Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Real Results Section */}
                <section id="resultados" className="results-premium-section">
                    <div className="container">
                        <div className="section-header-centered scroll-reveal">
                            <span className="eyebrow-premium">Resultados de Sucesso</span>
                            <h2 className="section-title-premium">Depoimentos e Casos Clínicos Reais</h2>
                        </div>

                        {/* Main Story */}
                        <div className="story-highlight-box scroll-reveal reveal-delay-1">
                            <div className="story-content">
                                <h3 className="story-title">"Eu entendi que o meu processo era diferente..."</h3>
                                <blockquote className="story-quote">
                                    <p>
                                        "Eu já tinha emagrecido 30kg com dieta e treino por conta própria quando meu peso estagnou de vez e minha fome aumentou. Foi quando decidi procurar a nutri Leti e a Dra. Maria na Aliada."
                                    </p>
                                    <p>
                                        "Eu entendi que precisava de uma equipe que me ajudasse a tratar a obesidade clinicamente porque o meu processo exigia suporte hormonal. Hoje, mantenho minha rotina com dieta, treinos e a medicação certa. Além de perder mais peso, minha fome cessou. Foi a grande virada de chave da minha vida."
                                    </p>
                                    <cite className="story-author">— Thaisa, 33 anos, Curitiba/PR</cite>
                                </blockquote>
                            </div>
                        </div>

                        {/* Testimonials Swiper Carousel */}
                        <div className="screenshots-grid-container scroll-reveal reveal-delay-2">
                            <div className="screenshots-header">
                                <p className="screenshots-intro">Confira relatos de pacientes reais que estão vivenciando a transformação metabólica da Aliada (Arraste para o lado):</p>
                            </div>

                            <div className="testimonials-carousel-wrapper">
                                <button className="swiper-nav-btn swiper-nav-prev" aria-label="Depoimento anterior">
                                    <CaretLeft size={24} weight="bold" />
                                </button>

                                <div className="swiper-container-inner">
                                    <Swiper
                                        modules={[Pagination, Autoplay, Navigation]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        loop={true}
                                        pagination={{ clickable: true }}
                                        navigation={{
                                            prevEl: '.swiper-nav-prev',
                                            nextEl: '.swiper-nav-next',
                                        }}
                                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 30
                                            }
                                        }}
                                        className="testimonials-swiper"
                                    >
                                        <SwiperSlide>
                                            <div className="phone-mockup-frame">
                                                <img src="/WhatsApp Image 2026-08-01 at 17.01.05.jpeg" alt="Depoimento de Paciente Aliada no WhatsApp" className="phone-screenshot-img" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="phone-mockup-frame">
                                                <img src="/WhatsApp Image 2026-08-01 at 17.01.06.jpeg" alt="Histórico de Resultado Aliada no WhatsApp" className="phone-screenshot-img" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                                <button className="swiper-nav-btn swiper-nav-next" aria-label="Próximo depoimento">
                                    <CaretRight size={24} weight="bold" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specialists Section */}
                <section id="especialistas" className="specialists-section">
                    <div className="container">
                        <div className="section-header-centered scroll-reveal">
                            <span className="eyebrow-premium">Corpo Clínico</span>
                            <h2 className="section-title-premium">As Suas Aliadas Nessa Jornada</h2>
                        </div>

                        <div className="specialists-grid">
                            <div className="specialist-editorial-card scroll-reveal-left reveal-delay-1">
                                <div className="specialist-photo-container">
                                    <img src="/leticia.jpeg" alt="Leticia Boettcher - Nutricionista" className="specialist-img-portrait" />
                                </div>
                                <div className="specialist-details">
                                    <span className="spec-role">Idealizadora & Nutricionista</span>
                                    <h3>Leticia Boettcher</h3>
                                    <span className="spec-crn">CRN-10 8444</span>
                                    <p>Referência nacional em emagrecimento clínico de obesidade, com pacientes ativos em 13 países. Dedica seus quase 10 anos de atuação a reverter a resistência à insulina de forma personalizada e livre de sofrimento.</p>
                                </div>
                            </div>

                            <div className="specialist-editorial-card scroll-reveal-right reveal-delay-2">
                                <div className="specialist-photo-container">
                                    <img src="/maria.jpeg" alt="Dra. Maria Eduarda Busko - Médica" className="specialist-img-portrait" />
                                </div>
                                <div className="specialist-details">
                                    <span className="spec-role">Médica Clínica Integrativa</span>
                                    <h3>Dra. Maria Eduarda Busko</h3>
                                    <span className="spec-crm">CRM-PR 56568</span>
                                    <p>Reconhecida pela abordagem humanizada no tratamento clínico da obesidade. Alia a medicina baseada em evidências a estratégias práticas de dosagens hormonais e controle do comportamento alimentar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="faq-premium-section">
                    <div className="container faq-premium-container">
                        <div className="section-header-centered scroll-reveal">
                            <span className="eyebrow-premium">Dúvidas Frequentes</span>
                            <h2 className="section-title-premium">Perguntas Respondidas</h2>
                        </div>

                        <div className="scroll-reveal reveal-delay-1">
                            <FaqAccordion items={faqItems} />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="clinic-footer">
                <div className="container footer-grid-editorial">
                    <div className="footer-brand-info">
                        <span className="logo-serif">Aliada</span>
                        <span className="logo-tagline">Medicina & Saúde</span>
                        <p className="prof-crn-crm">Nutricionista Leticia Boettcher — CRN-10 8444</p>
                        <p className="prof-crn-crm">Dra. Maria Eduarda B. Busko — CRM-PR 56568</p>
                        <p className="copyright-editorial">&copy; 2026 Aliada Medicina e Saúde. Todos os direitos reservados.</p>
                    </div>
                    <div className="footer-links-editorial">
                        <h4>Navegação</h4>
                        <a href="#resultados">Depoimentos</a>
                        <a href="#especialistas">As Especialistas</a>
                        <a href="#filosofia">A Filosofia</a>
                        <a href="#tratamento">O Tratamento</a>
                        <a href="/ebook">Comprar E-book</a>
                    </div>
                    <div className="footer-disclaimer-editorial">
                        <h4>Aviso Legal</h4>
                        <p>As informações contidas nesta página são puramente educacionais e informativas. Em hipótese alguma substituem a consulta individual de um profissional médico ou nutricionista.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
