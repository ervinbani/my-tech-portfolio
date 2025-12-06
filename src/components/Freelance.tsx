import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Briefcase, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Freelance = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      client: 'Fashion Boutique Milano',
      description: 'Complete e-commerce solution with inventory management, payment processing, and analytics dashboard. Increased online sales by 150%.',
      tech: ['React', 'Stripe', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      link: 'https://example.com',
      testimonial: 'Marco delivered exceptional work. Our online presence has transformed completely.',
    },
    {
      title: 'Restaurant Booking System',
      client: 'Ristorante Bella Vista',
      description: 'Custom reservation system with real-time availability, SMS notifications, and customer management. Reduced no-shows by 40%.',
      tech: ['Next.js', 'Twilio', 'PostgreSQL', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      link: 'https://example.com',
      testimonial: 'The booking system has streamlined our operations tremendously.',
    },
    {
      title: 'Fitness App Dashboard',
      client: 'FitLife Gym',
      description: 'Member management platform with workout tracking, class scheduling, and payment integration. Serving 2000+ active members.',
      tech: ['React Native', 'Firebase', 'Stripe', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      link: 'https://example.com',
      testimonial: 'Professional, responsive, and delivered beyond our expectations.',
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
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <span className="text-accent font-mono text-sm">{project.client}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;
