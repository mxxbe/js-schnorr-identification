const prover = require("../src/prover");
const verifier = require("../src/verifier");

describe("js-schnorr-identification", () => {
  it("allows prover and verifier to perform an interactive zkp", () => {
    // --- prover ---

    // 1. select key pair
    const [secretKey, publicKey] = prover.getKeyPair();

    // 2. select preCommit value and calculate commitment
    const [preCommit, commitment] = prover.getCommitment();

    // 3. send publicKey and commitment to verifier (1st handshake)

    // --- verifier ---

    // 4. select a random challenge
    const challenge = verifier.getChallenge();

    // 5. send challenge to prover (2nd handshake)

    // --- prover ---

    // 6. calculate response
    const response = prover.getResponse(challenge, preCommit, secretKey);

    // 7. send response to verifier (3rd handshake)

    // --- verifier ---

    // 8. verify that response solves challenge
    const verified = verifier.verifyResponse(
      publicKey,
      commitment,
      challenge,
      response
    );

    // zkp successful
    expect(verified).toBe(true);
  });
});
