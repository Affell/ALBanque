import pyotp



def getTOPTPtoken(secret):
    hotp = pyotp.TOTP(secret)
    print(hotp.now())


def getUrlAuthQRcode(secret,user):
    data = "otpauth://totp/ALBANQUE%20({})?secret={}&issuer=ALBANQUE".format(user,secret)
    url = "https://api.qrserver.com/v1/create-qr-code/?data={}&size=500x500".format(data)
    return url




## Axel : OEEKVEM7TPNNVCSX


## qrcode : https://api.qrserver.com/v1/create-qr-code/?data=|||->OTPAUTH<-|||&size=500x500
## pyotp.hotp.TOTP(SECRET).provisioning_uri(USER, initial_count=0, issuer_name="ALBANQUE - USER")
