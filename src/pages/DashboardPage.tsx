import { useState, useMemo, useContext, createContext } from 'react';
import {
  MapPin,
  LayoutDashboard,
  Car,
  Navigation,
  Clock,
  Bell,
  Settings,
  LogOut,
  User,
  Activity,
  AlertTriangle,
  Wrench,
  Download,
  Smartphone,
  ChevronRight,
  Menu, // Ícone de Menu adicionado
  X // Ícone de Fechar adicionado
} from 'lucide-react';

// --- SIMULAÇÃO DE DEPENDÊNCIAS EXTERNAS (PARA FINS DE EXECUÇÃO EM ARQUIVO ÚNICO) ---
// Em uma aplicação real, você usaria 'react-router-dom' e 'AuthContext'.

// 1. Simulação de useNavigate
const useNavigate = () => useMemo(() => (path) => {
  console.log(`Navegando para: ${path}`);
  // Lógica de navegação real seria aqui
}, []);

// 2. Simulação de useAuth
const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const MockAuthProvider = ({ children }) => {
  const user = { email: "cliente@rastreamento.com" }; // Mock User
  const signOut = async () => {
    return new Promise(resolve => {
      console.log("Usuário desconectado (Mock)");
      resolve();
    });
  };
  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
// -----------------------------------------------------------------------------------


function Sidebar({ activeSection, setActiveSection, handleSignOut, isSidebarOpen, setIsSidebarOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vehicles', label: 'Veículos', icon: Car },
    { id: 'tracking', label: 'Rastreamento', icon: Navigation },
    { id: 'history', label: 'Histórico', icon: Clock },
    { id: 'alerts', label: 'Alertas', icon: Bell },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    // Barra lateral com classes responsivas:
    // - w-full (mobile) vs md:w-64 (desktop)
    // - fixed inset-0 z-50 (mobile overlay) vs md:relative (desktop)
    // - translate-x-full (oculto) vs md:translate-x-0 (visível em desktop)
    <aside
      className={`
        bg-white border-r border-gray-200 flex-col
        fixed inset-0 z-50 w-full transform transition-transform duration-300 ease-in-out
        md:relative md:flex md:w-64 md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0 flex' : '-translate-x-full hidden md:flex'}
      `}
    >
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Rastreamento</h1>
            <p className="text-xs text-gray-500">Sistema Veicular</p>
          </div>
        </div>
        {/* Botão de Fechar no Mobile (Visível apenas na sidebar aberta) */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
          aria-label="Fechar Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false); // Fecha o menu após a seleção no mobile
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition text-left ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}

function Header({ user, setIsSidebarOpen }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Botão de Menu para Mobile */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 mr-3 text-gray-600 hover:bg-gray-100 rounded-full transition md:hidden flex-shrink-0"
          aria-label="Abrir Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Título Principal */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Painel de Controle</h2>
          <p className="text-xs text-gray-500 hidden sm:block">Monitore seus veículos em tempo real</p>
        </div>

        {/* Ícones e Perfil do Usuário */}
        <div className="flex items-center space-x-2 sm:space-x-4 ml-4">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="text-right hidden sm:block"> {/* Esconde nome/e-mail no mobile para economizar espaço */}
              <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
              <p className="text-xs text-gray-500">Cliente</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function DashboardPage() {
  // Usei MockAuthProvider para que o componente seja executável no ambiente de arquivo único.
  return (
    <MockAuthProvider>
      <DashboardContent />
    </MockAuthProvider>
  );
}


function DashboardContent() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar o menu lateral móvel

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    // Container Principal: usa `flex` no desktop, mas permite o overlay móvel funcionar
    <div className="min-h-screen bg-gray-50 flex">

      {/* 1. Sidebar Componente */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        handleSignOut={handleSignOut}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* 2. Conteúdo Principal */}
      <main className="flex-1 flex flex-col min-w-0">
        <Header user={user} setIsSidebarOpen={setIsSidebarOpen} />

        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          {activeSection === 'dashboard' && (
            <div className="space-y-8">
              {/* Banner de Download */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Baixe o Aplicativo para Começar</h3>
                <p className="text-blue-100 mb-6 max-w-2xl text-sm sm:text-base">
                  Para começar a rastrear seu veículo, você precisa baixar nosso aplicativo móvel e configurar o dispositivo GPS. É rápido e fácil!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium text-sm sm:text-base"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </a>
                </div>
              </div>

              {/* Visão Geral (Grid Responsivo) */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visão Geral</h3>
                {/* O Grid foi ajustado para ser 1 coluna (mobile), 2 colunas (tablet) e 4 colunas (desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {/* Cartão 1: Total de Veículos */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Car className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Total de Veículos</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">0</p>
                  </div>

                  {/* Cartão 2: Veículos Ativos */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Veículos Ativos</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">0</p>
                  </div>

                  {/* Cartão 3: Alertas Pendentes */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Alertas Pendentes</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">0</p>
                  </div>

                  {/* Cartão 4: Em Manutenção */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Em Manutenção</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">0</p>
                  </div>
                </div>
              </div>

              {/* Bem-vindo e Funcionalidades */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Bem-vindo ao Sistema</h3>
                <p className="text-gray-600 mb-6">
                  Este é o seu painel de rastreamento veicular. Aqui você pode:
                </p>
                <ul className="space-y-3">
                  {/* Lista de Recursos (mantida) */}
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <MapPin className="w-3 h-3 text-blue-600" />
                    </div>
                    <div><p className="font-medium text-gray-900">Monitorar a localização em tempo real de todos os seus veículos</p></div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Clock className="w-3 h-3 text-blue-600" />
                    </div>
                    <div><p className="font-medium text-gray-900">Visualizar o histórico de rotas e trajetos percorridos</p></div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Bell className="w-3 h-3 text-blue-600" />
                    </div>
                    <div><p className="font-medium text-gray-900">Configurar alertas para eventos importantes como excesso de velocidade</p></div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Car className="w-3 h-3 text-blue-600" />
                    </div>
                    <div><p className="font-medium text-gray-900">Gerenciar informações detalhadas sobre cada veículo da frota</p></div>
                  </li>
                </ul>
              </div>

              {/* Como Começar */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 sm:p-8 border border-blue-100 shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Como Começar</h3>
                    </div>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">1</span>
                        <span>Baixe o aplicativo RastreioVeicular no seu celular</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">2</span>
                        <span>Faça login com suas credenciais</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">3</span>
                        <span>Aguarde a instalação do dispositivo GPS (entraremos em contato)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">4</span>
                        <span>Adicione seu veículo no aplicativo e comece a rastrear!</span>
                      </li>
                    </ol>
                  </div>
                  <ChevronRight className="w-6 h-6 text-blue-400 ml-4 flex-shrink-0 hidden sm:block" />
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo de Veículos (Responsivo) */}
          {activeSection === 'vehicles' && (
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum Veículo Cadastrado</h3>
                <p className="text-gray-600 mb-6">
                  Baixe o aplicativo para adicionar seu primeiro veículo
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg">
                  Ver Instruções
                </button>
              </div>
            </div>
          )}

          {/* Seções que usam o app móvel (Responsivo) */}
          {(activeSection === 'tracking' || activeSection === 'history' || activeSection === 'alerts' || activeSection === 'settings') && (
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="text-center py-12">
                <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Use o Aplicativo Móvel</h3>
                <p className="text-gray-600 mb-6">
                  Esta funcionalidade está disponível no aplicativo móvel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}