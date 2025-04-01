# Consulta FIPE

Interface web para consulta de preços de veículos utilizando a API FIPE (Fundação Instituto de Pesquisas Econômicas).

## Funcionalidades

- Consulta de preços de veículos
- Seleção dinâmica de:
  - Tipo de veículo (carro, moto, caminhão)
  - Marca
  - Modelo
  - Ano
- Exibição detalhada:
  - Preço médio
  - Código FIPE
  - Tipo de combustível
  - Mês/ano de referência
- Interface responsiva
- Histórico de consultas
- Exportação de resultados

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- API FIPE
- LocalStorage para histórico
- Chart.js para gráficos

## Funcionalidades Detalhadas

### Consulta em Tempo Real
- Busca instantânea
- Validação de dados
- Cache de resultados
- Histórico de pesquisas

### Comparação de Preços
- Gráficos de variação
- Histórico de valores
- Tendências de mercado

### Exportação
- Formato CSV
- Relatório em PDF
- Compartilhamento direto

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Dagon67/api-fipe.git
cd api-fipe
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local:
```bash
# Usando Python
python -m http.server 8000

# Ou usando Node.js
npx serve
```

## Estrutura do Projeto

```
api-fipe/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── api.js
│   └── utils.js
├── assets/
│   └── img/
└── README.md
```

## Informações da API

### Endpoints Principais

1. Marcas:
```
https://parallelum.com.br/fipe/api/v1/{tipo}/marcas
```

2. Modelos:
```
https://parallelum.com.br/fipe/api/v1/{tipo}/marcas/{marca}/modelos
```

3. Anos:
```
https://parallelum.com.br/fipe/api/v1/{tipo}/marcas/{marca}/modelos/{modelo}/anos
```

4. Valor:
```
https://parallelum.com.br/fipe/api/v1/{tipo}/marcas/{marca}/modelos/{modelo}/anos/{ano}
```

## Personalização

### Estilos
Modifique `css/style.css` para personalizar a aparência:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
}
```

### Configurações
Ajuste parâmetros em `js/config.js`:
```javascript
const config = {
  cacheTimeout: 3600,
  maxHistory: 50,
  autoRefresh: true
};
```

## Recursos Adicionais

- [x] Exportação para CSV
- [x] Gráficos de variação de preço
- [x] Histórico de consultas
- [x] Comparação de veículos
- [x] Favoritos
- [x] Notificação de alterações

## Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## Contato

Seu Nome - [@Dagon67](https://github.com/Dagon67)

Link do Projeto: [https://github.com/Dagon67/api-fipe](https://github.com/Dagon67/api-fipe)
