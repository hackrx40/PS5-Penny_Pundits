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

def add_values():
    cursor.execute('''INSERT INTO transaction (transactionid, type, category, amount, transdate, transtime)
VALUES
    (1, 'expense', 'Restaurants', 50.25, '2023-01-15', '12:30:00'),
    (2, 'expense', 'Going out', 30.50, '2023-01-20', '15:45:00'),
    (3, 'expense', 'Food at Home', 100.00, '2023-02-05', '09:00:00'),
    (4, 'income', 'Drinks at Home', 20.00, '2023-02-10', '14:15:00'),
    (5, 'expense', 'Public Transport and Taxi', 15.75, '2023-02-17', '10:30:00'),
    (6, 'expense', 'Leisure and Sports Memberships', 50.00, '2023-02-22', '13:45:00'),
    (7, 'expense', 'Utilities', 80.00, '2023-03-02', '11:00:00'),
    (8, 'expense', 'Clothing and Shoes', 45.50, '2023-03-09', '16:15:00'),
    (9, 'income', 'Rent', 200.00, '2023-03-15', '09:30:00'),
    (10, 'expense', 'Other Goods and Services', 40.00, '2023-03-22', '18:45:00'),
    (11, 'expense', 'Restaurants', 60.75, '2023-04-03', '14:00:00'),
    (12, 'income', 'Food at Home', 30.00, '2023-04-08', '10:15:00'),
    (13, 'expense', 'Public Transport and Taxi', 40.00, '2023-04-14', '11:30:00'),
    (14, 'income', 'Leisure and Sports Memberships', 70.25, '2023-04-20', '12:45:00'),
    (15, 'expense', 'Utilities', 35.50, '2023-05-01', '15:00:00'),
    (16, 'expense', 'Going out', 120.00, '2023-05-05', '17:15:00'),
    (17, 'expense', 'Rent', 180.00, '2023-05-10', '19:30:00'),
    (18, 'income', 'Drinks at Home', 55.50, '2023-05-15', '21:45:00'),
    (19, 'expense', 'Restaurants', 90.00, '2023-05-20', '08:30:00'),
    (20, 'income', 'Food at Home', 25.00, '2023-05-25', '07:15:00'),
    (21, 'expense', 'Leisure and Sports Memberships', 50.75, '2023-06-01', '16:15:00'),
    (22, 'expense', 'Public Transport and Taxi', 30.50, '2023-06-05', '18:30:00'),
    (23, 'income', 'Food at Home', 70.00, '2023-06-10', '19:45:00'),
    (24, 'expense', 'Going out', 55.00, '2023-06-15', '08:00:00'),
    (25, 'expense', 'Rent', 80.25, '2023-06-20', '09:45:00'),
    (26, 'income', 'Drinks at Home', 70.00, '2023-06-25', '11:30:00'),
    (27, 'expense', 'Restaurants', 120.00, '2023-06-28', '14:00:00'),
    (28, 'expense', 'Utilities', 15.50, '2023-06-30', '15:15:00'),
    (29, 'expense', 'Clothing and Shoes', 50.00, '2023-01-04', '17:00:00'),
    (30, 'income', 'Rent', 90.25, '2023-01-07', '19:30:00'),
    (31, 'expense', 'Going out', 70.75, '2023-01-11', '20:45:00'),
    (32, 'expense', 'Restaurants', 40.50, '2023-01-18', '09:00:00'),
    (33, 'income', 'Public Transport and Taxi', 10.00, '2023-01-23', '10:15:00'),
    (34, 'expense', 'Leisure and Sports Memberships', 25.25, '2023-02-01', '11:30:00'),
    (35, 'expense', 'Food at Home', 55.00, '2023-02-07', '14:00:00'),
    (36, 'expense', 'Rent', 120.00, '2023-02-12', '15:15:00'),
    (37, 'income', 'Drinks at Home', 90.00, '2023-02-19', '16:30:00'),
    (38, 'expense', 'Utilities', 30.50, '2023-02-25', '18:00:00'),
    (39, 'expense', 'Going out', 50.25, '2023-03-03', '19:15:00'),
    (40, 'income', 'Other Goods and Services', 25.00, '2023-03-08', '08:30:00'),
    (41, 'expense', 'Restaurants', 70.00, '2023-03-14', '09:45:00'),
    (42, 'expense', 'Food at Home', 80.25, '2023-03-19', '11:00:00'),
    (43, 'income', 'Rent', 60.50, '2023-03-26', '12:15:00'),
    (44, 'expense', 'Public Transport and Taxi', 40.00, '2023-03-31', '13:30:00'),
    (45, 'expense', 'Leisure and Sports Memberships', 100.00, '2023-04-05', '14:45:00'),
    (46, 'income', 'Going out', 35.75, '2023-04-10', '16:00:00'),
    (47, 'expense', 'Utilities', 20.00, '2023-04-17', '17:15:00'),
    (48, 'expense', 'Drinks at Home', 50.25, '2023-04-22', '18:30:00'),
    (49, 'income', 'Rent', 75.00, '2023-04-28', '19:45:00'),
    (50, 'expense', 'Other Goods and Services', 30.50, '2023-05-02', '08:00:00');
                    ''')
    cursor.execute('''INSERT INTO budget (amount, category, note)
VALUES
    (2000.50, 'Restaurants', 'Dinner with friends'),
    (2500.75, 'Going out', 'Movie night'),
    (1800.25, 'Food at Home', 'Groceries'),
    (1600.00, 'Drinks at Home', 'Beverages for a party'),
    (1700.50, 'Public Transport and Taxi', 'Bus fare'),
    (2200.00, 'Leisure and Sports Memberships', 'Gym membership'),
    (1900.00, 'Utilities', 'Electricity bill'),
    (2300.25, 'Clothing and Shoes', 'New shoes'),
    (13000.00, 'Rent', 'Monthly rent'),
    (2000.00, 'Investments', 'Stock purchase');
                   ''')
    mydb.commit()

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
    expense=expense={'Restaurants': 0, 'Going out': 0, 'Food at Home': 0, 'Drinks at Home': 0, 'Public Transport and Taxi': 0, 'Leisure and Sports Memberships': 0, 'Utilities': 0, 'Clothing and Shoes': 0, 'Rent': 0, 'Other Goods and Services': 0}
    sql_query = "SELECT * FROM transaction WHERE transdate BETWEEN %s AND %s"
    date_range=(start_date, end_date)
    cursor.execute(sql_query, date_range)
    result_set = cursor.fetchall()
    for row in result_set:
        expense[row[2]]=expense[row[2]]+row[3]
    return expense

