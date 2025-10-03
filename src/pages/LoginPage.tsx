import React, { useState } from 'react';
import { MapPin, Mail, Lock, AlertCircle } from 'lucide-react';

// --- SIMULAÇÕES PARA AMBIENTE DE ARQUIVO ÚNICO ---
// 1. Simulação do useNavigate
const useNavigate = () => (path) => {
  console.log(`Navegando para: ${path}`);
  // Em uma aplicação real, aqui você usaria navigate(path)
  // Como estamos em um único arquivo, podemos apenas mostrar uma mensagem de sucesso
  alert("Login simulado com sucesso! Redirecionando para o Dashboard.");
};

// 2. Simulação do Auth Context (mock para demonstração)
const useAuth = () => ({
  // Simula uma função de login
  signIn: async (email, password) => {
    // Simula uma pequena latência de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Sucesso para a maioria das entradas
    if (email === "teste@exemplo.com" && password === "senha123") {
      return { error: null };
    }
    // Simula falha para outras entradas
    return { error: true };
  }
});
// --- FIM DAS SIMULAÇÕES ---

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Usando a simulação
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        setError('Email ou senha inválidos. Tente novamente.');
      } else {
        // Sucesso na simulação
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 font-inter">
      {/* Container principal que se ajusta ao mobile (w-full) e limita no desktop (max-w-md) */}
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-300 transform hover:shadow-3xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
            <p className="text-gray-600">Acesse sua conta para rastreamento</p>
          </div>

          {/* Área de Erro Responsiva */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start animate-pulse">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition duration-200"
                  placeholder="seu@email.com"
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition duration-200"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 select-none">
                  Lembrar-me
                </label>
              </div>
              {/* Substituído Link por <a> */}
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium transition duration-200">
                Esqueceu a senha?
              </a>
            </div>

            {/* Botão de Submissão com estado de loading */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              {/* Substituído Link por <a> */}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition duration-200">
                Cadastre-se agora
              </a>
            </p>
          </div>

          <div className="mt-6 text-center pt-4 border-t border-gray-100">
            {/* Substituído Link por <a> */}
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition duration-200">
              Voltar para página inicial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
