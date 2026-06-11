import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Do I need prior coding experience?',
      answer: 'While beginners can join our foundational path, our core codebase challenges are optimized for students who have a basic understanding of programming concepts (like functions, variables, and elementary data structures) and want to learn how to apply them to professional systems.',
    },
    {
      question: 'How are projects evaluated?',
      answer: 'Projects are evaluated automatically through custom test suites, performance benchmarks, and code linter rules. Once your code passes the automated triggers, it is queued for a peer code review and mentor feedback to ensure style and architectural alignment.',
    },
    {
      question: 'Is internship placement guaranteed?',
      answer: 'We do not guarantee placements, as startups make the final hiring decisions based on their budget and culture. However, students who successfully complete and validate their selected track get priority matching and their portfolio profile highlighted directly to participating CTOs.',
    },
    {
      question: 'Can beginners join?',
      answer: 'Yes! We have a dedicated "Foundations" module designed to take beginners from basic scripting up to understanding source control (git), unit testing, and fundamental web standards, preparing them for the primary codebase challenges.',
    },
    {
      question: 'Are certificates provided?',
      answer: 'No, we do not provide traditional PDF certificates. Startups do not look at certificates; they look at verified code. Instead, you receive a public MakeMistakes builder profile URL showing your completed pull requests, test scores, and live demo links.',
    },
    {
      question: 'How much time should I commit?',
      answer: 'We recommend committing 10-15 hours per week. Because the program is self-paced, you can move faster or slower based on your school workload, but consistent building yields the best skill progression.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="relative py-20 bg-zinc-950">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-400">
            Frequently Asked Questions
          </h2>
          <h3 className="text-3xl font-bold text-white tracking-tight">
            Have Questions? We Have Answers.
          </h3>
        </div>

        {/* Accordions List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/5 bg-zinc-900/10 backdrop-blur-sm transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex justify-between items-center text-white focus:outline-none hover:bg-zinc-900/25 transition-colors text-left"
                >
                  <span className="font-semibold text-base pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="p-6 text-sm text-zinc-400 leading-relaxed bg-zinc-900/5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
