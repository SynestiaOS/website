# website for https://www.synestiaos.org/
## how to deploy?

### Using EC2
1. login in to aws server. and then pull the latest code.
2. `pm2 stop npm`
3. `pm2 start npm -- start`

### Using S3

#### Preparation

1. Install [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html)
2. Run `aws configure --profile securityAdmin` to configure AWS CLI

#### Deploy to S3

Run `auto/deploy` locally.

