/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    var count = 0; 
    while (students.length > 0 && count < students.length) {
        if (students[0] == sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            count = 0;
        } else {
            students.push(students.shift());
            count++;
        }
    }
    return students.length;
};