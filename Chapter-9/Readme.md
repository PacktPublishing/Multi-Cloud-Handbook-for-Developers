## Purpose:
To demonstrate the same infrastructure components (web servers) are defined using Terraform for AWS and GCP, by apply this IaC script to each cloud provider, it provisions the corresponding resources, ensuring consistency in multi-cloud deployments. 

## Prerequisites:
- Terraform installed and configured with AWS and GCP providers.
- AWS credentials with appropriate permissions.
- GCP project setup with necessary permissions.
  
## Usage:
Initialize Terraform:
`terraform init`

Plan the changes:
`terraform plan`

Apply the changes:
`terraform apply`

View outputs:
`terraform output`

## Notes:
- Adjust region and project names as needed.
- Consider adding more resources (e.g., subnets, security groups) to suit your specific requirements.
- Refer to Terraform documentation for more details on AWS and GCP providers.
