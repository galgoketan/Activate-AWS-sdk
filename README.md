# Activate-AWS-sdk

**Activate-AWS-sdk** is a wrapper around Aws-sdk to manage lib on multiple projects.

Featured apis:
[Message]
[Consumer]

- **installing**
Using npm:

```js
$ npm install aws-sqs
```

- **configuring sqs consumer**

```js
const {Consumer} = require('aws-sqs');

// initializing sqs-consumer
const ce = new Consumer({
  queueUrl: 'queue_url', // (queue url, Mandatory)
  messageHandler: new NLQ().messageHandler // (attaching callback to listen messages from queue, Mandatory)
});
```


- **configuring sqs message**

```js
const {Message} = require('aws-sqs');

const message = new Message({
  queueUrl: 'queue_url' // (queue url, Mandatory)
});
```

- **example**

```js
// Derived data to push

const data = {
  "email":"007sketanthakur@gmail.com",
  "item": "pizza",
  "itemPrice":"1000",
  "itemQty":"2"
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
  queueUrl: 'queue_url'
});
message.sendMessageToQueue(message);
```

- **config defaults**
```js
DEFAULT_BATCH_SIZE = 10;
DEFAULT_API_VERSION = "2012-11-05";
DEFAULT_REGION = "eu-central-1";
POLLING_WAIT_TIME = 500;

// you can paass the DEFAULT_BATCH_SIZE & POLLING_WAIT_TIME to consumer

// initializing sqs-consumer
const ce = new Consumer({
  queueUrl: 'queue_url',
  batchSize: 10,
  pollingWaitTimeMs: 500,
  messageHandler: new NLQ().messageHandler // attaching callback to listen messages from queue
});
```