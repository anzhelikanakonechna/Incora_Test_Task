class User {
    constructor(name, subscriptions) {
        this.name = name
        this.subscriptions = subscriptions;
    }
  
    subscribe(subscription) {
      if (!this.subscriptions.includes(subscription)) {
        this.subscriptions.push(subscription)
        alert(this.name + " subscribed on: " + subscription + ".")
      } else {
        alert(this.name + " is ALREADY subscribed on: " + subscription + ".")
      }
    }

    mySubscriptions() {
        let mySubsString = ""

        if (this.subscriptions.length === 0) {
            alert(this.name + "'s subscriptions are empty.")
        } else {
            for (let i = 0; i < this.subscriptions.length; i++) {
                mySubsString += this.subscriptions[i]
    
                if (i != this.subscriptions.length - 1) {
                    mySubsString += ", "
                } else {
                    mySubsString += "."
                }
            }
            alert(this.name + "'s subscriptions: " + mySubsString)
        }
    }
}

class Subscription {
    constructor(streamingService) {
        this.streamingService = streamingService
    }

    getStreamingService() {
        return this.streamingService
    }
}

class StreamingService {
    constructor(name, shows, viewsByShowNames) {
        this.name = name
        this.shows = shows
        this.viewsByShowNames = viewsByShowNames
    }

    getName() {
        return this.name
    }

    getShows() {
        return this.shows
    }

    getViewsByShowNames() {
        return this.viewsByShowNames
    }
}
  
user = new User("Anzhelika", []);

netflix = new StreamingService("Netflix", ["The Sopranos"], 0)
megogo = new StreamingService("Megogo", ["Peaky Blinders"], 0)
amazon = new StreamingService("Amazon", ["Scarface"], 0)