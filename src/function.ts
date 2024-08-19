export function helloWord({fistname, lastname ,age} : {
    fistname : string;
    lastname? : string;
    age? : number; 
}) {
    console.log(`Hello ${fistname} ${lastname} you are ${age}`);    
}
    