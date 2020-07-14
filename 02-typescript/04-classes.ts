class Person{
    public name: string;
    public last_name: string;
    static referencial_name: string = 'Humano';
    protected name_and_last_name: string = '';

    constructor(
        name: string,
        last_name: string,
    ){
        this.name = name;
        this.last_name = last_name;
        this.name_and_last_name = name + ' ' + last_name;
    }

    private show_name_last_name(): string{
        return this.name_and_last_name;
    }
}

class User extends Person{
    constructor(
        name:string,
        last_name:string,
        public ic: string,
        public civil_status: string,
    ){
        super(name,last_name);
    }
}

const juxx = new User(
    'Juan',
    'Guevara',
    '1242434143',
    'Soltero'
);


