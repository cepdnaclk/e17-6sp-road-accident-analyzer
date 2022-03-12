from fastapi import FastAPI
import motor.motor_asyncio
from typing import List
from EntrySchema import EntryModel

DB_PWD = "ClhiKrpQPXLJ3vFS"
DB_URL = "mongodb+srv://pubudu:" + DB_PWD + \
    "@cluster0.pb6tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

client = motor.motor_asyncio.AsyncIOMotorClient(
    DB_URL, serverSelectionTimeoutMS=5000)
db = client['sixsp']
collection = db['dataset']

app = FastAPI()


@app.get("/", response_model=List[EntryModel])
async def read_root():
    dataset = await collection.find().to_list(length=100)
    return dataset
