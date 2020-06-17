export default class EventEmitter {

    listeners: any = {}

    // This section of the code allows us to register the listeners

    addListener(eventName: string, fn: Function) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
    }

    on(eventName: string, fn: Function) {
        return this.addListener(eventName, fn)
    }

    prependListener(eventName: string, fn: Function) {
        console.error("prependListener has not been built yet")
    }

    prependOnceListener(eventName: string, fn: Function) {
        console.error("prependOnceListener has not been built yet")
    }


    once(eventName: string, fn: Function) {
        this.listeners = this.listeners[eventName] || [];
        const onceWrapper = () => {
            fn();
            this.off(eventName, fn)
        }
        this.listeners[eventName].push(onceWrapper)
        return this
    }

    // This section allows us to remove some listeners

    removeListener(eventName: string, fn: Function) {

        let listeners = this.listeners[eventName];
        if(!listeners) return this;

        for(let i = listeners.length; i > 0; i--) {
            if(listeners[i] === fn) {
                listeners.splice(i, 1);
                break;
            }
        }
        return this;
    }

    off(eventName: string, fn: Function) {
        this.removeListener(eventName, fn)
    }

    removeAllListeners(eventName: Array<string>) {
        console.error("removeAllListeners has not been built yes")
    }

    // This section allows us to emit the submitted events

    emit(eventName: string, ...args: any) {
        let functions = this.listeners[eventName];
        if(!functions) return false;

        functions.forEach((f: any) => {
            f(...args)
        })

        return true;
    }

    listenerCount(eventName: string) {
        let functions = this.listeners[eventName] || [];
        return functions.length;
    }

    rawListeners(eventName: string) {
        return this.listeners[eventName];
    }


    eventNames() {

    }

}


