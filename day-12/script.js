function createCounter() {

    let count = 0;

    return {

        increment() {
            return ++count;
        },

        getCount() {
            return count;
        }

    };

}

const counter = createCounter();

console.log(counter.increment());//1

console.log(counter.increment());//2

console.log(counter.getCount());//2