export function LowerValue(value1: number, value2 : number) {
    if (value1 > 0){
        if (value2 > 0){
            if (value1 > value2){
                return value2;
            } else {
                return value1;   
            }
        } else {
            return value1;
        }
    } 
    else {
        if (value1 > 0){
            if (value2 > value1){
                return value1;
            } else {
                return value2;   
            }
        } else {
            return value2;
        }
    }
    return 0;
}