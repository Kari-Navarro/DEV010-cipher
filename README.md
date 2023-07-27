# Generador de contraseñas cifrado Cesar


# Introducción

En el generador se podrán crear contraseñas seguras para proteger tus cuentas basadas en el método del cifrado Cesar. Produce una contraseña y elige el número de desplazamientos para obtener el código. Funciona también para descifrar las contraseñas, por lo que podrás recordar la palabra clave que usaste previamente.

# Creación de la página web
Como parte del primer proyecto, esta página web se generó para cifrar y descifrar textos utilizando un desplazamiento (offset) con el objetivo de obtener contraseñas seguras para diferentes cuentas digitales.

El primer paso fue desarrollar la parte de HTML con un boceto que orientara el diseño de la aplicación y, a grandes rasgos, la funcionalidad. 

Se colocaron las instrucciones en index.html, un input número para colocar el desplazamiento, dos áreas de texto y tres botones (codificar, descodificar, limpiar). 

Una vez realizado el diseño, en la parte de JavaScript se generaron dos módulos, en el primero (index.js) se colocaron los efectos del DOM y en el segundo (cipher.js) el objeto cipher encargado de codificar y decodificar.

Para crear el algoritmo de cifrado se empleó el código ASCII y, con sus valores, se elaboró la función con letras mayúsculas, arrojando un TypeError para signos (!"#$%&/()=?¡<>), letras minúsculas y números de desplazamiento igual a cero o nulo.

El desplazamiento funciona hasta el número 50 y en el primero caja se ingresa el abecedario tradicional y en la caja inferior el abecedario con el desplazamiento indicado.

El diseño empleado fue lo más minimalista posible para enfocar la atención de la usuaria en las cajas de texto y los colores obscuros fueron elegidos para darle confidencialidad y discreción.

# Autor
Karina Navarro (New born developer)