import { useEffect } from 'react';

export function useScrollReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');

        // Immediate check for elements currently in or near the viewport
        const checkViewport = () => {
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= viewportHeight * 0.95) {
                    el.classList.add('reveal-visible');
                }
            });
        };

        // Run immediately and after a short render delay
        checkViewport();
        const timer1 = setTimeout(checkViewport, 50);
        const timer2 = setTimeout(checkViewport, 300);

        // IntersectionObserver for elements revealed during scrolling
        const observerOptions = {
            root: null,
            rootMargin: '80px 0px 80px 0px', // Positive margin so elements reveal before scrolling past them
            threshold: 0.01 // Low threshold so even 1% visibility triggers reveal immediately
        };

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        elements.forEach(el => {
            if (!el.classList.contains('reveal-visible')) {
                observer.observe(el);
            }
        });

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);
}
