**Corto de laboratorio Laboratorio 11: Vercel** 

**¿Cuál es la finalidad del archivo vercel.json?**

    Para que la plataforma vercel tenga la informacion de la configuracion del proyecto y se pueda
    hacer correcto deploy
  
**¿Qué ventajas tiene desplegar en Vercel frente a un servidor tradicional?**

    ==> Solo se necesitan pocas configuraciones para hacer el deploy y muchas otras 
        son automaticas
        
    ==> Puedes entrar a tu cuenta y hacer configuraciones rapidas de muchos deploys 
        con mas comodidad
        
    ==> Vercel toma en cuenta el repositorio en linea, asi que es mas facil de 
        transferir archivos modificarlos y saber cuales son. 
        
    ==> Configuración automática para frameworks
    
  ![image](https://github.com/user-attachments/assets/7b52b773-028c-44ee-87ff-ee6cc2dd0c11)

  

**¿Qué propiedades del archivo vercel.json son necesarias para que una
aplicación Express funcione correctamente en Vercel?**

    El vercel.json que se usa tiene las configuraciones principales 
    
    version - version de config de vercel
    builds -  Definir compilacion y ejecucion de los archivos
    routes - Redirigir a las rutas que se definen en el archivo del proyecto 

```json
{
    "version": 2,
    "builds": [
        {
            "src": "src/app.js",
            "use": "@vercel/node",
            "config": { "includeFiles": ["dist/**"] }
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "src/app.js"
        }
    ]
}
