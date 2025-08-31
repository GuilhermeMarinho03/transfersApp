import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Search, 
  HelpCircle, 
  CreditCard, 
  Calendar, 
  Car, 
  Phone, 
  Clock,
  MapPin,
  Users,
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export function HelpSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Reservas',
      description: 'Como fazer e gerir reservas',
      color: 'bg-blue-500'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Pagamentos',
      description: 'Métodos e políticas de pagamento',
      color: 'bg-green-500'
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: 'Veículos',
      description: 'Tipos de veículos e capacidades',
      color: 'bg-purple-500'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Políticas',
      description: 'Termos, condições e seguros',
      color: 'bg-red-500'
    }
  ];

  const faqs = [
    {
      category: 'Reservas',
      question: 'Como posso fazer uma reserva?',
      answer: 'Pode fazer uma reserva através do nosso formulário online na página principal, por telefone (+351 21 123 4567) ou por WhatsApp (+351 91 234 5678). Receberá uma confirmação imediata por email com todos os detalhes.'
    },
    {
      category: 'Reservas',
      question: 'Com que antecedência devo reservar?',
      answer: 'Recomendamos reservar com pelo menos 24 horas de antecedência. Para transfers de aeroporto, aceitamos reservas até 2 horas antes do voo. Para grupos grandes ou eventos especiais, sugerimos reservar com 48-72 horas de antecedência.'
    },
    {
      category: 'Reservas',
      question: 'Posso modificar ou cancelar a minha reserva?',
      answer: 'Sim, pode modificar ou cancelar a sua reserva gratuitamente até 24 horas antes da viagem. Para alterações ou cancelamentos com menos de 24 horas, podem aplicar-se taxas adicionais.'
    },
    {
      category: 'Pagamentos',
      question: 'Que métodos de pagamento aceitam?',
      answer: 'Aceitamos pagamento em dinheiro, cartão de crédito/débito (Visa, Mastercard), transferência bancária e MB Way. O pagamento pode ser feito no momento da reserva ou directamente ao condutor.'
    },
    {
      category: 'Pagamentos',
      question: 'Quando devo pagar?',
      answer: 'Para reservas corporativas ou de grupos, solicitamos pagamento antecipado. Para reservas individuais, pode pagar no momento da viagem. Transfers de aeroporto para hotéis podem ser pagos antecipadamente para maior conveniência.'
    },
    {
      category: 'Pagamentos',
      question: 'Os preços incluem gorjetas?',
      answer: 'Os nossos preços não incluem gorjetas, mas estas são sempre bem-vindas e ficam ao seu critério. A gorjeta típica é de 10-15% do valor da viagem.'
    },
    {
      category: 'Veículos',
      question: 'Que tipos de veículos têm disponíveis?',
      answer: 'Temos uma frota diversificada: Sedans (1-3 pax), Veículos Executivos (1-3 pax), Vans (4-8 pax), Veículos de Luxo (1-3 pax) e Minibus (9-16 pax). Todos os veículos têm ar condicionado, Wi-Fi e são não fumadores.'
    },
    {
      category: 'Veículos',
      question: 'Os veículos têm cadeiras para crianças?',
      answer: 'Sim, fornecemos cadeiras para crianças gratuitamente. Temos cadeiras para diferentes idades: bebés (0-1 ano), crianças pequenas (1-4 anos) e crianças (4-12 anos). Solicite na altura da reserva.'
    },
    {
      category: 'Veículos',
      question: 'Posso transportar animais de estimação?',
      answer: 'Sim, aceitamos animais de estimação pequenos em transportadoras adequadas. Para animais maiores, solicitamos que nos informe na altura da reserva para providenciarmos um veículo adequado.'
    },
    {
      category: 'Políticas',
      question: 'Que acontece se o meu voo atrasar?',
      answer: 'Monitorizamos todos os voos em tempo real. Se o seu voo atrasar, o nosso condutor será automaticamente informado e ajustará o horário de recolha. Não há custos adicionais por atrasos de voos.'
    },
    {
      category: 'Políticas',
      question: 'Têm seguro?',
      answer: 'Sim, todos os nossos veículos têm seguro completo até 2 milhões de euros, cobrindo passageiros e bagagem. Também temos seguro de responsabilidade civil profissional.'
    },
    {
      category: 'Políticas',
      question: 'Qual é a política de bagagem?',
      answer: 'Incluímos 2 bagagens grandes por passageiro sem custo adicional. Para bagagem extra ou itens especiais (equipamento desportivo, instrumentos musicais), informe-nos na reserva para garantirmos espaço adequado.'
    }
  ];

  const quickActions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Contacto Directo',
      description: 'Fale connosco agora',
      action: 'Ligar',
      link: 'tel:+351211234567'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Nova Reserva',
      description: 'Reserve o seu transfer',
      action: 'Reservar',
      link: '#'
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Estado da Reserva',
      description: 'Consulte a sua viagem',
      action: 'Consultar',
      link: '#'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Central de Ajuda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Encontre respostas às suas questões ou entre em contacto connosco. 
            Estamos aqui para ajudar em qualquer momento.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Pesquisar na ajuda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {action.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-muted-foreground mb-4">{action.description}</p>
                <Button className="w-full">{action.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Categorias de Ajuda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={index}>
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">{faq.category}</Badge>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </div>
                    {expandedFAQ === index ? 
                      <ChevronUp className="h-5 w-5" /> : 
                      <ChevronDown className="h-5 w-5" />
                    }
                  </div>
                </CardHeader>
                {expandedFAQ === index && (
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhum resultado encontrado</h3>
              <p className="text-muted-foreground">
                Tente pesquisar com termos diferentes ou entre em contacto connosco directamente.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Não encontrou o que procurava?</h2>
              <p className="mb-6 opacity-90">
                A nossa equipa de apoio está disponível 24/7 para responder às suas questões
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="secondary" size="lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Ligar Agora
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 hover:bg-white/20">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}