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
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const downloadLink = "";

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gray-100">
      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity sm:hidden ${
          sidebarOpen ? 'bg-opacity-60 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed sm:relative z-50 w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl flex flex-col h-screen transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
      >
        {/* Logo e Header */}
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Rastreamento</h1>
              <p className="text-xs text-gray-400">Sistema Veicular</p>
            </div>
          </div>
          <button
            className="sm:hidden text-gray-400 hover:text-white transition p-2"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu de navegação */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:scale-102'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-400'}`} />
                <span className="font-semibold text-base">{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Botão Sair */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-4 px-5 py-4 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 border border-red-500/20 hover:border-red-500/40"
          >
            <LogOut className="w-6 h-6" />
            <span className="font-semibold text-base">Sair</span>
          </button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          {/* Mobile layout */}
          <div className="flex justify-between items-center w-full sm:hidden mb-3">
            <button
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-center flex-1">
              <h2 className="text-xl font-bold text-gray-900">Painel de Controle</h2>
              <p className="text-sm text-gray-500">Monitore em tempo real</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{user?.email}</p>
                <p className="text-xs text-gray-500">Cliente</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-8 space-y-8">
          {/* Dashboard */}
          {activeSection === 'dashboard' && (
            <>
              {/* Banner Download */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Baixe o Aplicativo para Começar</h3>
                <p className="text-blue-100 mb-6 max-w-2xl">
                  Para começar a rastrear seu veículo, você precisa baixar nosso aplicativo móvel e configurar o dispositivo GPS. É rápido e fácil!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={downloadLink}
                    download
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium shadow-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </a>
                </div>
              </div>

              {/* Cards visão geral */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Visão Geral</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Total de Veículos</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Veículos Ativos</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Alertas Pendentes</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
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
            </>
          )}

          {/* Veículos */}
          {activeSection === 'vehicles' && (
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum Veículo Cadastrado</h3>
                <p className="text-gray-600 mb-6">
                  Baixe o aplicativo para adicionar seu primeiro veículo
                </p>
                <a
                  href={downloadLink}
                  download
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center justify-center shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download para Android
                </a>
              </div>
            </div>
          )}

          {/* Outras seções do app */}
          {(activeSection === 'tracking' || activeSection === 'history' || activeSection === 'alerts' || activeSection === 'settings') && (
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="text-center py-12">
                <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Use o Aplicativo Móvel</h3>
                <p className="text-gray-600 mb-6">
                  Esta funcionalidade está disponível no aplicativo móvel
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={downloadLink}
                    download
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