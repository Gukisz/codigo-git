function generatePassword(length: number): string {
    const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password: string = "";

    for (let i = 0; i < length; i++) {
        let randomIndex: number;

        do {
            randomIndex = Math.floor(Math.random() * characters.length);
        } while (characters[randomIndex] === password[password.length - 1]);

        password += characters[randomIndex];
    }

    return password;
}

const passwordLength: number = 8;
const newPassword: string = generatePassword(passwordLength);
console.log("Senha gerada:", newPassword);
