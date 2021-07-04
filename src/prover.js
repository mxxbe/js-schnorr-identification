const BigInteger = require("bigi");
const { g, N, random } = require("./group");

/**
 * selects a random secretKey and calculates the corresponding publicKey
 * @returns {Array<BigInteger>} an array of two elements (tuple)
 *  containing a secretKey and the corresponding publicKey
 */
function getKeyPair() {
  const secretKey = random();
  const publicKey = g.modPow(secretKey, N);

  return [secretKey, publicKey];
}

/**
 * selects a random preCommit value and calculates the corresponding commitment
 * @returns {Array<BigInteger>} an array of two elements (tuple)
 *  containing the preCommit value and the corresponding commitment
 */
function getCommitment() {
  const preCommit = random();
  const commitment = g.modPow(preCommit, N);

  return [preCommit, commitment];
}

/**
 * calculates a response to the given challenge
 * @param {BigInteger} challenge the challenge that was posed by the verifier
 * @param {BigInteger} preCommit the preCommit value that was selected as the precursor to the commitment that was sent to the verifier
 * @param {BigInteger} secretKey the provers secret proving key
 * @returns {BigInteger} a response to the given challenge
 */
function getResponse(challenge, preCommit, secretKey) {
  return preCommit.add(secretKey.multiply(challenge));
}

module.exports = {
  getKeyPair,
  getCommitment,
  getResponse,
};
