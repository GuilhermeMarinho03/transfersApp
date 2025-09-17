import { useState } from 'react';
import { Button } from '../ui/button';
import { Star, ArrowRight, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import {
  FadeIn,
  SlideUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  FloatingElement,
  ScaleIn,
} from '../animations/ScrollAnimations';
import './Hero.css';

export function HomeSection() {
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    time: '',
    passengers: '',
    children: '',
    vehicleType: '',
    returnDate: '',
    returnTime: '',
    specialRequests: '',
  });
  const [date, setDate] = useState<Date | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleBooking = () => {
    console.log('Booking data:', formData, 'Date:', date);
  };

  const formatDate = (d: Date | null | undefined): string =>
    d ? new Intl.DateTimeFormat('pt-PT').format(d) : '';

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Conforto Premium',
      description: 'Viaturas modernas e equipadas para máximo conforto.',
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: 'Serviço Rápido',
      description: 'Transferências pontuais, sem atrasos ou surpresas.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Motoristas Profissionais',
      description: 'Condutores experientes e corteses à sua disposição.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Preço Transparente',
      description: 'Sem custos ocultos, o valor que vê é o que paga.',
    },
  ];

  return (
    <div className="hero">
      {/* Overlay */}
      <div className="hero-overlay">
        <div className="hero-overlay-gradient"></div>
      </div>

      {/* Hero Grid */}
      <div className="hero-grid">
        {/* Left Content */}
        <SlideInLeft>
          <div className="hero-text-container">
            <div className="hero-badge">
              <Star className="h-5 w-5 fill-current" />
              <span>Avaliação 4.9/5 • Mais de 1000 clientes felizes</span>
            </div>

            <SlideUp delay={0.4}>
              <h1 className="hero-title">
                <span className="highlight">Viaje</span>
                <br />
                com Conforto
              </h1>
            </SlideUp>

            <FadeIn delay={0.6}>
              <p className="hero-paragraph">
                Transformamos cada viagem numa experiência especial. Transfers
                premium com preços transparentes e sem surpresas.
              </p>
            </FadeIn>

            <SlideUp delay={0.8}>
              <div className="hero-buttons">
                <button className="button-reservar">
                  Reservar Agora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <button className="button-ver-precos">Ver Preços</button>
              </div>
            </SlideUp>
            <SlideUp delay={0.8}>
              <div className="hero-buttons">
                <button className="button-reservar">
                  Reservar Agora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
                <button className="button-ver-precos">Ver Preços</button>
              </div>
            </SlideUp>

            <StaggerContainer
              delay={1}
              staggerDelay={0.2}
              className="hero-stats"
            >
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Clientes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponível</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Avaliação</div>
              </div>
            </StaggerContainer>
          </div>
        </SlideInLeft>
            <StaggerContainer
              delay={1}
              staggerDelay={0.2}
              className="hero-stats"
            >
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Clientes</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponível</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Avaliação</div>
              </div>
            </StaggerContainer>
          </div>
        </SlideInLeft>

        {/* Right Image */}
        <SlideInRight delay={0.3}>
          <div className="hero-image-container">
            <FloatingElement>
              <div className="relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                  alt="Luxury Car Interior"
                  className="hero-image"
                />
                <div className="hero-image-overlay"></div>
        {/* Right Image */}
        <SlideInRight delay={0.3}>
          <div className="hero-image-container">
            <FloatingElement>
              <div className="relative group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1661220715153-95724e5f3500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                  alt="Luxury Car Interior"
                  className="hero-image"
                />
                <div className="hero-image-overlay"></div>
              </div>
            </FloatingElement>
            <div className="hero-image-bg"></div>
            </FloatingElement>
            <div className="hero-image-bg"></div>
          </div>
        </SlideInRight>
      </div>

      {/* Features Section */}
      <section className="hero-features-section">
        <div className="hero-features-container">
          <FadeIn>
            <div className="hero-features-header">
              <h2 className="hero-features-title">
                Porquê Escolher-nos?
              </h2>
              <p className="hero-features-subtitle">
                Cada detalhe é pensado para tornar a sua viagem perfeita
              </p>
            </div>
          </FadeIn>

          <StaggerContainer delay={0.2} staggerDelay={0.15} className="hero-features">
            {features.map((feature, index) => (
              <div key={index} className="hero-feature-item">
                <ScaleIn delay={index * 0.1}>
                  <div className="hero-feature-icon">{feature.icon}</div>
                </ScaleIn>
                <h3 className="hero-feature-title">{feature.title}</h3>
                <p className="hero-feature-description">{feature.description}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section">
        <div className="booking-container">
          <FadeIn>
            <div className="booking-header">
              <h2>Reserve o seu Transfer</h2>
              <p>Preencha os detalhes e receba uma cotação imediata</p>
            </div>
          </FadeIn>

          <SlideUp delay={0.3}>
            <div className="booking-card">
              <div className="booking-card-header">
                <h3>Formulário de Reserva</h3>
                <p>Todos os campos são importantes para garantir o melhor serviço</p>
              </div>
              <div className="booking-card-content">
               {/* Locations */}
<div className="booking-row">
  <div className="booking-field">
    <label>
      <span className="booking-icon">
        <MapPin className="icon" />
      </span>
      Local de Partida
    </label>
    <input
      type="text"
      placeholder="Ex: Aeroporto de Lisboa"
      value={formData.pickup}
      onChange={(e) => handleInputChange('pickup', e.target.value)}
    />
  </div>

  <div className="booking-field">
    <label>
      <span className="booking-icon">
        <MapPin className="icon" />
      </span>
      Destino
    </label>
    <input
      type="text"
      placeholder="Ex: Hotel Tivoli Oriente"
      value={formData.destination}
      onChange={(e) => handleInputChange('destination', e.target.value)}
    />
  </div>
</div>

                {/* Date and Time */}
                <div className="booking-row">
                  <div className="booking-field">
                    <label>Data da Viagem</label>
                    <input
                      type="date"
                      value={date ? formatDate(date) : ''}
                      onChange={(e) => setDate(e.target.valueAsDate)}
                    />
                  </div>
                  <div className="booking-field">
                    <label>Hora</label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div className="booking-row">
                  <div className="booking-field">
                    <label>Adultos</label>
                    <input
                      type="number"
                      min={1}
                      value={formData.passengers}
                      onChange={(e) => handleInputChange('passengers', e.target.value)}
                    />
                  </div>
                  <div className="booking-field">
                    <label>Crianças (0-12 anos)</label>
                    <input
                      type="number"
                      min={0}
                      value={formData.children}
                      onChange={(e) => handleInputChange('children', e.target.value)}
                    />
                  </div>
                  <div className="booking-field">
                    <label>Tipo de Veículo</label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => handleInputChange('vehicleType', e.target.value)}
                    >
                      <option value="">Selecionar</option>
                      <option value="sedan">Sedan (1-3 pax)</option>
                      <option value="executive">Executivo (1-3 pax)</option>
                      <option value="van">Van (4-8 pax)</option>
                      <option value="luxury">Luxo (1-3 pax)</option>
                      <option value="minibus">Minibus (9-16 pax)</option>
                    </select>
                  </div>
                </div>

                {/* Return Trip */}
                <div className="booking-row">
                  <div className="booking-field">
                    <label>Data de Regresso</label>
                    <input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => handleInputChange('returnDate', e.target.value)}
                    />
                  </div>
                  <div className="booking-field">
                    <label>Hora de Regresso</label>
                    <input
                      type="time"
                      value={formData.returnTime}
                      onChange={(e) => handleInputChange('returnTime', e.target.value)}
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="booking-row">
                  <div className="booking-field full-width">
                    <label>Pedidos Especiais</label>
                    <textarea
                      placeholder="Ex: Cadeira de bebé, assistência especial, paragem adicional..."
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    />
                  </div>
                </div>

                <Button onClick={handleBooking}>Obter Cotação Gratuita</Button>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}


          

//       {/* Booking Section */}
//       <section className="py-24 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
//         </div>
        
//         <div className="container mx-auto px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <FadeIn>
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Reserve o seu Transfer</h2>
//                 <p className="text-xl text-muted-foreground font-light">
//                   Preencha os detalhes e receba uma cotação imediata
//                 </p>
//               </div>
//             </FadeIn>

//             <SlideUp delay={0.3}>
//               <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
//               <CardHeader className="text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-t-2xl py-8">
//                 <CardTitle className="text-2xl mb-2 font-bold tracking-tight">Formulário de Reserva</CardTitle>
//                 <p className="opacity-90 font-light">
//                   Todos os campos são importantes para garantir o melhor serviço
//                 </p>
//               </CardHeader>
//               <CardContent className="space-y-8 p-8">
//                 {/* Locations */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-3">
//                     <Label htmlFor="pickup" className="flex items-center space-x-3 text-base font-medium">
//                       <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
//                         <MapPin className="h-4 w-4 text-primary" />
//                       </div>
//                       <span>Local de Partida</span>
//                     </Label>
//                     <Input
//                       id="pickup"
//                       placeholder="Ex: Aeroporto de Lisboa"
//                       value={formData.pickup}
//                       onChange={(e) => handleInputChange('pickup', e.target.value)}
//                       className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors"
//                     />
//                   </div>
//                   <div className="space-y-3">
//                     <Label htmlFor="destination" className="flex items-center space-x-3 text-base font-medium">
//                       <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
//                         <MapPin className="h-4 w-4 text-primary" />
//                       </div>
//                       <span>Destino</span>
//                     </Label>
//                     <Input
//                       id="destination"
//                       placeholder="Ex: Hotel Tivoli Oriente"
//                       value={formData.destination}
//                       onChange={(e) => handleInputChange('destination', e.target.value)}
//                       className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors"
//                     />
//                   </div>
//                 </div>

//                 {/* Date and Time */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-3">
//                     <Label className="text-base font-medium">Data da Viagem</Label>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <Button
//                           variant="outline"
//                           className="w-full justify-start text-left font-normal h-12 rounded-xl border-0 bg-muted/50 hover:bg-white transition-colors"
//                         >
//                           <CalendarIcon className="mr-3 h-5 w-5" />
//                           {date ? formatDate(date) : "Selecionar data"}
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0 border-0 shadow-xl">
//                         <Calendar
//                           mode="single"
//                           selected={date}
//                           onSelect={setDate}
//                           initialFocus
//                           className="rounded-xl"
//                         />
//                       </PopoverContent>
//                     </Popover>
//                   </div>
//                   <div className="space-y-3">
//                     <Label htmlFor="time" className="text-base font-medium">Hora</Label>
//                     <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
//                       <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
//                         <SelectValue placeholder="Selecionar hora" />
//                       </SelectTrigger>
//                       <SelectContent className="rounded-xl border-0 shadow-xl">
//                         {Array.from({ length: 24 }, (_, i) => {
//                           const hour = i.toString().padStart(2, '0');
//                           return (
//                             <SelectItem key={hour} value={`${hour}:00`} className="rounded-lg">
//                               {hour}:00
//                             </SelectItem>
//                           );
//                         })}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 {/* Passengers */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-3">
//                     <Label htmlFor="passengers" className="flex items-center space-x-3 text-base font-medium">
//                       <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
//                         <Users className="h-4 w-4 text-primary" />
//                       </div>
//                       <span>Adultos</span>
//                     </Label>
//                     <Select value={formData.passengers} onValueChange={(value) => handleInputChange('passengers', value)}>
//                       <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
//                         <SelectValue placeholder="Selecionar" />
//                       </SelectTrigger>
//                       <SelectContent className="rounded-xl border-0 shadow-xl">
//                         {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
//                           <SelectItem key={num} value={num.toString()} className="rounded-lg">
//                             {num} {num === 1 ? 'adulto' : 'adultos'}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-3">
//                     <Label htmlFor="children" className="text-base font-medium">Crianças (0-12 anos)</Label>
//                     <Select value={formData.children} onValueChange={(value) => handleInputChange('children', value)}>
//                       <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
//                         <SelectValue placeholder="Selecionar" />
//                       </SelectTrigger>
//                       <SelectContent className="rounded-xl border-0 shadow-xl">
//                         {[0, 1, 2, 3, 4].map(num => (
//                           <SelectItem key={num} value={num.toString()} className="rounded-lg">
//                             {num} {num === 1 ? 'criança' : 'crianças'}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-3">
//                     <Label htmlFor="vehicleType" className="flex items-center space-x-3 text-base font-medium">
//                       <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center">
//                         <Car className="h-4 w-4 text-primary" />
//                       </div>
//                       <span>Tipo de Veículo</span>
//                     </Label>
//                     <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
//                       <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
//                         <SelectValue placeholder="Selecionar" />
//                       </SelectTrigger>
//                       <SelectContent className="rounded-xl border-0 shadow-xl">
//                         <SelectItem value="sedan" className="rounded-lg">Sedan (1-3 pax)</SelectItem>
//                         <SelectItem value="executive" className="rounded-lg">Executivo (1-3 pax)</SelectItem>
//                         <SelectItem value="van" className="rounded-lg">Van (4-8 pax)</SelectItem>
//                         <SelectItem value="luxury" className="rounded-lg">Luxo (1-3 pax)</SelectItem>
//                         <SelectItem value="minibus" className="rounded-lg">Minibus (9-16 pax)</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 {/* Return Trip */}
//                 <div className="space-y-6">
//                   <Label className="text-xl font-bold tracking-tight">Viagem de Regresso (Opcional)</Label>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-3">
//                       <Label htmlFor="returnDate" className="text-base font-medium">Data de Regresso</Label>
//                       <Input
//                         id="returnDate"
//                         type="date"
//                         value={formData.returnDate}
//                         onChange={(e) => handleInputChange('returnDate', e.target.value)}
//                         className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors"
//                       />
//                     </div>
//                     <div className="space-y-3">
//                       <Label htmlFor="returnTime" className="text-base font-medium">Hora de Regresso</Label>
//                       <Select value={formData.returnTime} onValueChange={(value) => handleInputChange('returnTime', value)}>
//                         <SelectTrigger className="h-12 rounded-xl border-0 bg-muted/50 focus:bg-white transition-colors">
//                           <SelectValue placeholder="Selecionar hora" />
//                         </SelectTrigger>
//                         <SelectContent className="rounded-xl border-0 shadow-xl">
//                           {Array.from({ length: 24 }, (_, i) => {
//                             const hour = i.toString().padStart(2, '0');
//                             return (
//                               <SelectItem key={hour} value={`${hour}:00`} className="rounded-lg">
//                                 {hour}:00
//                               </SelectItem>
//                             );
//                           })}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Special Requests */}
//                 <div className="space-y-3">
//                   <Label htmlFor="specialRequests" className="text-base font-medium">Pedidos Especiais</Label>
//                   <textarea
//                     id="specialRequests"
//                     className="w-full min-h-[120px] p-4 border-0 bg-muted/50 rounded-xl resize-none focus:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
//                     placeholder="Ex: Cadeira de bebé, assistência especial, paragem adicional..."
//                     value={formData.specialRequests}
//                     onChange={(e) => handleInputChange('specialRequests', e.target.value)}
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <Button 
//                   onClick={handleBooking}
//                   className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 py-5 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
//                   size="lg"
//                 >
//                   Obter Cotação Gratuita
//                   <ArrowRight className="ml-3 h-6 w-6" />
//                 </Button>
//               </CardContent>
//             </Card>
//             </SlideUp>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 bg-white/50">
//         <div className="container mx-auto px-6 lg:px-8">
//           <FadeIn>
//             <div className="text-center mb-16">
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">O que dizem os nossos clientes</h2>
//               <p className="text-xl text-muted-foreground font-light">
//                 Mais de 1000 histórias de viagens perfeitas
//               </p>
//             </div>
//           </FadeIn>

//           <StaggerContainer delay={0.2} staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
//                 <CardContent className="p-8 space-y-6">
//                   <div className="flex items-center space-x-1">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-primary fill-current" />
//                     ))}
//                   </div>
//                   <Quote className="h-8 w-8 text-primary/30" />
//                   <p className="text-muted-foreground leading-relaxed italic font-light">
//                     "{testimonial.text}"
//                   </p>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
//                       <Users className="h-6 w-6 text-primary" />
//                     </div>
//                     <div>
//                       <div className="font-bold text-foreground">{testimonial.name}</div>
//                       <div className="text-sm text-muted-foreground font-medium">{testimonial.location}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </StaggerContainer>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
//         </div>
        
//         <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
//           <SlideUp>
//             <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
//               Pronto para a sua próxima viagem?
//             </h2>
//           </SlideUp>
//           <FadeIn delay={0.3}>
//             <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-light">
//               Junte-se aos milhares de clientes que confiam em nós para os seus transfers
//             </p>
//           </FadeIn>
//           <ScaleIn delay={0.6}>
//             <div className="flex flex-col sm:flex-row justify-center gap-6">
//               <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300">
//                 Reservar Agora
//                 <ArrowRight className="ml-3 h-6 w-6" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-bold">
//                 Falar Connosco
//               </Button>
//             </div>
//           </ScaleIn>
//         </div>
//       </section>
//     </div>
//   );
// }