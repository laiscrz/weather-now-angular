# 🌤️ **WeatherNow** - Aplicação de Previsão do Tempo

**WeatherNow** é um aplicativo simples e rápido para verificar a previsão do tempo para qualquer cidade ao redor do mundo. Ele utiliza a API do OpenWeather para fornecer informações precisas e atualizadas sobre o clima.

---

## 🧑‍💻 **Tecnologias Utilizadas**

- **Angular** 🚀
- **TypeScript** 🔧
- **RxJS** 📡
- **OpenWeather API** 🌍

---

## 📝 **Funcionalidades**

- 🌇 Visualização da previsão do tempo para uma cidade específica.
- 🌡️ Mostra a temperatura atual, mínima e máxima.
- 💨 Exibe a velocidade do vento.
- 🌦️ Descrição do clima (ex: céu limpo, chuvas, etc).
- 📍 Suporte para várias cidades do mundo.

---

## ⚙️ **Instalação**

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/laiscrz/weather-now-angular.git
   ```

2. **Instale as dependências:**

   ```bash
   cd WeatherNow
   npm install
   ```

3. **Execute o aplicativo:**

   ```bash
   ng serve
   ```

   Acesse a aplicação em: `http://localhost:4200/`

---

## 🌍 **Como Usar**

1. Abra o aplicativo.
2. Digite o nome de uma cidade na barra de pesquisa.
3. Veja as informações sobre o clima na tela!

---

## 🧪 **Testes**

Os testes foram implementados no serviço de consulta à API. Eles são executados com o Karma e Jasmine. Para rodá-los:

```bash
ng test
```

Para rodar os testes específicos do serviço `weather-api.service`:

```bash
ng test --include "src/app/services/weather-api.service.spec.ts"
```

---

## 📄 **Licença**

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
