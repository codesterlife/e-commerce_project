var express =require("express")
require("./connection")
var proCart=require("./model/cart")
var User=require("./model/user")
var cors=require('cors')
var app = express()
app.use(express.json())
app.use(cors())
app.get('/trial', (req, res) => {
    res.send('Message for trial')
})
app.post('/add',async (req, res) => {
    try {
        await proCart(req.body).save()
        res.send({ message: "Product added successfully" })
    } catch (error) {
        console.log(error)
    }
})
app.get('/view', async (req, res) => {
    try {
        var data = await proCart.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
app.post('/sign',async (req, res) => {
    try {
        await User(req.body).save()
        res.send({ message: "Account is created" })
    } catch (error) {
        console.log(error)
    }
})
app.delete("/remove/:id", async (req, res) => {
    try {
       await proCart.findByIdAndDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
})


app.listen(3005,() => {
    console.log("Server is running on port 3005")
})