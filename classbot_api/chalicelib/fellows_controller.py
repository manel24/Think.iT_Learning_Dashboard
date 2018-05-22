
from chalicelib import database_manager, config
import requests


def get_all_fellows():
    r = requests.get(config.CLASSBOT_DATA_URL, headers={
                     'Authorization': config.CLASS_BOT_TOKEN})
    return r.json()
