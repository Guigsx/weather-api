"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_js_1 = __importDefault(require("weather-js"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo á weather-api' });
});
app.get('/clima/:city/:state?', (req, res) => {
    const city = req.params.city;
    const state = req.params.state || '';
    weather_js_1.default.find({ search: `${city}, ${state}`, degreeType: 'C' }, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json({ data: result });
    });
});
app.listen(port, () => {
    console.log(`API rodando.`);
});
