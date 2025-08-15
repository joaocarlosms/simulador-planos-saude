import { useState } from 'react'
import { Heart, Calculator, Info } from 'lucide-react'
import SimuladorForm from './components/SimuladorForm'
import ResultadosTable from './components/ResultadosTable'
import InfoSection from './components/InfoSection'
import { simularPlanos, validarDadosSimulacao } from './utils/calculator'
import planosData from './assets/planos_data.json'
import './App.css'

function App() {
  const [resultados, setResultados] = useState(null)
  const [dadosSimulacao, setDadosSimulacao] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSimulate = async (dados) => {
    // Validar dados
    const validacao = validarDadosSimulacao(dados)
    if (!validacao.valido) {
      alert(validacao.erro)
      return
    }

    setLoading(true)
    
    try {
      // Simular delay para melhor UX
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Calcular resultados
      const resultadosSimulacao = simularPlanos(planosData, dados)
      
      setResultados(resultadosSimulacao)
      setDadosSimulacao(dados)
    } catch (error) {
      console.error('Erro na simulação:', error)
      alert('Erro ao processar simulação. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const resetSimulation = () => {
    setResultados(null)
    setDadosSimulacao(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Simulador de Planos de Saúde
                </h1>
                <p className="text-sm text-gray-600">
                  Compare preços e encontre o melhor plano para você
                </p>
              </div>
            </div>
            {resultados && (
              <button
                onClick={resetSimulation}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Nova Simulação
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Calculando os melhores preços...</p>
            </div>
          </div>
        ) : !resultados ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário */}
            <div className="lg:col-span-1">
              <SimuladorForm onSimulate={handleSimulate} />
            </div>
            
            {/* Informações */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center gap-2 mb-4">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      Orçamento Comparativo
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Faça um orçamento comparativo de todos os planos de saúde. Basta colocar 
                    o número de pessoas e escolher o tipo de plano que o resultado sai na hora.
                  </p>
                  <p className="text-gray-700">
                    Você terá acesso ao orçamento, rede credenciada e demais informações de 
                    mais de 10 convênios médicos.
                  </p>
                </div>
                
                <InfoSection />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <ResultadosTable 
              resultados={resultados} 
              dadosSimulacao={dadosSimulacao}
            />
            
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold">Próximos Passos</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">1. Escolha seu plano</h4>
                  <p className="text-blue-700">
                    Analise as opções e escolha o plano que melhor atende suas necessidades.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2. Entre em contato</h4>
                  <p className="text-green-700">
                    Use o telefone fornecido para falar diretamente com a operadora.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">3. Contrate</h4>
                  <p className="text-purple-700">
                    Finalize a contratação e comece a usar seu novo plano de saúde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-red-400" />
              <span className="font-semibold">Simulador de Planos de Saúde</span>
            </div>
            <p className="text-gray-400 text-sm">
              Compare preços e encontre o melhor plano de saúde para você e sua família.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              * Os preços são estimativos e podem variar. Consulte sempre a operadora para valores atualizados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

