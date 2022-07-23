from calendar import c
from email import message
from email.policy import default
from enum import unique
from sre_constants import CATEGORY_SPACE
from unicodedata import category
from wsgiref.validate import validator
from flask import Flask, request,render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

from pkg_resources import working_set
import sqlalchemy
from flask_migrate import Migrate 
from flask_cors import CORS
from datetime import date, datetime, timedelta
from flask_login import UserMixin,  login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
import os





app = Flask(__name__) 

ENV = 'dev'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Esco@localhost/donor_information_table'

else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = 'SUSHENA_PROJECT'

db = SQLAlchemy(app)
CORS(app)
migrate = Migrate(app,db)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(id):
    return Donor_info_details.query.get(int(id))


class Donor_info_details(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    category = db.Column(db.String(200))
    donor_name1 = db.Column(db.String(200))
    donor_name2 = db.Column(db.String(200))
    dob = db.Column(db.Date)
    gender = db.Column(db.String(200))
    phone_number = db.Column(db.Integer,unique= True)
    email = db.Column(db.String(200),unique = True)
    pan_number = db.Column(db.String(200),unique = True)
    state = db.Column(db.String(200))
    city = db.Column(db.String(200))
    pincode = db.Column(db.Integer)
    nationality = db.Column(db.String(200))
    trs = db.Column(db.String(200))
    range = db.Column(db.Integer)
    date_posted = db.Column(db.DateTime, default = datetime.utcnow)

    def __init__(self,category,donor_name1,donor_name2,dob,gender,phone_number,email,pan_number,state,city,pincode,nationality,trs,range):
        self.category = category
        self.donor_name1 = donor_name1
        self.donor_name2 = donor_name2
        self.dob = dob
        self.gender = gender
        self.phone_number = phone_number
        self.email = email
        self.pan_number = pan_number
        self.state = state
        self.city = city
        self.pincode = pincode
        self.nationality = nationality
        self.trs = trs
        self.range = range

@app.route('/')
def index():
    return render_template('form_preterm.html')



@app.route('/submit', methods = ['POST'])
def data():
    if request.method == 'POST':
        category = request.form['category']
        donor_name1 = request.form['donor_name1']
        donor_name2 = request.form['donor_name2']
        dob = request.form['dob']
        gender = request.form['gender']
        phone_number = request.form['phone_number']
        email = request.form['email']
        pan_number = request.form['pan_number']
        state = request.form['state']
        city = request.form['city']
        pincode = request.form['pincode']
        nationality = request.form['nationality'] 
        trs = request.form['trs']
        range = request.form['range']
        # print(donor_name1,donor_name2,dob,gender,phone_number,email,pan_number,state,city,pincode,nationality,trs)
        data = Donor_info_details(category,donor_name1,donor_name2,dob,gender,phone_number,email,pan_number,state,city,pincode,nationality,trs,range)
        db.session.add(data)
        db.session.commit()
        return render_template('thank_you.html')
        # param_dict = {
        #      'MID':'WorldP64425807474247',
        #     'ORDER_ID':'str(datetime.datetime.now().timestamp())',
        #     'TXN_AMOUNT':'1',
        #     'CUST_ID':'email',
        #     'INDUSTRY_TYPE_ID':'Retail',
        #     'WEBSITE':'WEBSTAGING',
	    #     'CALLBACK_URL':'http://localhost/pythonKit/response.cgi',
        # }
        # param_dict['CHECKSUMHASH'] = Checksum.generate_checksum(param_dict,MERCHANT_KEY)
        # return render_template('paytm.html')

@app.route('/view_data')
def view_data():
    donor_details = Donor_info_details.query.all()
    working_details = []
    for detail in donor_details:
        i = detail.range
        working_details.insert(0,i)
    workingDetails = sum(working_details)

    donation_count = []
    for d_details in donor_details:
        i = d_details.id
        donation_count.insert(0,i)
    all_details = len(donation_count)

    #By date
    # donor_details_by_date = Donor_info_details.query.filter(func.DATE(db..datetime) == date.today())
    
    donor_details_by_date = Donor_info_details.query.filter(func.DATE(Donor_info_details.date_posted) == date.today() )
    working_details_by_date = []
    for date_detail in donor_details_by_date:
        i = date_detail.date_posted 
        working_details_by_date.insert(0,i)
    all_details_date = len(working_details_by_date)

    #Individual

    donor_details_preterm = Donor_info_details.query.filter_by(category = 'Preterm Babies').all()
    working_details_preterm = []
    for p_detail in donor_details_preterm:
        i = p_detail.range
        working_details_preterm.insert(0,i)
    workingDetailsPreterm = sum(working_details_preterm)

    donor_details_lac = Donor_info_details.query.filter_by(category = 'Lactating Mothers').all()
    working_details_lac = []
    for l_detail in donor_details_lac:
        i = l_detail.range
        working_details_lac.insert(0,i)
    workingDetailsLactating = sum(working_details_lac)

    donor_details_both = Donor_info_details.query.filter_by(category = 'Both').all()
    working_details_both = []
    for both_detail in donor_details_both:
        i = both_detail.range
        working_details_both.insert(0,i)
    workingDetailsBoth = sum(working_details_both)

    
    return render_template('view_data.html',workingDetails=workingDetails,all_details=all_details, workingDetailsPreterm= workingDetailsPreterm,workingDetailsLactating= workingDetailsLactating,workingDetailsBoth=workingDetailsBoth, all_details_date = all_details_date)

@app.route('/view_donors')
def view_donors():
    our_donors = Donor_info_details.query.all()
    our_donors_lac = Donor_info_details.query.filter_by(category = 'Both').all()
    our_donors_lac_count = Donor_info_details.query.filter_by(category = 'Both').count()
    our_donors_both = Donor_info_details.query.filter_by(category = 'Lactating Mothers').all()
    our_donors_both_count = Donor_info_details.query.filter_by(category = 'Lactating Mothers').count()
    our_donors_preterm = Donor_info_details.query.filter_by(category = 'Preterm Babies').all()
    our_donors_preterm_count = Donor_info_details.query.filter_by(category = 'Preterm Babies').count()





    return render_template('view_donors.html', our_donors=our_donors, our_donors_lac= our_donors_lac, our_donors_both=our_donors_both,our_donors_both_count=our_donors_both_count,our_donors_lac_count=our_donors_lac_count,our_donors_preterm=our_donors_preterm, our_donors_preterm_count=our_donors_preterm_count)

@app.route('/login', methods = ['GET','POST'])
def login():
    form = LoginForm()
    return render_template('login.html',form = form)

class LoginForm(FlaskForm):
    username = StringField("Username")
    password = PasswordField("Password")
if __name__ =='__main__':
    app.run()