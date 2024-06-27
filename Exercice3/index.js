// Créez votre fonction ici
export default function calculateAverage(numbers) {
    if (!numbers || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;

    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage([])); // No numbers to calculate average
console.log(calculateAverage()); // No numbers to calculate average
