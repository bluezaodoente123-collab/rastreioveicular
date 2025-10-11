import { useState } from 'react';
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
  Menu,
  X,
  Fuel,
  Gauge,
  MapPinned,
  Calendar,
  TrendingUp,
  Shield,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('honda-civic');

  const user = { email: 'usuario@exemplo.com' };

  // Dados de exemplo de veículos
  const vehicles = [
    {
      id: 'honda-civic',
      name: 'Honda Civic',
      plate: 'ABC-1234',
      model: '2022',
      color: 'Prata',
      status: 'active',
      speed: 45,
      fuel: 75,
      location: 'Av. Paulista, 1578 - São Paulo, SP',
      lat: -23.561684,
      lng: -46.655981,
      lastUpdate: '2 min atrás',
      alerts: 1
    },
    {
      id: 'toyota-corolla',
      name: 'Toyota Corolla',
      plate: 'XYZ-5678',
      model: '2023',
      color: 'Branco',
      status: 'stopped',
      speed: 0,
      fuel: 45,
      location: 'R. Augusta, 2690 - São Paulo, SP',
      lat: -23.554817,
      lng: -46.664691,
      lastUpdate: '15 min atrás',
      alerts: 0
    }
  ];

  // Histórico de rotas de exemplo
  const routeHistory = [
    {
      id: 1,
      date: '2025-10-11',
      time: '14:30',
      from: 'Shopping Iguatemi',
      to: 'Av. Paulista',
      distance: '8.5 km',
      duration: '22 min',
      vehicle: 'Honda Civic'
    },
    {
      id: 2,
      date: '2025-10-11',
      time: '10:15',
      from: 'Residência',
      to: 'Shopping Iguatemi',
      distance: '12.3 km',
      duration: '35 min',
      vehicle: 'Honda Civic'
    },
    {
      id: 3,
      date: '2025-10-10',
      time: '18:45',
      from: 'Escritório',
      to: 'Residência',
      distance: '15.2 km',
      duration: '40 min',
      vehicle: 'Honda Civic'
    }
  ];

  // Alertas de exemplo
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Excesso de Velocidade',
      description: 'Honda Civic ultrapassou 80 km/h na Marginal Pinheiros',
      time: '5 min atrás',
      vehicle: 'Honda Civic',
      read: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Veículo Parado',
      description: 'Toyota Corolla está parado há mais de 30 minutos',
      time: '20 min atrás',
      vehicle: 'Toyota Corolla',
      read: false
    },
    {
      id: 3,
      type: 'success',
      title: 'Manutenção Concluída',
      description: 'Revisão programada do Honda Civic foi finalizada',
      time: '2 horas atrás',
      vehicle: 'Honda Civic',
      read: true
    }
  ];

  const handleSignOut = () => {
    window.location.href = '/';
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vehicles', label: 'Veículos', icon: Car },
    { id: 'tracking', label: 'Rastreamento', icon: Navigation },
    { id: 'history', label: 'Histórico', icon: Clock },
    { id: 'alerts', label: 'Alertas', icon: Bell },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const currentVehicle = vehicles.find(v => v.id === selectedVehicle) || vehicles[0];

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Overlay para mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity sm:hidden ${
          sidebarOpen ? 'bg-opacity-60 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed sm:relative z-50 w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl flex flex-col h-screen transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
      >
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">RastreioVeicular</h1>
              <p className="text-xs text-slate-400">Sistema Premium</p>
            </div>
          </div>
          <button
            className="sm:hidden text-slate-400 hover:text-white transition p-2"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const hasNotification = item.id === 'alerts' && alerts.filter(a => !a.read).length > 0;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-4 px-5 py-4 rounded-xl transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                <span className="font-semibold text-base">{item.label}</span>
                {hasNotification && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {alerts.filter(a => !a.read).length}
                  </span>
                )}
                {isActive && !hasNotification && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-4 px-5 py-4 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 border border-red-500/20 hover:border-red-500/40"
          >
            <LogOut className="w-6 h-6" />
            <span className="font-semibold text-base">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200">
          <div className="flex justify-between items-center w-full sm:hidden mb-3">
            <button
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-center flex-1">
              <h2 className="text-xl font-bold text-slate-900">Painel de Controle</h2>
              <p className="text-sm text-slate-500">Monitore em tempo real</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 transition">
                <Bell className="w-6 h-6" />
                {alerts.filter(a => !a.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:justify-between w-full">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Painel de Controle</h2>
              <p className="text-sm text-slate-500">Monitore seus veículos em tempo real</p>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                className="relative p-2 text-slate-400 hover:text-slate-600 transition"
                onClick={() => setActiveSection('alerts')}
              >
                <Bell className="w-6 h-6" />
                {alerts.filter(a => !a.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
              </button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">{user?.email}</p>
                  <p className="text-xs text-slate-500">Cliente Premium</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 space-y-6">
          {/* Dashboard */}
          {activeSection === 'dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">+2</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">Total de Veículos</p>
                  <p className="text-3xl font-bold text-slate-900">2</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">Veículos Ativos</p>
                  <p className="text-3xl font-bold text-slate-900">1</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">Novo</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">Alertas Ativos</p>
                  <p className="text-3xl font-bold text-slate-900">{alerts.filter(a => !a.read).length}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">Km Rodados Hoje</p>
                  <p className="text-3xl font-bold text-slate-900">38.7</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Acesso Rápido</h3>
                    <p className="text-blue-100">Baixe o app para funcionalidades completas</p>
                  </div>
                  <Shield className="w-12 h-12 text-blue-200 opacity-50" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition font-semibold shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Android
                  </button>
                  <button 
                    onClick={() => setActiveSection('tracking')}
                    className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-400 transition font-semibold"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Ver Rastreamento
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Atividade Recente
                </h3>
                <div className="space-y-4">
                  {routeHistory.slice(0, 3).map((route) => (
                    <div key={route.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <MapPinned className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{route.from} → {route.to}</p>
                          <p className="text-sm text-slate-500">{route.date} às {route.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-slate-900">{route.distance}</p>
                        <p className="text-sm text-slate-500">{route.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Vehicles Section */}
          {activeSection === 'vehicles' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-900">Meus Veículos</h3>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Adicionar Veículo
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {vehicles.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all cursor-pointer"
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1">{vehicle.name}</h4>
                        <p className="text-slate-500 text-sm">{vehicle.plate} • {vehicle.model}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        vehicle.status === 'active' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {vehicle.status === 'active' ? 'Ativo' : 'Parado'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Gauge className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-slate-500">Velocidade</span>
                        </div>
                        <p className="text-lg font-bold text-slate-900">{vehicle.speed} km/h</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Fuel className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-slate-500">Combustível</span>
                        </div>
                        <p className="text-lg font-bold text-slate-900">{vehicle.fuel}%</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-3 mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Localização Atual</p>
                          <p className="text-sm font-medium text-slate-900">{vehicle.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Atualizado {vehicle.lastUpdate}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVehicle(vehicle.id);
                          setActiveSection('tracking');
                        }}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                      >
                        Ver no Mapa
                        <Navigation className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tracking Section */}
          {activeSection === 'tracking' && (
            <div className="space-y-6">
              {/* Vehicle Selector */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 overflow-x-auto">
                  {vehicles.map((vehicle) => (
                    <button
                      key={vehicle.id}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                        selectedVehicle === vehicle.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Car className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-semibold text-sm">{vehicle.name}</p>
                        <p className={`text-xs ${selectedVehicle === vehicle.id ? 'text-blue-100' : 'text-slate-500'}`}>
                          {vehicle.plate}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Map */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Localização em Tempo Real
                      </h3>
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        AO VIVO
                      </span>
                    </div>
                    <div className="relative h-96 bg-slate-100">
                      <img 
                        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-car+3b82f6(${currentVehicle.lng},${currentVehicle.lat})/${currentVehicle.lng},${currentVehicle.lat},14,0/800x400@2x?access_token=pk.eyJ1IjoiZ2Fzc2RsaW5kIiwiYSI6ImNtZ21lZTBzczBpd2IyaXEybG55dGdmaXUifQ.-mQLqh4AKig_pLhzzmPxqQ`}
                        alt="Mapa"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/800x400/334155/ffffff?text=${encodeURIComponent(currentVehicle.location)}`;
                        }}
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900 mb-1">{currentVehicle.name}</p>
                            <p className="text-sm text-slate-600">{currentVehicle.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Info Panel */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">Informações do Veículo</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Status</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          currentVehicle.status === 'active' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {currentVehicle.status === 'active' ? 'Em Movimento' : 'Parado'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Velocidade</span>
                        <span className="font-bold text-slate-900">{currentVehicle.speed} km/h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Combustível</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                              style={{ width: `${currentVehicle.fuel}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-slate-900">{currentVehicle.fuel}%</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Última Atualização</span>
                        <span className="font-semibold text-slate-900">{currentVehicle.lastUpdate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                    <h4 className="font-bold mb-2">Controle Remoto</h4>
                    <p className="text-sm text-blue-100 mb-4">Gerencie seu veículo pelo app</p>
                    <button className="w-full bg-white text-blue-600 px-4 py-3 rounded-xl hover:bg-blue-50 transition font-semibold flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Baixar App
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* History Section */}
          {activeSection === 'history' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-900">Histórico de Rotas</h3>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Todos os veículos</option>
                    <option>Honda Civic</option>
                    <option>Toyota Corolla</option>
                  </select>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition font-semibold text-sm flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Exportar
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Navigation className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Rotas Hoje</p>
                      <p className="text-2xl font-bold text-slate-900">3</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Km Totais</p>
                      <p className="text-2xl font-bold text-slate-900">36.0</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Tempo Total</p>
                      <p className="text-2xl font-bold text-slate-900">1h 37m</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Route List */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Data/Hora</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Veículo</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Origem</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Destino</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Distância</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Duração</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {routeHistory.map((route) => (
                        <tr key={route.id} className="hover:bg-slate-50 transition">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <div>
                                <p className="text-sm font-medium text-slate-900">{route.date}</p>
                                <p className="text-xs text-slate-500">{route.time}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Car className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-900">{route.vehicle}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-slate-900">{route.from}</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-slate-900">{route.to}</p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-semibold text-slate-900">{route.distance}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-slate-600">{route.duration}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              Ver
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Section */}
          {activeSection === 'alerts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-slate-900">Central de Alertas</h3>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Marcar todos como lidos
                </button>
              </div>

              {/* Alert Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-5 border-2 border-red-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full">Críticos</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900 mb-1">1</p>
                  <p className="text-xs text-slate-500">Requer atenção</p>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Avisos</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900 mb-1">1</p>
                  <p className="text-xs text-slate-500">Informativos</p>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Resolvidos</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900 mb-1">1</p>
                  <p className="text-xs text-slate-500">Últimas 24h</p>
                </div>
              </div>

              {/* Alert List */}
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div 
                    key={alert.id} 
                    className={`bg-white rounded-2xl p-6 border-2 shadow-sm hover:shadow-lg transition-all ${
                      alert.read ? 'border-slate-200' : 'border-blue-400'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        alert.type === 'warning' ? 'bg-red-100' : 
                        alert.type === 'info' ? 'bg-orange-100' : 
                        'bg-emerald-100'
                      }`}>
                        {alert.type === 'warning' && <AlertTriangle className="w-6 h-6 text-red-600" />}
                        {alert.type === 'info' && <Info className="w-6 h-6 text-orange-600" />}
                        {alert.type === 'success' && <CheckCircle className="w-6 h-6 text-emerald-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-1">{alert.title}</h4>
                            <p className="text-sm text-slate-600 mb-2">{alert.description}</p>
                          </div>
                          {!alert.read && (
                            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">NOVO</span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Car className="w-3 h-3" />
                              {alert.vehicle}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {alert.time}
                            </span>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                            Ver Detalhes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Configurações</h3>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Profile Settings */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Perfil
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        value={user.email}
                        readOnly
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-slate-50 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                      <input 
                        type="text" 
                        placeholder="Seu nome completo"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
                      Salvar Alterações
                    </button>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-blue-600" />
                    Notificações
                  </h4>
                  <div className="space-y-4">
                    {[
                      { id: 'speed', label: 'Alertas de velocidade', description: 'Notificar quando exceder limite' },
                      { id: 'movement', label: 'Movimentos suspeitos', description: 'Atividade fora do horário' },
                      { id: 'maintenance', label: 'Lembretes de manutenção', description: 'Revisões programadas' },
                      { id: 'fuel', label: 'Nível de combustível', description: 'Avisos de combustível baixo' }
                    ].map((setting) => (
                      <div key={setting.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                        <div>
                          <p className="font-semibold text-slate-900">{setting.label}</p>
                          <p className="text-xs text-slate-500">{setting.description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    Segurança
                  </h4>
                  <div className="space-y-4">
                    <button className="w-full text-left p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition">
                      <p className="font-semibold text-slate-900 mb-1">Alterar Senha</p>
                      <p className="text-xs text-slate-500">Última alteração há 30 dias</p>
                    </button>
                    <button className="w-full text-left p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition">
                      <p className="font-semibold text-slate-900 mb-1">Autenticação em Dois Fatores</p>
                      <p className="text-xs text-slate-500">Adicione uma camada extra de segurança</p>
                    </button>
                    <button className="w-full text-left p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition">
                      <p className="font-semibold text-slate-900 mb-1">Sessões Ativas</p>
                      <p className="text-xs text-slate-500">Gerencie dispositivos conectados</p>
                    </button>
                  </div>
                </div>

                {/* Subscription */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Assinatura
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-sm text-blue-100 mb-1">Plano Atual</p>
                      <p className="text-2xl font-bold mb-2">Premium</p>
                      <p className="text-sm text-blue-100">R$ 49,90/mês</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-sm text-blue-100 mb-1">Próximo Pagamento</p>
                      <p className="text-lg font-bold">18 de Outubro, 2025</p>
                    </div>
                    <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition font-semibold">
                      Gerenciar Assinatura
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}