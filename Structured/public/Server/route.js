/**
 * Created by basant on 7/24/2016.
 */
module.exports = function(app) {
    var model = require("./model.js" );
    var connection = require("./connection.js");
    var mongoose = require('mongoose');
    var Info = mongoose.model('info', model, 'infos');
    mongoose.connect(connection.connectionString);

    setRoutes();

    function GetAllAddress(req,res){
        Info.find(function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        });
    }

    function GetAddressByID(req,res){
        var id = req.params.id;
        Info.findOne({'_id': mongoose.Types.ObjectId(id)},function (err, docs) {
            if (err) return console.error(err);
            res.json(docs);
        });
    }

    function SaveAddress(req,res){
        var info = new  Info (
            req.body
        );

        info.save(function(err){
            if (err) return console.error(err);
            res.json(info);
        });
    }

    function DeleteAddressByID(req,res){
        var id = req.params.id;
        Info.remove( {'_id': mongoose.Types.ObjectId(id)}, function(error,docs){
            if (error) {
                console.log(error);
            }
            res.json(docs);
        })
    }

    function UpdateAddressByID(req,res){
        var id = req.params.id;
        console.log(mongoose.Types.ObjectId(id));
        var query = { '_id': mongoose.Types.ObjectId(id) };
        var update = { '$set': { 'firstname': req.body.firstname, 'lastname':req.body.lastname,'phone':req.body.phone,'email':req.body.email} };
        var options = { 'new': true };
        Info.findOneAndUpdate(query, update, options, function (err, docs) {
            if (err)   console.log(err);
            res.json(docs);
        });
    }

    function setRoutes()
    {

        app.get('/getinfo',GetAllAddress);
        app.get('/getinfo/:id',GetAddressByID);
        app.post('/getinfo',SaveAddress);
        app.delete('/getinfo/:id',DeleteAddressByID);
        app.put('/getinfo/:id',UpdateAddressByID);
    }

};