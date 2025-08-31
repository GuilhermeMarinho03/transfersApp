import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export function ContactsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Contact form data:', formData);
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      details: [
        '+351 21 123 4567',
        '+351 91 234 5678'
      ],
      description: 'Disponível 24/7 para reservas e emergências'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: [
        'reservas@transferpro.pt',
        'info@transferpro.pt'
      ],
      description: 'Resposta garantida em menos de 2 horas'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Escritório',
      details: [
        'Rua das Flores, 123',
        '1200-000 Lisboa, Portugal'
      ],
      description: 'Aberto de segunda a sexta, 9h-18h'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      details: [
        '+351 91 234 5678'
      ],
      description: 'Chat directo para reservas rápidas'
    }
  ];

  const officeHours = [
    { day: 'Segunda - Sexta', hours: '09:00 - 18:00' },
    { day: 'Sábado', hours: '09:00 - 14:00' },
    { day: 'Domingo', hours: 'Apenas emergências' },
    { day: 'Feriados', hours: 'Serviço 24h (reserva prévia)' }
  ];

  const emergencyContacts = [
    {
      title: 'Central de Reservas 24h',
      phone: '+351 21 123 4567',
      description: 'Para reservas urgentes e alterações'
    },
    {
      title: 'Apoio ao Cliente',
      phone: '+351 91 234 5678',
      description: 'Assistência durante a viagem'
    }
  ];

  return (
    <div className="min-h-screen pt-16 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contacte-nos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos sempre disponíveis para ajudar. Entre em contacto connosco 
            através de qualquer um dos meios abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Envie-nos uma Mensagem</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="O seu nome"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      placeholder="+351 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Nova Reserva</SelectItem>
                        <SelectItem value="quote">Pedido de Cotação</SelectItem>
                        <SelectItem value="modification">Modificar Reserva</SelectItem>
                        <SelectItem value="complaint">Reclamação</SelectItem>
                        <SelectItem value="compliment">Elogio</SelectItem>
                        <SelectItem value="corporate">Serviços Corporativos</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva o seu pedido ou questão..."
                    className="min-h-32"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{contact.title}</h3>
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-primary font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Contactos de Emergência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergencyContacts.map((emergency, index) => (
                    <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800">{emergency.title}</h4>
                      <p className="text-red-600 font-medium text-lg">{emergency.phone}</p>
                      <p className="text-red-700 text-sm">{emergency.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Localização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Mapa do escritório</p>
                    <p className="text-sm">Rua das Flores, 123, Lisboa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Questões Frequentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto p-4 text-left justify-start">
                  <div>
                    <p className="font-medium">Como fazer uma reserva?</p>
                    <p className="text-sm text-muted-foreground">Processo de reserva passo a passo</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-4 text-left justify-start">
                  <div>
                    <p className="font-medium">Política de cancelamento</p>
                    <p className="text-sm text-muted-foreground">Condições e prazos</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-auto p-4 text-left justify-start">
                  <div>
                    <p className="font-medium">Formas de pagamento</p>
                    <p className="text-sm text-muted-foreground">Métodos aceites</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}