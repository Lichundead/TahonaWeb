# Historias de Usuario - Sistema de Gestión "Tahona"

Historias de Usuario para el sistema de gestión de inventario de la pastelería Tahona

### HU-01: Búsqueda y Filtro de Productos en Tiempo Real

- **Como:** Administrador o encargado de la panadería.
- **Quiero:** Poder escribir el nombre de un producto en un campo de búsqueda.
- **Para:** Filtrar el inventario de forma inmediata y verificar su existencia sin recorrer toda la lista manualmente.

**Criterios de Aceptación:**

- [ ] Debe existir un campo de entrada (`input`) de texto visible en la parte superior de la aplicación.
- [ ] La tabla de inventario debe actualizarse automáticamente en tiempo real a medida que el usuario escribe.
- [ ] El filtro no debe distinguir entre mayúsculas y minúsculas (debe ser _case-insensitive_).

---

### HU-02: Alerta Visual de Bajo Stock

- **Como:** Maestro panadero o jefe de compras.
- **Quiero:** Que el sistema resalte visualmente los productos que tienen pocas unidades disponibles.
- **Para:** Planificar la producción del día o realizar pedidos de materia prima antes de que se agoten por completo.

**Criterios de Aceptación:**

- [ ] Cualquier producto con un stock menor a 5 unidades debe cambiar el color de fondo de su fila a un tono de advertencia (rojo/rojo claro).
- [ ] Se debe mostrar una etiqueta o _badge_ de advertencia con el texto "Bajo Stock" junto al nombre del producto.

---

### HU-03: Actualización Rápida de Existencias

- **Como:** Empleado del mostrador de la panadería.
- **Quiero:** Poder sumar o restar unidades de stock directamente desde la tabla mediante botones independientes.
- **Para:** Registrar las ventas o la salida de productos recién horneados de forma ágil sin abrir formularios complejos.

**Criterios de Aceptación:**

- [ ] Cada fila de la tabla debe incluir dos botones de acción rápida: uno para sumar (`+`) y otro para restar (`-`).
- [ ] Cada clic debe modificar el stock de la fila correspondiente en una unidad (`+1` o `-1`).
- [ ] El stock mínimo permitido es 0; el sistema no debe permitir que las existencias pasen a valores negativos.

---

### HU-04: Validación de Formulario para Registro de Productos

- **Como:** Administrador del sistema.
- **Quiero:** Que el formulario valide los campos ingresados antes de guardar un nuevo producto en el inventario.
- **Para:** Evitar errores humanos, registros incompletos o datos incoherentes en la base de datos del negocio.

**Criterios de Aceptación:**

- [ ] El sistema debe bloquear el registro y mostrar un mensaje de error si el nombre, stock o precio están vacíos.
- [ ] No se deben permitir valores negativos ni en el stock inicial ni en el precio del producto.
- [ ] Si los datos son válidos, el producto se agrega a la lista y los campos del formulario se limpian de inmediato.

---

### HU-05: Persistencia del Inventario Local (Mock Data)

- **Como:** Usuario del sistema de gestión.
- **Quiero:** Que los cambios realizados en el inventario (altas, bajas o modificaciones) se mantengan guardados.
- **Para:** Evitar perder la información registrada si la página web se recarga por accidente o se cierra el navegador.

**Criterios de Aceptación:**

- [ ] El sistema debe inicializar el estado del inventario leyendo los datos almacenados en el `localStorage` del navegador.
- [ ] Cada vez que el arreglo de productos sufra una modificación (cambio de stock o nuevo registro), el estado debe sincronizarse automáticamente en el almacenamiento local.
