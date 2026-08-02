import { BookOpen, WhatsappLogo, InstagramLogo } from '@phosphor-icons/react';

export default function LinksPage() {
    return (
        <div className="links-page-body links-organic-theme">
            {/* Background floating soft shapes for depth */}
            <div className="organic-bg-shape shape-1"></div>
            <div className="organic-bg-shape shape-2"></div>

            <div className="links-container">
                {/* Profile Header */}
                <header className="links-header">
                    <div className="links-profile-wrapper">
                        <img src="/leticia.jpeg" alt="Leticia Boettcher - Nutricionista" className="links-profile-img" />
                    </div>
                    <span className="spec-role text-nutrition-green" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                        Nutrição Clínica & Emagrecimento
                    </span>
                    <h1 className="links-title">Leticia Boettcher</h1>
                    <p className="links-subtitle">
                        Tratando obseidade com evidência e ética.
                    </p>
                </header>

                {/* Links Container */}
                <main className="links-list">
                    {/* Link 2: Clinic / Treatment */}
                    <a href="/" className="link-card link-card-organic-secondary">
                        <span className="link-badge link-badge-clinic">Acompanhamento Premium</span>
                        <div className="link-card-content">
                            <div className="link-text-block">
                                <h3>Inicie seu Tratamento na Clínica</h3>
                                <p>Acompanhamento médico-nutricional integrativo com a equipe Aliada.</p>
                            </div>
                            <WhatsappLogo className="link-card-icon" size={26} weight="bold" />
                        </div>
                    </a>


                    {/* Link 1: E-book (Featured / Primary) */}
                    <a href="https://pay.kiwify.com.br/0DcEfjt" className="link-card link-card-primary link-card-organic-primary">
                        <span className="link-badge">E-book em Destaque</span>
                        <div className="link-card-content">
                            <div className="link-text-block">
                                <h3>E-book: Obesidade Controlada</h3>
                                <p>Um guia completo para nutricionistas e estudantes de nutrição sobre como tratar a obesidade.</p>
                            </div>
                            <BookOpen className="link-card-icon" size={26} weight="bold" />
                        </div>
                    </a>

                    {/* Link 3: Instagram */}
                    <a href="https://instagram.com/nutriletiboettcher" target="_blank" rel="noopener noreferrer" className="link-card">
                        <div className="link-card-content">
                            <div className="link-text-block">
                                <h3>Instagram Oficial</h3>
                                <p>Conteúdos diários sobre nutrição científica, metabolismo e hábitos saudáveis.</p>
                            </div>
                            <InstagramLogo className="link-card-icon" size={26} weight="bold" />
                        </div>
                    </a>
                </main>

                {/* Footer */}
                <footer className="links-footer" style={{ flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                        <a href="https://instagram.com/nutriletiboettcher" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramLogo size={22} />
                        </a>
                        <a href="https://wa.me/5547996887437" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <WhatsappLogo size={22} />
                        </a>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', margin: 0 }}>
                        &copy; 2026 Aliada Medicina e Saúde
                    </p>
                </footer>
            </div>
        </div>
    );
}
