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

