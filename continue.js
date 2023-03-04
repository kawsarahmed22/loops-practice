var numbers = [45, 42, 52, 70, 40, 33, 74];
for (var i = 0; i<numbers.length; i++){
    const element = numbers[i]
    if(element > 50){
        continue
    }
    console.log(element);
}