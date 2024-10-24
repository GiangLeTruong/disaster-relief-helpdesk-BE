const getHomepage = async (req, res) => {
    //Process data -> call model
    res.render('Home')

}
const getAbout = (req, res) => {
    //Process data -> call model
    res.render('sample')
}

module.exports = {
    getHomepage,
    getAbout
}