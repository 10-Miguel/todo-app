Aplicación web simple construida con React para la gestión de tareas (Todo List). El proyecto implementa rutas, formularios controlados y consumo de una API REST simulada usando `json-server`.

---

Funcionalidades
Se han cubierto todos los requisitos principales de la actividad:

Rutas: Navegación entre la página de Inicio (`/`), la Lista de Tareas (`/todos`), y el formulario de Registro (`/add`).
Crud:
_Get Listado de tareas desde la API.
_ Post Creación de nuevas tareas mediante formulario. \* Delete Eliminación de tareas.

Formularios Uso de `useState` para el control de formularios y validación básica.
Implementación de `useEffect`, estados de carga (`loading`), y manejo de errores (`try/catch`) en las peticiones.

---

Ejecución:

Para probar el proyecto en tu máquina local, debes iniciar dos servidores.

Asegúrate de tener todas las dependencias instaladas:
git bash
npm install

Verifica que tu archivo `db.json` esté en la raíz del proyecto.

Iniciar api

Abre la Terminal y ejecuta el script del servidor:

npm run server

Para acceder a la página

npm start
