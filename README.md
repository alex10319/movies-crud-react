# Examen Técnico - Frontend (Vite + React)

Interfaz simplificada en React para evaluar candidatos a pasantes (paso de Trainee a Junior).

## Instalación Rápida

1. **Instalar las dependencias de Node:**
   ```bash
   npm install
   ```

2. **Configurar el entorno:**
   Crear un archivo .env en la raíz de esta carpeta con la URL de la API:
   ```bash
   VITE_API_URL=[http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/)
   ```

3. **Correr el Servidor de Desarrollo:**
   ```bash
   npm run dev
   ```
   Aplicación disponible localmente (por defecto en el puerto indicado por Vite, ej: http://localhost:5173).

## Estructura del Examen

* **Teoría:** Preguntas en los comentarios superiores del componente `MovieForm.jsx`.
* **Práctica (Live Coding):** Completar el envío de datos en `MovieForm.jsx` (utilizando la prop onAddMovie y limpiando el input) y aplicar estilos CSS básicos en `MovieForm.css` para el formulario.