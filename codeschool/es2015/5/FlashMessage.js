class FlashMessage {

    constructor(message) {
        this.message = message;
    }

    renderAlert() {
        console.log(`ALERT: ${this.message} from alert`);
    }

    renderLog() {
        console.log(`LOG: ${this.message} from log`);
    }

}

module.exports = FlashMessage;