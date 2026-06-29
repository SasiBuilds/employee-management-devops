# Employee Management System - DevOps Project

## Overview

This project demonstrates an end-to-end DevOps workflow for deploying an Employee Management System application using AWS, Terraform, Docker, Kubernetes, Prometheus, and Grafana.

## Technologies Used

* AWS EC2
* Terraform
* Docker
* Docker Hub
* Kubernetes (Minikube)
* Prometheus
* Grafana
* GitHub Actions

## Architecture

User → Kubernetes Service → Application Pods

Docker Image → Docker Hub → Kubernetes Deployment

Terraform → AWS Infrastructure

Prometheus → Metrics Collection

Grafana → Monitoring Dashboard

## Features

* Infrastructure as Code using Terraform
* Containerized application using Docker
* Kubernetes deployment with multiple replicas
* Monitoring using Prometheus
* Visualization using Grafana
* Version control with GitHub

## Future Improvements

* Jenkins CI/CD
* AWS EKS
* ArgoCD
* HTTPS and Domain Configuration
* Alerting with Alertmanager
