const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || typeof message !== "string" || !key || typeof key !== "string") {
      throw new Error('Incorrect arguments!');
    }

    const res = [];
    const _message = message.toUpperCase();
    const _key = key.toUpperCase();

    for (let i = 0, k = 0; i < _message.length; i++) {

      if (this.alphabet.includes(_message[i])) {
        const letter = _message[i];
        const keyLetter = _key[k];
        const encryptLetterIndex = (this.alphabet.indexOf(letter) + this.alphabet.indexOf(keyLetter)) % this.alphabet.length;

        res.push(this.alphabet[encryptLetterIndex >= this.alphabet.length ? encryptLetterIndex % this.alphabet.length : encryptLetterIndex]);

        k++;
        // k%=_key.length;
        k >= _key.length ? k %= _key.length : k;
      } else {
        res.push(_message[i]);
      }
    }

    return this.reverse ? res.reverse().join('') : res.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || typeof encryptedMessage !== "string" || !key || typeof key !== "string") {
      throw new Error('Incorrect arguments!');
    }

    const res = [];
    const _encryptedMessage = encryptedMessage.toUpperCase();
    const _key = key.toUpperCase();

    for (let i = 0, k = 0; i < _encryptedMessage.length; i++) {

      if (this.alphabet.includes(_encryptedMessage[i])) {
        const encryptLetter = _encryptedMessage[i];
        const keyLetter = _key[k];
        const decryptLetterIndex = (this.alphabet.indexOf(encryptLetter) - this.alphabet.indexOf(keyLetter));

        res.push(this.alphabet[decryptLetterIndex >= this.alphabet.length ? decryptLetterIndex % this.alphabet.length : decryptLetterIndex]);

        k++;
        // k%=_key.length;
        k >= _key.length ? k %= _key.length : k;
      } else {
        res.push(_encryptedMessage[i]);
      }
    }

    return this.reverse ? res.reverse().join('') : res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
