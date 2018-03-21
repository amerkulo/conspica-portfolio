import boto3
import os
import StringIO
import zipfile
from botocore.client import Config
import mimetypes
#s3 = boto3.resource('s3')
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


"""
cwd = os.getcwd()
print cwd
os.system("aws s3 ls")
os.system("aws s3 ls staging.conspica.com")

"""
