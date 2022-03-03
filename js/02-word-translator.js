/*eslint-env browser*/
let language = prompt("Please enter your language");

if (language === "es") {
    document.write("Hola mundo!");
} else if (language === "de") {
    document.write("Hallo welt!");
} else if (language === "en") {
    document.write("Hello world!");
} else if (language === "fr") {
    document.write("Bojour le monde!");
} else {
    document.write("Hello world!");
}