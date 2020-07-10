interface User {
    name: string,
    lastname: string,
    age?: number; //optional
    salary?: number; //optional
    married: boolean | 0 | 1;
    state: 'AC' | 'IN' | 'BN';
    printUser: (message: string) =>string;
    add_tax: (tax: number) => number;
    actual_state: () => 'AP' | 'AF' | 'AT';
}

const juxx: User = {
    name: 'Juan',
    lastname: 'Guevara',
    married: 1,
    state: 'BN',
    salary: 142.54,
    printUser: (message: string) => {
        return 'El mensaje es: ' +message;
    },
    add_tax: (tax: number) => {
        return this.salary + this.salary * tax;
    },
    actual_state: () => {
        switch (this.state) {
            case 'AC':
                return 'AP';
            case "IN":
                return 'AF';
            case "BN":
                return 'AT';
        }
    }
};
