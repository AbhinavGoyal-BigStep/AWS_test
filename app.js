const app = require("express")();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server is connected at port ${PORT}`);
})