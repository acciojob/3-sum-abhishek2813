function threeSum(arr, target) {
  //your code here
	let sum = 0;
	for (let index of arr) {
		sum +=arr[index] 
		if(sum ==target){
			return sum;
		}
	}
}

module.exports = threeSum;
