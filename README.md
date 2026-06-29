# Employee Management System - DevOps Project

## Project Overview

This project demonstrates a complete DevOps workflow for deploying an Employee Management System using modern DevOps tools and practices.

## Technologies Used

* HTML
* CSS
* JavaScript
* Docker
* Kubernetes (Minikube)
* Helm
* Prometheus
* Grafana
* Terraform
* GitHub Actions

## Project Architecture

Developer → GitHub → GitHub Actions → Docker → Kubernetes → Prometheus/Grafana

## Features

* Containerized application using Docker
* Kubernetes deployment with replicas
* Service exposure using NodePort
* Infrastructure as Code using Terraform
* Monitoring using Prometheus
* Visualization using Grafana
* CI/CD using GitHub Actions

## Kubernetes Deployment

Deployment file:

* k8s/deployment.yaml

Service file:

* k8s/service.yaml

## Monitoring

Monitoring stack installed using Helm:

* Prometheus
* Alertmanager
* Node Exporter
* Grafana

## Repository Structure

employee-management-system/
├── .github/workflows/
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
├── terraform/
│   ├── main.tf
│   └── outputs.tf
├── screenshots/
├── Dockerfile
├── README.md
├── index.html
├── style.css
└── script.js

## Deployment Steps

### Build Docker Image

docker build -t employee-management:v1 .

### Deploy to Kubernetes

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

### Verify Deployment

kubectl get pods
kubectl get svc

### Install Prometheus

helm install prometheus prometheus-community/prometheus

### Install Grafana

helm install grafana grafana/grafana

## Screenshots

### Kubernetes Pods

<img width="1920" height="300" alt="kubectl-pods - Copy(1)" src="https://github.com/user-attachments/assets/90aa1092-9538-4959-93f7-01d96aa38341" />




### Kubernetes Services

<img width="1920" height="345" alt="kubectl-service(1)" src="https://github.com/user-attachments/assets/c6c0f5a3-5a79-4efb-ba5a-45800d9af03f" />


### Grafana

![Grafana](screenshots/grafana-dashboard.png)

### Prometheus

![Prometheus](screenshots/prometheus-dashboard.png)

 
## Author

Daggubati Sashank
