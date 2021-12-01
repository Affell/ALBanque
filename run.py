from fbapp import views
from flask_login import LoginManager
from fbapp import User

print("TEST")
if __name__ == '__main__':
    views.app.run(host='0.0.0.0', port=80)
