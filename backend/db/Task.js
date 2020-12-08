var mongoose = require('mongoose');

try {
    mongoose.createConnection('mongodb+srv://Rohan:incorrect1999@sllab.7hkwk.mongodb.net/Task?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected Task")
    }
    );
} catch (error) {
    console.log("could not connect Task");
}