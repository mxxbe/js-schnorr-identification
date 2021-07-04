const BigInteger = require("bigi");

module.exports = {
  /**
   * converts a Uint8Array value to a BigInteger
   * @param {*} uint8Array
   * @returns {BigInteger} BigInteger representation of the given value
   */
  fromUint8Array: function (uint8Array) {
    return BigInteger.fromHex(Buffer.from(uint8Array).toString("hex"));
  },

  /**
   * converts a native BigInteger value to a BigInteger
   * @param {*} bigInt
   * @returns {BigInteger} BigInteger representation of the given value
   */
  fromNativeBigInt: function (bigInt) {
    return BigInteger.fromHex(bigInt.toString(16));
  },
};
