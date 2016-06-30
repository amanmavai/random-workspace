var findDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        var j = nums[i];
        for (var k = i + 1; k < nums.length; k++) {
            if (j === nums[k])
                return j;
        }
    }
};
