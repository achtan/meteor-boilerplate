Users = Meteor.users;

var Schema = {};

Schema.User = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Array,
    minCount: 1,
    defaultValue: ["admin"]
  },
  "roles.$": {
    type: String,
    optional: true,
    allowedValues: [
        "admin", "seller"
    ]
  }
});

Meteor.users.attachSchema(Schema.User);
