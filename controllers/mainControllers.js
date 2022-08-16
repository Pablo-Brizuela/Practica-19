const controlador = {

home:  (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

}

module.exports = controlador;