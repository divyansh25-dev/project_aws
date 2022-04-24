from flask import Flask, render_template, request, redirect, send_file,jsonify
from flask_cors import CORS, cross_origin
from functions import create_table,delete_func,deletee_table,insert_function,update_firstn_function,update_lastn_function,get_item

app = Flask(__name__)

@app.route('/')
def entry_point():
    return 'Hello World!'


@app.route("/create_table", methods=['POST'])
@cross_origin()
def create():
    if request.method == "POST":
        data=request.get_json(force=True)
        create_table(data)
        return jsonify(data)


@app.route("/insert_rec", methods=['POST'])
@cross_origin()
def insert():
    if request.method == "POST":
        data=request.get_json(force=True)
        insert_function(data)
        return jsonify(data)



@app.route("/one_rec", methods=['POST'])
@cross_origin()
def getitem():
    if request.method == "POST":
        data=request.get_json(force=True)
        x=get_item(data)
        return jsonify(x)

@app.route("/update_f", methods=['POST'])
@cross_origin()
def update1():
    if request.method == "POST":
        data=request.get_json(force=True)
        update_firstn_function(data)
        return jsonify(data)



@app.route("/update_l", methods=['POST'])
@cross_origin()
def update2():
    if request.method == "POST":
        data=request.get_json(force=True)
        update_lastn_function(data)
        return jsonify(data)



@app.route("/del_rec", methods=['POST'])
@cross_origin()
def del_rec():
    if request.method == "POST":
        data=request.get_json(force=True)
        delete_func(data)
        return jsonify(data)


@app.route("/del_tab", methods=['POST'])
@cross_origin()
def del_tab():
    if request.method == "POST":
        data=request.get_json(force=True)
        deletee_table(data)
        return jsonify(data)









if __name__ == '__main__':
    app.run(host ='0.0.0.0', port = 5001, debug = True) 
