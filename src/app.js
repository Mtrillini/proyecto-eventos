import express from 'express'

//config la aplicacion
const app = express()
//aplico json
app.use( express.json() )

app.get('/api/health', (req, res) =>{

    res.status(200).json({status:"ok", message:"Servidor activo desde Controller"});

})

export default app;