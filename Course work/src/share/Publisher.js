export class Publisher{
    constructor(){
        this.events = [];
    }
    subscribe(eventName, func){
        if(!this.events.hasOwnProperty(eventName)){
            this.events[eventName] = [];
        }
        this.events[eventName].push(func);
    }
    publish(eventName, data){
        if(this.events.hasOwnProperty(eventName)){
            this.events[eventName].forEach(func => func(data));
        }
    }
    get methods(){
        return {
            subscribe   : this.subscribe.bind(this),
            publish     : this.publish.bind(this)
        };
    }
}