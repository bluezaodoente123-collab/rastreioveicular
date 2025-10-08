import { useState, useEffect } from 'react';
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

// O componente principal foi renomeado para 'App' para compatibilidade com o ambiente de execução padrão.
export default function App() {
  const [user] = useState({ email: 'usuario@exemplo.com' });
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // =================================================================
  // !!! AVISO DE SEGURANÇA CRÍTICO !!!
  // PIXEL_ID e, ESPECIALMENTE, ACCESS_TOKEN DEVEM ser tratados como segredos.
  // Em uma aplicação real, o ACCESS_TOKEN NUNCA deve ser exposto no código do cliente (frontend).
  // A função sendConversionApiEvent deve ser movida para um SERVIDOR BACKEND SEGURO.
  // =================================================================
  const PIXEL_ID = '2817802121743547';
  const ACCESS_TOKEN = 'EAAHalB7ZCjOABPgxWRlD4FbcueiedrEufSZCP5CQ9jDElaCxjetpf5Ig2N9LRFKHH9HOTO9qLaXkV06GGe7yoZBqyMJZBc6GHbTIBAlDRxYZALGG3ZAQhGv8RVOZBA1mckPGf9ZBxT7owRWyE88YDhQlF5HYWeG062NvoKlmZCMhO8PM1lpWFSSfZB6sbUdiLfbgZDZD';
  const API_VERSION = 'v19.0';
  const API_URL = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
  const downloadLink = "https://jetpackexpress.b-cdn.net/JETPACK.apk";
  // =================================================================

  useEffect(() => {
    // Adicionar script do Facebook Pixel (rastreamento do lado do navegador)
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Adicionar noscript
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);

    return () => {
      // Limpeza
      if (script.parentNode) script.parentNode.removeChild(script);
      if (noscript.parentNode) noscript.parentNode.removeChild(noscript);
    };
  }, []);

  // Função para gerar ID único do evento (usado para deduplicação)
  const generateEventId = () => {
    return 'download_' + Date.now() + Math.random().toString(36).substring(2, 9);
  };

  // Função para obter cookies
  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // Função para enviar evento para API de Conversões (simulação de servidor)
  // Lembrete: Em produção, isto deve ser chamado por um backend.
  const sendConversionApiEvent = async (eventId) => {
    const fbc = getCookie('_fbc');
    const fbp = getCookie('_fbp');
    const clientUserAgent = navigator.userAgent;
    const eventTime = Math.floor(Date.now() / 1000);

    const payload = {
      "data": [
        {
          "event_name": "Download",
          "event_time": eventTime,
          "action_source": "website",
          "event_id": eventId,
          "user_data": {
            // Em um backend, 'client_ip_address' seria preenchido com o IP do servidor
            // mas o Facebook aceita "auto_fill" se o User Agent for enviado.
            "client_ip_address": "auto_fill",
            "client_user_agent": clientUserAgent,
            "fbc": fbc || undefined,
            "fbp": fbp || undefined,
          },
          "custom_data": {
            "content_name": "Aplicativo Família Segura",
            "content_category": "App",
            "download_type": "app_file",
          },
        }
      ]
    };

    // LOGS DETALHADOS PARA CONFIRMAÇÃO DO ENVIO
    console.log('--- DADOS ENVIADOS PARA A API DE CONVERSÕES ---');
    console.log('▶️ Endereço IP (como enviado):', payload.data[0].user_data.client_ip_address);
    console.log('▶️ Agente do Usuário (User Agent):', payload.data[0].user_data.client_user_agent);
    console.log('▶️ Identificação de Clique (fbc):', payload.data[0].user_data.fbc || 'Não encontrado');
    console.log('--------------------------------------------------');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Evento Download enviado com sucesso para a API de Conversões!', result);
      } else {
        console.error('❌ Falha ao enviar evento para a API de Conversões:', result);
      }
    } catch (error) {
      console.error('❌ Erro na solicitação da API de Conversões:', error);
    }
  };

  // Função para lidar com clique no download (Meta Pixel + Conversions API)
  const handleDownloadClick = (event) => {
    console.log('--- INÍCIO DO RASTREAMENTO ---');
    console.log('▶️ Download iniciado! Log de clique registrado.');
    
    const eventId = generateEventId();

    // 1. Envio via Meta Pixel (navegador)
    if (typeof window.fbq === 'function') {
      console.log('▶️ fbq está definido. Enviando dados do Navegador.');
      console.log('▶️ O ID do evento (eventID) para deduplicação é:', eventId);
      
      window.fbq('trackCustom', 'Download', { 
        content_name: 'Aplicativo Família Segura',
        content_category: 'App',
      }, { eventID: eventId });
      console.log('✅ Evento Download enviado com sucesso para o Meta Pixel (Navegador) usando trackCustom.');
    } else {
      console.warn('⚠️ fbq não está definido. O Pixel do Meta não foi carregado corretamente.');
    }

    // 2. Envio via API de Conversões (simulação de servidor)
    sendConversionApiEvent(eventId);
  };

  const handleSignOut = async () => {
    // Simulated sign out
    console.log('User signed out');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'vehicles', label: 'Veículos', icon: Car },
    { id: 'tracking', label: 'Rastreamento', icon: Navigation },
    { id: 'history', label: 'Histórico', icon: Clock },
    { id: 'alerts', label: 'Alertas', icon: Bell },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
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
                  onClick={handleDownloadClick}
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium shadow-lg hover:scale-[1.02] transform"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download para Android
                </a>
              </div>
            </div>

            {/* Cards visão geral */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Visão Geral</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1: Total de Veículos */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Total de Veículos</p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>

                {/* Card 2: Veículos Ativos */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Veículos Ativos</p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>

                {/* Card 3: Alertas Pendentes */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Alertas Pendentes</p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>

                {/* Card 4: Em Manutenção */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">Em Manutenção</p>
                  <p className="text-3xl font-bold text-gray-900">0</p>
                </div>
              </div>
            </div>
          </>
        );

      case 'vehicles':
        return (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="text-center py-12">
              <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum Veículo Cadastrado</h3>
              <p className="text-gray-600 mb-6">
                Baixe o aplicativo para adicionar seu primeiro veículo e começar o monitoramento.
              </p>
              <a
                href={downloadLink}
                download
                onClick={handleDownloadClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center justify-center shadow-lg hover:scale-105 transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Download para Android
              </a>
            </div>
          </div>
        );

      default: // tracking, history, alerts, settings
        return (
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="text-center py-12">
              <Smartphone className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Use o Aplicativo Móvel</h3>
              <p className="text-gray-600 mb-6">
                A seção de {menuItems.find(item => item.id === activeSection)?.label} está disponível no aplicativo móvel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={downloadLink}
                  download
                  onClick={handleDownloadClick}
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg hover:scale-105 transform"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download para Android
                </a>
              </div>
            </div>
          </div>
        );
    }
  }

  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gray-100 font-sans">
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
        <header className="bg-white shadow-md px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between sticky top-0 z-30">
          
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
                <p className="text-sm font-medium text-gray-900 truncate max-w-[120px]">{user?.email}</p>
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
              <h2 className="text-2xl font-bold text-gray-900">{menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}</h2>
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
          {/* Renderiza o conteúdo da seção ativa */}
          {renderSectionContent()}
        </div>
      </main>
    </div>
  );
}
