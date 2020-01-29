const controller = require('../controller/controller');

module.exports = app => {

    app.post('/', controller.tambahCourse)
    app.get('/', controller.getdata)

}