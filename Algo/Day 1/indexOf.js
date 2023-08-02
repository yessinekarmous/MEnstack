var test="False"
var S=0
function indexOf(arr,item){
    i=-1
    while ((test != "True")&&(i!=arr.length-1)) {
        i++
        if(arr[i]==item){
            test="True"
            S=i
            }
        else{
            S=-1
        }
    }
    return S
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

const result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);
