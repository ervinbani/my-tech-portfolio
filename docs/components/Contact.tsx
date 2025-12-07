import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useLanguage();

  const contactLinks = [
    {
      label: t('contact.email'),
      href: 'mailto:hello@marcorossi.dev',
      icon: Mail,
      description: 'hello@marcorossi.dev',
    },
    {
      label: t('contact.linkedin'),
      href: 'https://linkedin.com/in/marcorossi',
      icon: Linkedin,
      description: '/in/marcorossi',
    },
    {
      label: t('contact.github'),
      href: 'https://github.com/marcorossi',
      icon: Github,
      description: '@marcorossi',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {t('contact.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card border border-border card-hover flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  {link.label}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground font-mono">{link.description}</p>
              </a>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-12"
            asChild
          >
            <a href="mailto:hello@marcorossi.dev">
              <Mail className="w-5 h-5 mr-2" />
              {t('contact.email')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
