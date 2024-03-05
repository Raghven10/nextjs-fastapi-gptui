from peewee import *

DB = SqliteDatabase("./data/gpt.db")
DB.connect()
