//Set up the namespaces for the application
var BasicHeap = BasicHeap || {};
BasicHeap.Simple = BasicHeap.Simple || {};


BasicHeap.Simple = (function BinaryMinHeap() {
    var _heapList = [0];
    var _currentSize = 0;

    function _swap(l, r) {
        var temp = _heapList[l];
        _heapList[l] = _heapList[r];
        _heapList[r] = temp;
    }
    
    function _minChild(i,len) {
       if((2*i+1) > len){
           return 2*i;
       }else{
           if(_heapList[2*i]<_heapList[(2*i+1)]){
               return 2*i;
           }else{
               return (2*i + 1);
           }
       }
    }
    
    function _buildHeap(arr) {
        var i = Math.floor(arr.length/2);
        
        arr.unshift(0);_heapList = arr;
        
        _currentSize = arr.length -1;
        while(i>0){
            _bubbleDown(i,_currentSize);
            i--;
        }
        return _heapList;
    }
    
    function _bubbleUp(index) {
        while (Math.floor(index / 2) > 0) {
            if (_heapList[index] < _heapList[Math.floor(index / 2)]) {
                _swap(index, Math.floor(index / 2));
            }
            index = Math.floor(index / 2);
        }
    }
    
    function _bubbleDown(index,len) {
        var mc;
        while (Math.floor(2*index) <= len) {
            mc = _minChild(index,len);
            if(_heapList[index]>_heapList[mc]){
                _swap(index,mc);
            }else{
                break;
            }
            index = mc;
        }
    }
    
    function _insert(key) {
        _heapList.push(key);
        _currentSize++;
        _bubbleUp(_currentSize);
    }
    
    //Deleting the Root Element(Its the minimum)
    function _deleteMin() {
        var res = _heapList[1];
        
        _heapList[1] = _heapList[_currentSize]; //Moving the last item to root
        _currentSize--;
        _heapList.pop();
        
        _bubbleDown(1,_currentSize);
        return res;
    }
    function _heapSort(arr) {
        _buildHeap(arr);
        var i = _currentSize;
        while(i>1){
             _swap(1,i);
             i--;
             _bubbleDown(1,i);
        }
       return _heapList.slice(1);
    }
    
    function heapList() {
        return _heapList;
    }
     function currentSize() {
        return _currentSize;
    }
    var publicApi = {
        heapList:heapList,
        currentSize:currentSize,
        buildHeap:_buildHeap,
        insert: _insert,
        deleteMin:_deleteMin,
        bubbleUp: _bubbleUp,
        bubbleDown:_bubbleDown,
        heapSort:_heapSort
    };

    return publicApi;

})();

function main(){
    var arr = [9, 11, 6, 5, 2, 8, 3];
    var res = BasicHeap.Simple.heapSort(arr);
    console.log(res);
    console.log(BasicHeap.Simple.heapList());
    
    // BasicHeap.Simple.buildHeap(arr);
    // console.log(arr);
    // BasicHeap.Simple.insert(1);
    // console.log(arr);
    // BasicHeap.Simple.insert(11);
    // console.log(arr);
    // BasicHeap.Simple.deleteMin();
    // console.log(arr);
}

main();