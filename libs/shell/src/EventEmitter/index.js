export default function EventBus() {
  this.dispatch = function (eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
    return this;
  }

  this.on = function (eventName, callback) {
    document.addEventListener(eventName, callback);
    return this;
  }

  this.remove = function (eventName, callback) {
    document.removeEventListener(eventName, callback);
    return this;
  }
}
