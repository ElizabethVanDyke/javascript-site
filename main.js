let Phrase = require("evandyke-palindrome");

let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string);

if(phrase.palindrome())
{
  alert(`"${phrase.content}" is a palindrome`);
}
else
{
  alert(`"${phrase.content}"`)
}
alert(new Phrase("Madam, I'm Adam.").palindrome());