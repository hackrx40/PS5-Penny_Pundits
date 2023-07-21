import mysql.connector

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "WASD1234"
)


cursor = mydb.cursor(buffered = True)

cursor.execute("USE pennywise")

def create_db():


    cursor.execute("CREATE TABLE IF NOT EXISTS userinfo(userid INT PRIMARY KEY, firstname VARCHAR(255), lastname VARCHAR(255), dob DATE, age INT, city VARCHAR(100), noofdependents INT, mobile BIGINT, email VARCHAR(100))")
    cursor.execute("CREATE TABLE IF NOT EXISTS transaction(transactionid INT , type VARCHAR(100), category VARCHAR(100), amount float, transdate DATE, transtime TIME)")
    cursor.execute("CREATE TABLE IF NOT EXISTS budget(amount float, category VARCHAR(100), note VARCHAR(300))")

def enter_data_budget(userAmt,userCat,userNote):
    sqlInsertQuery = '''INSERT INTO budget
                       (amount,category,note) VALUES (%s,%s,%s)'''
    tuple1 = (userAmt,userCat,userNote)
    cursor.execute(sqlInsertQuery,tuple1)
    mydb.commit()

create_db()
enter_data_budget(1200,"Transport","Car Petrol")   