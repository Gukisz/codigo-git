// Gerador de Senhas em TypeScript

function generatePassword(length: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.ceil(Math.random() * characters.length); 
        password += characters[randomIndex];
    }

    return password;
}

const passwordLength = 12; 
const newPassword = generatePassword(passwordLength);
console.log("Senha gerada:", newPassword);

// Exemplos de expansões: Adicionar opções para escolher tipos específicos de caracteres, Garantir que a senha tenha pelo menos um caractere de cada tipo selecionado, Implementar uma interface para o usuário definir as preferências.