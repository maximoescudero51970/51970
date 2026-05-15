# Analizador Sintáctico con ANTLR4 y JavaScript

## Alumno
Maximo Escudero

## Legajo
51970

---

# Descripción General

Este proyecto fue desarrollado utilizando ANTLR4, JavaScript y Node.js con el objetivo de construir un analizador léxico y sintáctico capaz de reconocer un pequeño lenguaje orientado a tareas de backup y seguridad.

La idea principal fue crear una DSL (Domain Specific Language) simple pero funcional, permitiendo interpretar acciones relacionadas con mover archivos, ejecutar escaneos, mostrar notificaciones y retornar resultados.

Durante el desarrollo se trabajó con:

- generación automática de Lexer y Parser usando ANTLR4
- análisis léxico
- análisis sintáctico
- manejo de errores personalizados
- Visitors
- interpretación de instrucciones
- generación dinámica de código JavaScript

También se realizaron múltiples pruebas con entradas válidas e inválidas para verificar el correcto funcionamiento del analizador.

---

# Tecnologías Utilizadas

Las herramientas utilizadas durante el desarrollo fueron:

- JavaScript
- Node.js
- ANTLR4
- Visual Studio Code
- GitHub

---

# Objetivo del Proyecto

El objetivo principal del trabajo fue implementar un analizador capaz de:

- reconocer tokens
- validar estructuras sintácticas
- detectar errores
- generar árbol de derivación
- interpretar instrucciones del lenguaje

Además, se buscó que el programa pudiera mostrar mensajes de error claros indicando:

- línea
- columna
- token inválido
- descripción del problema detectado

---

# Estructura del Proyecto

Dentro del repositorio se encuentra la carpeta:

```bash
proyecto Node JS
```

Dentro de esa carpeta se encuentran todos los archivos del proyecto:

- gramática ANTLR
- lexer generado
- parser generado
- listeners
- visitors
- index principal
- archivos de entrada
- ejemplos válidos
- ejemplos inválidos

---

# Funcionamiento General

El programa toma una entrada desde el archivo:

```bash
input.txt
```

A partir de esa entrada realiza:

## 1. Análisis Léxico

Se reconocen los distintos tokens definidos en la gramática.

Ejemplo:

- palabras reservadas
- strings
- llaves
- saltos de línea

Luego se imprime una tabla de tokens indicando:

- lexema
- tipo de token

---

## 2. Análisis Sintáctico

El parser verifica si la entrada cumple correctamente con la gramática definida.

Si la entrada es válida:

- genera el árbol de derivación
- ejecuta el visitor

Si la entrada es inválida:

- informa errores sintácticos
- indica línea y columna
- muestra el token problemático

---

## 3. Visitor Personalizado

Se implementó un Visitor personalizado capaz de interpretar instrucciones del lenguaje.

Por ejemplo:

```txt
accion "backup" {

moverArchivo "documentos"

usarEscaneoProfundo

notificar "Proceso terminado"

retornar "OK"

}
```

El Visitor interpreta las instrucciones y genera comportamiento dinámico utilizando JavaScript.

---

# Manejo de Errores

Uno de los puntos trabajados durante el desarrollo fue el manejo de errores sintácticos.

Cuando ocurre un error el programa muestra información como:

```bash
Error sintáctico en línea 2, columna 13
Detalle: missing STRING
Token inválido: documentos
```

Esto permite identificar rápidamente dónde se encuentra el problema dentro de la entrada.

---

# Ejemplos Incluidos

El proyecto contiene ejemplos válidos e inválidos para realizar pruebas.

## Entradas válidas

- valido1.txt
- valido2.txt

## Entradas inválidas

- invalido1.txt
- invalido2.txt

Los archivos inválidos fueron creados intencionalmente para probar el reconocimiento de errores léxicos y sintácticos.

---

# Requisitos Previos

Antes de ejecutar el proyecto es necesario tener instalado:

## Node.js

Descarga:

https://nodejs.org/

---

## Java

ANTLR4 requiere Java para funcionar correctamente.

---

## Visual Studio Code

Editor utilizado durante el desarrollo.

---

# Instalación y Ejecución Paso a Paso

## Paso 1 — Descargar el repositorio

Clonar el repositorio utilizando Git:

```bash
git clone https://github.com/maximoescudero51970/51970.git
```

También puede descargarse manualmente desde GitHub utilizando:

```bash
Code -> Download ZIP
```

---

## Paso 2 — Abrir el proyecto

Abrir Visual Studio Code.

Luego seleccionar:

```bash
Archivo -> Abrir Carpeta
```

y abrir la carpeta:

```bash
proyecto Node JS
```

---

## Paso 3 — Abrir una terminal

Dentro de Visual Studio Code abrir una terminal desde:

```bash
Terminal -> New Terminal
```

La terminal debería quedar posicionada dentro de:

```bash
proyecto Node JS
```

---

## Paso 4 — Instalar dependencias

Ejecutar:

```bash
npm install
```

Esto instalará automáticamente todas las dependencias necesarias del proyecto.

---

## Paso 5 — Preparar una entrada

Abrir el archivo:

```bash
input.txt
```

y escribir una entrada válida o inválida.

Ejemplo válido:

```txt
accion "backup" {

moverArchivo "documentos"

usarEscaneoProfundo

notificar "Proceso terminado"

retornar "OK"

}
```

---

## Paso 6 — Ejecutar el programa

Ejecutar en terminal:

```bash
npm start
```

---

## Paso 7 — Resultado esperado

Al ejecutar el programa se mostrará:

- tabla de tokens
- validación sintáctica
- árbol de derivación
- errores sintácticos si existen
- ejecución del visitor

---

# Ejemplo Real de Salida

```bash
TABLA DE TOKENS

Token: accion | Tipo: ACC
Token: "backup" | Tipo: STRING
Token: moverArchivo | Tipo: MOVER

Entrada válida.

Árbol de derivación:
(dsl (accion ... ))

Ejecutando accion "backup"

Moviendo archivo a "documentos"

Proceso terminado
```

---

# Consideraciones Finales

Durante el desarrollo se realizaron varias pruebas para validar:

- reconocimiento de tokens
- detección de errores
- generación correcta del árbol sintáctico
- funcionamiento del visitor

El proyecto fue desarrollado completamente utilizando Visual Studio Code junto con Node.js y ANTLR4.

También se trabajó en mejorar la salida de errores para que el programa indique claramente dónde ocurre cada problema dentro de la entrada analizada.

---
