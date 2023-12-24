# Configure the AWS Provider
provider "aws" {
  region = "us-west-1"
}

# Create a VPC in AWS
resource "aws_vpc" "aws_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "my-aws-vpc"
  }
}

# Configure the Google Cloud Provider
provider "google" {
  project     = "volksdevenv"
  region      = "us-central1"
}

# Create a VPC network in Google Cloud
resource "google_compute_network" "gcp_vpc" {
  name                    = "my-gcp-vpc"
  auto_create_subnetworks = "false"
}

# Outputs to display the created resource IDs
output "aws_vpc_id" {
  value = aws_vpc.aws_vpc.id
}

output "gcp_vpc_name" {
  value = google_compute_network.gcp_vpc.name
}
