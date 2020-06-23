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
        grade: 4,
    }
];

const for_each_response = array
    .forEach(
        (actual_value, index, whole_array) => {
            console.log(actual_value.name.split(""));
        }
    );
console.log('For Each', for_each_response);
