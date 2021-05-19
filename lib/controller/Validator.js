
class Validator {
  constructor(props, child) {
    if (!props.queueUrl && props.queueUrl === '') throw "Can't initialize SEConsumer, queue url is missing or empty!";
    if (child === 'SEConsumer') {
      if (!props.messageHandler && typeof messageHandler !== 'function') throw "Can't initialize SEConsumer, messageHandler is missing or not a function!";
    }

    this.queueUrl = props.queueUrl;
    this.messageHandler = props.messageHandler;
    this.batchSize = props.batchSize || process.env.DEFAULT_BATCH_SIZE;
    this.apiVersion = props.apiVersion || process.env.DEFAULT_API_VERSION;
    this.region = props.region || process.env.DEFAULT_REGION;
    this.pollingWaitTimeMs = props.pollingWaitTimeMs || process.env.POLLING_WAIT_TIME;
  }
}

module.exports = Validator;