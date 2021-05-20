# activate-sqs-manager
**activate-sqs-manager** is built on top of AWS-sdk to manage internal home production stuff.

## Version 1.x Now Available
The version 3.x of the AWS SDK for JavaScript is generally available. For more information see the [API Reference](https://github.com/galgoketan/Activate-AWS-sdk/tree/develop).

- **Prerequisite**

  This package rely on aws-sdk so you need to install [aws-sdk](https://www.npmjs.com/package/aws-sdk)
  and you also need to setup [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html)
  that will help to setup ~/.aws/ profile that aws-sdk read while configuring message and consumer agent.

## Table of Contents:
* [Installing](#Installing)
* [Configuring](#Configuring)
* [Uses](#Uses)

- **Installing**
Using npm:

```js
$ npm install git@github.com:galgoketan/Activate-AWS-sdk.git
```

- **Configuring**

- **configuring sqs consumer**

```js
const {Consumer} = require('aws-sqs');

// initializing sqs-consumer
new Consumer({
  queueUrl: 'queue_url',
  messageHandler: function () {
    // attaching callback to listen messages from queue
  }
});
```


- **configuring sqs message**

```js
const {Message} = require('aws-sqs');

const message = new Message({
  queueUrl: 'https://region.amazonaws.com/key/queuename'
});
```

- **Uses**

```js
// Derived data to push

const data = {
  "email":"abc.xyz.com",
  "item": "item_name",
  "itemPrice":"item_price",
  "itemQty":"item_qty"
};

// Defining attributes

const message = {
  attributes: {
    "email": {
      DataType: "String",
      StringValue: data.email
    },
    "item": {
      DataType: "String",
      StringValue: data.item
    },
    "itemPrice": {
      DataType: "String",
      StringValue: data.itemPrice
    },
    "itemQty": {
      DataType: "String",
      StringValue: data.itemQty
    }
  },
  data: data
}

// pushing it to queue

const message = new Message({
  queueUrl: 'https://region.amazonaws.com/key/queuename'
});
message.sendMessageToQueue(message);

// Pusing batch messages to queue

const batch = [
  {
    "email":"abc.xyz.com",
    "item": "item_name",
    "itemPrice":"item_price",
    "itemQty":"item_qty"
  },
  {
    "email":"abc.xyz.com",
    "item": "item_name",
    "itemPrice":"item_price",
    "itemQty":"item_qty"
  },
  {
    "email":"abc.xyz.com",
    "item": "item_name",
    "itemPrice":"item_price",
    "itemQty":"item_qty"
  }
];
message.sendBatchMessagesToQueue(batch);

```

- **Default configurations**
```js
DEFAULT_BATCH_SIZE = 10;
DEFAULT_API_VERSION = "2012-11-05";
DEFAULT_REGION = "eu-central-1";
POLLING_WAIT_TIME = 500;

you can paass the DEFAULT_BATCH_SIZE & POLLING_WAIT_TIME to consumer at the configuration time

// initializing sqs-consumer
new Consumer({
  queueUrl: 'https://region.amazonaws.com/key/queuename',
  batchSize: 20,
  pollingWaitTimeMs: 1000,
  apiVersion: '2011-12-05',
  region: 'us-west-1',
  messageHandler: function () {
    // attaching callback to listen messages from queue
  }
});
```