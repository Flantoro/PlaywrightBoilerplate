export class RandomData {
  generateRandomEmail() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let email = "";
    for (let i = 0; i < 10; i++) {
      email += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    email += "@gmail.com"; // You can replace 'example.com' with your desired domain name
    return email;
  }

  generateRandomString() {
    const alphabet =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";
    for (let i = 0; i < 10; i++) {
      randomString += alphabet.charAt(
        Math.floor(Math.random() * alphabet.length)
      );
    }
    return randomString.toString();
  }

  generateRandomPassword() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}|:<>?-=[];.,";
    const numbers = "0123456789";

    // Initialize the password with at least one character from each category
    let password = "";
    password += lowercaseLetters.charAt(
      Math.floor(Math.random() * lowercaseLetters.length)
    );
    password += uppercaseLetters.charAt(
      Math.floor(Math.random() * uppercaseLetters.length)
    );
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));

    // Fill the remaining length with random characters
    const remainingLength = 14 - password.length;
    const allCharacters =
      lowercaseLetters + uppercaseLetters + symbols + numbers;
    for (let i = 0; i < remainingLength; i++) {
      password += allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
    }

    // Shuffle the password to ensure randomness
    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return password;
  }
}
