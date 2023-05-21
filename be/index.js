const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
require('dotenv').config();

const { Activity } = require("./model/ActivityModel");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/api/create-activity' , async (req, res) => {
    const {activityType , title , dateTime , duration , energyBurn , distance , description} = req.body;

    try {
        const newActivity = new Activity({
            activityType: activityType,
            title: title,
            dateTime: dateTime,
            duration: duration,
            distance: distance,
            description: description
        });
        const insertedActivity = await newActivity.save();
        console.log('insertedActivity: ', insertedActivity)
        return res.status(201).json(insertedActivity);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }

});


const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});