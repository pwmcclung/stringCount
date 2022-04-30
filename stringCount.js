function strCount(str, letter){ 
  let count = 0;
  let arr2 = letter.split()
  let arr1 = str.split('')
  for(i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[0]){count++}
    }
  
  return count;
}
