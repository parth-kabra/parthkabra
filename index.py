from flask import Flask, render_template, request, url_for

app = Flask(__name__)

@app.route("/", methods=["POST","GET"])
@app.route("/home", methods=["POST","GET"])
def home():

    if (request.method == "POST"):
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["msg"]


    return render_template("index.html")

@app.route('/freelance', methods=["POST", "GET"])
def freelance():
    return render_template("freelance.html")

if __name__ == "__main__":
    app.run(host = "0.0.0.0", debug=True)