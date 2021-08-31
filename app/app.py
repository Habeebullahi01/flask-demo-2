from flask import Flask, request, render_template
# from werkzeug.wrappers import response
import requests
# import flask


app = Flask(__name__)


@app.route("/")
def hello_world():
    content = ''
    # content.status_code
    # print(content.json())
    return render_template('index.html', my_title='My Flask App', my_content=content)


@app.route("/echo", methods=['GET', 'POST'])
def shout():
    if request.method == 'POST':
        form_data = request.form['sent_data']
        response = form_data
    else:
        _tron = request.args.get('sent_data', '')
        response = _tron

    return render_template('echo.html', my_title='My Flask App\'s response', content=response, method=request.method)


# @app.route("/echo")
# def echo():
#     to_echo = request.args.get("echo", "")
#     response = "{}".format(to_echo)
#     return response

# print(requests.__version__)
