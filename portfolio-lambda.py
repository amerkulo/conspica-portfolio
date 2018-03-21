import boto3
import os
import StringIO
import zipfile
from botocore.client import Config
import mimetypes

def lambda_handler(event, context):
   #s3 = boto3.resource('s3')
   sns = boto3.resource('sns')
   topic = sns.Topic('arn:aws:sns:us-east-1:659649740988:conspica-portfolio-build')
   try:
        s3 = boto3.resource('s3',config=Config(signature_version='s3v4'))
        pb = s3.Bucket('conspica.com')
        pbstagin = s3.Bucket('staging.conspica.com')
        Memfile = StringIO.StringIO()
        pbstagin.download_fileobj('conspica-portfolio-build.zip',Memfile)
        with zipfile.ZipFile(Memfile) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                pb.upload_fileobj(obj,nm,ExtraArgs={'ContentType':mimetypes.guess_type(nm)[0]})
                pb.Object(nm).Acl().put(ACL='public-read')

        print "Code build sucess."
        topic.publish( Subject="Code delpoy Sucess", Message="Conspica portfolio code was successfully delpoyed")
   except:
       print "Colde build failed."
       topic.publish( Subject="Code delpoy failed", Message="Conspica portfolio code failed to deploy.")
       raise


"""
cwd = os.getcwd()
print cwd
os.system("aws s3 ls")
os.system("aws s3 ls staging.conspica.com")
Adding a couple of test lines.
Adding a couple more of tet lines.

"""
