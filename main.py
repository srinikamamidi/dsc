from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        return render_template('sucess.html')
    return render_template('register.html')
if __name__ =='__main__':
    app.run()