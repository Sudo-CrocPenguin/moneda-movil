<div align="center">

```
 ██████╗██╗   ██╗██████╗ ███████╗██████╗      ██████╗ ██████╗ ██╗███╗   ██╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ██╔════╝██╔═══██╗██║████╗  ██║
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ██║     ██║   ██║██║██╔██╗ ██║
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ██║     ██║   ██║██║██║╚██╗██║
╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ╚██████╗╚██████╔╝██║██║ ╚████║
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝
```

### _Decide con estilo. En el futuro, la duda no existe._

[![Expo](https://img.shields.io/badge/Expo-SDK_51-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-0.74-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Platform](https://img.shields.io/badge/Platform-Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](https://www.android.com)

</div>

---

## ⚡ Instalación instantánea

> Sin claves. Sin configuración. Un tap y listo.

**Desde tu dispositivo Android**, abre este enlace o escanea el QR en Expo Go:

```
https://expo.dev/accounts/sudo-crocpenguin/projects/moneda-movil/builds/e2d3af94-abfb-477a-b028-349e5bb713e6
```

> **Requisito:** tener instalada la app [Expo Go](https://expo.dev/client) en tu dispositivo Android.

---

## ¿Qué es Cyber Coin?

**Cyber Coin** es una moneda virtual con alma cyberpunk. Cuando la duda te paraliza —¿salgo o no salgo?, ¿lo hago o lo dejo?— lánzala. La moneda habla.

No es una app de decisiones. Es un _oráculo de bolsillo_ con estética neón y retroalimentación háptica. Rápida, offline y sin distracciones.

---

## Características

### 🎰 Modos de probabilidad
La moneda no siempre es justa. Elige cómo quieres que el destino te hable:

| Modo | Probabilidad Sí | Probabilidad No | ¿Cuándo usarlo? |
|------|:-:|:-:|---|
| **Más probable: Sí** | ~75% | ~25% | Cuando ya sabes la respuesta pero necesitas validación |
| **Equilibrado** | 50% | 50% | Decisión real. Que el universo decida |
| **Más probable: No** | ~25% | ~75% | Cuando el miedo habla más fuerte que las ganas |

### ✨ Experiencia completa
- **Animación 3D** — La moneda gira con física simulada antes de revelar el resultado
- **Retroalimentación háptica** — El teléfono vibra al lanzar; el cuerpo siente la decisión
- **Mensajes dinámicos** — Cada resultado tiene su propio mensaje. No siempre dice lo mismo
- **Estética cyberpunk** — Colores neón, fondo degradado oscuro, tipografía futurista
- **Totalmente offline** — Sin internet. Sin servidores. Sin datos tuyos

---

## Stack tecnológico

```
Expo ────────────────────── Framework y toolchain principal
React Native ────────────── UI nativa multiplataforma  
expo-linear-gradient ────── Fondo degradado cyberpunk
expo-haptics ────────────── Feedback táctil al lanzar la moneda
JavaScript (ES2024) ─────── Lógica de probabilidades y animaciones
```

---

## Estructura del proyecto

```
moneda-movil/
│
├── assets/                  # Recursos estáticos (íconos, splash)
│
├── src/
│   ├── components/
│   │   └── Coin.js          # Componente principal: animación + lógica de lanzamiento
│   │
│   └── screens/
│       └── HomeScreen.js    # Pantalla principal: UI + selector de probabilidad
│
├── App.js                   # Punto de entrada
├── app.json                 # Configuración de Expo
└── package.json             # Dependencias
```

---

## Ejecución local

### Prerequisitos
- Node.js 18+
- Expo CLI
- Dispositivo físico o emulador Android/iOS

### Pasos

**1. Clona el repositorio e instala dependencias**
```bash
git clone <url-del-repo>
cd moneda-movil
npm install
```

**2. Inicia el servidor de desarrollo**
```bash
npx expo start
```

**3. Abre en tu dispositivo**

| Opción | Comando | Requisito |
|--------|---------|-----------|
| Expo Go (físico) | Escanea el QR del terminal | App Expo Go instalada |
| Emulador Android | `npx expo start --android` | Android Studio |
| Emulador iOS | `npx expo start --ios` | macOS + Xcode |

---

## Filosofía de diseño

> _"La interfaz no debería pensar por ti. Solo animarte a decidir."_

Cyber Coin nació de una premisa simple: las apps de decisiones suelen ser complejas, llenas de opciones y formularios. Esta no. Es una moneda. La lanzas. Punto.

El diseño cyberpunk no es decorativo; refuerza la idea de que estás en el futuro, donde las dudas se resuelven en segundos y con estilo.

---

## Notas técnicas

- **Sin base de datos** — todo el estado vive en memoria durante la sesión
- **Sin conexión a internet** — funciona al 100% offline
- **Sin telemetría ni analíticas** — lo que decides, es tuyo
- **Sin permisos invasivos** — solo acceso háptico (vibración)

---

<div align="center">

_Construido con cafeína y probabilidades_ ☕

</div>
