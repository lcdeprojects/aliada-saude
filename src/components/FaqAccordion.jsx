import { useState, useRef } from 'react';
import { CaretDown } from '@phosphor-icons/react';

export function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className={`faq-item-premium ${isOpen ? 'active' : ''}`}>
            <button 
                className="faq-trigger-premium" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <CaretDown style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
            </button>
            <div 
                className="faq-content-premium"
                ref={contentRef}
                style={{ 
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                }}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default function FaqAccordion({ items }) {
    return (
        <div className="faq-accordion-premium">
            {items.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}
