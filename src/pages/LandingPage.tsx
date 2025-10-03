import React, { useState } from 'react';
import { MapPin, Shield, Clock, Bell, BarChart3, Users, CheckCircle, Star, Menu, X } from 'lucide-react';

// Componente principal da Landing Page
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu após um clique (útil para navegação interna)
  const handleNavLinkClick = (e) => {
    // Para as âncoras internas, feche o menu
    if (e.target.hash.startsWith('#')) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "#features", label: "Recursos" },
    { href: "#pricing", label: "Preços" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];

  const FeatureCard = ({ Icon, title, description }) => (
    <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition border border-blue-100 transform hover:scale-[1.02] duration-300">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  const TestimonialCard = ({ name, location, quote, initials }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-0.5">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic leading-relaxed">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
          <span className="text-blue-600 font-bold">{initials}</span>
        </div>
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{location}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* 1. Navegação Responsiva (Mobile First) */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-blue-600 animate-pulse" />
              <span className="text-xl font-bold text-gray-900">RastreioVeicular</span>
            </a>

            {/* Links de Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 transition font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Botão de Entrar (Sempre visível) */}
            <a
              href="#" // Substitui /login
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
            >
              Entrar
            </a>

            {/* Botão Mobile Menu */}
            <button
              className="md:hidden text-gray-600 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Dropdown Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100 pb-4 transition-all duration-300 ease-in-out">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#" // Substitui /login
                className="block w-full text-center bg-blue-600 text-white mt-2 px-3 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Entrar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 2. Seção Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Proteja Seu Veículo com
              <span className="text-blue-600 block sm:inline-block"> Rastreamento em Tempo Real</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tenha total controle e segurança do seu veículo. Monitore localização, receba alertas instantâneos e acesse histórico completo de rotas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="#" // Substitui /register
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
              >
                Teste por R$ 1,00 - 7 Dias
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition font-bold text-lg"
              >
                Saiba Mais
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Sem compromisso. Cancele quando quiser.
            </p>
          </div>
          {/* Imagem do Dashboard - Responsiva (max-w-5xl e w-full garantem que ela se ajuste) */}
          <div className="mt-16 relative p-2 bg-white rounded-3xl shadow-2xl shadow-blue-200">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-32 bottom-0 z-10"></div>
            <img
              src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Vehicle tracking dashboard"
              className="rounded-xl mx-auto w-full h-auto"
              style={{aspectRatio: '16/9', objectFit: 'cover'}}
            />
          </div>
        </div>
      </section>

      {/* 3. Seção Recursos (Grid Responsiva: 1 coluna no mobile, 3 no desktop) */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Recursos Avançados de Rastreamento
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia de ponta para garantir a segurança e controle total do seu veículo
            </p>
          </div>
          {/* Garantindo 1 coluna em mobile e 3 em telas maiores (md) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              Icon={MapPin}
              title="Localização em Tempo Real"
              description="Acompanhe a localização exata do seu veículo a qualquer momento, direto do seu celular."
            />
            <FeatureCard
              Icon={Bell}
              title="Alertas Inteligentes"
              description="Receba notificações instantâneas sobre movimentos suspeitos, excesso de velocidade e mais."
            />
            <FeatureCard
              Icon={Clock}
              title="Histórico Completo"
              description="Acesse todo o histórico de rotas, paradas e trajetos percorridos pelo veículo."
            />
            <FeatureCard
              Icon={Shield}
              title="Segurança Avançada"
              description="Sistema antifurto com geofencing e bloqueio remoto para máxima proteção."
            />
            <FeatureCard
              Icon={BarChart3}
              title="Relatórios Detalhados"
              description="Visualize estatísticas de uso, quilometragem e padrões de comportamento."
            />
            <FeatureCard
              Icon={Users}
              title="Gestão de Frota"
              description="Gerencie múltiplos veículos em um único painel de controle intuitivo."
            />
          </div>
        </div>
      </section>

      {/* 4. Seção Preços (Layout Centralizado e Adaptável) */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comece Hoje por Apenas R$ 1,00
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Experimente todos os recursos premium por 7 dias com investimento mínimo
            </p>
          </div>
          {/* Card de Preço Responsivo e Centralizado */}
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-600">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Período de Teste</h3>
                <div className="text-6xl font-extrabold mb-2">R$ 1,00</div>
                <p className="text-blue-100">Por 7 dias completos</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rastreamento em tempo real ilimitado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Todos os alertas e notificações</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Histórico completo de rotas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Suporte técnico prioritário</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cancele quando quiser, sem multa</span>
                  </li>
                </ul>
                <a
                  href="#" // Substitui /register
                  className="block w-full bg-blue-600 text-white text-center px-8 py-4 rounded-xl hover:bg-blue-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Começar Teste de R$ 1,00
                </a>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Após o período de teste: R$ 49,90/mês
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Seção Depoimentos (Grid Responsiva: 1 coluna no mobile, 3 no desktop) */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Milhares de motoristas já confiam em nosso sistema de rastreamento
            </p>
          </div>
          {/* Garantindo 1 coluna em mobile e 3 em telas maiores (md) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="João Carlos"
              location="São Paulo, SP"
              quote="Excelente sistema! Consegui recuperar meu carro em menos de 2 horas após o roubo. Vale cada centavo."
              initials="JC"
            />
            <TestimonialCard
              name="Mariana Silva"
              location="Rio de Janeiro, RJ"
              quote="Perfeito para gerenciar minha frota de delivery. Reduzi custos e aumentei a eficiência da equipe."
              initials="MS"
            />
            <TestimonialCard
              name="Ricardo Alves"
              location="Belo Horizonte, MG"
              quote="Interface simples e intuitiva. Minha família toda consegue monitorar nossos carros com facilidade."
              initials="RA"
            />
          </div>
        </div>
      </section>

      {/* 6. Seção FAQ (Layout Centralizado e Legível) */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Como funciona o teste de R$ 1,00?",
                a: "Você paga apenas R$ 1,00 e tem acesso completo a todos os recursos por 7 dias. Após o período, você pode continuar por R$ 49,90/mês ou cancelar sem custo adicional."
              },
              {
                q: "Preciso instalar algum equipamento no meu carro?",
                a: "Sim, é necessário um pequeno dispositivo GPS que instalamos gratuitamente. Nossa equipe agenda a instalação no local de sua preferência."
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Não há período de fidelidade. Você pode cancelar quando quiser, sem multas ou taxas adicionais."
              },
              {
                q: "O aplicativo funciona em iOS e Android?",
                a: "Sim! Nosso aplicativo está disponível para iOS e Android, e também pode ser acessado pelo navegador web."
              },
              {
                q: "E se meu veículo for roubado?",
                a: "Temos equipe de suporte 24/7 para auxiliar em casos de roubo. Trabalhamos junto às autoridades para recuperação do veículo."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-inner">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto Para Proteger Seu Veículo?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Comece hoje mesmo por apenas R$ 1,00 e tenha paz de espírito
          </p>
          <a
            href="#" // Substitui /register
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 duration-300"
          >
            Iniciar Teste de 7 Dias
          </a>
        </div>
      </section>

      {/* 8. Rodapé (Grid Responsiva: 2 colunas no mobile, 4 no desktop) */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Layout do Rodapé: 2 colunas em mobile, 4 em desktop (md) */}
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">RastreioVeicular</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tecnologia de ponta em rastreamento veicular para sua segurança.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-blue-300">Produto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Recursos</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Download App</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-blue-300">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-blue-300">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 RastreioVeicular. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
