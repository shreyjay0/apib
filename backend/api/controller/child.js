const childModel = require('../models/district');
module.exports = {
    create: function (req, res, next) {
        childModel.create({
            name: req.body.name,
            sex:req.body.sex,
            dob:req.body.dob,
            fathername: req.body.fathername,
            mothername: req.body.mothername,
            city: req.body.city,
            state: req.body.state
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "The child is added.",
                    data: null
                });

        });
    },
    findAll: function (req, res, next) {
        let children = [];
        childModel.find({}, function (err, children) {
            if (err) {
                next(err);
            } else {
                for (let child1 of children) {
                    children.push({
                        id: child1._id,
                        fathername: child1.fathername,
                        mothername: child1.mothername,
                        city: child1.city,
                        state: child1.state
                    });
                }
                res.json({
                    status: "success",
                    message: "Showing all children",
                    data: {
                        children: children
                    }
                });

            }
        });
    },
}