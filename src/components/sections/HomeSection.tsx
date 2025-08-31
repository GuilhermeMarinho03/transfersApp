import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon, MapPin, Users, Clock, Star, Shield, Car, Quote, ArrowRight, Heart, Coffee, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FadeIn, SlideUp, SlideInLeft, SlideInRight, ScaleIn, StaggerContainer, FloatingElement } from '../animations/ScrollAnimations';

// Date formatting utility
const formatDate = (date: Date) => {
  return date.toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export function HomeSection() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    passengers: '',
    children: '',
    vehicleType: '',
    time: '',
    returnDate: '',
    returnTime: '',
    specialRequests: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    console.log('Booking data:', { ...formData, date });
    alert('Reserva enviada com sucesso! Entraremos em contacto consigo em breve.');
  };

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Lisboa",
      rating: 5,
      text: "Serviço impecável! O condutor foi pontual, simpático e o carro estava impecável.",
    },
    {
      name: "João Santos",
      location: "Porto",
      rating: 5,
      text: "Perfeito para viagens de negócios. Sempre pontuais e profissionais.",
    },
    {
      name: "Ana Costa",
      location: "Cascais",
      rating: 5,
      text: "Levaram-nos ao aeroporto com toda a tranquilidade. Serviço 5 estrelas!",
    }
  ];

  const features = [
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Resposta Rápida",
      description: "Cotação em 5 minutos"
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "100% Seguro",
      description: "Condutores certificados"
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Sempre Pontual",
      description: "Monitorização em tempo real"
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Cuidado Especial",
      description: "Atenção aos detalhes"
    }
  ];

  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-primary/3 to-transparent">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <SlideInLeft>
              <div className="space-y-8">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-5 py-3 rounded-full font-medium border border-primary/20">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="text-sm">Avaliação 4.9/5 • Mais de 1000 clientes felizes</span>
                    </div>
                  </FadeIn>
                  
                  <SlideUp delay={0.4}>
                    <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                      <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                        Viaje
                      </span>
                      <br />
                      <span className="text-foreground">com Conforto</span>
                    </h1>
                  </SlideUp>
                  
                  <FadeIn delay={0.6}>
                    <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg font-light">
                      Transformamos cada viagem numa experiência especial. 
                      Transfers premium com preços transparentes e sem surpresas.
                    </p>
                  </FadeIn>
                </div>

                <SlideUp delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-medium">
                      Reservar Agora
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-primary/20 text-primary hover:bg-primary/5 px-8 py-4 text-lg font-medium">
                      Ver Preços
                    </Button>
                  </div>
                </SlideUp>

                {/* Quick Stats */}
                <StaggerContainer delay={1} staggerDelay={0.2} className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">1000+</div>
                    <div className="text-sm font-medium text-muted-foreground">Clientes</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">24/7</div>
                    <div className="text-sm font-medium text-muted-foreground">Disponível</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold text-primary">4.9★</div>
                    <div className="text-sm font-medium text-muted-foreground">Avaliação</div>
                  </div>
                </StaggerContainer>
              </div>
            </SlideInLeft>

            {/* Right Image */}
            <SlideInRight delay={0.3}>
              <div className="relative">
                <FloatingElement>
                  <div className="relative group">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FyJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzU2NjEwMjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luxury Car Interior"
                      className="w-full h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                </FloatingElement>
                <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl -z-10"></div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Porquê Escolher-nos?</h2>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                Cada detalhe é pensado para tornar a sua viagem perfeita
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer delay={0.2} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-500">
                <ScaleIn delay={index * 0.1}>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    {feature.icon}
                  </div>
                </ScaleIn>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Reserve o seu Transfer</h2>
                <p className="text-xl text-muted-foreground font-light">
                  Preencha os detalhes e receba uma cotação imediata
                </p>
              </div>
            </FadeIn>

            <SlideUp delay={0.3}>
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-t-2xl py-8">
                <CardTitle className="text-2xl mb-2 font-bold tracking-tight">Formulário de Reserva</CardTitle>
                <p className="opacity-90 font-light">
                  Todos os campos são importantes para garantir o melhor serviço
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                {/* Locations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="pickup" className="flex items-center space-x-3 text-base font-medium">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span>Local de Partida</span>
                    </Label>
                    <Input
                      id="pickup"
                      placeholder="Ex: Aeroporto de Lisboa"
                      value={formData.pickup}
                      onChange={(e) => handleInputChange('pickup', e.target.value)}
                      className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="destination" className="flex items-center space-x-3 text-base font-medium">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span>Destino</span>
                    </Label>
                    <Input
                      id="destination"
                      placeholder="Ex: Hotel Tivoli Oriente"
                      value={formData.destination}
                      onChange={(e) => handleInputChange('destination', e.target.value)}
                      className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Data da Viagem</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal h-12 rounded-xl border-0 bg-muted/50 hover:bg-white transition-colors"
                        >
                          <CalendarIcon className="mr-3 h-5 w-5" />
                          {date ? formatDate(date) : "Selecionar data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 border-0 shadow-xl">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="rounded-xl"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="time" className="text-base font-medium">Hora</Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
                        <SelectValue placeholder="Selecionar hora" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-0 shadow-xl">
                        {Array.from({ length: 24 }, (_, i) => {
                          const hour = i.toString().padStart(2, '0');
                          return (
                            <SelectItem key={hour} value={`${hour}:00`} className="rounded-lg">
                              {hour}:00
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Passengers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="passengers" className="flex items-center space-x-3 text-base font-medium">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span>Adultos</span>
                    </Label>
                    <Select value={formData.passengers} onValueChange={(value) => handleInputChange('passengers', value)}>
                      <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-0 shadow-xl">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <SelectItem key={num} value={num.toString()} className="rounded-lg">
                            {num} {num === 1 ? 'adulto' : 'adultos'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="children" className="text-base font-medium">Crianças (0-12 anos)</Label>
                    <Select value={formData.children} onValueChange={(value) => handleInputChange('children', value)}>
                      <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-0 shadow-xl">
                        {[0, 1, 2, 3, 4].map(num => (
                          <SelectItem key={num} value={num.toString()} className="rounded-lg">
                            {num} {num === 1 ? 'criança' : 'crianças'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="vehicleType" className="flex items-center space-x-3 text-base font-medium">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Car className="h-4 w-4 text-primary" />
                      </div>
                      <span>Tipo de Veículo</span>
                    </Label>
                    <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                      <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-0 shadow-xl">
                        <SelectItem value="sedan" className="rounded-lg">Sedan (1-3 pax)</SelectItem>
                        <SelectItem value="executive" className="rounded-lg">Executivo (1-3 pax)</SelectItem>
                        <SelectItem value="van" className="rounded-lg">Van (4-8 pax)</SelectItem>
                        <SelectItem value="luxury" className="rounded-lg">Luxo (1-3 pax)</SelectItem>
                        <SelectItem value="minibus" className="rounded-lg">Minibus (9-16 pax)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Return Trip */}
                <div className="space-y-6">
                  <Label className="text-xl font-bold tracking-tight">Viagem de Regresso (Opcional)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="returnDate" className="text-base font-medium">Data de Regresso</Label>
                      <Input
                        id="returnDate"
                        type="date"
                        value={formData.returnDate}
                        onChange={(e) => handleInputChange('returnDate', e.target.value)}
                        className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="returnTime" className="text-base font-medium">Hora de Regresso</Label>
                      <Select value={formData.returnTime} onValueChange={(value) => handleInputChange('returnTime', value)}>
                        <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
                          <SelectValue placeholder="Selecionar hora" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-0 shadow-xl">
                          {Array.from({ length: 24 }, (_, i) => {
                            const hour = i.toString().padStart(2, '0');
                            return (
                              <SelectItem key={hour} value={`${hour}:00`} className="rounded-lg">
                                {hour}:00
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-3">
                  <Label htmlFor="specialRequests" className="text-base font-medium">Pedidos Especiais</Label>
                  <textarea
                    id="specialRequests"
                    className="w-full min-h-[120px] p-4 border-0 bg-muted/50 rounded-xl resize-none focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Ex: Cadeira de bebé, assistência especial, paragem adicional..."
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
                  size="lg"
                >
                  Obter Cotação Gratuita
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </CardContent>
            </Card>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">O que dizem os nossos clientes</h2>
              <p className="text-xl text-muted-foreground font-light">
                Mais de 1000 histórias de viagens perfeitas
              </p>
            </div>
          </FadeIn>

          <StaggerContainer delay={0.2} staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed italic font-light">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground font-medium">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <SlideUp>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              Pronto para a sua próxima viagem?
            </h2>
          </SlideUp>
          <FadeIn delay={0.3}>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-light">
              Junte-se aos milhares de clientes que confiam em nós para os seus transfers
            </p>
          </FadeIn>
          <ScaleIn delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
                Reservar Agora
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold">
                Falar Connosco
              </Button>
            </div>
          </ScaleIn>
        </div>
      </section>
    </div>
  );
}