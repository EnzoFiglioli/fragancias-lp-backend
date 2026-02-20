# 📦 Fragancias LP - Backend

API backend para la gestión de un catálogo de productos de cosmética, pensada para una vendedora independiente.  
Permite administrar productos, stock y categorías, y está diseñada con buenas prácticas para ser mantenible y escalable.

El objetivo del proyecto es **simular un caso real**, priorizando código limpio, arquitectura clara y uso correcto de NestJS.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Prisma ORM** (o la DB que estés usando)
- **PostgreSQL
---

## 🏗️ Arquitectura

El proyecto utiliza una **arquitectura modular orientada a features**, siguiendo las prácticas recomendadas de NestJS.

```

src/
├── common/          # Guards, pipes, filtros y lógica transversal
├── config/          # Configuración global (env, swagger, etc.)
├── database/        # Infraestructura y acceso a datos
├── features/        # Módulos por funcionalidad (products, etc.)
└── main.ts

```

### Principios aplicados
- Separación de responsabilidades
- DTOs para validación y contratos de API
- Servicios enfocados en lógica de negocio
- Infraestructura desacoplada de la capa HTTP
- Preparado para evolucionar a arquitecturas más complejas si el dominio crece

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/EnzoFiglioli/Fragancias-LP-Backend.git
cd Fragancias-LP-Backend
````

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Crear un archivo `.env` basado en `.env.example`.

### 4️⃣ Ejecutar el proyecto

```bash
npm run start:dev
```

---

## 🧪 Tests

El proyecto incluye tests básicos para asegurar el correcto funcionamiento de los módulos principales.

```bash
npm run test
```

---

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado con fines **educativos y profesionales**, con foco en:

* Buenas prácticas de backend
* Código legible y mantenible
* Estructura clara para trabajo en equipo
* Preparación para entornos reales de producción

---

## UML
### Productos
<img src="./src/utils/docs/ProductUML.png" alt="uml-productos">

## 📌 Notas finales

* No se aplicó sobre-ingeniería innecesaria
* La arquitectura está pensada para crecer según la complejidad del negocio
* El código prioriza claridad por sobre patrones complejos

---

## 🔗 Repositorio Frontend
👉 [Ver backend](https://github.com/EnzoFiglioli/Fragancias-LP-Frontend)
