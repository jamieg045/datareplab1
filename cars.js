//Creating a Vehicle class and adding three constructors
class Vehicle
{
    constructor(make, model, year)
    {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Making a method that outputs the information from the constructors to the console
    information()
    {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
//Creating an instance of the class with three variables into the constructor and outputted them to the console using the information method
let myVehicle = new Vehicle('Ford', 'Focus', '2008');
myVehicle.information();

//Created a new class that inherits from the Vehicle class
class Cars extends Vehicle
{
    constructor(make, model, year, doors)
    {
        super(make, model, year);
        this.doors = doors;
    }
//Method that calls the inherited class information and logs the info of the doors which is created in the child class
    Information()
    {
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}
//Inputting the values into the constructor and calling the info method to output onto the console
let myCar = new Cars('VW', 'Golf', 2000, 5);
myCar.information();