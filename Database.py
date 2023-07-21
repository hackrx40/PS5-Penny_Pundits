import mysql.connector
from datetime import date, datetime, timedelta
import numpy as np
import statistics

import random

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "WASD1234"
)


cursor = mydb.cursor()

cursor.execute("USE pennywise")

def create_db():


    cursor.execute("CREATE TABLE IF NOT EXISTS userinfo(iduser INT, firstname VARCHAR(255), lastname VARCHAR(255), age INT, city VARCHAR(100), noofdependents INT, mobile BIGINT, email VARCHAR(100))")
    cursor.execute("CREATE TABLE IF NOT EXISTS transaction(transactionid INT , type VARCHAR(100), category VARCHAR(100), amount float, transdate DATE, transtime TIME)")
    cursor.execute("CREATE TABLE IF NOT EXISTS budget(amount float, category VARCHAR(100), note VARCHAR(300))")

def enter_data_budget(tamount, tcategory, tnote):
    para=(tamount, tcategory, tnote)
    stat="INSERT INTO budget (amount, category, note) VALUES (%s, %s, %s)"
    cursor.execute(stat, para)
    mydb.commit()
    print(stat, para)

def enter_data_userinfo(first_name, last_name, age, city, dependents, mobile, email):
    # try:
    #     date_input = date.fromisoformat(birthday)
    #     #date_inp=str(date_input)
    # except ValueError:
    #     print("Invalid date format. Please enter in 'YYYY-MM-DD' format.")
    #     exit()
    user_id=random.randint(1, 100)
    para=(user_id, first_name, last_name, age, city, dependents, mobile, email)
    stat="INSERT INTO userinfo (iduser, firstname, lastname, age, city, noofdependents, mobile, email) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
    cursor.execute(stat, para)
    mydb.commit()
    print(stat, para)

def enter_data_transaction(transid, type, category,amount, date, time):
    para=(transid, type, category,amount, date, time)
    stat="INSERT INTO transaction (transactionid, type, category, amount, transdate, transtime) VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(stat, para)
    mydb.commit()
    print(stat, para)


def category_wise_expense(start_date, end_date):
    expense={"Eating Out":0, "Food at Home":0, "Utilities":0, "Rent":0}
    sql_query = "SELECT * FROM transaction WHERE transdate BETWEEN %s AND %s"
    date_range=(start_date, end_date)
    cursor.execute(sql_query, date_range)
    result_set = cursor.fetchall()
    for row in result_set:
        expense[row[2]]=expense[row[2]]+row[3]
    return expense

def category_wise_expense_quantity(start_date, end_date):
    expense={"Eating Out":0, "Food at Home":0, "Utilities":0, "Rent":0}
    sql_query = "SELECT * FROM transaction WHERE transdate BETWEEN %s AND %s"
    date_range=(start_date, end_date)
    cursor.execute(sql_query, date_range)
    result_set = cursor.fetchall()
    for row in result_set:
        expense[row[2]]=expense[row[2]]+1
    return expense

def get_month_start_end_dates(year, month):
    start_date = datetime(year, month, 1).date()
    next_month = start_date.replace(day=28) + timedelta(days=4)
    end_date = next_month - timedelta(days=next_month.day)
    return start_date, end_date

def month_wise_date():
    # Create a dictionary to store the month names as keys and the start and end dates as values
    month_dict = {}

    # Define the year for which you want to generate the dates
    year = 2023

    # Loop through each month and populate the dictionary
    for month_num in range(1, 13):
        month_name = datetime(year, month_num, 1).strftime("%B")
        start_date, end_date = get_month_start_end_dates(year, month_num)
        month_dict[month_name] = (start_date.strftime("%Y-%m-%d"), end_date.strftime("%Y-%m-%d"))
    return month_dict

#returns income of the mentioned month
def monthly_income(month):
    month_dict=month_wise_date()
    sql_query = "SELECT * FROM transaction WHERE transdate BETWEEN %s AND %s"
    date_range=(month_dict[month][0], month_dict[month][1])
    cursor.execute(sql_query, date_range)
    result_set = cursor.fetchall()
    income=0
    for row in result_set:
        if(row[1]=='income'):
            income=income+row[3]
    return income

#returns expense of the mentioned month
def monthly_expense(month):
    month_dict=month_wise_date()
    sql_query = "SELECT * FROM transaction WHERE transdate BETWEEN %s AND %s"
    date_range=(month_dict[month][0], month_dict[month][1])
    cursor.execute(sql_query, date_range)
    result_set = cursor.fetchall()
    income=0
    for row in result_set:
        if(row[1]=='expense'):
            income=income+row[3]
    return income

#returns saving of that month
def monthly_saving(month):
    saving=monthly_income(month)-monthly_expense(month)
    print(saving)

#returns a dictionary containing data of income of every month
def month_wise_income():
    income={"January":0, "February":0,"March":0, "April":0, "May":0, "June":0, "July":0, "August":0, "September":0, "October":0, "November":0, "December":0}
    for key in income:
        income[key]=monthly_income(key)
    return income

#returns a dictionary containing data of expense of every month
def month_wise_expense():
    income={"January":0, "February":0,"March":0, "April":0, "May":0, "June":0, "July":0, "August":0, "September":0, "October":0, "November":0, "December":0}
    for key in income:
        income[key]=monthly_expense(key)
    return income

# returns a dictionary containing data of saving of every month
def month_wise_saving():
    income={"January":0, "February":0,"March":0, "April":0, "May":0, "June":0, "July":0, "August":0, "September":0, "October":0, "November":0, "December":0}
    for key in income:
        income[key]=monthly_income(key)-monthly_expense(key)
    print(income)

def calc_variance():
    months_data=month_wise_saving()

    savings=[10, 10, 10, 10, 10, 10]
    # for values in months_data:
    #     savings.append(values)
    savings_arr=np.array(savings)
    var=statistics.variance(savings_arr)
    print(var)
    


# create_db()
# enter_data_budget(23, "ee", "rr")
# enter_data_userinfo("yash", "jugade", 20, "pune", 21, 9887876, "yyyy")
# enter_data_transaction(1, 'expense', 'Food at Home', 50.25, '2023-05-01', '12:30:00')  
# category_wise_expense('2021-05-01', '2023-05-30')
#month_wise_expense()
#print(monthly_expense('May'))
#print(category_wise_expense_quantity('2021-05-01', '2023-05-30'))
#month_wise_saving()
calc_variance()
#monthly_saving("May")