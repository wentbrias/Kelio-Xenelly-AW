
const students = [
    { name: 'Ayu', score: 88 },
    { name: 'Budi', score: 52 },
    { name: 'Citra', score: 75 },
    { name: 'Dani', score: 45 },
    { name: 'Eka', score: 91 },
];

function passedStudent(students) {
    const filterPassedStudent = students.filter((student) => {
        return student.score >= 60
    });
    return filterPassedStudent;
}

function studentWithGrade(students) {
    const mappedStudentWithScore = students.map((student) => {
        return {
            ...student,
            grade: getGradeLetter(student.score)
        }
    });
    return mappedStudentWithScore;
}

function averageStudentScore(students) {
    const calculateAverageScore = students.reduce((acc, curr) => {
        return acc + curr.score
    }, 0) / students.length;

    return calculateAverageScore;
}

function getGradeLetter(score) {
    if (score >= 80) return 'A';
    if (score >= 70) return 'B';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'E';
}

module.exports = { averageStudentScore,studentWithGrade,passedStudent }