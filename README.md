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

## Screenshots

### Kubernetes Pods

<img width="1920" height="1020" alt="kubectl-pods - Copy" src="https://github.com/user-attachments/assets/71f272dc-18e0-4eea-b7f1-780b83b0b0e2" />


### Kubernetes Services

![Services](screenshots/kubectl-service.png)

### Grafana

![Grafana](screenshots/grafana-dashboard.png)

### Prometheus

![Prometheus](screenshots/prometheus-dashboard.png)

## Author

Sasi
Aspiring DevOps Engineer
