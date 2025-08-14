class PrimePromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.thenCallbacks = [];
        this.catchCallbacks = [];

        const resolve = (value) => {
            if (this.state !== "pending") return;
            this.state = "fulfilled";
            this.value = value;
            this.thenCallbacks.forEach(cb => cb(value));
        };

        const reject = (reason) => {
            if (this.state !== "pending") return;
            this.state = "rejected";
            this.reason = reason;
            this.catchCallbacks.forEach(cb => cb(reason));
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(callback) {
        return new PrimePromise((resolve, reject) => {
            this.thenCallbacks.push((value) => {
                try {
                    const result = callback(value);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }

    catch(callback) {
        return new PrimePromise((resolve, reject) => {
            this.catchCallbacks.push((reason) => {
                try {
                    const result = callback(reason);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }

    finally(callback) {
        return this.then(
            value => {
                callback();
                return value;
            },
            reason => {
                callback();
                throw reason;
            }
        );
    }

    static all(promises) {
        return new PrimePromise((resolve, reject) => {
            let results = [];
            let completed = 0;

            promises.forEach((promise, index) => {
                promise.then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) resolve(results);
                }).catch(reject);
            });
        });
    }
}

// Polyfill mode
if (typeof global !== "undefined" && !global.Promise) {
    global.Promise = PrimePromise;
}

// Wrapper
function promiseWrapper(fn) {
    return (...args) => new PrimePromise((resolve, reject) => {
        fn(...args, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

module.exports = { PrimePromise, promiseWrapper };
