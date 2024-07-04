const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
// Conectar ao banco de dados
connectDB();

app.use(bodyParser.json());
app.use('/api/', newsRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serviço rodando na porta ${PORT}`);
});
