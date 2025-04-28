import express from 'express';
import LibroRoutes from '../routes/libro.routes';
import { manejoError } from '../middleware/error/ManejoError';
import { validacionCrearLibro } from '../middleware/ValidacionesLibro';
import { validacionIdLibro } from '../middleware/ValidacionesLibro';

const app = express();

app.use(express.json());

app.use('/api/libro/crear', validacionCrearLibro);
app.use('/api/libro/actualizar', validacionCrearLibro, validacionIdLibro);
app.use('/api/libro/eliminar', validacionIdLibro);


// rutas
app.use('/api', LibroRoutes);

// middleware de errores
app.use(manejoError);

export default app;