import { Link } from 'react-router-dom'; // <--- O Link foi restaurado aqui!
import { MapPin, Shield, Clock, Bell, BarChart3, Users, CheckCircle, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navegação Fixa */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">RastreioVeicular</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {/* Links de navegação interna (scroll) */}
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Recursos</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition">Preços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition">Depoimentos</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition">FAQ</a>
            </div>
            {/* Link para a rota /login */}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* Seção Hero/Destaque */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Proteja Seu Veículo com
              <span className="text-blue-600"> Rastreamento em Tempo Real</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tenha total controle e segurança do seu veículo. Monitore localização, receba alertas instantâneos e acesse histórico completo de rotas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* Link para a rota /register */}
              <Link
                to="/register"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Teste por R$ 1,00 - 7 Dias
              </Link>
              <a
                href="#features"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg"
              >
                Saiba Mais
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Sem compromisso. Cancele quando quiser.
            </p>
          </div>
          <div className="mt-16 relative">
            {/* URL da imagem correta */}
            <img
              src="https://i.ibb.co/xS3Qvv1t/c633f1e9-da64-49fd-b342-facb186584f1.png"
              alt="Vehicle tracking dashboard"
              className="rounded-2xl shadow-2xl mx-auto max-w-5xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos Avançados de Rastreamento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia de ponta para garantir a segurança e controle total do seu veículo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Localização em Tempo Real</h3>
              <p className="text-gray-600">
                Acompanhe a localização exata do seu veículo a qualquer momento, direto do seu celular.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alertas Inteligentes</h3>
              <p className="text-gray-600">
                Receba notificações instantâneas sobre movimentos suspeitos, excesso de velocidade e mais.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Histórico Completo</h3>
              <p className="text-gray-600">
                Acesse todo o histórico de rotas, paradas e trajetos percorridos pelo veículo.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Segurança Avançada</h3>
              <p className="text-gray-600">
                Sistema antifurto com geofencing e bloqueio remoto para máxima proteção.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Relatórios Detalhados</h3>
              <p className="text-gray-600">
                Visualize estatísticas de uso, quilometragem e padrões de comportamento.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gestão de Frota</h3>
              <p className="text-gray-600">
                Gerencie múltiplos veículos em um único painel de controle intuitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comece Hoje por Apenas R$ 1,00
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experimente todos os recursos premium por 7 dias com investimento mínimo
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-600">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Período de Teste</h3>
                <div className="text-5xl font-bold mb-2">R$ 1,00</div>
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
                {/* Link para a rota /register */}
                <Link
                  to="/register"
                  className="block w-full bg-blue-600 text-white text-center px-8 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Começar Teste de R$ 1,00
                </Link>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Após o período de teste: R$ 49,90/mês
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milhares de motoristas já confiam em nosso sistema de rastreamento
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Excelente sistema! Consegui recuperar meu carro em menos de 2 horas após o roubo. Vale cada centavo."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">JC</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">João Carlos</div>
                  <div className="text-sm text-gray-500">São Paulo, SP</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Perfeito para gerenciar minha frota de delivery. Reduzi custos e aumentei a eficiência da equipe."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">MS</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mariana Silva</div>
                  <div className="text-sm text-gray-500">Rio de Janeiro, RJ</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Interface simples e intuitiva. Minha família toda consegue monitorar nossos carros com facilidade."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">RA</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Ricardo Alves</div>
                  <div className="text-sm text-gray-500">Belo Horizonte, MG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Como funciona o teste de R$ 1,00?</h3>
              <p className="text-gray-600">
                Você paga apenas R$ 1,00 e tem acesso completo a todos os recursos por 7 dias. Após o período, você pode continuar por R$ 49,90/mês ou cancelar sem custo adicional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Preciso instalar algum equipamento no meu carro?</h3>
              <p className="text-gray-600">
                Não é necessário instalação física no veículo. Nosso sistema funciona através do aplicativo, permitindo o rastreamento de forma prática e sem complicações.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">
                Sim! Não há período de fidelidade. Você pode cancelar quando quiser, sem multas ou taxas adicionais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">O aplicativo funciona em iOS e Android?</h3>
              <p className="text-gray-600">
                Nosso aplicativo está disponível somente para Android, e também pode ser acessado pelo navegador web, no momento não operamos com iOS.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">E se meu veículo for roubado?</h3>
              <p className="text-gray-600">
                Temos equipe de suporte 24/7 para auxiliar em casos de roubo. Trabalhamos junto às autoridades para recuperação do veículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto Para Proteger Seu Veículo?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Comece hoje mesmo por apenas R$ 1,00 e tenha paz de espírito
          </p>
          {/* Link para a rota /register */}
          <Link
            to="/register"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Iniciar Teste de 7 Dias
          </Link>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">RastreioVeicular</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tecnologia de ponta em rastreamento veicular para sua segurança.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Recursos</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Download App</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
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
