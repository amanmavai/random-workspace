/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    var result = [];
    result.push({key:nums[0],val:0});
    for(var i=0;i<nums.length;i++){
        
        var element = result.find(function(o) {
            if(o.key === nums[i])
            o.val++;
            
            return o.key === nums[i];
        });
        
        if(element===undefined){
            result.push({key:nums[i],val:1});
        }
    }
    result.sort(function(o1,o2) {
        return o2.val - o1.val;
    });
    
    result.splice(k,nums.length-k);
    
    var ans = result.map(function(e) {
        return e.key;
    });
    return ans;
    
};

topKFrequent([1,1,1,2,2,3],2);