import { useState, useEffect } from 'react';
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

  const PIXEL_ID = '2817802121743547';
  const ACCESS_TOKEN = 'EAAHalB7ZCjOABPi3Rz2cLVPUJ7xP2VG04ncUeFkh6MGRhnyPJt9qLNb6TqG3Xh3W9k6RuYqVfZCwlr1fxeyenOUk2DAmcs4PNbIViBXYs3ZBILumpedZCpRSi9YG26BC1I7n6IArZB0wZBPMmymLlYnuJrD6Ejzc7JD8vFY8gbcsYiSiBd2oG9pIBC8F5qHgZDZD';

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

  const downloadLink = "https://rastreioveicular.b-cdn.net/rastreioveicular.apk"; // Ex: "https://seusite.com/app.apk"

  useEffect(() => {
    if (!window.fbq) {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, [PIXEL_ID]);

  const hashData = async (data) => {
    if (!data) return null;
    const normalized = data.toLowerCase().trim();
    const msgBuffer = new TextEncoder().encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return null;
    }
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const sendConversionAPI = async (eventId) => {
    try {
      const eventTime = Math.floor(Date.now() / 1000);
      const emailOriginal = user?.email || null;
      const emailHasheado = emailOriginal ? await hashData(emailOriginal) : null;

      const eventData = {
        data: [{
          event_name: 'Download',
          event_time: eventTime,
          event_id: eventId,
          event_source_url: window.location.href,
          action_source: 'website',
          user_data: {
            em: emailHasheado,
            client_ip_address: await getClientIP(),
            client_user_agent: navigator.userAgent,
            fbc: getCookie('_fbc'),
            fbp: getCookie('_fbp')
          }
        }]
      };

      const response = await fetch(
        `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventData)
        }
      );

      const result = await response.json();
      return result;
    } catch {
      return null;
    }
  };

  const handleDownloadClick = async (e) => {
    e.preventDefault();

    try {
      const eventId = `download_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      if (window.fbq) {
        window.fbq('trackCustom', 'Download', {
          content_name: 'App Android',
          content_type: 'application',
        }, { eventID: eventId });
      }

      await sendConversionAPI(eventId);
      await new Promise(resolve => setTimeout(resolve, 300));

      if (downloadLink) {
        window.location.href = downloadLink;
      } else {
        alert('Link de download será disponibilizado em breve!');
      }
    } catch {
      if (downloadLink) {
        window.location.href = downloadLink;
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gray-100">
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity sm:hidden ${
          sidebarOpen ? 'bg-opacity-60 pointer-events-auto' : 'bg-opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside
        className={`fixed sm:relative z-50 w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl flex flex-col h-screen transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
      >
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

      <main className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
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
          {activeSection === 'dashboard' && (
            <>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Baixe o Aplicativo para Começar</h3>
                <p className="text-blue-100 mb-6 max-w-2xl">
                  Para começar a rastrear seu veículo, você precisa baixar nosso aplicativo móvel e configurar o dispositivo GPS. É rápido e fácil!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleDownloadClick}
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium shadow-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </button>
                </div>
              </div>

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

          {activeSection === 'vehicles' && (
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum Veículo Cadastrado</h3>
                <p className="text-gray-600 mb-6">
                  Baixe o aplicativo para adicionar seu primeiro veículo
                </p>
                <button
                  onClick={handleDownloadClick}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center justify-center shadow-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download para Android
                </button>
              </div>
            </div>
          )}

          {(activeSection === 'tracking' || activeSection === 'history' || activeSection === 'alerts' || activeSection === 'settings') && (
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="text-center py-12">
                <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Use o Aplicativo Móvel</h3>
                <p className="text-gray-600 mb-6">
                  Esta funcionalidade está disponível no aplicativo móvel
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleDownloadClick}
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download para Android
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
