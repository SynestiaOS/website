terraform {
  backend "s3" {
    bucket = "sss-tw-security-bu-terraform-backend-bucket-ap-northeast-1"
    key    = "rtos/website/s3.tfstate"
    region = "ap-northeast-1"
    profile = "securityFederatedAdmin"
  }
}