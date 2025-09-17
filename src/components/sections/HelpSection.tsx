import { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  CreditCard, 
  Calendar, 
  Car, 
  Phone, 
  Shield,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './HelpSection.css';

export function HelpSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { icon: <Calendar />, title: 'Reservas', description: 'Como fazer e gerir reservas', color: 'category-blue' },
    { icon: <CreditCard />, title: 'Pagamentos', description: 'Métodos e políticas de pagamento', color: 'category-green' },
    { icon: <Car />, title: 'Veículos', description: 'Tipos de veículos e capacidades', color: 'category-purple' },
    { icon: <Shield />, title: 'Políticas', description: 'Termos, condições e seguros', color: 'category-red' }
  ];

  const faqs = [
    { category: 'Reservas', question: 'Como posso fazer uma reserva?', answer: 'Pode fazer uma reserva através do nosso formulário online na página principal, por telefone (+351 21 123 4567) ou por WhatsApp (+351 91 234 5678). Receberá uma confirmação imediata por email com todos os detalhes.' },
    { category: 'Reservas', question: 'Com que antecedência devo reservar?', answer: 'Recomendamos reservar com pelo menos 24 horas de antecedência. Para transfers de aeroporto, aceitamos reservas até 2 horas antes do voo. Para grupos grandes ou eventos especiais, sugerimos reservar com 48-72 horas de antecedência.' },
    { category: 'Reservas', question: 'Posso modificar ou cancelar a minha reserva?', answer: 'Sim, pode modificar ou cancelar a sua reserva gratuitamente até 24 horas antes da viagem. Para alterações ou cancelamentos com menos de 24 horas, podem aplicar-se taxas adicionais.' },
    { category: 'Pagamentos', question: 'Que métodos de pagamento aceitam?', answer: 'Aceitamos pagamento em dinheiro, cartão de crédito/débito (Visa, Mastercard), transferência bancária e MB Way. O pagamento pode ser feito no momento da reserva ou directamente ao condutor.' },
    { category: 'Pagamentos', question: 'Quando devo pagar?', answer: 'Para reservas corporativas ou de grupos, solicitamos pagamento antecipado. Para reservas individuais, pode pagar no momento da viagem. Transfers de aeroporto para hotéis podem ser pagos antecipadamente para maior conveniência.' },
    { category: 'Pagamentos', question: 'Os preços incluem gorjetas?', answer: 'Os nossos preços não incluem gorjetas, mas estas são sempre bem-vindas e ficam ao seu critério. A gorjeta típica é de 10-15% do valor da viagem.' },
    { category: 'Veículos', question: 'Que tipos de veículos têm disponíveis?', answer: 'Temos uma frota diversificada: Sedans (1-3 pax), Veículos Executivos (1-3 pax), Vans (4-8 pax), Veículos de Luxo (1-3 pax) e Minibus (9-16 pax). Todos os veículos têm ar condicionado, Wi-Fi e são não fumadores.' },
    { category: 'Veículos', question: 'Os veículos têm cadeiras para crianças?', answer: 'Sim, fornecemos cadeiras para crianças gratuitamente. Temos cadeiras para diferentes idades: bebés (0-1 ano), crianças pequenas (1-4 anos) e crianças (4-12 anos). Solicite na altura da reserva.' },
    { category: 'Veículos', question: 'Posso transportar animais de estimação?', answer: 'Sim, aceitamos animais de estimação pequenos em transportadoras adequadas. Para animais maiores, solicitamos que nos informe na altura da reserva para providenciarmos um veículo adequado.' },
    { category: 'Políticas', question: 'Que acontece se o meu voo atrasar?', answer: 'Monitorizamos todos os voos em tempo real. Se o seu voo atrasar, o nosso condutor será automaticamente informado e ajustará o horário de recolha. Não há custos adicionais por atrasos de voos.' },
    { category: 'Políticas', question: 'Têm seguro?', answer: 'Sim, todos os nossos veículos têm seguro completo até 2 milhões de euros, cobrindo passageiros e bagagem. Também temos seguro de responsabilidade civil profissional.' },
    { category: 'Políticas', question: 'Qual é a política de bagagem?', answer: 'Incluímos 2 bagagens grandes por passageiro sem custo adicional. Para bagagem extra ou itens especiais (equipamento desportivo, instrumentos musicais), informe-nos na reserva para garantirmos espaço adequado.' }
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
    <section className="help-section">
      <div className="help-header">
        <h1 className="help-header-title">Central de Ajuda</h1>
        <p className="help-header-subtitle">
          Encontre respostas às suas questões ou entre em contacto connosco. Estamos aqui para ajudar em qualquer momento.
        </p>

        <div className="help-search">
          <Search className="help-search-icon" />
          <input
            type="text"
            placeholder="Pesquisar na ajuda..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className={`category-icon ${category.color}`}>
              {category.icon}
            </div>
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
          </div>
        ))}
      </div>

      <div className="help-faq">
        <h2 className="faq-title-section">Perguntas Frequentes</h2>

        {filteredFAQs.length > 0 ? (
          <div className="faq-list">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="faq-card">
                <div className="faq-header" onClick={() => toggleFAQ(index)}>
                  <span className="faq-category">{faq.category}</span>
                  <span className="faq-question">{faq.question}</span>
                  {expandedFAQ === index ? <ChevronUp /> : <ChevronDown />}
                </div>
                {expandedFAQ === index && (
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="faq-empty">
            <HelpCircle className="faq-empty-icon" />
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente pesquisar com termos diferentes ou entre em contacto connosco directamente.</p>
          </div>
        )}
      </div>

      <div className="help-cta">
        <div className="cta-card">
          <h2>Não encontrou o que procurava?</h2>
          <p>A nossa equipa de apoio está disponível 24/7 para responder às suas questões</p>
          <div className="cta-buttons">
            <button className="cta-button-primary">
              <Phone /> Ligar Agora
            </button>
            <button className="cta-button-secondary">
              <HelpCircle /> Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
