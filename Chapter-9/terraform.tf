# Configure the AWS provider
provider "aws" {
  region = "us-east-1"  # Replace with your desired AWS region
}

# Configure the GCP provider
provider "google" {
  project = "volksdevenv"  # Replace with your GCP project ID
  region  = "us-central1"    # Replace with your desired GCP region
}

# Define an AWS EC2 instance
resource "aws_instance" "web_server_aws" {
  ami           = "ami-0c55b159cbfafe1f0"  # Replace with your desired AMI
  instance_type = "t2.micro"
  tags = {
    Name = "MyWebServer-AWS"
  }
}

# Define a GCP Compute Engine instance
resource "google_compute_instance" "web_server_gcp" {
  name         = "my-web-server-gcp"
  machine_type = "f1-micro"
  zone         = "us-central1-a"  # Replace with your desired GCP zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"  # Replace with your desired image
    }
  }

  network_interface {
    network = "default"
  }
}
