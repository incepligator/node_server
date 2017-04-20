module.exports = function (app) {
    app.get('/', function(req, res , next) {
        res.render("pages/index", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('/service', function(req, res , next) {
        res.render("pages/service", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });
};
