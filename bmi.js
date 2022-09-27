
//Creating our BMI class with a constructor and two arguments
//To initialise data
class BMI 
{
    constructor(height, weight)
    {
        this.height = height;
        this.weight = weight;
    }

    //Method to calculate the BMI
    calculateBMI()
    {
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
//Created an instance of the BMI class and invoking the calculate method
let myBMI = new BMI(2, 100);
myBMI.calculateBMI();
console.log(myBMI.calculateBMI());