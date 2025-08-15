import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, Users, Building2, User } from 'lucide-react'

const SimuladorForm = ({ onSimulate }) => {
  const [nome, setNome] = useState('')
  const [idades, setIdades] = useState({
    '0-18': 0,
    '19-23': 0,
    '24-28': 0,
    '29-33': 0,
    '34-38': 0,
    '39-43': 0,
    '44-48': 0,
    '49-53': 0,
    '54-58': 0,
    '59+': 0
  })

  const handleIdadeChange = (faixa, valor) => {
    setIdades(prev => ({
      ...prev,
      [faixa]: Math.max(0, parseInt(valor) || 0)
    }))
  }

  const handleSimulate = (tipoPlano) => {
    const totalPessoas = Object.values(idades).reduce((sum, val) => sum + val, 0)
    if (totalPessoas === 0) {
      alert('Por favor, informe pelo menos uma pessoa.')
      return
    }
    if (!nome.trim()) {
      alert('Por favor, informe seu nome.')
      return
    }
    
    onSimulate({ nome, idades, tipoPlano })
  }

  const totalPessoas = Object.values(idades).reduce((sum, val) => sum + val, 0)

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Calculator className="h-8 w-8 text-blue-600" />
        </div>
        <CardTitle className="text-xl font-bold text-blue-800">
          SIMULADOR ON-LINE
        </CardTitle>
        <CardDescription>
          Faça um orçamento comparativo de todos os planos de saúde
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-sm font-semibold">
            1) Informe seu primeiro nome
          </Label>
          <Input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''))}
            maxLength={20}
            className="text-center"
            placeholder="Seu nome"
          />
        </div>

        {/* Faixas Etárias */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">
            2) Marque o número de pessoas
          </Label>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {Object.entries(idades).map(([faixa, valor]) => (
              <div key={faixa} className="flex items-center justify-between">
                <span className="text-xs">{faixa} anos:</span>
                <Input
                  type="number"
                  min="0"
                  max="20"
                  value={valor}
                  onChange={(e) => handleIdadeChange(faixa, e.target.value)}
                  className="w-16 h-8 text-center text-xs"
                />
              </div>
            ))}
          </div>
          {totalPessoas > 0 && (
            <div className="text-center text-sm text-blue-600 font-medium">
              Total: {totalPessoas} pessoa{totalPessoas !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Tipo de Plano */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold">
            3) Agora basta escolher o tipo de plano
          </Label>
          
          <div className="space-y-2">
            <div className="text-xs text-gray-600 mb-2">SEM CNPJ:</div>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleSimulate('individual')}
                className="h-10 text-xs bg-blue-600 hover:bg-blue-700"
                disabled={totalPessoas === 0 || !nome.trim()}
              >
                <User className="h-4 w-4 mr-1" />
                INDIVIDUAL
              </Button>
              <Button
                onClick={() => handleSimulate('familiar')}
                className="h-10 text-xs bg-green-600 hover:bg-green-700"
                disabled={totalPessoas === 0 || !nome.trim()}
              >
                <Users className="h-4 w-4 mr-1" />
                FAMILIAR
              </Button>
            </div>
            
            <div className="text-xs text-gray-600 mt-3 mb-2">COM CNPJ:</div>
            <Button
              onClick={() => handleSimulate('empresarial')}
              className="w-full h-10 text-xs bg-purple-600 hover:bg-purple-700"
              disabled={totalPessoas === 0 || !nome.trim()}
            >
              <Building2 className="h-4 w-4 mr-1" />
              EMPRESARIAL
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SimuladorForm

