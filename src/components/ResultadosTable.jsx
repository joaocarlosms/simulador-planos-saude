import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  Star, 
  Phone, 
  Users, 
  MapPin, 
  Heart, 
  Info,
  TrendingUp,
  TrendingDown
} from 'lucide-react'

const ResultadosTable = ({ resultados, dadosSimulacao }) => {
  const [planoSelecionado, setPlanoSelecionado] = useState(null)

  if (!resultados || resultados.length === 0) {
    return null
  }

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  const getCoberturaBadge = (coverage) => {
    return coverage === 'Nacional' 
      ? <Badge variant="default" className="bg-green-100 text-green-800">Nacional</Badge>
      : <Badge variant="secondary" className="bg-blue-100 text-blue-800">Regional</Badge>
  }

  const getTipoBadge = (type) => {
    return type === 'Operadora'
      ? <Badge variant="default" className="bg-purple-100 text-purple-800">Operadora</Badge>
      : <Badge variant="outline" className="bg-orange-100 text-orange-800">Administradora</Badge>
  }

  const getRatingStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-200 text-yellow-400" />)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }
    
    return stars
  }

  return (
    <div className="w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Resultados da Simulação
          </CardTitle>
          <CardDescription>
            Olá <strong>{dadosSimulacao.nome}</strong>! Aqui estão os planos ordenados por preço para o tipo <strong>{dadosSimulacao.tipoPlano}</strong>.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Plano</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Cobertura</TableHead>
                  <TableHead>Rede</TableHead>
                  <TableHead>Avaliação</TableHead>
                  <TableHead className="text-right">Preço Mensal</TableHead>
                  <TableHead className="w-[100px]">Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resultados.map((resultado, index) => (
                  <TableRow key={resultado.plano.id} className={index < 3 ? 'bg-green-50' : ''}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-semibold text-blue-800">{resultado.plano.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {resultado.plano.services.join(', ')}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getTipoBadge(resultado.plano.type)}
                    </TableCell>
                    <TableCell>
                      {getCoberturaBadge(resultado.plano.coverage)}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{resultado.plano.networkSize.toLocaleString()}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getRatingStars(resultado.plano.rating)}
                        <span className="text-sm text-gray-600 ml-1">
                          {resultado.plano.rating}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-bold text-lg text-green-600">
                        {formatarMoeda(resultado.precoTotal)}
                      </div>
                      {index === 0 && (
                        <Badge variant="default" className="bg-green-600 text-white text-xs mt-1">
                          Melhor Preço
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setPlanoSelecionado(resultado)}
                          >
                            <Info className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <Heart className="h-5 w-5 text-red-500" />
                              {resultado.plano.name}
                            </DialogTitle>
                            <DialogDescription>
                              Informações detalhadas do plano
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Informações Gerais</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span>Tipo:</span>
                                    <span>{getTipoBadge(resultado.plano.type)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Cobertura:</span>
                                    <span>{getCoberturaBadge(resultado.plano.coverage)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Rede Credenciada:</span>
                                    <span>{resultado.plano.networkSize.toLocaleString()} prestadores</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Avaliação:</span>
                                    <div className="flex items-center gap-1">
                                      {getRatingStars(resultado.plano.rating)}
                                      <span>{resultado.plano.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2">Preço Total</h4>
                                <div className="text-2xl font-bold text-green-600 mb-2">
                                  {formatarMoeda(resultado.precoTotal)}
                                </div>
                                <div className="text-sm text-gray-600">
                                  Modalidade: {dadosSimulacao.tipoPlano}
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Serviços Inclusos</h4>
                              <div className="flex flex-wrap gap-2">
                                {resultado.plano.services.map((service, idx) => (
                                  <Badge key={idx} variant="outline">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Descrição</h4>
                              <p className="text-sm text-gray-700">
                                {resultado.plano.description}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-1 text-green-600">
                                  <TrendingUp className="h-4 w-4" />
                                  Vantagens
                                </h4>
                                <ul className="text-sm space-y-1">
                                  {resultado.plano.advantages.map((advantage, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="text-green-500 mt-1">•</span>
                                      {advantage}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold mb-2 flex items-center gap-1 text-orange-600">
                                  <TrendingDown className="h-4 w-4" />
                                  Desvantagens
                                </h4>
                                <ul className="text-sm space-y-1">
                                  {resultado.plano.disadvantages.map((disadvantage, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="text-orange-500 mt-1">•</span>
                                      {disadvantage}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h4 className="font-semibold mb-2 flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                Contato
                              </h4>
                              <p className="text-sm">
                                <strong>Telefone:</strong> {resultado.plano.contact}
                              </p>
                              {resultado.plano.registroANS && (
                                <p className="text-sm mt-1">
                                  <strong>Registro ANS:</strong> {resultado.plano.registroANS}
                                </p>
                              )}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResultadosTable

