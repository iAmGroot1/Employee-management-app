var mongoose = require('mongoose');

try {
    mongoose.connect('mongodb+srv://Rohan:incorrect1999@sllab.7hkwk.mongodb.net/Employee?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected Employee")
    }
    );
} catch (error) {
    console.log("could not connect Employee");
}