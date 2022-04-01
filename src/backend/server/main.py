from fastapi import FastAPI
import motor.motor_asyncio
from typing import List
from dotenv import dotenv_values

from EntrySchema import EntryModel, WeatherCondModel

DB_URL = "mongodb+srv://pubudu:" + dotenv_values(".env")['DB_PWD'] + \
    "@cluster0.pb6tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

client = motor.motor_asyncio.AsyncIOMotorClient(
    DB_URL, serverSelectionTimeoutMS=5000)
db = client['sixsp']
collection = db['dataset']

app = FastAPI()


@app.get("/all", response_model=List[EntryModel])
async def read_root():
    dataset = await collection.find().to_list(length=100)
    return dataset


@app.get("/map/", response_model=List[WeatherCondModel])
async def read_root(cond: str):
    dataset = await collection.find({"weather_cond": cond}, {"latitude": 1, "longitude": 1, "weather_cond": 1}).to_list(length=100)
    return dataset
