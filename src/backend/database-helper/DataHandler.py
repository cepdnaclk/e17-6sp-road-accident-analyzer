import csv
import motor.motor_asyncio
import asyncio
from EntrySchema import EntryModel

DB_URL = "mongodb+srv://pubudu:ClhiKrpQPXLJ3vFS@cluster0.pb6tv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


def get_connection() -> tuple:
    client = motor.motor_asyncio.AsyncIOMotorClient(
        DB_URL, serverSelectionTimeoutMS=5000)
    db = client['sixsp']
    collection = db['dataset']
    return client, db, collection


def get_dataset(path: str) -> list:
    # provide 'path' from the executed directory
    dataset = []
    with open(path) as file:
        csvreader = csv.reader(file)
        for row in csvreader:
            dataset.append(row)
    return dataset


def generate_entry(line: list):
    entry_data = {
        'severity': int(line[0]),
        'latitude': float(line[1]),
        'longitude': float(line[2]),
        'side': line[3],
        'city': line[4],
        'county': line[5],
        'state': line[6],
        'humidity': float(line[7]),
        'temporature': float(line[8]),
        'pressure': float(line[9]),
        'visibility': float(line[10]),
        'wind_dir': line[11],
        'weather_cond': line[12]
    }
    # entry = EntryModel(**entry_data)
    return entry_data


async def post_entry(entry, collection):
    result = await collection.insert_one(entry)
    # print('result %s' % repr(result.inserted_id))


def post_dataset(dataset, collection):
    for i in range(len(dataset)):
        print('entry no', i)
        entry = generate_entry(dataset[i])
        run_thread(post_entry(entry, collection))


async def get_dataset(collection):
    dataset = await collection.find().to_list(1000)
    print(dataset)


def run_thread(func):
    loop = asyncio.get_event_loop()
    loop.run_until_complete(func)


if __name__ == '__main__':
    client, db, collection = get_connection()
    # dataset = get_dataset('src/backend/database-helper/first100.csv')
    run_thread(get_dataset(collection))
