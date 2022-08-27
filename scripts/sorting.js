
function quicksort(arr,leftBound=0,rightBound=arr.length-1){
  
    if(leftBound<rightBound){

      if(document.getElementById("option1").checked){
        const pivotIndex = partitionAsc(arr,leftBound,rightBound)

        quicksort(arr,leftBound,pivotIndex-1)
        quicksort(arr,pivotIndex,rightBound)
      } else if(document.getElementById("option2").checked){
        const pivotIndex = partitionDesc(arr,leftBound,rightBound)

        quicksort(arr,leftBound,pivotIndex-1)
        quicksort(arr,pivotIndex,rightBound)
      }
    }
    return arr
  }
  
  function partitionAsc(arr,leftIndex,rightIndex){
  
    const pivot = arr[Math.floor((leftIndex+rightIndex)/2)]
  
    while(leftIndex<=rightIndex){
  
      while(arr[leftIndex]<pivot){
        leftIndex++
      }
  
      while(arr[rightIndex]>pivot){
        rightIndex--
      }
      if(leftIndex<=rightIndex){
        const temp = arr[leftIndex]
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp
    
        leftIndex++
        rightIndex--
      }
    }
    return leftIndex
  }

  function partitionDesc(arr,leftIndex,rightIndex){
  
    const pivot = arr[Math.floor((leftIndex+rightIndex)/2)]
  
    while(leftIndex<=rightIndex){
  
      while(arr[leftIndex]>pivot){
        leftIndex++
      }
  
      while(arr[rightIndex]<pivot){
        rightIndex--
      }
      if(leftIndex<=rightIndex){
        const temp = arr[leftIndex]
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp
    
        leftIndex++
        rightIndex--
      }
    }
    return leftIndex
  }