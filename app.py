from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('test.html')

@app.route('/style.css')
def index1():
    return render_template('style.css')

@app.route('/script.js')
def index2():
    return render_template('script.js')

@app.route('/int_maison.png')
def index3():
    return render_template('int_maison.png')


if __name__ == '__main__':
    app.run()