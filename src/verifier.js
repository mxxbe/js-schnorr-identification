const BigInteger = require("bigi");
const { g, N, random } = require("./group");

/**
 * selects a random value as a challenge for a zkp interaction
 * @returns {BigInteger} random BigInteger value
 */
const getChallenge = random;

/**
 * verifies a given response as the last step of a zkp interaction
 * @param {BigInteger} publicKey provers public proving key
 * @param {BigInteger} commitment provers commitment from the beginning of the interaction
 * @param {BigInteger} challenge verifiers own challenge that was sent to prover
 * @param {BigInteger} response provers response to verifiers challenge
 * @returns {boolean} verification status of the response
 */
function verifyResponse(publicKey, commitment, challenge, response) {
  const check_a = g.modPow(response, N);
  const check_b = commitment.multiply(publicKey.modPow(challenge, N)).mod(N);

  return check_a.equals(check_b);
}

module.exports = {
  getChallenge,
  verifyResponse,
};
