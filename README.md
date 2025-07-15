# PROYECTO FINAL PROGRAMACION III - Alejo Petricio

## 🎮 Colección de Videojuegos

## 📋 Descripción

Esta aplicación permite gestionar una colección personal de videojuegos.
Los usuarios pueden agregar juegos, clasificarlos por genero y consola, asignarles estados como "jugando", "pendiente" o "completado", clasificarlos (1 al 10) y el tiempo jugado(horas).

Ademas de agregar juegos, los usuarios van a tener acceso a otra interfaz donde van a poder ver la lista de videojuegos que tienen, donde van a poder editar algunos datos(estado, clasificacion, tiempo jugado) o eliminar un juego de la lista.

### 🔧 Servicios del Sistema

| Servicio     | Tecnología          | Puerto | Función                 |
| ------------ | ------------------- | ------ | ----------------------- |
| **Frontend** | React 18            | 3000   | Interfaz de usuario     |
| **Backend**  | Express + Sequelize | 3001   | API REST                |
| **Database** | PostgreSQL 15       | 5432   | Base de datos principal |
| **Cache**    | Redis 7             | 6379   | Cache y sesiones        |
| **Proxy**    | Nginx               | 80     | Reverse proxy           |
| **pgAdmin**  | pgAdmin 4           | 5050   | Administración de BD    |

## 🏗️ Construcción Inicial

### 1️⃣ Preparación del Entorno

```bash
# Crear estructura de proyecto
./setup-directories.sh mi-proyecto

# Navegar al proyecto
cd mi-proyecto

# Crear archivos de configuración
cp .env.example .env
```

### 2️⃣ Configuración de Variables

```bash
# Editar .env con tus valores
nano .env
```

Contenido del archivo `.env` para desarrollo (opcional, por si surge algún problema):

```env
# ===========================================
# BASE DE DATOS POSTGRESQL
# ===========================================
POSTGRES_DB=app_database
POSTGRES_USER=app_user
POSTGRES_PASSWORD=app_password

# ===========================================
# BACKEND (EXPRESS)
# ===========================================
NODE_ENV=development
PORT=3001

# Configuración de base de datos para Sequelize
DB_HOST=database
DB_PORT=5432
DB_NAME=app_database
DB_USER=app_user
DB_PASSWORD=app_password

# JWT para autenticación
JWT_SECRET=mi_jwt_secret_super_seguro_para_desarrollo_2024

# CORS - Permitir requests desde el frontend
CORS_ORIGIN=http://localhost:3000

# ===========================================
# FRONTEND (REACT)
# ===========================================
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development

# Hot reload optimizado para Docker
CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true
FAST_REFRESH=true

# WebSocket para hot reload
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
WDS_SOCKET_PATH=/ws

# ESLint en desarrollo
ESLINT_NO_DEV_ERRORS=true
GENERATE_SOURCEMAP=true

# ===========================================
# REDIS
# ===========================================
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_URL=redis://redis:6379

# ===========================================
# PGADMIN 4
# ===========================================
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin123
PGADMIN_CONFIG_SERVER_MODE=False
PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False

# ===========================================
# CONFIGURACIÓN DE DESARROLLO
# ===========================================
DEBUG=true
LOG_LEVEL=debug
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10MB

# Email para desarrollo (Mailtrap)
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=tu_usuario_mailtrap
EMAIL_PASS=tu_password_mailtrap
EMAIL_FROM=noreply@tuapp.com

# ===========================================
# SEGURIDAD (DESARROLLO)
# ===========================================
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
SESSION_SECRET=mi_session_secret_para_desarrollo
COOKIE_SECURE=false
COOKIE_HTTP_ONLY=true
COOKIE_SAME_SITE=lax
```

### 3️⃣ Primera Construcción

```bash
# Construir todas las imágenes
docker-compose build

# Inicializar base de datos y servicios
docker-compose up -d
```

---

## 🚀 Ejecución del Sistema

### Comandos Principales

```bash
# Iniciar todos los servicios
docker-compose up

# Iniciar en background
docker-compose up -d

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend

# Detener servicios
docker-compose down

# Detener y limpiar volúmenes
docker-compose down -v
```

### URLs de Acceso

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001/api
- **Health Check:** http://localhost:3001/health
- **Nginx Proxy:** http://localhost
- **pgAdmin 4:** http://localhost:5050
- **Base de datos:** localhost:5432

## 📚 Estructura de Archivos Importantes

```
proyecto/
├── docker-compose.yml          # Orquestación de servicios
├── .env                        # Variables de entorno
├── .env.example               # Plantilla de variables
├── .gitignore                 # Archivos a ignorar en Git
├── README.md                  # Documentación del proyecto
│
├── frontend/
│   ├── Dockerfile.dev         # Imagen Docker para desarrollo
│   ├── package.json           # Dependencies de React
│   ├── public/
│   │   ├── index.html         # Página HTML principal
│   └── src/
│       ├── App.js             # Componente principal
│       ├── index.js           # Punto de entrada
│       ├── components/        # Componentes reutilizables
│       ├── pages/             # Páginas de la aplicación
│       ├── assets/            # Imagenes o iconos
│       └── styles/            # Estilos css
│
├── backend/
│   ├── Dockerfile.dev         # Imagen Docker para desarrollo
│   ├── package.json           # Dependencies de Express
│   ├── server.js              # Servidor principal
│   ├── config/
│   │   └── database.js        # Configuración de Sequelize
│   ├── models/
│   │   └── index.js           # Modelos de Sequelize
│   ├── controllers/           # Lógica de negocio
│   ├── routes/                # Rutas del API
│   │   └── index.js           # Rutas principales
│   ├── middleware/            # Middlewares personalizados
│   ├── migrations/            # Migraciones de BD
│   └── seeders/               # Datos de prueba
│
├── database/
│   └── init.sql               # Script de inicialización
│
├── nginx/
│   └── nginx.conf             # Configuración del proxy
│
├── pgadmin/
│   ├── servers.json           # Configuración de servidores
│   └── pgpass                 # Credenciales de BD
│
└── scripts/
    └── setup-directories.sh   # Script de inicialización
```
