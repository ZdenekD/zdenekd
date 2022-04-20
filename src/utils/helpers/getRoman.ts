type ILookup = {
    [key: string]: number
}

const getRoman = (value: number): string => {
    const lookup: ILookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let date = value;
    let roman = '';

    Object.keys(lookup).forEach(item => {
        while (date >= lookup[item]) {
            roman += item;
            date -= lookup[item];
        }
    });

    return roman;
};

export default getRoman;
