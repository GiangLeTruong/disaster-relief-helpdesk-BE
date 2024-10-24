const getHomepage = async (req, res) => {
    //Process data -> call model
    res.render('Home.ejs')

}
const getAbout = (req, res) => {
    //Process data -> call model
    res.render('sample.ejs')
}

const getMap = (req, res) => {
    //Process data -> call model
    res.render('HeatMap.ejs')
}

module.exports = {
    getHomepage,
    getAbout,
    getMap
}