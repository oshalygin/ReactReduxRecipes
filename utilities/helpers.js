function helpers() {
    function mutate(s) {
        return function splice() {
            let a = s.split("");
            Array.prototype.splice.apply(a, arguments);
            return a.join("");
        };
    }

    return {
        mutate
    };
}

export default helpers;