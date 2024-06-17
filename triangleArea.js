/*@ summary
This function calculates the area of a triangle using Heron's formula, 
given the lengths of all three sides.

Args:
    a: Length of the first side of the triangle.
    b: Length of the second side of the triangle.
    c: Length of the third side of the triangle.

Returns:
    The area of the triangle.
*/

function calculateArea() {
    const a = 5;
    const b = 6;
    const c = 7;

    const perimeter = (a + b + c) / 2;
    area = Math.sqrt( perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
}
calculateArea()
console.log(area);