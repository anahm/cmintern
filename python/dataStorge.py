import datetime
import cgitb
import string
import json
from google.appengine.ext import db
from google.appengine.api import users

class CreatedTabs(db.Model):
    time = db.TimeProperty()
    created = db.BooleanProperty()

class TabExtensionHandler(webapp2.RequestHandler):
    def post(self):
    	events = json.loads(self.request.get("events"))
        for event in events:
            self.response.out.write(event.time + " " + event.tabs)
        
app = webapp2.WSGIApplication([('/post', TabExtensionHandler)],
                              debug=True)
                              
def main():
	run_wsgi_app(application)

if __name__ == "__main__":
	main()