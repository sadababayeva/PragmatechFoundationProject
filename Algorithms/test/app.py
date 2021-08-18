from flask import Flask,render_template, request

Books = []

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create_book', methods = ['GET', 'POST'])
def create_book():
    if request.method == 'POST':
        Name = request.form['Name']
        Author = request.form['Author']
        Year = request.form['Year']
        Number = request.form['Number']
        Summary = request.form['Summary']
        Book = {
            'Name': Name,
            'Author': Author,
            'Year': Year,
            'Number': Number,
            'Summary': Summary
        } 
        Books.append(Book)
    return render_template('create.html')


@app.route('/show')
def show():
    return render_template('show.html', Books = Books)


if __name__=='__main__':
    app.run(debug=True)
