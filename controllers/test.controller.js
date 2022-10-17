
module.exports = {
    show: async (req, res, next) => {
        res.render("create")
    },
    test: async (req, res) => {
        console.log("hello from the btn")
        res.render("index")
        },
}