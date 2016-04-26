# **Inyector de css y js**
***
#### Este proyecto permite inyectar archivos css y js en el index y otros archivos html.

### **Requerimientos**
***
* [NodeJs](https://nodejs.org/en/)
 * [Bower](http://bower.io/)
 * [Gulp](https://www.npmjs.com/package/gulp)
  * [BrowserSync](https://www.browsersync.io/docs/gulp/)
  * [Inject](https://www.npmjs.com/package/gulp-inject)
* [Git](https://git-scm.com/)

### **Instalación del proyecto**
***
Al finalizar la clonación del proyecto, dentro de la carpeta que lo contiene, ingresar a la terminal e instalar las dependencias:
1.  `npm install` para instalar las dependencias de node
2.  `bower install` para instalar las dependencias de bower
3.  `npm install -g gulp` para instalar las dependencias gulp de manera global, permitiendo asignar los valores del documento package.json
4.  `npm install browserSync --save-dev` para instalar un plugin de Gulp
5.  `npm install gulp-inject --save-dev`para instalar un plugin de Gulp que inyecta referencias al index.html

### **Ejecución del proyecto**
***
1. `gulp injector` para inyectar los archivos css y js
2. `browser-sync start --server` para correr el proyecto en servidor local

### **Referencia**
***
* Fecha de creación: 25 Abril 2016
* Fecha de última edición: 25 Abril 2016
