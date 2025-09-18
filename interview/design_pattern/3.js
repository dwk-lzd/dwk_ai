const Singleton = (() => {
    let instance
    return () => instance || (instance = {
        name: "MySingleton",
        timestamp: new Date(),
        sayHello() {
            console.log(`Hello from ${this.name}`);

        }
    })
})()