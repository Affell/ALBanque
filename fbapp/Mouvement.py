class Mouvement:



    def __init__(self,user,type_,date_heure,montant):
        self.user = user
        self.type = type_
        self.date_heure = date_heure
        self.montant = montant

    def serialize(self):
        return {
            'user': self.user,
            'type': self.type,
            'date_heure': self.date_heure,
            'montant': self.montant,
        }