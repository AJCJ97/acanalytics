---
title: "Nombre del proyecto"
description: "Descripción corta del proyecto."
date: "2024-01-01"
pubDate: "2024-01-01"
heroImage: import("./images/blog-placeholder-4.jpg")
---


# 🏋️‍♂️ Gym Admin Database  
### _Relational SQL database for multi-location gym operations_

---

## 🎯 Objetivo del Proyecto

El propósito de este proyecto es crear una base de datos **escalable**, **bien normalizada** y **fácil de consultar**, que permita administrar las operaciones completas de un gimnasio con varias sucursales.

Incluye módulos para:

- Gestión de miembros  
- Membresías y pagos  
- Clases e instructores  
- Equipos y sucursales  
- Reportes financieros y operativos  

---

## 🧩 Características Principales

### ✔️ Multi-sucursal  
Cada sucursal mantiene miembros, pagos, staff y clases, todo vinculado a una base central.

### ✔️ Gestión de miembros  
Historial completo, membresías activas, renovación, actividad y estados.

### ✔️ Gestión de clases  
Horarios, instructores asignados, cupos, asistencia y reservas.

### ✔️ Finanzas  
Pagos, facturación y reportes automatizados por sucursal o globales.

---

## 🏗️ Arquitectura de la Base de Datos

### **Tablas principales**

| Tabla         | Descripción |
|---------------|-------------|
| **members**   | Registra miembros y sus datos personales. |
| **memberships** | Tipos de membresías, duración y precios. |
| **payments**  | Transacciones e ingresos. |
| **branches**  | Sucursales del gimnasio. |
| **staff**     | Entrenadores y personal administrativo. |
| **classes**   | Clases disponibles y sus horarios. |
| **attendance** | Registros de asistencia por clase. |

### **Buenas prácticas utilizadas**

- Modelado en 3FN  
- Llaves primarias y foráneas  
- Relaciones 1:N y N:M  
- Integridad referencial  
- Indexación en columnas críticas  

---

## 🗂️ Consultas SQL de Ejemplo

### 💰 Ingresos totales por sucursal

```sql
SELECT 
  b.branch_name, 
  SUM(p.amount) AS total_revenue
FROM payments p
JOIN branches b ON p.branch_id = b.id
GROUP BY b.branch_name
ORDER BY total_revenue DESC;