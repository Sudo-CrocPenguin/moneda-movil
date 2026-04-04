# Cyber Coin - Decide con estilo

Aplicación móvil desarrollada con Expo que permite tomar decisiones rápidas mediante una moneda virtual interactiva con estética cyberpunk.

## Instalación

Abre el siguiente enlace desde tu dispositivo Android o escanea el código QR generado por Expo:

https://expo.dev/accounts/sudo-crocpenguin/projects/moneda-movil/builds/e2d3af94-abfb-477a-b028-349e5bb713e6

## Descripción

Cyber Coin es una aplicación simple pero visualmente atractiva que ayuda a los usuarios a tomar decisiones cuando no están seguros. A través de una moneda animada, el usuario obtiene una respuesta basada en diferentes probabilidades configurables.

## Características

* Animación de moneda con efecto 3D
* Modos de probabilidad ajustables:

  * Más probable: Sí
  * Equilibrado (50/50)
  * Más probable: No
* Retroalimentación háptica al lanzar la moneda
* Mensajes dinámicos según el resultado
* Interfaz con estilo cyberpunk (colores neón y fondo degradado)
* Diseño responsive y minimalista

## Tecnologías utilizadas

* Expo
* React Native
* JavaScript
* expo-linear-gradient
* expo-haptics

## Estructura del proyecto

```
moneda-movil/
├── assets/
├── src/
│   ├── components/
│   │   └── Coin.js
│   └── screens/
│       └── HomeScreen.js
├── App.js
├── app.json
├── package.json
```

## Ejecución en entorno local

1. Instalar dependencias:

```
npm install
```

2. Iniciar el proyecto:

```
npx expo start
```

3. Ejecutar en Android:

```
npx expo start --android
```

## Notas

* La aplicación no utiliza base de datos.
* No requiere conexión a internet para funcionar.
* Está diseñada como herramienta ligera para toma de decisiones rápidas.

## Autor

Miguel Angel Blandon Montes
