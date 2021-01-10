# Information

Its a basic REST Hardware and Software Information Server

# Installation

npm required

clone the repo

npm install

# Startup

npm start

# Access

You can get the values via the rest api

http://localhost:8082/

# REST Api

* /getSystem get Informations about the System
* /getBIOS get Informations about the Bios
* /getMainboard get Informations about the Mainboard
* /getChassis get Informations about the Chassis
* /getCPU get Informations about the CPU(s)
* /getCPUSpeed get the CPU Core Speeds
* /getCPUTemp get the CPU Core and Package Temps
* /getRAM get Informations about the RAM Modules
* /getGPU get Informations about the GPU(s)
* /getDisks get Informations about the Disk(s)
* /getNetwork get Informations about the Network(s)
* /getWifi get Informations about the Wireless Network(s)
* /getOS get Infortmations about the Operation System
* /getPartitions get Informations about the Partition(s)
* /getCPULoad get the CPU Load from the System
* /getRAMLoad get the RAM Load from the System
* /getNetworkStats get the Network(s) Connections Informations
* /getProcesses get all running tasks

# Credit

* [sebhildebrandt](https://systeminformation.io/) for the Systeminformation NPM Module
