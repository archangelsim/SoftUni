function sortAnArray(array) {
    array.sort(function(a, b){return a.length - b.length || a.localeCompare(b)})
    for (name of array) {
        console.log(name)
    }

}

sortAnArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])