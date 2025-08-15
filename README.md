# Simulador de Planos de Saúde

Um simulador completo para comparação de planos de saúde com funcionalidades de orçamento e comparação detalhada.

## 🚀 Funcionalidades

- **Simulação de Orçamentos**: Compare preços de diferentes planos de saúde
- **Filtros por Faixa Etária**: Calcule preços baseados na idade dos beneficiários
- **Tipos de Plano**: Individual, Familiar e Empresarial
- **Comparação Detalhada**: Veja informações completas de cada plano
- **Interface Responsiva**: Funciona em desktop e mobile
- **Dados Reais**: Baseado em tabelas de preços reais das operadoras

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **JavaScript** - Linguagem de programação

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/) (recomendado)

## 🔧 Instalação

1. **Clone ou baixe o projeto**
   ```bash
   # Se você tem o arquivo ZIP, extraia-o
   # Se você tem acesso ao repositório:
   git clone <url-do-repositorio>
   cd simulador-planos-saude
   ```

2. **Instale as dependências**
   ```bash
   # Com npm
   npm install
   
   # Ou com pnpm (recomendado)
   pnpm install
   ```

## 🚀 Como Executar

### Modo Desenvolvimento

```bash
# Com npm
npm run dev

# Ou com pnpm
pnpm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

### Build para Produção

```bash
# Com npm
npm run build

# Ou com pnpm
pnpm run build
```

### Preview da Build de Produção

```bash
# Com npm
npm run preview

# Ou com pnpm
pnpm run preview
```

## 📁 Estrutura do Projeto

```
simulador-planos-saude/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Assets estáticos (dados, imagens)
│   │   └── planos_data.json
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes UI (shadcn/ui)
│   │   ├── SimuladorForm.jsx
│   │   ├── ResultadosTable.jsx
│   │   └── InfoSection.jsx
│   ├── utils/            # Utilitários
│   │   └── calculator.js
│   ├── App.jsx           # Componente principal
│   ├── App.css          # Estilos principais
│   └── main.jsx         # Ponto de entrada
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind
├── vite.config.js       # Configuração do Vite
└── README.md           # Este arquivo
```

## 💡 Como Usar

1. **Preencha seus dados**:
   - Digite seu primeiro nome
   - Informe o número de pessoas por faixa etária

2. **Escolha o tipo de plano**:
   - **Individual**: Para pessoa física sem CNPJ
   - **Familiar**: Para família sem CNPJ
   - **Empresarial**: Para empresas com CNPJ

3. **Veja os resultados**:
   - Os planos são ordenados por preço (menor para maior)
   - Clique em "Detalhes" para ver informações completas
   - Compare vantagens, desvantagens e informações de contato

## 📊 Dados dos Planos

O simulador inclui dados de 11 operadoras e administradoras:

- **Operadoras**: Unimed, CASU, UNIMED regionais
- **Administradoras**: Qualicorp, Benevix, Elo, Servix, Allcare, Extramed

Cada plano inclui:
- Preços por faixa etária
- Tipo de cobertura (Nacional/Regional)
- Tamanho da rede credenciada
- Serviços inclusos
- Avaliações e contatos

## 🎨 Personalização

### Modificar Dados dos Planos

Edite o arquivo `src/assets/planos_data.json` para:
- Adicionar novos planos
- Atualizar preços
- Modificar informações das operadoras

### Alterar Estilos

- **Cores**: Modifique as variáveis CSS em `src/App.css`
- **Componentes**: Personalize os componentes em `src/components/`
- **Layout**: Ajuste o layout principal em `src/App.jsx`

## 🐛 Solução de Problemas

### Erro de Dependências
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Porta em Uso
```bash
# Execute em uma porta diferente
npm run dev -- --port 3000
```

### Build Falha
```bash
# Verifique se todas as dependências estão instaladas
npm install
npm run build
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se seguiu todos os passos de instalação
2. Consulte a seção de solução de problemas
3. Verifique se sua versão do Node.js é compatível (18+)

---

**Desenvolvido com ❤️ para facilitar a comparação de planos de saúde**

