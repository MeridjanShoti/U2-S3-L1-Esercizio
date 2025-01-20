class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(y) {
    if (this.age > y.age) {
      return `${this.firstName + " " + this.lastName} is older than ${y.firstName + " " + y.lastName}`;
    } else if (this.age === y.age) {
      return `${this.firstName + " " + this.lastName} has the same age of ${y.firstName + " " + y.lastName}`;
    } else {
      return `${this.firstName + " " + this.lastName} is younger than ${y.firstName + " " + y.lastName}`;
    }
  }
}

const user1 = new User("Elogno", "Muschio", 53, "Florida");
const user2 = new User("Marco", "Zuccabergi", 40, "California");
const user3 = new User("Ciro", "Esposito", 40, "Napoli");

console.log("metto a comparazione Elogno Muschio con Marco Zuccabergi:");
console.log(user1.compareAge(user2));
console.log("metto a comparazione Ciro Esposito con Marco Zuccabergi:");
console.log(user3.compareAge(user2));
console.log("metto a comparazione Ciro Esposito con Elogno Muschio:");
console.log(user3.compareAge(user1));
const pets = [];
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwner(y) {
    if (this.ownerName === y.ownerName) {
      return `${this.petName} and ${y.petName} have the same owner`;
    } else {
      return `${this.petName} and ${y.petName} have different owners`;
    }
  }
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  pets.push(
    new Pet(
      document.getElementById("petName").value,
      document.getElementById("ownerName").value,
      document.getElementById("species").value,
      document.getElementById("breed").value
    )
  );
  document.getElementById("petList").innerHTML = "";
  document.getElementById("pet1").innerHTML = "";
  document.getElementById("pet2").innerHTML = "";
  for (element of pets) {
    let petItem = document.createElement("li");
    petItem.innerText = `${element.petName} is a ${element.species} of the ${element.breed} breed and his owner is ${element.ownerName}`;
    document.getElementById("petList").appendChild(petItem);
    let petOption = document.createElement("option");
    petOption.innerText = element.petName;
    petOption.value = element.petName;
    document.getElementById("pet1").appendChild(petOption);
    let petOption2 = document.createElement("option");
    petOption2.innerText = element.petName;
    petOption2.value = element.petName;
    document.getElementById("pet2").appendChild(petOption2);
  }
});

document.getElementById("compare").addEventListener("click", () => {
  let pet1 = document.getElementById("pet1").value;
  let pet2 = document.getElementById("pet2").value;
  function findKey1() {
    for (key in pets) {
      if (pets[key].petName.toLowerCase() === pet1.toLowerCase()) {
        return key;
      }
    }
  }
  function findKey2() {
    for (key in pets) {
      if (pets[key].petName.toLowerCase() === pet2.toLowerCase()) {
        return key;
      }
    }
  }
  alert(pets[findKey1()].compareOwner(pets[findKey2()]));
});
