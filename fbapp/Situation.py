class Situation:


    def __init__(self, solde, historique):
        self.solde = solde
        self.historique = historique




    def serialize(self):
            return{
                    "solde": self.solde,
                    "historique":
                                    self.historique

                }




