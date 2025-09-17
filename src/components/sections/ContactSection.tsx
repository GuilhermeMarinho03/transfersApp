import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import './ContactsSection.css';

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
      icon: <Phone className="icon" />,
      title: 'Telefone',
      details: ['+351 21 123 4567', '+351 91 234 5678'],
      description: 'Disponível 24/7 para reservas e emergências'
    },
    {
      icon: <Mail className="icon" />,
      title: 'Email',
      details: ['reservas@transferpro.pt', 'info@transferpro.pt'],
      description: 'Resposta garantida em menos de 2 horas'
    },
    {
      icon: <MapPin className="icon" />,
      title: 'Escritório',
      details: ['Rua das Flores, 123', '1200-000 Lisboa, Portugal'],
      description: 'Aberto de segunda a sexta, 9h-18h'
    },
    {
      icon: <MessageCircle className="icon" />,
      title: 'WhatsApp',
      details: ['+351 91 234 5678'],
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
    <div className="contacts">
      <div className="contacts-container">
        {/* Header */}
        <div className="contacts-header">
          <h1>Contacte-nos</h1>
          <p>
            Estamos sempre disponíveis para ajudar. Entre em contacto connosco 
            através de qualquer um dos meios abaixo.
          </p>
        </div>

        <div className="contacts-grid">
          {/* Contact Form */}
          <div className="contact-form">
            <div className="card">
              <div className="card-header">
                <Send className="icon" />
                <span>Envie-nos uma Mensagem</span>
              </div>
              <div className="card-content">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome Completo</label>
                    <input
                      type="text"
                      placeholder="O seu nome"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Telefone</label>
                    <input
                      type="text"
                      placeholder="+351 91 234 5678"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Assunto</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                    >
                      <option value="">Selecionar assunto</option>
                      <option value="booking">Nova Reserva</option>
                      <option value="quote">Pedido de Cotação</option>
                      <option value="modification">Modificar Reserva</option>
                      <option value="complaint">Reclamação</option>
                      <option value="compliment">Elogio</option>
                      <option value="corporate">Serviços Corporativos</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Mensagem</label>
                  <textarea
                    placeholder="Descreva o seu pedido ou questão..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                </div>

                <button onClick={handleSubmit} className="btn-primary">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-grid">
              {contactInfo.map((contact, index) => (
                <div className="card" key={index}>
                  <div className="card-content info-item">
                    <div className="info-icon">{contact.icon}</div>
                    <div>
                      <h3>{contact.title}</h3>
                      {contact.details.map((detail, i) => (
                        <p key={i} className="highlight">{detail}</p>
                      ))}
                      <p className="small">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="card">
              <div className="card-header">
                <Clock className="icon" />
                <span>Horário de Funcionamento</span>
              </div>
              <div className="card-content">
                {officeHours.map((schedule, i) => (
                  <div className="schedule" key={i}>
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}