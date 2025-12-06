import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.freelance': 'Freelance',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Marco Rossi',
    'hero.title': 'Software Engineer',
    'hero.subtitle': 'I build exceptional digital experiences with clean code and creative solutions.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate software engineer with 5+ years of experience building web applications. I specialize in React, TypeScript, and modern web technologies. When I\'m not coding, you\'ll find me exploring new technologies or contributing to open-source projects.',
    'about.location': 'Based in Milan, Italy',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    
    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Technologies I work with daily',
    
    // Projects
    'projects.title': 'Skill Building Projects',
    'projects.subtitle': 'Personal projects to sharpen my skills',
    'projects.viewCode': 'View Code',
    'projects.liveDemo': 'Live Demo',
    
    // Freelance
    'freelance.title': 'Freelance Work',
    'freelance.subtitle': 'Real projects for real clients',
    'freelance.viewProject': 'View Project',
    
    // Contact
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Have a project in mind? Let\'s create something amazing.',
    'contact.email': 'Email Me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
  },
  it: {
    // Navigation
    'nav.about': 'Chi Sono',
    'nav.skills': 'Competenze',
    'nav.projects': 'Progetti',
    'nav.freelance': 'Freelance',
    'nav.contact': 'Contatti',
    
    // Hero
    'hero.greeting': 'Ciao, sono',
    'hero.name': 'Marco Rossi',
    'hero.title': 'Software Engineer',
    'hero.subtitle': 'Creo esperienze digitali eccezionali con codice pulito e soluzioni creative.',
    'hero.cta': 'Vedi i Miei Lavori',
    'hero.contact': 'Contattami',
    
    // About
    'about.title': 'Chi Sono',
    'about.description': 'Sono un software engineer appassionato con oltre 5 anni di esperienza nella creazione di applicazioni web. Mi specializzo in React, TypeScript e tecnologie web moderne. Quando non sto programmando, mi troverete ad esplorare nuove tecnologie o a contribuire a progetti open-source.',
    'about.location': 'Vivo a Milano, Italia',
    'about.experience': 'Anni di Esperienza',
    'about.projects': 'Progetti Completati',
    'about.clients': 'Clienti Soddisfatti',
    
    // Skills
    'skills.title': 'Competenze & Tecnologie',
    'skills.subtitle': 'Tecnologie con cui lavoro quotidianamente',
    
    // Projects
    'projects.title': 'Progetti di Crescita',
    'projects.subtitle': 'Progetti personali per affinare le mie competenze',
    'projects.viewCode': 'Vedi Codice',
    'projects.liveDemo': 'Demo Live',
    
    // Freelance
    'freelance.title': 'Lavori Freelance',
    'freelance.subtitle': 'Progetti reali per clienti reali',
    'freelance.viewProject': 'Vedi Progetto',
    
    // Contact
    'contact.title': 'Lavoriamo Insieme',
    'contact.subtitle': 'Hai un progetto in mente? Creiamo qualcosa di straordinario.',
    'contact.email': 'Scrivimi',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
