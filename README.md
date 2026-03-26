Aquí tienes el README listo para copiar y pegar directamente:

```markdown
# Examen Técnico DevOps - Albert Sanfle

## Descripción General

Este repositorio contiene la resolución de un examen técnico de DevOps basado en una aplicación sencilla en Node.js, extendida con un flujo completo de CI/CD que incluye:

- Análisis estático de código con **SonarQube**
- Orquestación del pipeline en **Azure DevOps**
- Contenerización con **Docker**
- Publicación de imágenes en **AWS ECR**
- Despliegue en **Kubernetes / EKS**
- Exposición externa mediante **Ingress**
- Jobs utilitarios ejecutados desde el pipeline
- Dos escenarios de análisis en SonarQube: **exitoso** y **fallido**

---

## Sobre mí

Mi nombre es **Albert Sanfle**.  
Soy **estudiante de Ingeniería de Sistemas en INTEC**, tengo **22 años**, cuento con **3 certificaciones de AWS la solution architech , developer associate , cloud practitioner** y tengo el interés y el apetito de seguir aplicando mis conocimientos en entornos reales, mientras continúo aprendiendo y creciendo en las áreas de **Cloud, DevOps e Infraestructura**.


## Objetivo del examen

Construir y documentar una solución DevOps completa desde cero, cubriendo:

- Integración con SonarQube
- Automatización con Azure DevOps
- Construcción y publicación de imagen Docker
- Despliegue en Kubernetes
- Exposición externa mediante Ingress
- Uso de manifiestos YAML
- Jobs utilitarios en Bash

---

## Tecnologías utilizadas

`Node.js` `Docker` `SonarQube` `Azure DevOps` `AWS ECR` `AWS EKS` `Kubernetes` `Ingress` `Bash` `YAML`

---

## Aplicación base

Servidor HTTP en Node.js que escucha en el puerto `8080` y responde:

```text
Hello from Docker!
```

### Ejecución local

```bash
node app.js
curl http://localhost:8080
```

---

## Estructura del proyecto

```
.
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── docker-compose.yaml
├── azure-pipelines.yml
├── sonar-project.properties
├── test/
└── environment/
    ├── namespace.yaml
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

---

## Configuración de SonarQube

```properties
sonar.projectKey=Examen_Albert_sanfle_Devops_Engineer_Examen_Albert_sanfle_Devops_Engineer_AZ0oLiopvqnCrOrVUaWS
sonar.host.url=http://23.20.185.8:9000
sonar.sources=.
```

---

## Escenarios del pipeline

El pipeline incluye dos escenarios controlados por parámetro:

| Escenario | Descripción |
|-----------|-------------|
| `success` | Análisis exitoso, build y despliegue completo |
| `fail`    | Simula fallo controlado en el análisis para demostrar manejo de errores |

---

## Flujo general del pipeline

```
Utilities
   ├── Job paralelo: imprime "Hola Mundo" 10 veces
   └── Script: crea 10 archivos con fecha y los imprime en consola

Analyze_Build_Push
   ├── Checkout del repositorio
   ├── Instalación de Node.js
   ├── Instalación de dependencias
   ├── Ejecución de tests
   ├── Análisis con SonarQube
   ├── Build de imagen Docker
   └── Push de imagen a AWS ECR

Deploy
   ├── Conexión a EKS
   ├── Aplicación del namespace
   ├── Aplicación del deployment
   ├── Aplicación del service
   └── Aplicación del ingress
```

---

## Docker

```bash
# Construir imagen
docker build -t hello-node-demo .

# Ejecutar contenedor
docker run -d -p 8080:8080 hello-node-demo

# Probar
curl http://localhost:8080
```

### Docker Compose

```bash
docker compose up -d --build
curl localhost:8080
```

---

## Despliegue en Kubernetes

Los manifiestos se encuentran en `environment/` y se aplican en este orden:

1. `namespace.yaml`
2. `deployment.yaml`
3. `service.yaml`
4. `ingress.yaml`

La aplicación se expone externamente mediante **Ingress**.

---

## Checklist de validación

- [x] SonarQube configurado
- [x] Pipeline en Azure DevOps implementado
- [x] Imagen Docker generada
- [x] Imagen publicada desde el pipeline
- [x] Dos escenarios del pipeline creados
- [x] Job paralelo de Hola Mundo agregado
- [x] Script para crear 10 archivos con fecha
- [x] YAMLs de Kubernetes incluidos
- [x] Despliegue en Kubernetes completado
- [x] Ingress configurado
- [x] Repositorio público de GitHub preparado

---

## Autor

**Albert Sanfle**  
Estudiante de Ingeniería de Sistemas — INTEC  
Cloud & DevOps  
```

Solo reemplaza los dos links al inicio y ya está listo. 🚀 Si lo puedes soñar Lo puedes Hacer !!
