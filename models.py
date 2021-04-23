from app import db

class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    author = db.Column(db.String(150))
    published = db.Column(db.String(100))

    def __init__(self, name, author, published):
        self.name = name
        self.author = author
        self.published = published

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'author': self.author,
            'published':self.published
        }

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100))
    status = db.Column(db.String(100))

    def __init__(self, email, status):
        self.email = email
        self.status = status

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
            'status': self.status
}

class Participant(db.Model):
    __tablename__ = 'participants'

    id = db.Column(db.String(100))
    name = db.Column(db.String(100))
    major = db.Column(db.String(100))
    interest = db.Column(db.String(100))
    leader = db.Column(db.String(100))
    role_model = db.Column(db.String(100))
    myself = db.Column(db.String(100))
    personality = db.Column(db.String(100))
    preference = db.Column(db.String(100))
    feedback = db.Column(db.String(100))
    meeting = db.Column(db.String(100))
    areaPreference = db.Column(db.String(100))
    gain = db.Column(db.String(100))
    consideration = db.Column(db.String(100))
    role = db.Column(db.String(100))
    timeStamp = db.Column(db.String(100))
    pref1 = db.Column(db.String(100))
    pref2 = db.Column(db.String(100))
    pref3 = db.Column(db.String(100))
    comment = db.Column(db.String(100))
    uid = db.Column(db.String(100))

    def __init__(self, id, name, major, interest, leader, role_model, myself, personality, preference, meeting, areaPreference, gain, consideration, role, timeStamp, pref1, pref2, pref3, comment, uid):
        self.id = id
        self.name = name
        self.major = major
        self.interest = interest
        self.leader = leader
        self.role_model = role_model
        self.myself = myself
        self.personality = personality
        self.preference = preference
        self.feedback = feedback
        self.meeting = meeting
        self.areaPreference = areaPreference
        self.gain = gain
        self.consideration = consideration
        self.role = role
        self.timeStamp = timeStamp
        self.pref1 = pref1
        self.pref2 = pref2
        self.pref3 = pref3
        self.comment = comment
        self.uid = uid

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'major': self.major,
            'interest': self.interest,
            'leader': self.leader,
            'role_model': self.role_model,
            'myself': self.myself,
            'personality': self.personality,
            'preference': self.preference,
            'feedback': self.feedback,
            'meeting': self.meeting,
            'areaPreference': self.areaPreference,
            'gain': self.gain,
            'consideration': self.gain,
            'role': self.role,
            'timeStamp': self.timeStamp,
            'pref1': self.pref1,
            'pref2': self.pref2,
            'pref3': self.pref3,
            'comment': self.comment,
            'uid': self.uid
}
