import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, TypeScript, Node.js, and modern web technologies. I also have experience with Python, cloud platforms (AWS, GCP), and various databases.'
    },
    {
      question: 'Are you available for freelance work?',
      answer: 'Yes! I\'m currently available for freelance projects. Feel free to reach out via the Contact window to discuss your project needs.'
    },
    {
      question: 'How did you build this portfolio?',
      answer: 'This portfolio was built using React, TypeScript, and Tailwind CSS. The draggable windows are powered by react-draggable, and the entire interface is designed to mimic macOS aesthetics with custom components.'
    },
    {
      question: 'What\'s your development process?',
      answer: 'I follow agile methodologies, starting with understanding requirements, creating prototypes, iterative development, and thorough testing. I believe in clean code, good documentation, and continuous improvement.'
    },
    {
      question: 'Do you work remotely?',
      answer: 'Yes, I\'m experienced with remote work and have collaborated with teams across different time zones. I\'m comfortable with async communication and modern collaboration tools.'
    }
  ];

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="text-2xl mb-3">Frequently Asked Questions</h2>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden border border-gray-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center gap-3 hover:bg-white/50 transition-colors text-left"
            >
              <ChevronRight 
                className={`w-5 h-5 flex-shrink-0 text-indigo-500 transition-transform ${
                  openIndex === index ? 'rotate-90' : ''
                }`}
              />
              <span>{faq.question}</span>
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-4 pl-14 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
        <p className="text-sm text-indigo-900">
          💬 Have more questions? Open the <strong>Contact</strong> app in the dock to get in touch!
        </p>
      </div>
    </div>
  );
}
