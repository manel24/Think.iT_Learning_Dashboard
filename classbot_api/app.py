from chalice import Chalice
from chalicelib import feedback_controller, fellows_controller, modules_controller,utils
import requests

app = Chalice(app_name='classbot_api')
app.debug = True

@app.route('/',cors=True)
def index():
    return utils.do_get_request('https://classbot.think-it.io/users',{'Authorization': 'nhz4lx59tmrj56pxemm4rf9vryw6wupwnh1mf4bs'}) 

@app.route('/module/progress', methods=['POST'], cors=True)
def fellow_modules():
   json_body = app.current_request.json_body
   return modules_controller.get_module_fellows(json_body["module_id"])

@app.route('/modules', methods=['GET'], cors=True)
def modules():
   return modules_controller.get_all_modules()

@app.route('/fellows', methods=['GET'])
def create_user():
    return {'user': ''}


