import os
from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, static_folder='build/', static_url_path='/')

os.environ['APP_SETTINGS'] = "config.DevelopmentConfig"
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Book
from models import User

@app.route("/")
def hello():
    return app.send_static_file('index.html')

@app.route("/add")
def add_book():
    book_id=request.args.get('id')
    name=request.args.get('name')
    author=request.args.get('author')
    published=request.args.get('published')
    try:
        book=Book(
            id=book_id,
            name=name,
            author=author,
            published=published
        )
        db.session.add(book)
        db.session.commit()
        return "Book added. book id={}".format(book.id)
    except Exception as e:
	    return(str(e))

@app.route("/getall",methods=['GET'])
def get_all():
    try:
        books=Book.query.all()
        return  jsonify([e.serialize() for e in books])
    except Exception as e:
	    return(str(e))
    return render_template("Upload.js")

@app.route("/user")
def get_user():
    try:
        users=User.query.all()
        return  jsonify([e.serialize() for e in users])
    except Exception as e:
	    return(str(e))


@app.route("/get/<id_>")
def get_by_id(id_):
    try:
        book=Book.query.filter_by(id=id_).first()
        return jsonify(book.serialize())
    except Exception as e:
	    return(str(e))

@app.route("/add/form",methods=['GET', 'POST'])
def add_book_form():
    if request.method == 'POST':
        name=request.form.get('name')
        author=request.form.get('author')
        published=request.form.get('published')
        try:
            book=Book(
                name=name,
                author=author,
                published=published
            )
            db.session.add(book)
            db.session.commit()
            return "Book added. book id={}".format(book.id)
        except Exception as e:
            return(str(e))
    return render_template("getdata.html")

if __name__ == '__main__':
    app.run()
