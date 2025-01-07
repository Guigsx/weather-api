import express from 'express'
import weather from 'weather-js'

const app = express()
const port = 5000

app.get('/', (req: any, res: any) => {
    res.json({ message: 'Bem-vindo á weather-api' })
})

app.get('/clima/:city/:state', (req: any, res: any) => {
    const city: string = req.params.city
    const state: string = req.params.state || ''

    weather.find({ search: `${city}, ${state}`, degreeType: 'C' }, (err: any, result: any) => {
        if (err) {
            console.log(err)
        }
        res.json({ data: result })
    })
})

app.listen(port, () => {
    console.log(`API rodando.`)
})