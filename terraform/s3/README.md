# Bootstrap backend for terraform

## Quick Start

We use terraform to create a s3 bucket to host `www.synestiaos.org` website.

Run once to set the credential of securityAdmin
```
aws configure --profile securityAdmin 
```

```
terraform init
terraform plan
terraform apply
```
