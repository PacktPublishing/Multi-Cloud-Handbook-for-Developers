# Overview:
This project demonstrates a simple Python web application deployed on Kubernetes using a CI/CD pipeline.

# Key Components:
- Python Script: hello.py serves a basic "Hello, World!" message on port 80.
- Dockerfile: Builds a Docker image containing the Python application.
- Jenkinsfile: Defines a CI/CD pipeline with build, test, and deploy stages.
- Kubernetes Deployment: Deploys the application with 3 replicas for scalability and exposes the application externally on port 8080 using a LoadBalancer.

# Steps to Run:

## Build and Push Docker Image:
Run the Jenkins pipeline to build, tag, and push the image to a Docker registry.

## Deploy to Kubernetes:
Apply the Kubernetes deployment and service YAML files using kubectl:

`kubectl apply -f Deployment.yaml`

## Access the Application:
Get the external IP address of the service:

`kubectl get service hello-world`

Access the application in your browser at http://<external-ip>:8080

## Notes:
- CI/CD Pipeline: The Jenkins pipeline automates the build, test, and deployment process.
- Scalability: The deployment uses 3 replicas for load balancing and fault tolerance.
- External Access: The LoadBalancer service type exposes the application externally.
- Customization: Adjust image names, registry URLs, and Kubernetes configuration as needed.
