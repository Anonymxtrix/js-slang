function sum_of_squares(x,y) {
    return square(x) + square(y);
}
function square(x) {
    return x * x;
}
function f(a) {
    return sum_of_squares(a + 1, a * 2);
}

f(5);