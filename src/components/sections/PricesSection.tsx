import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, Car, Users, Clock, MapPin, Star, Sparkles, Coffee, Wifi, Shield, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FadeIn, SlideUp, ScaleIn, StaggerContainer, RotateIn } from '../animations/ScrollAnimations';

export function PricesSection() {
  const pricing = [
    {
      title: 'Sedan',
      subtitle: 'Perfeito para casais',
      description: 'Ideal para 1-3 passageiros',
      icon: <Car className="h-7 w-7" />,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Até 3 passageiros',
        '2 bagagens grandes',
        'Ar condicionado',
        'Wi-Fi gratuito',
        'Água oferecida'
      ],
      routes: [
        { from: 'Aeroporto Lisboa', to: 'Centro de Lisboa', price: '25€' },
        { from: 'Aeroporto Lisboa', to: 'Cascais', price: '35€' },
        { from: 'Aeroporto Lisboa', to: 'Sintra', price: '45€' },
        { from: 'Aeroporto Porto', to: 'Centro do Porto', price: '20€' }
      ],
      popular: false,
      image: "https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FyJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzU2NjEwMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: 'Executivo',
      subtitle: 'A escolha dos profissionais',
      description: 'Conforto premium para 1-3 passageiros',
      icon: <Star className="h-7 w-7" />,
      gradient: 'from-primary to-orange-600',
      features: [
        'Até 3 passageiros',
        '3 bagagens grandes',
        'Veículo premium',
        'Wi-Fi de alta velocidade',
        'Bebidas oferecidas',
        'Jornais internacionais'
      ],
      routes: [
        { from: 'Aeroporto Lisboa', to: 'Centro de Lisboa', price: '35€' },
        { from: 'Aeroporto Lisboa', to: 'Cascais', price: '50€' },
        { from: 'Aeroporto Lisboa', to: 'Sintra', price: '60€' },
        { from: 'Aeroporto Porto', to: 'Centro do Porto', price: '30€' }
      ],
      popular: true,
      image: "https://images.unsplash.com/photo-1752747271602-89b145a445f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBleHBlcmllbmNlfGVufDF8fHx8MTc1NjYxMDI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: 'Van/Minibus',
      subtitle: 'Ideal para grupos',
      description: 'Para grupos até 8 passageiros',
      icon: <Users className="h-7 w-7" />,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'Até 8 passageiros',
        '8 bagagens grandes',
        'Ar condicionado',
        'Wi-Fi gratuito',
        'Espaço extra para bagagem',
        'Ideal para grupos'
      ],
      routes: [
        { from: 'Aeroporto Lisboa', to: 'Centro de Lisboa', price: '45€' },
        { from: 'Aeroporto Lisboa', to: 'Cascais', price: '60€' },
        { from: 'Aeroporto Lisboa', to: 'Sintra', price: '70€' },
        { from: 'Aeroporto Porto', to: 'Centro do Porto', price: '40€' }
      ],
      popular: false,
      image: "https://images.unsplash.com/photo-1630063386410-8a2dbbda1577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwc3Vuc2V0JTIwdHJhdmVsfGVufDF8fHx8MTc1NjYxMDI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const additionalServices = [
    {
      title: 'Tempo de Espera',
      description: 'Flexibilidade total',
      icon: <Clock className="h-7 w-7" />,
      gradient: 'from-purple-500 to-pink-500',
      details: [
        'Voos nacionais: 45 min gratuitos',
        'Voos internacionais: 60 min gratuitos',
        'Tempo extra: 5€ por cada 15 min'
      ]
    },
    {
      title: 'Paragens Extra',
      description: 'O seu percurso, as suas regras',
      icon: <MapPin className="h-7 w-7" />,
      gradient: 'from-amber-500 to-red-500',
      details: [
        'Primeira paragem: 10€',
        'Paragens adicionais: 5€ cada',
        'Tempo de espera: 10 min incluídos',
        'Tempo extra: 2€ por cada 5 min'
      ]
    }
  ];

  const benefits = [
    { icon: <Coffee className="h-5 w-5" />, text: 'Bebidas de cortesia' },
    { icon: <Wifi className="h-5 w-5" />, text: 'Wi-Fi gratuito' },
    { icon: <Star className="h-5 w-5" />, text: 'Condutores 5 estrelas' },
    { icon: <Clock className="h-5 w-5" />, text: 'Pontualidade garantida' }
  ];

  return (
    <div className="min-h-screen pt-18 bg-gradient-to-br from-primary/3 via-primary/2 to-transparent">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-5 py-3 rounded-full font-medium border border-primary/20 mb-8">
                <Sparkles className="h-5 w-5" />
                <span>Preços transparentes, sem surpresas</span>
              </div>
            </FadeIn>
            <SlideUp delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                  Preçário
                </span>
                <br />
                <span className="text-foreground">Transparente</span>
              </h1>
            </SlideUp>
            <FadeIn delay={0.4}>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Preços fixos sem surpresas. Todos os nossos transfers incluem monitorização de voos, 
                espera gratuita e preços transparentes.
              </p>
            </FadeIn>
          </div>

          {/* Benefits Bar */}
          <SlideUp delay={0.6}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 mb-16">
              <StaggerContainer delay={0.8} staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-center md:text-left">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="font-medium text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer delay={0.2} staggerDelay={0.2} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {pricing.map((plan, index) => (
              <ScaleIn key={index} delay={index * 0.15}>
                <Card className={`relative group hover:scale-105 transition-all duration-700 border-0 shadow-2xl overflow-hidden bg-white/90 backdrop-blur-sm ${plan.popular ? 'lg:scale-110 z-10' : ''}`}>
                  {plan.popular && (
                    <RotateIn delay={0.5}>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <Badge className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-2 font-bold shadow-lg rounded-full">
                          Mais Popular
                        </Badge>
                      </div>
                    </RotateIn>
                  )}
                
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${plan.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight">{plan.title}</h3>
                      <p className="text-white/90 font-medium mt-1">{plan.subtitle}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 bg-white space-y-8">
                  <div className="text-center">
                    <p className="text-muted-foreground font-light text-lg">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-center text-lg tracking-tight">Incluído:</h4>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Routes and Prices */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-center text-lg tracking-tight">Rotas Principais:</h4>
                    <div className="bg-muted/30 rounded-2xl p-4 space-y-3">
                      {plan.routes.slice(0, 3).map((route, routeIndex) => (
                        <div key={routeIndex} className="flex justify-between items-center py-2">
                          <div>
                            <p className="font-bold text-foreground">{route.from}</p>
                            <p className="text-sm text-muted-foreground">para {route.to}</p>
                          </div>
                          <span className={`font-bold text-xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                            {route.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full h-12 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white' 
                        : `bg-gradient-to-r ${plan.gradient} hover:scale-105 text-white`
                    }`}
                  >
                    Reservar {plan.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
              </ScaleIn>
            ))}
          </StaggerContainer>

          {/* Additional Services */}
          <div className="space-y-16">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Serviços Adicionais</h2>
                <p className="text-xl text-muted-foreground font-light">
                  Serviços extras para tornar a sua viagem ainda mais conveniente
                </p>
              </div>
            </FadeIn>

            <StaggerContainer delay={0.3} staggerDelay={0.3} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-700 border-0 shadow-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
                  <CardHeader className={`bg-gradient-to-r ${service.gradient} text-white text-center py-10`}>
                    <ScaleIn delay={0.2}>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4">
                        {service.icon}
                      </div>
                    </ScaleIn>
                    <CardTitle className="text-2xl font-bold tracking-tight">{service.title}</CardTitle>
                    <p className="text-white/90 font-medium text-lg">{service.description}</p>
                  </CardHeader>
                  <CardContent className="p-8 bg-white">
                    <ul className="space-y-4">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                          <span className="text-foreground font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </StaggerContainer>
          </div>

          {/* Notes */}
          <SlideUp delay={0.4} className="mt-24">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-2xl border-0">
              <CardContent className="p-10">
                <FadeIn delay={0.6}>
                  <h3 className="font-bold text-2xl mb-8 text-center tracking-tight">Notas Importantes</h3>
                </FadeIn>
                <StaggerContainer delay={0.8} staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-muted-foreground">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="font-medium">Preços válidos para áreas metropolitanas de Lisboa e Porto</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="font-medium">Cotação personalizada para destinos fora destas áreas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="font-medium">Todos os preços incluem IVA, portagens e combustível</span>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="font-medium">Descontos para viagens regulares e corporativas</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="font-medium">Pagamento em dinheiro, cartão ou transferência</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="font-medium">Cancelamento gratuito até 24h antes</span>
                    </li>
                  </ul>
                </StaggerContainer>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}