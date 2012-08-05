import datetime
import cgitb
import 
from google.appengine.ext import db
from google.appengine.api import users

class CreatedTabs(db.Model):
    time = db.TimeProperty()
    created = db.BooleanProperty()

class TabExtensionHandler(webapp2.RequestHandler):
    def post(self, post):
        index = 0
        while find in post:
            stamp = post.find("time")
            CT = CreatedTabs(time = post[stamp+4:stamp+15])
            CT.put()
            del post[stamp:stamp+4]
        

