from flask import Flask, render_template, request, url_for

app = Flask(__name__)

@app.route("/", methods=["POST","GET"])
@app.route("/home", methods=["POST","GET"])
def home():
    return render_template("index.html")

@app.route('/freelance', methods=["POST", "GET"])
def freelance():
    return render_template("freelance.html")

if __name__ == "__main__":
    app.run(debug = True, host = "0.0.0.0", port = 8000)