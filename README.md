# 📚 Librería Universidad

¡Hola! Soy **Julián** 👋.\
Este proyecto fue una gran oportunidad para reforzar buenas prácticas de desarrollo y disfrutar el proceso.

---

## 🛠️ Reglas del Proyecto

- Un estudiante puede hacer **varios préstamos** de **diferentes libros**.

- Un estudiante **no puede** pedir prestados libros que **no estén disponibles**.

- **No** es necesario validar si una copia específica ya está prestada.

  > Ejemplo: Si tengo 10 copias de *La Guerra de los Mundos* y 4 están prestadas, aún tengo 6 disponibles, por lo que no es necesario comprobar individualmente cada copia.

- El **nombre de cada libro** debe ser **único** en la base de datos ✅.

- El **nombre de cada autor** también debe ser **único** ✅.

- La **cantidad de copias disponibles** debe ser **un número positivo** ✅.

---

## 🧩 Requisitos para probar los endpoints

- Instalar la extensión **Thunder Client** en VSCode para realizar pruebas de API fácilmente.

---

## 🔥 Endpoints Disponibles

### ➡️ Crear Libro

- **Método**: `POST`
- **URL**: `https://localhost:3000/api/libro/crear`
- **JSON esperado**:

```json
{
    "id": number,              // Opcional, puede ser null (es autoincremental)
    "nombre": "string",         // Obligatorio, debe ser único
    "autor": number,            // Obligatorio, debe existir el ID en la tabla Autor
    "copiasDisponibles": number // Obligatorio, debe ser mayor a 0
}
```

---

### ✏️ Actualizar Libro

- **Método**: `POST`
- **URL**: `https://localhost:3000/api/libro/actualizar`
- **JSON esperado**:

```json
{
    "id": number,               // Obligatorio, debe existir en la BD
    "nombre": "string",          // Obligatorio, debe ser único
    "autor": number,             // Obligatorio, debe existir el ID del autor
    "copiasDisponibles": number  // Obligatorio, debe ser mayor a 0
}
```

---

### 🗑️ Eliminar Libro

- **Método**: `DELETE`
- **URL**: `https://localhost:3000/api/libro/eliminar`
- **JSON esperado**:

```json
{
    "id": number // Obligatorio, debe existir y ser un número válido
}
```

---

## 🚀 Notas Finales

- Agradezco el tiempo que dediques a revisar y probar este proyecto.
- ¡Cualquier sugerencia o mejora siempre es bienvenida! 😄

