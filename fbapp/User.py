from flask_login import LoginManager
class User:

    login_manager = LoginManager()
    def __init__(self,username):
        self.username = username
        self.is_authenticated = True
        self.is_active = True
        self.is_anonymous = False


    def get_id(self):
        return self.username

