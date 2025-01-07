// Función para reemplazar palabras en un texto dado
function replaceWords(text, replacements) {
    for (let word in replacements) {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        text = text.replace(regex, replacements[word]);
    }
    return text;
}

// Obtener el texto del elemento <h1>
const outputElement = document.getElementById('output');
const initialText = outputElement.innerText;

// Palabras a reemplazar y sus reemplazos
const replacements = {
    "sample": "example",
    "replace": "substitute"
};

// Llamada a la función para reemplazar palabras
const modifiedText = replaceWords(initialText, replacements);

// Actualizar el contenido del elemento <h1> con el texto modificado
outputElement.innerText = "a" + modifiedText;
