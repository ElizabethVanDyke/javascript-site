(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("evandyke-palindrome");

let string = prompt("Please enter a string for palindrome testing:");

let phrase = new Phrase(string);

if(phrase.palindrome())
{
  alert('"${phrase.content}" is a palindrome');
}
else
{
  alert('"${phrase.content}')
}
alert(new Phrase("Madam, I'm Adam.").palindrome());
},{"evandyke-palindrome":2}],2:[function(require,module,exports){
//Exports:
module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function() 
{
  return Array.from(this).reverse().join("");
};

String.prototype.blank = function()
{
  return !!(this.match(/^\s*$/g));
};

Array.prototype.last = function()
{
  return (this.slice(-1));
}

// Defines a Phrase object.
function Phrase(content) 
{
  this.content = content;

  this.processor = function(string) 
  {
    return string.toLowerCase();
  }

  function TranslatedPhrase(content, translation) 
  {
    this.content = content;
    this.translation = translation;
    
     // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent() 
    {
      return this.translation.processor();
    };
  }

  // TranslatedPhrase.prototype = new Phrase();

   // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() 
  {
    return this.letters().toLowerCase();
  };

    // Returns the letters in the content.
    this.letters = function letters() 
    {
      const LREGEX = /[a-z]/gi;
      return (this.content.match(LREGEX) || []).join("");
    }; 

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome()
  {
    return this.processedContent() === 
    this.processedContent().reverse();
  };
  
  this.louder = function()
  {
    let test =  this.content.toUpperCase();
    return test;
  };
  
  
}
},{}]},{},[1]);
