import { Card, CardContent } from '../ui/card';
import { Users, Clock, Star, Car, Zap, Shield, Target, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import './AboutSection.css';

export function AboutSection() {
  const stats = [
    { icon: <Users />, number: '1000+', label: 'Clientes Satisfeitos' },
    { icon: <Car />, number: '50+', label: 'Veículos na Frota' },
    { icon: <Clock />, number: '24/7', label: 'Disponibilidade' },
    { icon: <Star />, number: '4.9', label: 'Avaliação Média' }
  ];

  const values = [
    {
      icon: <Zap />,
      title: 'Rapidez',
      description: 'Resposta em 5 minutos e chegada pontual',
      gradient: 'rapidez'
    },
    {
      icon: <Shield />,
      title: 'Segurança',
      description: 'Condutores licenciados e veículos inspeccionados',
      gradient: 'seguranca'
    },
    {
      icon: <Target />,
      title: 'Excelência',
      description: 'Serviço personalizado e de alta qualidade',
      gradient: 'excelencia'
    }
  ];

  const certifications = [
    'Licença de Operador de Transporte',
    'Certificação ISO 9001',
    'Seguro Completo até 2M€',
    'Certificação de Condutores',
    'Conformidade GDPR'
  ];

  return (
    <div className="about-section">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <div className="about-hero-text">
            <div className="badge">
              <Heart />
              <span>Mais de 10 anos de experiência</span>
            </div>
            <h1 className="title">
              <span className="highlight">Sobre a</span><br/>
              <span className="foreground">TransferPro</span>
            </h1>
            <p className="subtitle">
              Há mais de 10 anos a proporcionar transfers de qualidade premium, conectando pessoas aos seus destinos com segurança e conforto.
            </p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container story-grid">
          <div>
            <h2>A Nossa História</h2>
            <div className="story-text">
              <p>A TransferPro nasceu em 2013 com uma missão simples: revolucionar a experiência de transfers em Portugal. Começámos com apenas 3 veículos e uma equipa dedicada de 5 pessoas.</p>
              <p>Hoje, somos uma das empresas líderes no sector, com uma frota de mais de 50 veículos e uma equipa de 30 profissionais altamente qualificados. Servimos milhares de clientes por ano, desde turistas individuais a grandes grupos corporativos.</p>
              <p>O nosso sucesso baseia-se em três pilares fundamentais: segurança, pontualidade e excelência no atendimento. Cada membro da nossa equipa partilha estes valores e trabalha diariamente para os concretizar.</p>
            </div>
          </div>
          <div className="story-image">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1495150434753-f8ceb319e9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwc2h1dHRsZXxlbnwxfHx8fDE3NTY2MDk1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="TransferPro Fleet"
              className="image"
            />
            <div className="story-image-overlay"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2>Os Nossos Valores</h2>
            <p>Três pilares que definem a nossa excelência</p>
          </div>
          <div className="values-grid">
            {values.map((value, i) => (
              <Card key={i} className={`value-card ${value.gradient}`}>
  <div className="top">
    <div className="value-icon">{value.icon}</div>
    <h3>{value.title}</h3>
  </div>
  <div className="bottom">
    <CardContent>
      <p>{value.description}</p>
    </CardContent>
  </div>
</Card>

            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="about-certifications">
        <div className="container">
          <div className="section-header">
            <h2>Certificações e Licenças</h2>
            <p>Cumprimos todos os requisitos legais e de qualidade para garantir um serviço seguro</p>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, i) => (
              <div key={i} className="cert-item">
                <div className="cert-icon"><Award /></div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container text-center">
          <h2>A Nossa Missão</h2>
          <p>"Proporcionar experiências de transfer excepcionais, conectando pessoas aos seus destinos de forma segura, confortável e pontual. Queremos ser a primeira escolha para quem procura qualidade, profissionalismo e tranquilidade nas suas viagens."</p>
        </div>
      </section>
    </div>
  );
}