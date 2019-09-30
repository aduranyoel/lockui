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
## Uso

### Simple

```javascript
// Bloquear Interfaz de Usuario
lockUI();

// Desbloquear Interfaz de Usuario
unlockUI();
```


## Opciones
Puedes establecer algunas opciones cuando llamas la función lockUI().

Param | Type | Default | Details
------------ | ------------- | ------------- | -------------
text | `string` | Procesando... | El texto a mostrar. 
selector | `string` | <body> body del documento | Elemento a bloquear.

### Ejemplos
```javascript
lockUI(); // Para bloquear toda la página
lockUI({ text: 'Custom text' }); // Bloquear con un texto personalizado
lockUI({ selector: '.class-name' }); // Bloquear un cierto componente
lockUI({ selector: '.component', text: 'Getting there...' }) // Usando ambas opciones a la vez. 
unlockUI(); // Desbloquear la interfaz de usuario
```

## Licence
LockUI está bajo [MIT licence](https://opensource.org/licenses/mit-license.php)
