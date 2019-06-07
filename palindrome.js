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

  TranslatedPhrase.prototype = new Phrase();

   // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() 
  {
    return this.content.processor();
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