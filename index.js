const moneysocket = {};

// utility classes
moneysocket.Uuid = require('./moneysocket/utl/uuid.js').Uuid;
moneysocket.Timestamp = require('./moneysocket/utl/timestamp.js').Timestamp;
moneysocket.BinUtl = require('./moneysocket/utl/bin.js').BinUtl;
moneysocket.BigSize = require('./moneysocket/utl/bolt/bigsize.js').BigSize;
moneysocket.UInt64 = require('./moneysocket/utl/uint64.js').UInt64;

// stack classes
moneysocket.ProviderStack = require(
    "./moneysocket/stack/provider.js").ProviderStack;
moneysocket.ConsumerStack = require(
    "./moneysocket/stack/consumer.js").ConsumerStack;
moneysocket.Wad = require("./moneysocket/wad/wad.js").Wad;

// layer classes
moneysocket.Layer = require("./moneysocket/layer/layer.js").Layer;
moneysocket.OutgoingWebsocketLayer = require(
    "./moneysocket/layer/outgoing_websocket.js").OutgoingWebsocketLayer;
moneysocket.OutgoingRendezvousLayer = require(
    "./moneysocket/layer/outgoing_rendezvous.js").OutgoingRendezvousLayer;
moneysocket.ConsumerLayer = require(
    "./moneysocket/layer/consumer.js").ConsumerLayer;
moneysocket.ConsumerTransactLayer = require(
    "./moneysocket/layer/consumer_transact.js").ConsumerTransactLayer;
moneysocket.ProviderLayer = require(
    "./moneysocket/layer/provider.js").ProviderLayer;
moneysocket.ProviderTransactLayer = require(
    "./moneysocket/layer/provider_transact.js").ProviderTransactLayer;

// nexus classes
moneysocket.Nexus = require("./moneysocket/nexus/nexus.js").Nexus;

// beacon classes
moneysocket.MoneysocketBeacon = require(
    './moneysocket/beacon/beacon.js').MoneysocketBeacon;
moneysocket.SharedSeed = require(
    './moneysocket/beacon/shared_seed.js').SharedSeed;
moneysocket.WebsocketLocation = require(
    './moneysocket/beacon/location/websocket.js').WebsocketLocation;

// message classes
moneysocket.MoneysocketRequest = require(
    './moneysocket/message/request/request.js').MoneysocketRequest;
moneysocket.REQUEST_SUBCLASSES = require(
    './moneysocket/message/request/request.js').REQUEST_SUBCLASSES;
moneysocket.MoneysocketNotification = require('./moneysocket/message/notification/notification.js').MoneysocketNotification;
moneysocket.NOTIFICATION_SUBCLASSES = require('./moneysocket/message/notification/notification.js').NOTIFICATION_SUBCLASSES;


module.exports = moneysocket;
