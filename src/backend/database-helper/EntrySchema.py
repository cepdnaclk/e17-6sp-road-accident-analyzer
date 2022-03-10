from pydantic import BaseModel


class EntryModel(BaseModel):
    severity: int
    latitude: float
    longitude: float
    side: str
    city: str
    county: str
    state: str
    humidity: float
    temporature: float
    pressure: float
    visibility: float
    wind_dir: str
    weather_cond: str
