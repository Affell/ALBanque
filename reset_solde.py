import sqlite3

conn = sqlite3.connect('Comptes.db', check_same_thread=False)
c = conn.cursor()


def reset():
    try:
        c.execute("UPDATE argent SET money = 0")
        conn.commit()
        print("Reset effectué !")
    except:
        print("Oùla ! La requête ne marche pas !")



if __name__=="__main__":
        reset()