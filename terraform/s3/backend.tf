terraform {
  backend "s3" {
    bucket = "sss-rtos-terraform-backend-bucket"
    key    = "rtos/website/s3.tfstate"
    region = "ap-northeast-1"
    profile = "securityAdmin"
  }
}