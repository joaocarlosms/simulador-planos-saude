import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Info, 
  Users, 
  Building2, 
  User, 
  DollarSign,
  AlertCircle
} from 'lucide-react'

const InfoSection = () => {
  return (
    <div className="w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            Modalidade de Planos
          </CardTitle>
          <CardDescription>
            Entenda as diferenças entre os tipos de planos disponíveis
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-blue-500" />
                <h4 className="font-semibold">Plano Pessoa Física</h4>
                <Badge variant="outline" className="text-xs">Individual/Familiar</Badge>
              </div>
              <p className="text-sm text-gray-700">
                O plano individual e familiar tem reajuste anual controlado pela ANS (Agência Nacional de Saúde). 
                A maioria das operadoras não vendem essa modalidade de plano por essa razão.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-green-500" />
                <h4 className="font-semibold">Plano Coletivo por Adesão</h4>
                <Badge variant="outline" className="text-xs">Por Categoria</Badge>
              </div>
              <p className="text-sm text-gray-700">
                Nesse plano o titular precisa ter vínculo com um sindicato ou entidade de classe conforme 
                sua profissão ou formação. Fale conosco para verificar aceitação.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-4 w-4 text-purple-500" />
                <h4 className="font-semibold">Plano Empresarial</h4>
                <Badge variant="outline" className="text-xs">CNPJ</Badge>
              </div>
              <p className="text-sm text-gray-700">
                Os valores são menores, tem mais opções de compra e se o CNPJ for de empresário individual 
                precisa ter pelo menos 6 meses de aberto. Utilizado no comparativo como referência a tabela 
                para São Paulo. Demais cidades confirme conosco os valores.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-500" />
            Coparticipação
          </CardTitle>
          <CardDescription>
            Como funciona a coparticipação nos planos de saúde
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 mb-3">
                  Planos com coparticipação oferecem mensalidade com valores menores, porém o usuário 
                  participa da despesa. É cobrada uma taxa na utilização dos serviços que depois é 
                  acrescentada na mensalidade do plano.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold">Coparticipação Parcial</h4>
                <Badge variant="outline" className="bg-orange-100 text-orange-800 text-xs">Parcial</Badge>
              </div>
              <p className="text-sm text-gray-700">
                A cobrança costuma ser somente para terapias (psicólogo, nutricionista, fisioterapia, 
                acupuntura, fonoaudiologia...).
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold">Coparticipação Completa</h4>
                <Badge variant="outline" className="bg-red-100 text-red-800 text-xs">Completa</Badge>
              </div>
              <p className="text-sm text-gray-700">
                A cobrança costuma ser para consultas, terapias, exames, internação...
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Dica:</strong> No resultado do orçamento, clique em "Regras gerais" e depois em 
              "Regras de Coparticipação" para ver a lista de procedimentos que são cobrados e os valores. 
              Pode ser um percentual do que o prestador cobrar da operadora ou pode ser um valor fixo em reais.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoSection

