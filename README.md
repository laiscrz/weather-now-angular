# 🌤️ **WeatherNow** - Aplicação de Previsão do Tempo

**WeatherNow** é um aplicativo simples e rápido para verificar a previsão do tempo para qualquer cidade ao redor do mundo. Ele utiliza a API do OpenWeather para fornecer informações precisas e atualizadas sobre o clima.

---

## 🧑‍💻 **Tecnologias Utilizadas**

- **Angular** 🚀
- **TypeScript** 🔧
- **RxJS** 📡
- **OpenWeather API** 🌍
- **Tailwind CSS** 🎨

---

## 📝 **Funcionalidades**

- 🌇 Visualização da previsão do tempo para uma cidade específica.
- 🌡️ Mostra a temperatura atual, mínima e máxima.
- 💨 Exibe a velocidade do vento.
- 🌦️ Descrição do clima (ex: céu limpo, chuvas, etc).
- 📍 Suporte para várias cidades do mundo.

---

## 📸 **Fotos da Aplicação**

### 🏠 **Página Inicial**

![Página Inicial](https://github.com/user-attachments/assets/dce6ce2a-21b6-4b6b-bf0e-ee141093bbcb)

A página inicial fornece detalhes sobre a API utilizada, a **OpenWeather API** 🌍. Aqui, o usuário pode aprender mais sobre como a aplicação busca informações climáticas em tempo real, oferecendo uma visão geral do funcionamento por trás do sistema 🌤️.

### 🌦️ **Previsão do Tempo**

![Previsão do Tempo](https://github.com/user-attachments/assets/dcefa85f-95da-4d39-bf2d-c5855f64a5d0)

Na página de previsão, o usuário encontra a **barra de pesquisa** para digitar o nome da cidade 🔍. Após a pesquisa, são exibidas informações detalhadas sobre o clima, como temperatura atual, mínima e máxima 🌡️, descrição do clima (céu limpo, chuvas, etc.) 🌧️, velocidade do vento 💨 e muito mais!

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

## 🌍 **Documentação da API**

A API consumida no projeto é a **OpenWeather API**. A documentação completa da API pode ser encontrada no seguinte link:

[Documentação da OpenWeather API](https://openweathermap.org/current) 🌐

---

## ⚠️ **Nota sobre a API Key**

Antes de rodar a aplicação, você precisará substituir a chave da API na classe `WeatherApiService` para sua própria chave da OpenWeather API.

```typescript
private apiKey = 'SUA_API_KEY_AQUI';
```

Você pode obter uma chave de API gratuita no [site da OpenWeather](https://openweathermap.org/).

---

## 📄 **Licença**

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

