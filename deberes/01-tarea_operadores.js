const array = [
    {
        id: 1,
        name: 'juxxi',
        grade: 7,
    },
    {
        id: 2,
        name: 'camch',
        grade: 9,
    },
    {
        id: 3,
        name: 'insu',
        grade: 8,
    },
    {
        id: 4,
        name: 'lord',
        grade: 7,
    },
    {
        id: 5,
        name: 'as16',
        grade: 10,
    },
    {
        id: 6,
        name: 'dacer',
        grade: 11,
    },
    {
        id: 7,
        name: 'alexis',
        grade: 8,
    },
    {
        id: 8,
        name: 'micnay',
        grade: 5,
    },
    {
        id: 9,
        name: 'skere',
        grade: 9,
    },
    {
        id: 10,
        name: 'zacron',
        grade: 5,
    }
];

const vowels= ['a','e','i','o','u'];

const passed_students = array
    .map(actual_value => {
        const new_element = {
            id: actual_value.id,
            name: actual_value.name,
            grade: actual_value.grade,
        };
        actual_value.name.split("").forEach(value =>{
            vowels.includes(value) ? new_element.grade += 0.1 : new_element.grade +=0.05;
        });
        return new_element;
    }).filter(value => value.grade > 9);

console.log(passed_students);
