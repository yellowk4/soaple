import React from 'react';

const students = [
    {
        name: "홍길동"
    },
    {
        name: "머단"
    },
    {
        name: "자비스"
    },
    {
        name: "빌리"
    },
];

const AttendanceBook = (props) => {
    return (
        <ul>
           {students.map((student, index) => {
            return <li key={index}>{student.name}</li>
           })} 
        </ul>
    );
};

export default AttendanceBook;