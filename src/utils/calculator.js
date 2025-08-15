const faixaMapping = {
  '0-18': '0-18',
  '19-23': '19-23',
  '24-28': '24-28',
  '29-33': '29-33',
  '34-38': '34-38',
  '39-43': '39-43',
  '44-48': '44-48',
  '49-53': '49-53',
  '54-58': '54-58',
  '59+': '59+'
}

export const calcularPrecoPlano = (plano, idades, tipoPlano) => {
  let precoTotal = 0
  
  // Verifica se o plano tem preços para o tipo solicitado
  if (!plano.precos || !plano.precos[tipoPlano]) {
    return 0
  }
  
  const precosPorFaixa = plano.precos[tipoPlano]
  
  // Calcula o preço total baseado nas faixas etárias
  Object.entries(idades).forEach(([faixa, quantidade]) => {
    if (quantidade > 0) {
      const faixaKey = faixaMapping[faixa]
      const precoFaixa = precosPorFaixa[faixaKey]
      
      if (precoFaixa) {
        precoTotal += precoFaixa * quantidade
      }
    }
  })
  
  return precoTotal
}

export const simularPlanos = (planosData, dadosSimulacao) => {
  const { idades, tipoPlano } = dadosSimulacao
  
  // Calcula o preço para cada plano
  const resultados = planosData.planos.map(plano => {
    const precoTotal = calcularPrecoPlano(plano, idades, tipoPlano)
    
    return {
      plano,
      precoTotal,
      detalhesCalculo: calcularDetalhes(plano, idades, tipoPlano)
    }
  })
  
  // Filtra planos com preço > 0 e ordena por preço
  return resultados
    .filter(resultado => resultado.precoTotal > 0)
    .sort((a, b) => a.precoTotal - b.precoTotal)
}

const calcularDetalhes = (plano, idades, tipoPlano) => {
  const detalhes = []
  
  if (!plano.precos || !plano.precos[tipoPlano]) {
    return detalhes
  }
  
  const precosPorFaixa = plano.precos[tipoPlano]
  
  Object.entries(idades).forEach(([faixa, quantidade]) => {
    if (quantidade > 0) {
      const faixaKey = faixaMapping[faixa]
      const precoFaixa = precosPorFaixa[faixaKey]
      
      if (precoFaixa) {
        detalhes.push({
          faixa,
          quantidade,
          precoUnitario: precoFaixa,
          subtotal: precoFaixa * quantidade
        })
      }
    }
  })
  
  return detalhes
}

export const formatarMoeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}

export const validarDadosSimulacao = (dadosSimulacao) => {
  const { nome, idades } = dadosSimulacao
  
  if (!nome || nome.trim().length === 0) {
    return { valido: false, erro: 'Nome é obrigatório' }
  }
  
  const totalPessoas = Object.values(idades).reduce((sum, val) => sum + val, 0)
  
  if (totalPessoas === 0) {
    return { valido: false, erro: 'Pelo menos uma pessoa deve ser informada' }
  }
  
  if (totalPessoas > 50) {
    return { valido: false, erro: 'Máximo de 50 pessoas permitido' }
  }
  
  return { valido: true }
}

