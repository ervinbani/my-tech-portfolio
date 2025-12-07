import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Freelance = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'en' ? 'Multi-Client Product Manager' : 'Gestionale Multi-Client',
      client: language === 'en' ? 'Small Business Solution' : 'Soluzione per Piccole Imprese',
      description: language === 'en' 
        ? 'Complete business management system with products organized by categories and variants, inventory tracking, customizable quotes for various business types, invoicing, customer management, calendar, role-based users, and interactive dashboard with analytics charts. Features voice commands for rapid quote and invoice creation.'
        : 'Sistema gestionale completo con prodotti organizzati per categorie e varianti, gestione stock, preventivi personalizzabili per vari tipi di business, fatturazione, gestione clienti, calendario, utenti con ruoli, e dashboard interattiva con grafici analitici. Include comandi vocali per creazione rapida di preventivi e fatture.',
      tech: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Voice API', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      link: 'https://example.com',
      testimonial: language === 'en' 
        ? 'This tool has revolutionized how we manage our business. The voice commands save us hours every week.'
        : 'Questo strumento ha rivoluzionato la gestione della nostra attività. I comandi vocali ci fanno risparmiare ore ogni settimana.',
      featured: true,
      features: language === 'en' 
        ? ['Products & Variants', 'Stock Management', 'Custom Quotes', 'Invoicing', 'Customer CRM', 'Calendar', 'Role-based Access', 'Analytics Dashboard', 'Voice Commands']
        : ['Prodotti & Varianti', 'Gestione Stock', 'Preventivi Custom', 'Fatturazione', 'CRM Clienti', 'Calendario', 'Accesso per Ruoli', 'Dashboard Analytics', 'Comandi Vocali'],
    },
    {
      title: language === 'en' ? 'Smart Hotel Booking System' : 'Sistema Prenotazioni Hotel Smart',
      client: language === 'en' ? 'Hospitality Industry' : 'Settore Hospitality',
      description: language === 'en' 
        ? 'Intelligent booking system with voice-enabled reservation creation, seamlessly integrated with customized hotel websites. Each implementation is tailored to the specific needs of the hotel, featuring real-time availability, automated confirmations, and guest management.'
        : 'Sistema di prenotazione intelligente con creazione prenotazioni vocale, integrato direttamente con siti web hotel personalizzati. Ogni implementazione è su misura per le esigenze specifiche dell\'hotel, con disponibilità in tempo reale, conferme automatiche e gestione ospiti.',
      tech: ['React', 'Next.js', 'Voice API', 'Supabase', 'Stripe', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      link: 'https://example.com',
      testimonial: language === 'en' 
        ? 'The voice booking feature has impressed our guests. Our reservation process is now faster and more intuitive than ever.'
        : 'La funzione di prenotazione vocale ha impressionato i nostri ospiti. Il processo di prenotazione è ora più veloce e intuitivo che mai.',
      featured: false,
      features: language === 'en' 
        ? ['Voice Booking', 'Real-time Availability', 'Custom Website', 'Guest Management', 'Auto Confirmations', 'Payment Integration']
        : ['Prenotazione Vocale', 'Disponibilità Real-time', 'Sito Personalizzato', 'Gestione Ospiti', 'Conferme Automatiche', 'Integrazione Pagamenti'],
    },
    {
      title: language === 'en' ? 'Smart CMS Plugin' : 'Plugin CMS Smart',
      client: language === 'en' ? 'Multi-Industry Solution' : 'Soluzione Multi-Settore',
      description: language === 'en' 
        ? 'Versatile content management system that integrates seamlessly with both the Product Manager and Hotel Booking System. Allows clients to easily publish products, rooms, text content, and images to their website. Designed for non-technical staff, making professional website management accessible to everyone.'
        : 'Sistema di gestione contenuti versatile che si integra perfettamente sia con il Gestionale Prodotti che con il Sistema Prenotazioni Hotel. Permette ai clienti di pubblicare facilmente prodotti, stanze, contenuti testuali e immagini sul proprio sito. Progettato per personale non tecnico, rende la gestione professionale del sito accessibile a tutti.',
      tech: ['React', 'Node.js', 'REST API', 'PostgreSQL', 'AWS S3', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      link: 'https://example.com',
      testimonial: language === 'en' 
        ? 'Finally our team can update the website independently. No more waiting for developers for every small change!'
        : 'Finalmente il nostro team può aggiornare il sito in autonomia. Basta aspettare gli sviluppatori per ogni piccola modifica!',
      featured: false,
      features: language === 'en' 
        ? ['Product Publishing', 'Image Gallery', 'Text Editor', 'Room Management', 'SEO Tools', 'Multi-Platform Integration']
        : ['Pubblicazione Prodotti', 'Galleria Immagini', 'Editor Testi', 'Gestione Stanze', 'Strumenti SEO', 'Integrazione Multi-Piattaforma'],
    },
  ];

  return (
    <section id="freelance" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Briefcase className="w-4 h-4 text-accent" />
              <span className="text-sm font-mono text-accent">Client Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text-accent">{t('freelance.title')}</span>
            </h2>
            <p className="text-muted-foreground text-lg">{t('freelance.subtitle')}</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative"
              >
                {project.featured && (
                  <div className="absolute -top-3 left-6 z-10">
                    <span className="px-4 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                      {language === 'en' ? 'FEATURED PROJECT' : 'PROGETTO PRINCIPALE'}
                    </span>
                  </div>
                )}
                <div className={`grid md:grid-cols-2 gap-8 items-center p-6 rounded-2xl ${project.featured ? 'bg-primary/5 border-2 border-primary/20' : ''}`}>
                  <div className="order-2 md:order-2">
                    <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="order-1 md:order-1">
                    <span className="text-accent font-mono text-sm">{project.client}</span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    {project.features && (
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 text-xs text-center rounded bg-secondary text-secondary-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <blockquote className="border-l-2 border-accent pl-4 mb-6 italic text-muted-foreground">
                      <Star className="w-4 h-4 text-accent inline mr-2" />
                      "{project.testimonial}"
                    </blockquote>

                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('freelance.viewProject')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
