import sqlite3
import hashlib
from fbapp import Mouvement
from fbapp import Situation
conn = sqlite3.connect('Comptes.db', check_same_thread=False)
c = conn.cursor()
sqlMvt = "mouvements"


#########################################     SELECT      ############################################################################



def PasswdHash(mdp):
    mdpE = mdp.encode("utf-8")
    hash = hashlib.md5(mdpE)
    return hash.hexdigest()

def getLogins():
        c.execute("SELECT login FROM logins")
        DBlogin = c.fetchall()
        DBlogins = []
        for row in DBlogin:
            DBlogins.append(row)
        conn.commit()
        return DBlogins

def getMail(login):
          try:
              c.execute("SELECT mail FROM logins WHERE login= ?",(login,))
              DBMail = c.fetchone()[0]
              conn.commit()
              return DBMail
          except:
                 return False


def getMdp(login):
          try:
             c.execute("SELECT mdp FROM logins WHERE login= ?", (login,))
             DBmdp = c.fetchone()[0]
             conn.commit()
             return DBmdp
          except:
               return False

def getMails():
          c.execute("SELECT mail FROM logins")
          DBmail = c.fetchall()
          DBmails = []
          for row in DBmail:
             DBmails.append(row)
          conn.commit()
          return DBmails

def getMoney(login):
          if login:
             c.execute("SELECT money FROM argent WHERE login= ?", (login,))
             DBMoney = c.fetchone()[0]
             conn.commit()
             return DBMoney

def isLock(login):
    if login:
       c.execute("SELECT LOCKED FROM logins WHERE login= ?", (login,))
       DBLock = c.fetchone()[0]
       conn.commit()
       if DBLock == "1":
          return True
       else:
            return False

def getNbErreurs(login):
    if login:
       c.execute("SELECT CODEERRORS FROM logins WHERE login = ?", (login,))
       DBErrors = c.fetchone()[0]
       conn.commit()
       return DBErrors


##def getCreditList(login):
##    if login:
##       c.execute("SELECT * FROM mouvements WHERE type = 'Crédit' AND user = ?",(login,))
##       DBcredits = c.fetchall()
##       resultat = []
##       for DBcredit in DBcredits:
##            credit = Mouvement.Mouvement(DBcredit[0],DBcredit[1],DBcredit[2],DBcredit[3],DBcredit[4])
##            resultat.append(credit.serialize())
##       conn.commit()
##       return resultat
##
##def getDebitList(login):
##    if login:
##       c.execute("SELECT * FROM mouvements WHERE user = ? ORDER BY id",(login,))
##       DBmvts = c.fetchall()
##       resultat = []
##       for DBmvt in DBmvts:
##            mvt = Mouvement.Mouvement(DBmvt[0],DBmvt[1],DBmvt[2],DBmvt[3],DBmvt[4])
##            resultat.append(mvt.serialize())
##       conn.commit()
##       return resultat

def getMouvements(login):
    if login:
       c.execute("SELECT * FROM mouvements WHERE user = ? ORDER BY date_heure DESC",(login,))
       DBmvts = c.fetchall()
       resultat = []
       for DBmvt in DBmvts:
            mvt = Mouvement.Mouvement(DBmvt[0],DBmvt[1],DBmvt[2],DBmvt[3])
            resultat.append(mvt.serialize())
       conn.commit()
       return resultat


def getSituation(login):
    m= getMouvements(login)
    s = Situation.Situation(getMoney(login),m)
    return s


#########################################     INSERT / UPDATE     ############################################################################

def createCompte(login, mdp, mail):
          print("Création d'un compte ...")
          try:
              c.execute("INSERT INTO logins VALUES (?, ?, ?, ?, ?)",(login, PasswdHash(mdp), mail,"0",0))
              c.execute("INSERT INTO argent VALUES (?,?)",(login,0))
              conn.commit()
              print("Compte créé !")
              return True

          except Exception:
                 print("Ce compte existe déjà !")
                 return "sql"


def lockAccount(login):
    if login:
       c.execute("UPDATE logins SET LOCKED= 1 WHERE login = ?",(login,))
       conn.commit()

def setNbErreurs(nb, login):
    if login:
       strnb = str(nb)
       c.execute("UPDATE logins SET CODEERRORS = ? WHERE login = ?",(strnb,login))
       conn.commit()

def setMoney_add(user, money):
    moneyDepart = getMoney(user)
    if user:
       c.execute("UPDATE argent SET money= ? WHERE login = ?",(money,user))
       conn.commit()
       creditAction(user, money - moneyDepart)
       print("Vous avez bien credité " + str(money - moneyDepart) +" sur votre compte !")
       print("Vous avez maintenant " + str(money) +" sur votre compte")

def setMoney_del(user, money):
    moneyDepart = getMoney(user)
    if user:
       c.execute("UPDATE argent SET money= ? WHERE login = ?",(money,user))
       conn.commit()
       debitAction(user,moneyDepart - money)
       print("Vous avez bien débité " + str(moneyDepart - money) +" sur votre compte !")
       print("Vous avez maintenant " + str(money) +" sur votre compte")

def changeEmail(user,mail):
    if user:
       c.execute("UPDATE logins SET mail= ? WHERE login = ?",(mail,user))
       conn.commit()
       print("Vous avez bien modifié votre adresse mail en " + mail)

def changeUser(user, newuser):
    if user:
       c.execute("UPDATE logins SET login = ? WHERE mail = ?",(newuser,str(getMail(user))))
       c.execute("UPDATE mouvements SET user = ? WHERE user = ?",(newuser,user))
       conn.commit()
       print("Votre nouveau nom d'utilisateur est " + newuser)

def creditAction(login, amount):
    if login:
       c.execute("INSERT INTO mouvements(user,type,date_heure,montant) VALUES(?,?,?,?)", (login,"Crédit",getDate() + " "+getTime(), amount))
       conn.commit()

def debitAction(login,amount):
     if login:
        c.execute("INSERT INTO mouvements(user,type,date_heure,montant) VALUES(?,?,?,?)",(login,"Débit",getDate() + " "+getTime() , amount))
        conn.commit()


def getDate():
    import datetime
    Odate = str(datetime.date.today())
    date_split = Odate.split("-")
    date = date_split[2]+"/"+date_split[1]+"/"+date_split[0]
    return date

def getTime():
    import datetime
    Omin = int(datetime.datetime.now().minute)
    Ohour = int(datetime.datetime.now().hour)
    Osec = int(datetime.datetime.now().second)
    minutes = str(Omin)
    hour = str(Ohour)
    sec = str(Osec)
    if Omin <10:
        minutes = "0"+minutes
    if Ohour <10:
        hour = "0"+hour
    if Osec<10:
        sec = "0"+sec
    time = str(hour+":"+minutes+"."+sec)
    return time












