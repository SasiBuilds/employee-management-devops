provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "devops_sg" {
  name = "devops-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "devops_server" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t2.micro"

  vpc_security_group_ids = [
    aws_security_group.devops_sg.id
  ]

  tags = {
    Name = "DevOps-Project"
  }
}