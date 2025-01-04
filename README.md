# Apuestas - DApp para Realizar Apuestas

## **Introducción**

Este proyecto es una aplicación descentralizada (DApp) para realizar apuestas utilizando contratos inteligentes en Ethereum. La aplicación incluye un backend basado en Hardhat para manejar contratos inteligentes y un frontend desarrollado con React para interactuar con la blockchain.

---

## **Requisitos Previos**

### **Software necesario:**
- Node.js (versión 18.x recomendada).
- npm (gestor de paquetes incluido con Node.js).
- Hardhat (ya incluido como dependencia del proyecto).
- Git (para clonar el repositorio).
- Navegador con MetaMask instalado.

### **Configuración de MetaMask:**
1. Agrega una red personalizada que apunte a `http://127.0.0.1:8545`.
2. Importa una cuenta de Hardhat utilizando una clave privada generada al iniciar el nodo local.

---

## **Instalación y Configuración**

### **1. Clonar el Repositorio**
Clona el proyecto desde GitHub:
```bash
git clone https://github.com/luchinango/apuestas.git
cd apuestas
```

### **2. Configurar el Backend**
1. Cambia al directorio `gambling-game`:
   ```bash
   cd gambling-game
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Compila los contratos:
   ```bash
   npx hardhat compile
   ```
4. Inicia el nodo local de Hardhat:
   ```bash
   npx hardhat node
   ```
   **Nota:** Mantén esta terminal abierta mientras trabajas en el proyecto.

### **3. Desplegar el Contrato**
1. Abre una nueva terminal y asegúrate de estar en el directorio `gambling-game`:
   ```bash
   cd gambling-game
   ```
2. Despliega el contrato en la red local:
   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```
3. Copia la **dirección del contrato desplegado** que aparecerá en la terminal (la necesitarás en el siguiente paso).

### **4. Configurar el Frontend**
1. Cambia al directorio `gambling-dapp`:
   ```bash
   cd ../gambling-dapp
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Actualiza la dirección del contrato en el frontend:
   - Busca el archivo de configuración del frontend (probablemente `Web3Context.tsx`).
   - Reemplaza la dirección del contrato con la dirección copiada en el paso anterior.

### **5. Iniciar el Servidor del Frontend**
1. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre la URL que aparece en la terminal (generalmente `http://localhost:3000`) en tu navegador.

---

## **Pruebas del Proyecto**
1. Conecta MetaMask a la red local (`http://127.0.0.1:8545`).
2. Realiza pruebas interactivas:
   - Conéctate a una wallet.
   - Realiza apuestas.
   - Verifica las transacciones en el navegador de tu red local o en MetaMask.

---

## **Resolución de Problemas Comunes**

### **Error: `Cannot find module 'ethers'` o similar**
Ejecuta:
```bash
npm install ethers
```

### **Error en MetaMask: `Internal JSON-RPC error`**
1. Asegúrate de que el nodo de Hardhat esté corriendo:
   ```bash
   npx hardhat node
   ```
2. Verifica que la cuenta de MetaMask esté conectada a la red local y tenga suficiente ETH.

### **Problemas con dependencias en TypeScript**
1. Asegúrate de que el archivo `tsconfig.json` incluye las siguientes rutas:
   ```json
   {
     "include": ["src/**/*", "artifacts/contracts/**/*.json"]
   }
   ```
2. Vuelve a compilar el proyecto:
   ```bash
   npx hardhat clean
   npx hardhat compile
   ```

### **El frontend no muestra datos**
1. Verifica que la dirección del contrato en el frontend sea la correcta.
2. Revisa errores en la consola del navegador o en la terminal del servidor de desarrollo.

---

## **Capturas de Pantalla**

Incluye capturas de:
1. **Uso de MetaMask**.
2. **Cambio entre cuentas o cierre de wallet**.
3. **Flujo de apuestas realizadas**.

---

Para evitar la fallas de Nounce (Fallas al momento de realizar una transacción, falla que se provoca cuando se pierde la secuencia de la cadena de un bloque), se tienen que restablecer los datos de la cuenta de MetaMask.

La restricción de la apuesta es que solo se usan valores entre 0,001 y 0,0001
![Imagen de WhatsApp 2025-01-02 a las 20 44 19_4f88fc20](https://github.com/user-attachments/assets/70f833f5-c67a-459f-b616-a4495c826dcc)
![Imagen de WhatsApp 2025-01-02 a las 20 44 33_b6c98905](https://github.com/user-attachments/assets/11645420-2475-4d51-873b-d4ecbb35b010)
![Imagen de WhatsApp 2025-01-02 a las 20 46 59_b552d77d](https://github.com/user-attachments/assets/7494ffc0-d95b-4d67-90cf-1dad1fe22a7c)
![Imagen de WhatsApp 2025-01-02 a las 20 47 12_f07a0369](https://github.com/user-attachments/assets/230ead84-7de1-471c-aad1-78ff653e2c51)
![Imagen de WhatsApp 2025-01-02 a las 21 00 35_2526fe5d](https://github.com/user-attachments/assets/e8efa1a7-2a56-4203-b9d8-638fb6dda98a)
![image](https://github.com/user-attachments/assets/f1d2ca90-109d-48af-b0c9-eaa139c93b23)
![image](https://github.com/user-attachments/assets/fb571e8d-524d-4109-b19a-4a6b32435fdc)



https://github.com/user-attachments/assets/d5c6cbb7-fd55-4434-9997-b1d52aa15871



https://github.com/user-attachments/assets/7867026a-d09c-4d5a-8f2c-8ec821b9f6ae


