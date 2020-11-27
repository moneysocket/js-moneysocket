const moneysocket = {};

moneysocket.Uuid = require('./moneysocket/utl/uuid.js').Uuid;
moneysocket.ProviderStack = require(
    "./moneysocket/stack/provider.js").ProviderStack;
moneysocket.ConsumerStack = require(
    "./moneysocket/stack/consumer.js").ConsumerStack;
moneysocket.Wad = require("./moneysocket/wad/wad.js").Wad;

moneysocket.MoneysocketBeacon = require(
    './moneysocket/beacon/beacon.js').MoneysocketBeacon;
moneysocket.SharedSeed = require(
    './moneysocket/beacon/shared_seed.js').SharedSeed;
moneysocket.WebsocketLocation = require(
    './moneysocket/beacon/location/websocket.js').WebsocketLocation;

moneysocket.BinUtl = require('./moneysocket/utl/bin.js').BinUtl;
moneysocket.BigSize = require('./moneysocket/utl/bolt/bigsize.js').BigSize;
moneysocket.UInt64 = require('./moneysocket/utl/uint64.js').UInt64;

module.exports = moneysocket;
