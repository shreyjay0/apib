const districtModel = require('../models/district');
module.exports = {
    create: function (req, res, next) {
        districtModel.create({
            city: req.body.city,
            state: req.body.state
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "success",
                    message: "The district is added.",
                    data: null
                });

        });
    },
    findAll: function (req, res, next) {
        let districts = [];
        districtModel.find({}, function (err, districts) {
            if (err) {
                next(err);
            } else {
                for (let district1 of districts) {
                    districts.push({
                        id: district1._id,
                        city: district1.city,
                        state: district1.state
                    });
                }
                res.json({
                    status: "success",
                    message: "Showing all districts",
                    data: {
                        districts: districts
                    }
                });

            }
        });
    },
}