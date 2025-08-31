import { Card, CardContent } from '../ui/card';
import { Users, Clock, Star, Award, Shield, Car, Zap, Target, Heart, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutSection() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, number: '1000+', label: 'Clientes Satisfeitos' },
    { icon: <Car className="h-6 w-6" />, number: '50+', label: 'Veículos na Frota' },
    { icon: <Clock className="h-6 w-6" />, number: '24/7', label: 'Disponibilidade' },
    { icon: <Star className="h-6 w-6" />, number: '4.9', label: 'Avaliação Média' }
  ];

  const values = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Rapidez',
      description: 'Resposta em 5 minutos e chegada pontual',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Segurança',
      description: 'Condutores licenciados e veículos inspeccionados',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: 'Excelência',
      description: 'Serviço personalizado e de alta qualidade',
      gradient: 'from-green-500 to-emerald-500'
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
    <div className="min-h-screen pt-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-orange-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              <span>Mais de 10 anos de experiência</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Sobre a
              </span>
              <br />
              <span className="text-foreground">TransferPro</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Há mais de 10 anos a proporcionar transfers de qualidade premium, 
              conectando pessoas aos seus destinos com segurança e conforto.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Nossa História</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A TransferPro nasceu em 2013 com uma missão simples: revolucionar 
                  a experiência de transfers em Portugal. Começámos com apenas 3 veículos 
                  e uma equipa dedicada de 5 pessoas.
                </p>
                <p>
                  Hoje, somos uma das empresas líderes no sector, com uma frota de mais 
                  de 50 veículos e uma equipa de 30 profissionais altamente qualificados. 
                  Servimos milhares de clientes por ano, desde turistas individuais a 
                  grandes grupos corporativos.
                </p>
                <p>
                  O nosso sucesso baseia-se em três pilares fundamentais: segurança, 
                  pontualidade e excelência no atendimento. Cada membro da nossa equipa 
                  partilha estes valores e trabalha diariamente para os concretizar.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1495150434753-f8ceb319e9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwc2h1dHRsZXxlbnwxfHx8fDE3NTY2MDk1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="TransferPro Fleet"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Os Nossos Valores</h2>
            <p className="text-lg text-muted-foreground">
              Três pilares que definem a nossa excelência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${value.gradient} text-white p-6 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-white text-center">
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certificações e Licenças</h2>
            <p className="text-lg text-muted-foreground">
              Cumprimos todos os requisitos legais e de qualidade para garantir um serviço seguro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100 hover:scale-105 transition-transform shadow-md">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-r from-primary via-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">A Nossa Missão</h2>
          <p className="text-lg lg:text-xl opacity-90 font-medium max-w-3xl mx-auto leading-relaxed">
            "Proporcionar experiências de transfer excepcionais, conectando pessoas aos seus destinos 
            de forma segura, confortável e pontual. Queremos ser a primeira escolha para quem procura 
            qualidade, profissionalismo e tranquilidade nas suas viagens."
          </p>
        </div>
      </section>
    </div>
  );
}