import app from './config/app';
import sequelize from './config/database';
import Libro from './models/Libro';
import Autor from './models/Autor';

const PORT = 3000;

sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  })
})