def category_wise_expense_quantity(start_date, end_date):
    expense={'Restaurants': 0, 'Going out': 0, 'Food at Home': 0, 'Drinks at Home': 0, 'Public Transport and Taxi': 0, 'Leisure and Sport Memberships': 0, 'Utilities': 0, 'Clothing and Shoes': 0, 'Rent': 0, 'Other Goods and Services': 0}
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
    return income

def calc_variance():
    months_data=month_wise_saving()

    savings=[10, 10, 10, 10, 10, 10]
    for values in months_data:
        savings.append(values)
    savings_arr=np.array(savings)
    var=statistics.variance(savings_arr)
    print(var)
'''
def classify_expense(month):
    estimate_dict=api.getMonthlyEstimate()
    print(estimate_dict)
    month_dict=month_wise_date()
    actual_expense=category_wise_expense(month_dict[month][0], month_dict[month][1])
    expense={'Restaurants': 0, 'Going out': 0, 'Food at Home': 0, 'Drinks at Home': 0, 'Public Transport and Taxi': 0, 'Leisure and Sport Memberships': 0, 'Utilities': 0, 'Clothing and Shoes': 0, 'Rent': 0, 'Other Goods and Services': 0}
    for key in estimate_dict:
        expense[key]=actual_expense[key]/estimate_dict[key]
    print(expense)
''' 

#create_db()
#enter_data_budget(23, "ee", "rr")
#enter_data_userinfo("yash", "jugade", 20, "pune", 21, 9887876, "yyyy")
#add_values()
# enter_data_transaction(1, 'expense', 'Food at Home', 50.25, '2023-05-01', '12:30:00')  
# category_wise_expense('2021-05-01', '2023-05-30')
#month_wise_expense()
#print(monthly_expense('May'))
#print(category_wise_expense_quantity('2021-05-01', '2023-05-30'))
#month_wise_saving()
#calc_variance()
#monthly_saving("May")
#classify_expense("May")