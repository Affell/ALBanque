# -*- coding: utf-8 -*-

# Created by: Axel

from lycee import *
import sqlite3
import hashlib
from fbapp import SqlConnexion as sql
from flask_login import current_user


compteActuel =""
AccountCodeMail=""
nbErreurs = 0
codeMail = 0
codeisgood = 0

def getAllTime():
    return "["+sql.getDate() + " "+sql.getTime()+ "] : "

def PasswdHash(mdp):
    mdpE = mdp.encode("utf-8")
    hash = hashlib.md5(mdpE)
    return hash.hexdigest()

def getLogins():
        return sql.getLogins()

def getMail(login):
          return sql.getMail(login)

def getMdp(login):
          return sql.getMdp(login)

def getMails():
          return sql.getMails()

def getMoney(login):
          return sql.getMoney(login)

def isLock(login):
       return sql.isLock(login)

def createCompte(login, mdp, mail):
       return sql.createCompte(login,mdp,mail)


def lockAccount(login):
       sql.lockAccount(login)

def addMoney(user, money):
    moneyDepart = sql.getMoney(user)
    moneyTotale = money + moneyDepart
    sql.setMoney_add(user,moneyTotale)

def delMoney(user, money):
    moneyDepart = sql.getMoney(user)
    moneyTotale = moneyDepart - money
    sql.setMoney_del(user,moneyTotale)

def changeEmail(user, mail):
    sql.changeEmail(user,mail)

def changeUser(user,newuser):
    sql.changeUser(user,newuser)

def creditAction(login, amount):
    sql.creditAction(login,amount)

def debitAction(login,amount):
    sql.debitAction(login,amount)

def getCreditList(login):
    return sql.getCreditList(login)

def getDebitList(login):
    return sql.getDebitList(login)

def getMouvements(login):
    return sql.getMouvements(login)

def getSituation(login):
    return sql.getSituation(login)

def ErrorMessage():
    print("Erreur pendant la connexion ! Votre nom d'utilisateur ou votre mot de passe est incorrect.")

def connexion(login,mdp):
    if sql.isLock(login) == True:
       print("\n\nLe compte "+AccountCodeMail+" est bloqué en raison de 3 tentatives échouées \n")
       print("Pour le débloquer, veuillez contacter un administrateur")
       return False

    DBmdp = getMdp(login)
    if DBmdp == False:
       ErrorMessage()
       return False
    if PasswdHash(mdp) == DBmdp:
        try:
            print("DEBUG")
            #ip = current_user.getIp()
        except Exception:
            print(Exception.__cause__())

        print(getAllTime() + login + " s'est connecté")
##       sendTo = getMail(login)
##       if login == "admin":
##          global codeMail
##          codeMail = 43526
##          return True
##       MailSender.sendEmail(login,sendTo)
        return True
    else:
         ErrorMessage()
         return False


def verifyPass(newlogin, newmdp, cmdp, mail):
          if newmdp == cmdp:
             register(newlogin, newmdp, mail)
             return True
          else:
               print("Les deux mots de passe ne sont pas identiques !")
               return False

def verifyPassMail(codeEntry):
    global compteActuel
    codeStr =str(codeMail)
    if codeStr == codeEntry:
       print("Le code est correct !")
       compteActuel = AccountCodeMail
       return True

    else:
         print("Le code est incorrect !")
         _nbErreurs = sql.getNbErreurs(AccountCodeMail)
         STRnb = _nbErreurs +1
         sql.setNbErreurs(STRnb,AccountCodeMail)
         print(sql.getNbErreurs(AccountCodeMail))
         if sql.getNbErreurs(AccountCodeMail) == 3:
            sql.lockAccount(AccountCodeMail)
            sql.setNbErreurs(0,AccountCodeMail)
            print("\n\nLe compte "+AccountCodeMail+" est bloqué en raison de 3 tentatives échouées \n")
            print("Pour le débloquer, veuillez contacter un administrateur")

def register(newlogin, newmdp, mail):
          DBmails = getMails()
          print(DBmails)
          if not(mail.__contains__("@")) or not(mail.__contains__(".fr")) or mail.startswith("@") or mail.startswith(".fr") or mail.startswith(".com"):
             if not(mail.__contains__(".com")):
                return "email"
          if DBmails.__contains__(mail):
             return "email"
          return createCompte(newlogin,newmdp,mail)










