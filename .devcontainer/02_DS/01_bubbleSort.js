let arrayUnsorted = [21 , 331, 2, 37, 73, 98, 190]

let bubbleSort = function(arr){

    for(let i=0 ; i<arr.length; i++){
        for ( let j=0; j<arr.length-i-1; j++){
            if(arr[j]> arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;
            }
        }
    }

}
bubbleSort(arrayUnsorted)
console.log(arrayUnsorted);
