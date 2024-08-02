
from flask import Flask, request, jsonify, render_template
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    query = data.get('query', '')

    try:
        response = str(eval(query))
    except:
        response = 'Invalid input'

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
