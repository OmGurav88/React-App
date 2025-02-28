# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, jsonify, request
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/data')
def get_time():

    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"pythonfdef"
        }

# Dummy data for demonstration
dummy_billers = {
    '123': {'billDate': '2025-03-15', 'isPotentialBiller': True},
    '456': {'billDate': '2025-04-20', 'isPotentialBiller': False},
}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    biller_id = data.get('billerId')
    result = dummy_billers.get(biller_id, {'billDate': 'Unknown', 'isPotentialBiller': False})
    return jsonify(result)

    
# Running app
if __name__ == '__main__':
    app.run(host="127.0.0.1", port= 5000,debug=True)
