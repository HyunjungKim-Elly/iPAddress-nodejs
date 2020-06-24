var mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://ellykim:pass123word@cluster0-yohze.mongodb.net/user?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);