import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Calendar, Briefcase, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Calendar, value: '5+', label: t('about.experience') },
    { icon: Briefcase, value: '30+', label: t('about.projects') },
    { icon: Users, value: '15+', label: t('about.clients') },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image/Avatar Side */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary-foreground font-mono">MR</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">{t('about.title')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="flex items-center gap-2 text-primary mb-8">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{t('about.location')}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-card border border-border card-hover"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
