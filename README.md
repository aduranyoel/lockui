# LockUI
Plugin para bloquear la interfaz de usuario con Javascript puro,
sin utilizar jQuery.
Basado en [BlockUI](https://github.com/malsup/blockui) y [FreezeUI](https://github.com/alexradulescu/FreezeUI)
## Instalación

```html
<html>
  <body>
    ...
    <script src="/path/to/lockui.js" type="text/javascript"></script>
  </body>
</html>
```
O importar como modulo
```js
import UI from 'lockui';
```
## Uso

### Simple

```javascript
// Bloquear Interfaz de Usuario
UI.lock();

// Desbloquear Interfaz de Usuario
UI.unlock();
```


## Opciones
Puedes establecer algunas opciones cuando llamas la función `UI.lock()`

Param | Type | Default | Details
------------ | ------------- | ------------- | -------------
text | `string` | Procesando... | El texto a mostrar. 
selector | `string` | <body> body del documento | Elemento a bloquear.

### Ejemplos
```javascript
UI.lock(); // Para bloquear toda la página
UI.lock({ text: 'Custom text' }); // Bloquear con un texto personalizado
UI.lock({ selector: '#component' }); // Bloquear un cierto componente
UI.lock({ selector: '.component', text: 'Getting there...' }) // Usando ambas opciones a la vez. 
UI.unlock(); // Desbloquear la interfaz de usuario
```

## Licence
LockUI está bajo [MIT licence](https://opensource.org/licenses/mit-license.php)
