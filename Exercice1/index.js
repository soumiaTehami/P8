//votre code ici

export default function pairNumbers(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result.join(',');
}

// Exemple d'utilisation
console.log(pairNumbers(1, 10));  // Affichera "2,4,6,8,10"

