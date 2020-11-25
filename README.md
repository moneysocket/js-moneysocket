Moneysocket Protocol implemented in JavaScript
-----

This is a JavaScript library to be included in browser apps for consuming and providing Moneysocket connections for driving Lightning Network payments.

[Donate](https://socket.money/#donate)

Note: This is not intended for Node.js backend applications. It currently only supports outgoing websocket connections. For backend infrastructure, the [Python-based library](https://github.com/moneysocket/py-moneysocket) supports both outgoing websocket connections as well as hosting an incoming websocket server for accepting connections from an app using this library.

Disclaimer!
-----

Moneysocket is still new, under development and is Reckless with your money. Use this stuff at your own risk.

The Version number of this package and on the protocol is set to `0.0.0` for the time being since we anticipate that the protocol specifics will change in breaking ways prior to an 'official' release.


Installing
-----

The NPM package manager can install this library into your project's `node_modules` directory by giving the repository URL:

`$ npm install https://github.com/moneysocket/js-moneysocket`

or by just pointing it to a cloned version on you local filesystem:

`$ npm install /path/to/js-moneysocket`


Consumers and Providers
-----

A Consumer uses API services provided by a Provider and they must be connected to each other in this way to function.

The primary interaction is via the [ConsumerStack](moneysocket/stack/consumer.js) and [ProviderStack](moneysocket/stack/provider.js) classes.

These classes are built to be composed into your application which will behave the way you define by your interactions with the library.

A Consumer can connect with a Provider also provided by a browser-based or other user-facing app, or to a backend Provider such as a [Terminus](https://github.com/moneysocket/terminus) or [Stablewallet daemon](https://github.com/moneysocket/stabled). The Provider can connect with a Consumer app (also can be either a backend service or user-facing app) and provide it with Moneysocket services as implemented by your application.

Since this library only uses outgoing websocket connections as provided by the web browser, to connect to another browser-based app, a Moneysocket [relay](https://github.com/moneysocket/relay) can provide the rendezvous and message-forwarding services.

Usage
-----

There is no formal API documentation as of yet. It is suggested that you observe the implementation of the main [web wallet application class](https://github.com/moneysocket/web-wallet/blob/main/src/js/wallet.js) for how it interacts with the ConsumerStack and ProviderStack to achieve the functionality of a basic wallet.

For more advanced applications, the Moneysocket protocol is defined in a way to allow for custom extensions to the protocol to be added to support a custom application as defined by the application developers. To do this, the application developers can composed their own Stack classes as well as custom Layers, Nexuses, and Messages. These composed with the base classes can be plugged into your application. This isn't particularly well-defined at present, but working examples of this can be seen in the prototype [buyer](https://github.com/moneysocket/prototype/blob/master/browser/src/js/buyer.js) and [seller](https://github.com/moneysocket/prototype/blob/master/browser/src/js/seller.js) apps which each implement one end of an extension protocol.

Project Links
-----

- [Homepage](https://socket.money)
- [Awesome](https://github.com/moneysocket/awesome-moneysocket)
- [Twitter](https://twitter.com/moneysocket)
- [Telegram](https://t.me/moneysocket)
- [Donate](https://socket.money/#donate)
