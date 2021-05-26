// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"];
    //cats;

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.splice(2);
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
}

function appendCat(name){
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name){
    const copyCats = [name, ...cats]
    return copyCats; 
}

function removeLastCat(){
    const copyCats = [...cats]
    copyCats.pop();
    return copyCats; 
}

function removeFirstCat(){
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats;
}

        
      




