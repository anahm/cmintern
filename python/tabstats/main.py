#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import string
import json
from google.appengine.ext import db
from google.appengine.api import users

class TabCount(db.Model):
	time = db.StringProperty(required=True)
	tabsCount = db.IntegerProperty(required=True)

class TabExtensionHandler(webapp2.RequestHandler):
    def post(self):
    	events = json.loads(self.request.get("events"))
        for event in events:
        	e = TabCount(time = event.time,
        				 tabsCount = event.tabs)
        	e.put()
        self.response.out.write("Boo")

class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.out.write('Hello world!')

app = webapp2.WSGIApplication([('/post', TabExtensionHandler), ('/', MainHandler)],
                              debug=True)