const stateModel = require('../models/state');
module.exports = {
    create: function (req, res, next) {
        stateModel.create({
            state: req.body.state
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "The state is added.",
                    data: null
                });

        });
    },
    findAll: function (req, res, next) {
        let states = [];
        stateModel.find({}, function (err, states) {
            if (err) {
                next(err);
            } else {
                for (let state1 of states) {
                    states.push({
                        id: state1._id,
                        state: state1.state,
                    });
                }
                res.json({
                    status: "success",
                    message: "Showing all states",
                    data: {
                        states: states
                    }
                });

            }
        });
    },
}