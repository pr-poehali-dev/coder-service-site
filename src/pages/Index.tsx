import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const services = [
    {
      icon: 'Code2',
      title: 'Веб-разработка',
      description: 'Создаём современные веб-приложения на React, Vue, Next.js с чистым кодом и масштабируемой архитектурой',
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разработка нативных и кросс-платформенных приложений для iOS и Android на React Native и Flutter',
    },
    {
      icon: 'Database',
      title: 'Backend & API',
      description: 'Проектирование и разработка серверной части, RESTful и GraphQL API, микросервисная архитектура',
    },
    {
      icon: 'Layers',
      title: 'DevOps & CI/CD',
      description: 'Настройка инфраструктуры, автоматизация деплоя, контейнеризация Docker, Kubernetes',
    },
  ];

  const team = [
    {
      name: 'Алексей Иванов',
      role: 'Lead Full-Stack Developer',
      experience: '10+ лет опыта',
      skills: 'React, Node.js, TypeScript, PostgreSQL',
    },
    {
      name: 'Мария Петрова',
      role: 'Senior Frontend Developer',
      experience: '7 лет опыта',
      skills: 'React, Vue, Next.js, UX/UI',
    },
    {
      name: 'Дмитрий Сидоров',
      role: 'Backend Architect',
      experience: '12 лет опыта',
      skills: 'Python, Go, Microservices, AWS',
    },
    {
      name: 'Анна Козлова',
      role: 'Mobile Developer',
      experience: '6 лет опыта',
      skills: 'React Native, Swift, Kotlin',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">DevTeam</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('team')} className="text-sm font-medium hover:text-primary transition-colors">
                Команда
              </button>
              <Button onClick={() => scrollToSection('contact')}>Связаться</Button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
                Разработка <span className="text-primary">под ключ</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Команда опытных программистов создаст ваш проект от идеи до запуска. 
                Работаем с современными технологиями и лучшими практиками разработки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Полный спектр услуг разработки для вашего бизнеса
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наша команда</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Профессионалы с многолетним опытом в разработке
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 flex items-center justify-center">
                      <Icon name="User" size={40} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm font-medium">{member.experience}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.skills}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Готовы обсудить ваш проект? Заполните форму или свяжитесь напрямую
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Расскажите о вашем проекте"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@devteam.ru</p>
                        <p className="text-muted-foreground">support@devteam.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">Офис</h3>
                        <p className="text-muted-foreground">Москва, Тверская улица, д. 12</p>
                        <p className="text-muted-foreground">БЦ "Технопарк", офис 405</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Map" size={48} className="text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Интерактивная карта</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold">DevTeam</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 DevTeam. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;