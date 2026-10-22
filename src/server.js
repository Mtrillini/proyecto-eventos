import { env } from './config/config.js';
import app from './app.js';

app.listen(env.PORT, () => {
  console.log(`Servidor activo en el puerto ${env.PORT}`);
});