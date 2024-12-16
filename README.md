Reto - Senior PHP Developer

Introducción
Este proyecto es una aplicación backend desarrollada en Laravel 8+ para exponer APIs RESTful seguras y eficientes. 
La aplicación permite la autenticación mediante JWT y gestiona operaciones CRUD utilizando una base de datos SQLite.

Tecnologías Utilizadas
PHP 8+: Lenguaje de programación del backend.
Laravel 8+: Framework MVC para el desarrollo del backend.
Composer: Para la gestión de dependencias.
Firebase/PHP-JWT: Para manejar autenticación segura mediante tokens JWT.
React JS: Para el desarrollo del frontend.
Mutation y React-Query: Conexión y gestión del backend y frontend.

Estructura del Proyecto
El proyecto sigue una estructura limpia basada en el patrón MVC (Modelo-Vista-Controlador):

App: Carpeta principal con los controladores, modelos y vistas.
routes: Definición de rutas y rutas API.
config: Archivos de configuración del sistema.
database: Configuración y migraciones para la base de datos.
public: Archivos estáticos como CSS, JavaScript y demás recursos estáticos.
resources: Vistas Blade y otros recursos para personalización.
tests: Carpetas para pruebas unitarias y de integración.

Conexión Frontend - Backend
Frontend: Utilizando React JS con tecnologías como Mutation y React-Query para manejar las interacciones con el backend.
Backend: Exposición de APIs RESTful en Laravel utilizando JWT para la autenticación segura de usuarios.
