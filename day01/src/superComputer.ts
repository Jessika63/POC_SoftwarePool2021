enum symbole {
    mult = '*',
    div = '/',
    mod = '%',
    add = '+',
    min = '-',
}

type Callback = {(err: Error, result?: undefined): Error, (err: null, result: number): number};

export function superComputer_1(first_nbr: number, operator: string, second_nbr: number, callback) {
    let result: number = 0;
    const err: Error = null;
    switch (operator) {
        case symbole.mult: result = first_nbr * second_nbr;
            break;
        case symbole.add: result = first_nbr + second_nbr;
            break;
        case symbole.min: result = first_nbr - second_nbr;
            break;
        case symbole.div: if (second_nbr == 0) {
            return (callback(new Error('Division by zero')));
        }
            result = first_nbr / second_nbr;
            break;
        case symbole.mod: if (second_nbr == 0) {
            return (callback(new Error('Division by zero')));
        }
            result = first_nbr % second_nbr;
            break;
        default:
            return (callback(new Error('Bad operator')));
    }
}