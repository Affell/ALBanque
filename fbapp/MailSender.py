# -*- coding: utf-8 -*-

# Created by: Axel

import smtplib
from random import randint


emetteur = "al.banque@outlook.com"
codeMail = randint(100000, 999999)


def sendEmail(login, sendTo):
    message = """Subject: Code d'authentification ALBanque

            Bonjour,
            Voici votre code d'authentification a deux facteurs pour le site ALBanque :

                                                {}
                  """.format(codeMail)


    try:
        server = smtplib.SMTP('smtp.mail.yahoo.com', 465)
        server.set_debuglevel(True)
        server.starttls()
        server.login("al.banque@yahoo.com", "ceciestunmotdepasse1234")
        server.sendmail(
                      emetteur,
                      sendTo,
                      message)
        server.quit()
        print("Le code d'authentification a bien été envoyé à l'adresse : {}".format(sendTo))
        print(codeMail)
    except Exception:
           print(Exception.with_traceback())
           print("Erreur pendant l'envoie de l'e-mail, veuillez véfifier votre connexion")
           print(codeMail)








