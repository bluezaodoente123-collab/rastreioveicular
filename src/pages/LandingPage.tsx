import { MapPin, Shield, Clock, Bell, BarChart3, Users, CheckCircle, Star, Phone, Mail, Lock, Zap, Award, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navegação Fixa com backdrop blur */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">RastreioVeicular</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-700 hover:text-blue-600 transition font-medium">Recursos</a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition font-medium">Preços</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition font-medium">Depoimentos</a>
              <a href="#faq" className="text-slate-700 hover:text-blue-600 transition font-medium">FAQ</a>
              <Phone className="w-4 h-4 text-slate-400" />
              <span className="text-slate-700 font-semibold">(11) 97551-5049</span>
            </div>
            <a
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all font-semibold"
            >
              Área do Cliente
            </a>
          </div>
        </div>
      </nav>

      {/* Seção Hero Premium */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-white opacity-60"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge de Confiança */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-2 shadow-sm">
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-slate-700">Mais de 50.000 veículos protegidos</span>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Proteja Seu Veículo com
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mt-2">
                Tecnologia de Rastreamento
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
              Sistema profissional de monitoramento veicular em tempo real. 
              <span className="font-semibold text-slate-800"> Controle total, segurança garantida.</span>
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">Sem instalação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">100% Seguro</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/register"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg flex items-center gap-2 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Teste 7 Dias por R$ 1,00
              </a>
              <a
                href="#features"
                className="border-2 border-slate-300 text-slate-700 px-10 py-5 rounded-2xl hover:bg-slate-50 hover:border-slate-400 transition-all font-semibold text-lg"
              >
                Ver Demonstração
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Lock className="w-4 h-4" />
              <span>Pagamento seguro · Sem compromisso · Cancele a qualquer momento</span>
            </div>
          </div>

          {/* Dashboard Preview com melhor apresentação */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://i.ibb.co/7dwnMVXr/rastreio-veicular-post-instagram.png"
                alt="Dashboard de rastreamento profissional"
                className="relative rounded-3xl shadow-2xl mx-auto max-w-5xl w-full border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Confiança */}
      <section className="py-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">50k+</div>
              <div className="text-sm text-slate-400">Veículos Protegidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
              <div className="text-sm text-slate-400">Tempo Online</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-sm text-slate-400">Suporte Técnico</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">4.9/5</div>
              <div className="text-sm text-slate-400">Avaliação Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Recursos Modernizada */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              RECURSOS PREMIUM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Tecnologia de Ponta em Segurança
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tudo que você precisa para proteger seu patrimônio com inteligência e praticidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Rastreamento em Tempo Real",
                desc: "Localização precisa e atualização instantânea da posição do veículo com GPS de alta precisão.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Bell,
                title: "Alertas Inteligentes",
                desc: "Notificações push instantâneas para movimentos suspeitos, velocidade e áreas restritas.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Clock,
                title: "Histórico Detalhado",
                desc: "Relatórios completos de trajetos, paradas e comportamento do veículo com dados de até 12 meses.",
                gradient: "from-emerald-500 to-emerald-600"
              },
              {
                icon: Shield,
                title: "Segurança Avançada",
                desc: "Sistema antifurto com geofencing inteligente e integração com autoridades policiais.",
                gradient: "from-red-500 to-red-600"
              },
              {
                icon: BarChart3,
                title: "Análises e Relatórios",
                desc: "Dashboards com estatísticas de uso, quilometragem, consumo e padrões de viagem.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: Users,
                title: "Gestão de Frota",
                desc: "Controle múltiplos veículos, equipes e rotas em um painel unificado e intuitivo.",
                gradient: "from-indigo-500 to-indigo-600"
              }
            ].map((feature, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Preços Premium */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OFERTA ESPECIAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Experimente por Apenas R$ 1,00
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Acesso completo a todos os recursos premium durante 7 dias
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                {/* Badge Popular */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  MAIS POPULAR
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3">Plano Premium</h3>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-5xl font-bold">R$ 1</span>
                      <div className="text-left">
                        <div className="text-lg font-semibold">,00</div>
                        <div className="text-sm text-slate-300">7 dias</div>
                      </div>
                    </div>
                    <p className="text-slate-300 text-sm">Depois R$ 49,90/mês</p>
                  </div>
                </div>

                <div className="p-10">
                  <ul className="space-y-4 mb-8">
                    {[
                      "Rastreamento em tempo real ilimitado",
                      "Todos os alertas e notificações push",
                      "Histórico completo de até 12 meses",
                      "Relatórios e análises avançadas",
                      "Suporte técnico prioritário 24/7",
                      "Aplicativo Android completo",
                      "Integração com autoridades",
                      "Cancele quando quiser, sem multa"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/register"
                    className="group block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-8 py-5 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all font-bold text-lg mb-4 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5 group-hover:animate-pulse" />
                      Começar Agora
                    </span>
                  </a>

                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                      <Lock className="w-4 h-4" />
                      <span>Pagamento 100% seguro e criptografado</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-emerald-600 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span>Garantia de 7 dias - Teste sem riscos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos Melhorada */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              DEPOIMENTOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Confiança de Milhares de Clientes
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-slate-600">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-bold">4.9/5</span>
              <span>· Baseado em 2.847 avaliações</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "João Carlos",
                role: "Empresário",
                location: "São Paulo, SP",
                text: "Sistema impecável! Recuperei meu veículo em menos de 2 horas após o roubo. A equipe de suporte foi extremamente ágil e profissional.",
                initials: "JC",
                verified: true
              },
              {
                name: "Mariana Silva",
                role: "Gestora de Frota",
                location: "Rio de Janeiro, RJ",
                text: "Uso para gerenciar 15 veículos de delivery. Reduzi custos em 30% e aumentei muito a eficiência operacional. Recomendo fortemente!",
                initials: "MS",
                verified: true
              },
              {
                name: "Ricardo Alves",
                role: "Proprietário",
                location: "Belo Horizonte, MG",
                text: "Interface muito intuitiva e moderna. Toda minha família consegue monitorar nossos carros facilmente. Vale cada centavo investido.",
                initials: "RA",
                verified: true
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold">
                      <CheckCircle className="w-3 h-3" />
                      Verificado
                    </div>
                  )}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role} · {testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Melhorada */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-slate-600">Tire todas suas dúvidas sobre nosso serviço</p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: "Como funciona o teste de R$ 1,00?",
                a: "Você paga apenas R$ 1,00 e tem acesso completo a todos os recursos premium por 7 dias. Após o período, você pode continuar por R$ 49,90/mês ou cancelar sem custo adicional. Sem pegadinhas."
              },
              {
                q: "Preciso instalar algum equipamento no meu carro?",
                a: "Não é necessário instalação física no veículo. Nosso sistema funciona através do aplicativo Android, permitindo o rastreamento de forma prática, rápida e sem complicações técnicas."
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim! Não há período de fidelidade ou taxas de cancelamento. Você pode cancelar quando quiser através do próprio aplicativo ou entrando em contato com nosso suporte."
              },
              {
                q: "O aplicativo funciona em iOS e Android?",
                a: "Atualmente, nosso aplicativo está disponível para Android. Também é possível acessar todos os recursos através do navegador web em qualquer dispositivo. A versão iOS está em desenvolvimento."
              },
              {
                q: "E se meu veículo for roubado?",
                a: "Temos equipe de suporte 24/7 especializada para auxiliar em casos de roubo. Trabalhamos em conjunto com as autoridades policiais para agilizar a recuperação do veículo."
              },
              {
                q: "Onde a empresa está localizada?",
                a: "Nossa sede fica em Belo Horizonte/MG, na R. Beira Mar, 180 - Urca, CEP 31360-290. CNPJ: 35.913.907/0001-26. Somos uma empresa 100% regularizada e certificada."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl shadow-md hover:shadow-lg transition-all border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Impactante */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proteja Seu Patrimônio Agora
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed">
            Junte-se a mais de 50.000 brasileiros que já protegem seus veículos com tecnologia de ponta
          </p>
          
          <a
            href="/register"
            className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-white/30 transition-all font-bold text-lg transform hover:scale-105 mb-6"
          >
            <Zap className="w-6 h-6" />
            Começar Teste de R$ 1,00 Agora
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Pagamento seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé Profissional */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">RastreioVeicular</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Tecnologia de ponta em rastreamento veicular para sua segurança e tranquilidade.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-semibold">Certificado ANATEL</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Produto</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition flex items-center gap-2">→ Recursos</a></li>
                <li><a href="#pricing" className="hover:text-white transition flex items-center gap-2">→ Preços</a></li>
                <li><a href="#testimonials" className="hover:text-white transition flex items-center gap-2">→ Depoimentos</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center gap-2">→ Download App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Empresa</h3>
              <ul className="space-y-3 text-sm text-slate-400 mb-6">
                <li><a href="#" className="hover:text-white transition flex items-center gap-2">→ Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center gap-2">→ Contato</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center gap-2">→ Suporte 24/7</a></li>
              </ul>
              <div className="text-xs text-slate-500 space-y-1">
                <p className="font-semibold text-slate-400">Endereço:</p>
                <p>R. Beira Mar, 180</p>
                <p>Urca - Belo Horizonte/MG</p>
                <p>CEP 31360-290</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Contato</h3>
              <div className="space-y-3 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 97551-5049</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@rastreio.com.br</span>
                </div>
              </div>
              <div className="text-xs text-slate-500">
                <p className="font-semibold text-slate-400 mb-1">CNPJ:</p>
                <p>35.913.907/0001-26</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2025 RastreioVeicular. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition">Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <a href="#" className="hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}