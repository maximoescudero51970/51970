Analizador Sintáctico con ANTLR4 y JavaScript

 Alumno
Maximo Escudero

 Legajo
51970

---
Descripción del Proyecto

Este proyecto consiste en la construcción de un analizador léxico y sintáctico utilizando ANTLR4 con JavaScript y Node.js.

El analizador procesa un lenguaje específico orientado a acciones de backup y seguridad, permitiendo reconocer instrucciones como mover archivos, ejecutar escaneos, enviar notificaciones y retornar resultados.

Además del análisis sintáctico, el programa también interpreta algunas instrucciones generando y ejecutando código JavaScript mediante el patrón Visitor.

---

Tecnologías utilizadas

- JavaScript
- Node.js
- ANTLR4
- Visual Studio Code

---
 Funcionalidades implementadas

El proyecto realiza correctamente las siguientes tareas:

1. Análisis Léxico

Se reconocen los distintos tokens del lenguaje:

- palabras reservadas
- strings
- llaves
- saltos de línea

El programa muestra una tabla de tokens indicando:

- lexema
- tipo de token

---

 2. Análisis Sintáctico

El parser verifica que la entrada cumpla con la gramática asignada.

En caso de errores:

- informa la línea
- la columna
- el detalle del problema
- el token inválido

---

 3. Árbol de Derivación

El programa genera y muestra el árbol sintáctico de la entrada válida utilizando:

```bash
tree.toStringTree(parser.ruleNames)
```

---

4. Interpretación

Se implementó un Visitor personalizado capaz de interpretar instrucciones del lenguaje.

Ejemplos:

- mover archivos
- ejecutar escaneo profundo
- mostrar notificaciones
- retornar resultados

También se genera código JavaScript dinámicamente utilizando `eval()`.

---

 Estructura del Proyecto

Dentro de la carpeta:

```bash
proyecto Node JS
```

se encuentran:

- gramática ANTLR
- lexer generado
- parser generado
- listeners
- visitors
- archivo principal
- ejemplos válidos e inválidos

---

 Archivos de ejemplo incluidos

El repositorio contiene 4 ejemplos:

 Entradas válidas

- valido1.txt
- valido2.txt

 Entradas inválidas

- invalido1.txt
- invalido2.txt

Los archivos inválidos fueron creados para probar la detección de errores léxicos y sintácticos.

---

Requisitos

Para ejecutar el proyecto se necesita tener instalado:

- Node.js
- Java
- ANTLR4

---

Instalación

Abrir una terminal dentro de la carpeta:

```bash
proyecto Node JS
```

Instalar dependencias:

```bash
npm install
```

---

Ejecución

Ejecutar:

```bash
npm start
```

El programa leerá automáticamente el archivo:

```bash
input.txt
```

y mostrará:

- tabla de tokens
- validación sintáctica
- árbol de derivación
- interpretación del código



 Ejemplo de salida

El programa puede mostrar resultados como:

```bash
Entrada válida.

Árbol de derivación:
(dsl (accion ... ))

Ejecutando accion "backup"

Moviendo archivo a "documentos"

Proceso terminado



 Observaciones

Durante el desarrollo se realizaron pruebas con múltiples entradas válidas e inválidas para verificar el correcto funcionamiento del lexer y parser.

También se implementó manejo personalizado de errores sintácticos para mejorar la salida mostrada al usuario.

---
