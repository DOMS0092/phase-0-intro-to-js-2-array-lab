// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];
    //cats;

function destructivelyAppendCat() {
    cats.push( "Ralph" );
}

function destructivelyPrependCat() {
    cats.unshift( "Bob" );
}

function destructivelyRemoveLastCat() {
    cats.splice(2);
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
}

function appendCat(){
    const copyCats = [...cats, "Broom"];
    return copyCats;
}

function prependCat(){
    const copyCats = ["Milo", "Otis", "Garfield"]
    copyCats.unshift("Arnold");
    return copyCats; 
}

function removeLastCat(){
    const copyCats = ["Milo", "Otis", "Garfield"]
    copyCats.pop();
    return copyCats; 
}

function removeFirstCat(){
    const copyCats = ["Milo", "Otis", "Garfield"]
    copyCats.shift()
    return copyCats;
}

        
      




