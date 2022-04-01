from fastapi import FastAPI
import motor.motor_asyncio
from typing import List
import requests
from dotenv import dotenv_values

from EntrySchema import EntryModel, WeatherCondModel

DB_URL = "mongodb+srv://pubudu:" + dotenv_values(".env")['DB_PWD'] + \
    "@cluster0.pb6tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

OWM_BASE = 'https://api.openweathermap.org/data/2.5/weather?'
OWM_QUERY = OWM_BASE + 'lat=35&lon=139&appid=' + dotenv_values(".env")['OWM_KEY']

client = motor.motor_asyncio.AsyncIOMotorClient(
    DB_URL, serverSelectionTimeoutMS=5000)
db = client['sixsp']
collection = db['dataset']

app = FastAPI()


@app.get("/all", response_model=List[EntryModel])
async def read_root():
    dataset = await collection.find().to_list(length=100)
    return dataset


@app.get("/map", response_model=List[WeatherCondModel])
async def read_root(cond: str):
    dataset = await collection.find({"weather_cond": cond}, {"latitude": 1, "longitude": 1, "weather_cond": 1}).to_list(length=100)
    return dataset


@app.get("/weather")
async def read_root():
    r = requests.get(OWM_QUERY)
    return r.json()


@app.get("/test")
async def read_root():
    return True
