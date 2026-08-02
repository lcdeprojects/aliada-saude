import { useState, useEffect } from 'react';
import ClinicPage from './pages/ClinicPage';
import EbookPage from './pages/EbookPage';
import LinksPage from './pages/LinksPage';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handleLocationChange);
        return () => window.removeEventListener('popstate', handleLocationChange);
    }, []);

    // Global listener to hijack standard anchor clicks for SPA transition
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.href && !target.target) {
                const url = new URL(target.href);
                if (url.origin === window.location.origin) {
                    const path = url.pathname;
                    // Let default behavior handle internal section hash links
                    if (url.hash && path === window.location.pathname) {
                        return;
                    }
                    e.preventDefault();
                    window.history.pushState({}, '', path + url.hash);
                    setCurrentPath(path);
                    
                    if (url.hash) {
                        setTimeout(() => {
                            const element = document.querySelector(url.hash);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 50);
                    } else {
                        window.scrollTo({ top: 0, behavior: 'instant' });
                    }
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    if (currentPath === '/links') {
        return <LinksPage navigate={navigate} />;
    }
    if (currentPath === '/ebook') {
        return <EbookPage navigate={navigate} />;
    }
    return <ClinicPage navigate={navigate} />;
}

export default App;
