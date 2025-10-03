import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vehicles', label: 'Veículos', icon: Car },
    { id: 'tracking', label: 'Rastreamento', icon: Navigation },
    { id: 'history', label: 'Histórico', icon: Clock },
    { id: 'alerts', label: 'Alertas', icon: Bell },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Rastreamento</h1>
              <p className="text-xs text-gray-500">Sistema Veicular</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
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

      <main className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Painel de Controle</h2>
              <p className="text-sm text-gray-500">Monitore seus veículos em tempo real</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.email}</p>
                  <p className="text-xs text-gray-500">Cliente</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8">
          {activeSection === 'dashboard' && (
            <div className="space-y-8">
              {/* Banner de Download - Alterado */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Baixe o Aplicativo para Começar</h3>
                <p className="text-blue-100 mb-6 max-w-2xl">
                  Para começar a rastrear seu veículo, você precisa baixar nosso aplicativo móvel e configurar o dispositivo GPS. É rápido e fácil!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </a>
                  {/* <a
                    href="#"
                    className="inline-flex items-center justify-center bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para iOS // REMOVIDO
                  </a> */}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visão Geral</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Total de Veículos</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Veículos Ativos</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Alertas Pendentes</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Wrench className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Em Manutenção</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Bem-vindo ao Sistema</h3>
                <p className="text-gray-600 mb-6">
                  Este é o seu painel de rastreamento veicular. Aqui você pode:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <MapPin className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Monitorar a localização em tempo real de todos os seus veículos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Clock className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Visualizar o histórico de rotas e trajetos percorridos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Bell className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Configurar alertas para eventos importantes como excesso de velocidade</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <Car className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Gerenciar informações detalhadas sobre cada veículo da frota</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
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
                  <ChevronRight className="w-6 h-6 text-blue-400 ml-4 flex-shrink-0" />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'vehicles' && (
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum Veículo Cadastrado</h3>
                <p className="text-gray-600 mb-6">
                  Baixe o aplicativo para adicionar seu primeiro veículo
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                  Ver Instruções
                </button>
              </div>
            </div>
          )}

          {/* Seções que usam o app móvel - Alterado */}
          {(activeSection === 'tracking' || activeSection === 'history' || activeSection === 'alerts' || activeSection === 'settings') && (
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-center py-12">
                <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Use o Aplicativo Móvel</h3>
                <p className="text-gray-600 mb-6">
                  Esta funcionalidade está disponível no aplicativo móvel
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </a>
                  {/* <a
                    href="#"
                    className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para iOS // REMOVIDO
                  </a> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}