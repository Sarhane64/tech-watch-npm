declare function helloWord({ fistname, lastname, age }: {
    fistname: string;
    lastname?: string;
    age?: number;
}): void;

export { helloWord };
