import json
users=[]
class User:
    def __init__(self, ad, soyad, email, password):
        self.ad=_ad
        self.soyad=soyad
        self.email=email
        self.password=_password
        


def getRegistrationData():
    ad=input('Ad : ')
    soyad=input('Soyad : ')
    ad=input('Email : ')
    ad=input('Password : ')
    return [ad,soyad,email,password]

def registerUser (lst):
    return User(lst[0], lst[1], lst[2], lst[3])

    users.append(user.__dict__)

registerUser(getRegistrationData())    

f=open('data.json','a')

jData=json.dumps(users)

f=write(jData)

