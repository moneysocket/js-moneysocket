const moneysocket = {};

moneysocket.Uuid = require('./moneysocket/utl/uuid.js').Uuid;
moneysocket.ProviderStack = require(
    "./moneysocket/stack/provider.js").ProviderStack;
moneysocket.ConsumerStack = require(
    "./moneysocket/stack/consumer.js").ConsumerStack;
moneysocket.Wad = require("./moneysocket/wad/wad.js").Wad;

moneysocket.MoneysocketBeacon = require(
    './moneysocket/beacon/beacon.js').MoneysocketBeacon;
moneysocket.WebsocketLocation = require(
    './moneysocket/beacon/location/websocket.js').WebsocketLocation;

module.exports = moneysocket;
