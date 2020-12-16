"use strict";
var express = require('express');
var cors = require('cors')
var si = require('systeminformation');

var app = express();

app.use(cors())

const PORT = 8082;

app.listen(PORT, () => {
    console.log(`Started listening on port `+PORT);
});

app.get('/getCPU', function (req, res) {
    res.type("application/json");
    si.cpu()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getCPUTemp', function (req, res) {
    res.type("application/json");
    si.cpuTemperature()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getRAM', function (req, res) {
    res.type("application/json");
    si.memLayout()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getGPU', function (req, res) {
    res.type("application/json");
    si.graphics()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getDisks', function (req, res) {
    res.type("application/json");
    si.diskLayout()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getNetwork', function (req, res) {
    res.type("application/json");
    si.networkInterfaces()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getWifi', function (req, res) {
    res.type("application/json");
    si.wifiNetworks()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getOS', function (req, res) {
    res.type("application/json");
    si.osInfo()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getPartitions', function (req, res) {
    res.type("application/json");
    si.fsSize()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getCPULoad', function (req, res) {
    res.type("application/json");
    si.currentLoad()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getRAMLoad', function (req, res) {
    res.type("application/json");
    si.mem()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getDiskLoad', function (req, res) {
    res.type("application/json");
    si.disksIO()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getNetworkStats', function (req, res) {
    res.type("application/json");
    si.networkStats()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

app.get('/getProcesses', function (req, res) {
    res.type("application/json");
    si.processes()
        .then(data => res.send(data))
        .catch(error => res.send(error));
});

