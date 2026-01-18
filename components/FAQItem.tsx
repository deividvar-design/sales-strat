import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-100 border border-slate-300 rounded-xl overflow-hidden transition-colors hover:border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-start justify-between gap-4 group"
      >
        <h3 className="text-lg font-bold text-slate-900 flex items-start gap-2 flex-1">
          <span className="text-indigo-600 shrink-0">Q:</span>
          <span className="group-hover:text-indigo-600 transition-colors">{question}</span>
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-slate-600 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-700 leading-relaxed px-6 pb-6 ml-6">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
