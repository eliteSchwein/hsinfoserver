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

app.get('/', function (req, res) {
	res.type("application/json");
	res.send('{"status":"ok"}');
});

app.get('/getCPU', async function (req, res) {
    res.type("application/json");
    const data = await si.cpu();
    res.send(data);
});

app.get('/getCPUTemp', async function (req, res) {
    res.type("application/json");
    const data = await si.cpuTemperature();
    res.send(data);
});

app.get('/getRAM', async function (req, res) {
    res.type("application/json");
    const data = await si.memLayout();
    res.send(data);
});

app.get('/getGPU', async function (req, res) {
    res.type("application/json");
    const data = await si.graphics();
    res.send(data);
});

app.get('/getDisks', async function (req, res) {
    res.type("application/json");
    const data = await si.diskLayout();
    res.send(data);
});

app.get('/getNetwork', async function (req, res) {
    res.type("application/json");
    const data = await si.networkInterfaces();
    res.send(data);
});

app.get('/getWifi', async function (req, res) {
    res.type("application/json");
    const data = await si.wifiNetworks();
    res.send(data);
});

app.get('/getOS', async function (req, res) {
    res.type("application/json");
    const data = await si.osInfo();
    res.send(data);
});

app.get('/getPartitions', async function (req, res) {
    res.type("application/json");
    const data = await si.fsSize();
    res.send(data);
});

app.get('/getCPULoad', async function (req, res) {
    res.type("application/json");
    const data = await si.currentLoad();
    res.send(data);
});

app.get('/getRAMLoad', async function (req, res) {
    res.type("application/json");
    const data = await si.mem();
    res.send(data);
});

app.get('/getDiskLoad', async function (req, res) {
    res.type("application/json");
    const data = await si.disksIO();
    res.send(data);
});

app.get('/getNetworkStats', async function (req, res) {
    res.type("application/json");
    const data = await si.networkStats();
    res.send(data);
});

app.get('/getProcesses', async function (req, res) {
    res.type("application/json");
    const data = await si.processes();
    res.send(data);
});

