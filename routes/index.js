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

    app.get('/contact-us', function(req, res , next) {
        res.render("pages/contact", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('/about-us', function(req, res , next) {
        res.render("pages/about", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('/gallery', function(req, res , next) {
        res.render("pages/gallery", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('/blog-fullwidth', function(req, res , next) {
        res.render("pages/blog-fullwidth", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('/blog-left-sidebar', function(req, res , next) {
        res.render("pages/blog-left-sidebar", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('/blog-right-sidebar', function(req, res , next) {
        res.render("pages/blog-right-sidebar", {
            homepageContent: "my country is Nepal",
            title: "Mount Everest"
        });
    });

    app.get('*', function(req, res , next) {
        res.render("pages/404");
    });
};
