const data = [2, 3, 4, 5 ];
const calculateDouble = function (data){
    const output = [];
    for (let i = 0; i < data.length; i++) {
        output.push(data[i] * data[i]);
    }
    return output;
}