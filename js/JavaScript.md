# Criterios de Evaluación
## Identificación y clasificación de los lenguajes de script
### Explicación clara y detallada de la clasificación de los lenguajes de script.
- Los lenguajes de script de cliente son aquellos que se ejecutan directamente en el navegador, sin necesidad de interacción con el servidor. Se utilizan para mejorar la interactividad, dinamismo y experiencia de usuario en páginas web.

- Clasificación de los Lenguajes de Script:
    - Lenguajes de script nativos del navegador:
        - `JavaScript`
        - `WebAssembly` (WASM)
    - Lenguajes que transpilan a JavaScript:
        - `TypeScript`
        - `Dart`
        
### Identificación de ECMAScript y sus versiones relevantes.
- `ECMAScript` es el estándar que define cómo funciona `JavaScript`. Fue creado en 1997 para estandarizar el comportamiento del lenguaje y garantizar su compatibilidad entre navegadores. `JavaScript` sigue este estándar, lo que significa que cada nueva versión introduce mejoras y nuevas características que son adoptadas por los navegadores.

| **Versión** | **Año**  | **Características Claves** |
|------------|---------|---------------------------|
| **ES3**    | 1999    | Primera versión ampliamente soportada. Introdujo `try/catch` y la manipulación del DOM. |
| **ES5**    | 2009    | `strict mode`, `JSON.parse()`, `JSON.stringify()`, nuevos métodos para arrays (`map`, `filter`, `forEach`). |
| **ES6** | 2015 | `let` y `const`, **arrow functions**, `class`, template literals, **destructuring**, `import/export` para módulos. |
| **ES7** | 2016 | `Array.prototype.includes()`, operador de exponenciación (`**`). |
| **ES8** | 2017 | `async/await`, `Object.entries()`, `Object.values()`. |
| **ES9** | 2018 | Operador rest/spread (`...` en objetos), `Promise.prototype.finally()`, mejoras en expresiones regulares. |
| **ES10** | 2019 | `Array.prototype.flat()`, `Object.fromEntries()`, mejoras en `JSON.parse()`. |
| **ES11** | 2020 | `BigInt`, `optional chaining (?.)`, `nullish coalescing operator (??)`, `Promise.allSettled()`. |
| **ES12** | 2021 | Métodos `String.prototype.replaceAll()`, `Promise.any()`, separadores numéricos (`_`). |

### Comparación entre lenguajes de script como JavaScript, TypeScript u otros.
| **Lenguaje**   | **Características Principales** | **Ventajas** | **Desventajas** |
|--------------|----------------------------|------------------|------------------|
| **JavaScript** | Lenguaje de scripting estándar basado en `ECMAScript`. Compatible con todos los navegadores. | Versátil, ampliamente soportado, sin necesidad de compilación. | No tiene tipado estático, lo que puede generar errores en tiempo de ejecución. |
| **TypeScript** | Superset de `JavaScript` con tipado estático y características avanzadas. Se compila a `JavaScript`. | Código más seguro y mantenible, compatible con ES6+. | Requiere compilación antes de ejecutarse. Puede ser más complejo para proyectos pequeños. |
| **Dart** | Lenguaje optimizado para aplicaciones web y móviles con Flutter. Soporta programación orientada a objetos. | Mejor rendimiento que JS en ciertos escenarios. Compatible con desarrollo móvil y web. | No está nativamente soportado por los navegadores, necesita transpilarse a `JavaScript`. |

### Uso de ejemplos o referencias para justificar la clasificación.
`JavaScript`:

    function saludar(nombre) {
    return `Hola, ${nombre || "jesus"}!`;
    }
    console.log(saludar()); // "Hola, jesus!"

`TypeScript`:

    function saludar(nombre: string = "jesus"): string {
    return `Hola, ${nombre}!`;
    }
    console.log(saludar()); // "Hola, jesus!"

`Dart`:

    String saludar([String nombre = "jesus"]) {
    return "Hola, $nombre!";
    }
    void main() {
    print(saludar()); // "Hola, jesus!"
    }

## Se ha identificado la sintaxis básica de los lenguajes de script de cliente.
### Uso adecuado de let y const en lugar de var.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L3

https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L5

https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L22

### Aplicación correcta de arrow functions y template literals.

### Uso de destructuring y spread/rest operators cuando sea necesario.

### Código bien estructurado, indentado y comentado.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L1-L80

## Se han utilizado métodos para la selección y acceso de los diferentes elementos de un documento web.
### Uso adecuado de querySelector y querySelectorAll.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L3

https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L5

https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L22

### Justificación del uso de diferentes métodos según el contexto.
- Aquí estoy seleccionado únicamente el contenedor sin all ya que voy a añadir un producto.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L3

- Aquí selecciono todos los elementos del carrito, y entre ellos, elimino el que tenga el 0 como índice.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L5

### Código organizado y funcional.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L1-L80

## Se han creado y modificado elementos de documentos web.
### Uso adecuado de createElement, appendChild y removeChild para manejar elementos dinámicamente.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L5

https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L15

### Aplicación de textContent o innerHTML de manera segura.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L44

https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L8

### Organización clara del código y mantenimiento de una estructura jerárquica lógica.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L1-L80

### Inclusión de comentarios explicativos cuando sea necesario.
No están en el código, pero si en [Archivo con comentarios](./SCRIPT.md), que es el archivo explicativo.

## Se han eliminado elementos de documentos web.
### Uso correcto de removeChild y remove para eliminar elementos dinámicamente.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L25

### Gestión eficiente del DOM para evitar errores al eliminar elementos.

### Verificación de la existencia de elementos antes de intentar eliminarlos.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L24

### Código estructurado y organizado con comentarios aclaratorios cuando sea necesario.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L1-L80

## Se han realizado modificaciones sobre los estilos de un documento web.
### Uso adecuado de classList.add, classList.remove y classList.toggle en lugar de modificar estilos directamente.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L6

### Aplicación eficiente de style.property solo cuando sea necesario.
https://github.com/jesuuslopeez/2425-t2-lenguaje-de-marcas/blob/22ee9da61bd6832d58eeee04674a52b41f187d5e/js/script.js#L34

### Organización del código con separación entre lógica y presentación.

### Uso de eventos para modificar estilos dinámicamente según la interacción del usuario.


