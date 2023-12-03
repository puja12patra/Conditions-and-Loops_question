//Q2. Write a program that grades students based on their marks
// If greater than 90 then A Grad
// If between 70 and 90 then a B grad
// If between 50 and 70 then a C grad
// Below 50 then an F grade

let num = 50;
if(num>90)
{
    console.log("A Grad");
}
else if(num>70 && num<=90)
{
    console.log("B Grad");
}
else if(num>=50 && num<=70)
{
    console.log("C Grad");
}
else if(num<50)
{
    console.log("F Grad");
}