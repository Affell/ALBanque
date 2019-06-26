from flask import Flask,render_template,jsonify,request,redirect,abort
from flask_login import current_user, login_user, login_required, LoginManager, logout_user
from fbapp import CompteManager as cb
from fbapp import Situation
from fbapp import MailSender
from fbapp import User

import sqlite3
conn = sqlite3.connect('Comptes.db', check_same_thread=False)
c = conn.cursor()

import json

app = Flask(__name__)
login_manager = LoginManager()
login_manager.init_app(app)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object('config')
# To get one variable, tape app.config['MY_VARIABLE']

@app.route('/static')
@app.route('/index')
@app.route('/')
def index():
        return render_template("login.html")

@app.route('/home')
@login_required
def home():
    return render_template("home.html")

@app.route('/api/situation')
@login_required
def situation():
    user = current_user.get_id()

    if user == None:
        return "Précisez un user dans les args !"
    situation = cb.getSituation(user)

    return jsonify(situation.serialize())

@app.route('/api/addMoney',methods=['POST'])
@login_required
def addMoney():
    user = current_user.get_id()
    montant = request.form["montant"]
    try:
        newmontant=int(montant)
    except:
        abort(500)
    cb.addMoney(user,int(montant))
    return jsonify(cb.getSituation(user).serialize())


@app.route('/api/removeMoney',methods=['POST'])
@login_required
def removeMoney():
    user = current_user.get_id()
    montant = request.form["montant"]
    try:
        newmontant=int(montant)
    except:
        abort(500)
    cb.delMoney(user,int(montant))
    return jsonify(cb.getSituation(user).serialize())

@app.route('/login',methods=["POST"])
def login():
    username = request.form["user"]
    password = request.form["password"]
    user = User.User(username)
    if cb.connexion(username,password) == True:
        login_user(user,False,False,True)
        return("home")
    else:
        abort(403)




@app.route('/register')
@app.route('/register.html')
def register_page():
    return render_template('register.html')

@app.route('/api/register',methods=['POST'])
def register():

    username = request.form["user"]
    password = request.form["password"]
    email = request.form["email"]
    res = cb.register(username,password,email)
    if res ==True:
        return "/"
    elif res=="email" or res=="sql":
        return res


@app.route("/api/session",methods=['GET'])
def session():
    return current_user.get_id()


@app.route("/disconnect",methods=["POST"])
@login_required
def disconnect():
    logout_user()
    return "/"





@login_manager.user_loader
def load_user(id):
    return User.User(id)






if __name__ == "__main__":
        app.run()