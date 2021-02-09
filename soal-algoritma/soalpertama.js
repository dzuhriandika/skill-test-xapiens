var arr = [1,2,3,4,5,6,7]
var newArr = arr.reverse()
for(let j = 7; j >0; j--){
    console.log(newArr[j-1]+'0'.repeat(j-1))
}