const path = requiere("path")

const controladorPrincipal =  {
    home: (req, res)=>{
        res.sendfile(path.join(__dirname,"../views/home.html"))
    },

    about: (req, res)=>{
        res.sendfile(path.join(__dirname,"../views/about.html"))
    },
}
module.exports = controladorPrincipal;