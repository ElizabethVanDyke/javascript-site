 let states = ["New Mexico", "Texas", "Arizona"];
 
function urlify(string)
{
  return string.toLowerCase().split(/\s+/).join("-");
}

function url(states)
{
  return states.map(state => "https://www." + urlify(state) + ".com");
}
 
 console.log(url(states));
 
 function filter(elements)
 {
   return elements.filter(element => element.split(/\s+/).length === 1);
 }
 
 console.log(filter(states));
 
 // lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) =>
                          {lengths[element] = element.length;
                          return lengths; }, {});
}
console.log(functionalLengths(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalProduct(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));
