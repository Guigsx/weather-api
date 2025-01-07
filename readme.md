# API de Previsão do Tempo

Esta API fornece dados detalhados de previsão do tempo para diferentes localizações, incluindo informações atuais e previsões para os próximos dias. Os dados estão estruturados em formato JSON e incluem informações como temperatura, condições climáticas, umidade, velocidade do vento, entre outros.

## Exemplo de uso:
```https://weather-api-ldjg.onrender.com/clima/cidade/estado```

## Propriedade Principal: data
1. `location`: Informações sobre a localização.
2. `current`: Dados climáticos atuais.
3. `forecast`: Previsões para os próximos dias.

Detalhes das propiedades.

1. `location`

Contém informações geográficas e contextuais da localização:
- `name`: Nome da localização.
- `lat`: Latitude.
- `long`: Longitude.
- `timezone`: Fuso horário.
- `alert`: Alerta meteorológico (se houver).
- `degreetype`: Unidade de medida da temperatura (“C” para Celsius).
- `imagerelativeurl`: URL base para imagens meteorológicas.

2. `current`

Informações do clima no momento da consulta:

- `temperature`: Temperatura atual.
- `skycode`: Código representando o tipo de céu.
- `skytext`: Descrição das condições climáticas.
- `date`: Data da observação.
- `observationtime`: Hora da observação.
- `observationpoint`: Local onde foi feita a observação.
- `feelslike`: Sensação térmica.
- `humidity`: Nível de umidade.
- `winddisplay`: Velocidade e direção do vento.
- `day`: Nome do dia da semana.
- `shortday`: Abreviação do nome do dia.
- `imageUrl`: URL para uma imagem representando o clima atual.

3. `forecast`

Informações sobre as previsões diárias:

- `low`: Temperatura mínima esperada para o dia.
- `high`: Temperatura máxima esperada para o dia.
- `skycodeday`: Código representando o tipo de céu durante o dia.
- `skytextday`: Descrição das condições climáticas esperadas para o dia.
- `date`: Data da previsão.
- `day`: Nome do dia da semana (por exemplo, "Segunda-feira").
- `shortday`: Abreviação do nome do dia (por exemplo, "Seg").
- `precip`: Probabilidade de precipitação (chuva) para o dia, geralmente em porcentagem.

### Exemplo
```json
{
    "location": {
        "name": "Juazeiro, Brazil",
        "lat": "-9.433",
        "long": "-40.506",
        "timezone": "0",
        "alert": "",
        "degreetype": "C",
        "imagerelativeurl": "http://assets.msn.com/weathermapdata/1/static/weather4/en-us/"
    },
    "current": {
        "temperature": "34",
        "skycode": "30",
        "skytext": "Partly sunny",
        "date": "2025-01-07",
        "observationtime": "13:45:00",
        "observationpoint": "Juazeiro, Brazil",
        "feelslike": "39",
        "humidity": "43",
        "winddisplay": "9 km/h East",
        "day": "Tuesday",
        "shortday": "Tue",
        "windspeed": "9 km/h",
        "imageUrl": "http://assets.msn.com/weathermapdata/1/static/weather4/en-us/law/30.gif"
    },
    "forecast": [
        {
            "low": "24",
            "high": "36",
            "skycodeday": "34",
            "skytextday": "Mostly sunny",
            "date": "2025-01-07",
            "day": "Tuesday",
            "shortday": "Tue",
            "precip": "4"
        }
    ]
}
```