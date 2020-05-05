resource "aws_s3_bucket" "website" {
  bucket = "www.synestiaos.org"
  acl    = "public-read"
  region = "ap-northeast-1"
  
  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_policy" "website-policy" {
  bucket = "${aws_s3_bucket.website.id}"

  policy = <<POLICY
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.website.id}/*"
    }
  ]
}
POLICY
}
