from flask import Flask 
from timestamp import Timestamp
import threading

app = Flask(__name__)

@app.route("/timestamp")
def timestamps():
    time = Timestamp()
    return {"time": time}

if __name__ == "__main__":
    threading.Thread(target=Timestamp).start()
    app.run(debug=True)