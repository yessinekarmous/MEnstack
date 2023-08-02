
function indexOf(arr,item){
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]===item){
            return i
        }
    }
    return -1
}
const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;


const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;


const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;

const result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);
