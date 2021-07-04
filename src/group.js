const BigInteger = require("bigi");
const ed25519 = require("noble-ed25519");
const convert = require("./convert");

module.exports = {
  /**
   * generator element
   */
  g: convert.fromNativeBigInt(ed25519.CURVE.Gx),

  /**
   * modulus for modular exponentiation
   */
  N: convert.fromNativeBigInt(ed25519.CURVE.n),

  /**
   * selects a random value that can be used as a private key
   * @returns {BigInteger} random BigInteger value
   */
  random: function () {
    return convert.fromUint8Array(ed25519.utils.randomPrivateKey());
  },
};
