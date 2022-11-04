function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)}
    }

    for (element of array) {
        let line = element.split(' ');
        let name = line[0];
        let age = line[1];

        let newCat = new Cat(name, age)
        newCat.meow()
    }

}

cats(['Mellow 2', 'Tom 5'])