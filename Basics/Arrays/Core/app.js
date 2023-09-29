export function GetValues(){
    return [1,2,3,4,5,6,7,8];
}

export default function GetSum(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum = values[i];
    }
    alert(sum);
}
