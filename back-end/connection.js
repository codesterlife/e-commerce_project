var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Diyana:Diyana@cluster0.bmbqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> {
    console.log("Connected to MongoDB")
    })
    .catch((err) => {
    console.log(err)
})