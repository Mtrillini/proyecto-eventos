# proyecto-eventos

API REST para una plataforma de **cursos y workshops**: los organizadores publican cursos y los usuarios se inscriben. Proyecto de Backend II (Coderhouse).

## Temática

Cursos y workshops. Los roles previstos son:

- **admin**: gestiona usuarios, eventos e inscripciones.
- **organizer**: instructor u organización que crea y administra cursos.
- **user**: estudiante que consulta cursos y se inscribe (la entidad de inscripción será `Enrollment`).

## Estado actual

Pre-entrega 1: base arquitectónica. El servidor, las rutas y los modelos base están armados. Todavía no hay conexión a la base de datos, autenticación ni lógica de negocio.

## Tecnologías

- Node.js (18 o superior)
- Express 5
- dotenv
- Mongoose (modelos base)
- Módulos ESM (`import` / `export`)

## Instalación

```bash
git clone https://github.com/Mtrillini/proyecto-eventos.git
cd proyecto-eventos
npm install
```

## Variables de entorno

Copiá el archivo de ejemplo y completalo:

```bash
cp .env.example .env
```

En PowerShell: `Copy-Item .env.example .env`

| Variable | Descripción | Valor por defecto |
|---|---|---|
| `PORT` | Puerto del servidor | `3000` |
| `NODE_ENV` | Entorno de ejecución | `development` |
| `MONGO_URL` | URL de conexión a MongoDB Atlas | sin valor (se usa en la próxima entrega) |
| `JWT_SECRET` | Secreto para firmar tokens | sin valor (se usa en la próxima entrega) |

El archivo `.env` no se versiona.

## Cómo ejecutar

```bash
npm run dev
```

Reinicia el servidor al guardar cambios. Para ejecución normal: `npm start`.

## Arquitectura por capas

```
Request → Router → Controller → Service → Repository → DAO → Model → MongoDB
```

Cada capa tiene una sola responsabilidad. En esta entrega están implementados router, controller y model; `services/`, `repositories/`, `dao/`, `middlewares/` y `utils/` quedan preparadas para las próximas entregas.

## Estructura de carpetas

```
proyecto-eventos/
├── src/
│   ├── app.js                 # configura Express (no levanta el servidor)
│   ├── server.js              # levanta el servidor
│   ├── config/
│   │   └── config.js          # carga dotenv y expone las variables
│   ├── routes/
│   │   ├── index.js           # router principal montado en /api
│   │   ├── health.router.js
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   ├── controllers/
│   │   ├── health.controller.js
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   ├── services/
│   ├── repositories/
│   ├── dao/
│   ├── models/
│   │   ├── User.js
│   │   └── Event.js
│   ├── middlewares/
│   └── utils/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Rutas disponibles

| Método | Ruta | Descripción | Respuesta |
|---|---|---|---|
| GET | `/api/health` | Estado del servidor | `200` `{ "status": "ok", "message": "Servidor activo" }` |
| GET | `/api/events` | Lista de eventos (vacía por ahora) | `200` `{ "status": "success", "payload": [] }` |
| POST | `/api/sessions/register` | Registro de usuario | `501` no implementado |
| POST | `/api/sessions/login` | Inicio de sesión | `501` no implementado |
| GET | `/api/sessions/current` | Usuario actual | `501` no implementado |

Las rutas de `sessions` existen como estructura inicial y responden `501` hasta la entrega de autenticación.
