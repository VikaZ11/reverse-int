module.exports = function reverse (n) {
    const nStr = String(Math.abs(n)).split("").reverse().join("");

    return Number(nStr);
}
