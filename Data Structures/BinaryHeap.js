//Set up the namespaces for the application
var MYAPP = MYAPP || {};


MYAPP.HeapApi = (function() {
    var Heap = function() {
        this.heapList = [0];
        this.currentSize = 0;
    };
    
    Heap.prototype.minChild = function(i,len) {
       if((2*i+1) > len){
           return 2*i;
       }else{
           if(this.heapList[2*i]<this.heapList[(2*i+1)]){
               return 2*i;
           }else{
               return (2*i + 1);
           }
       }
    };

    Heap.prototype.swap = function(l, r) {
        var temp = this.heapList[l];
        this.heapList[l] = this.heapList[r];
        this.heapList[r] = temp;
    };
    
    Heap.prototype.buildHeap = function(arr) {
        var i = Math.floor(arr.length/2);
        
        arr.unshift(0);this.heapList = arr;
        
        this.currentSize = arr.length -1;
        while(i>0){
            this.bubbleDown(i,this.currentSize);
            i--;
        }
        return this.heapList;
    };
    
    Heap.prototype.bubbleUp = function(index) {
        while (Math.floor(index / 2) > 0) {
            if (this.heapList[index] < this.heapList[Math.floor(index / 2)]) {
                this.swap(index, Math.floor(index / 2));
            }
            index = Math.floor(index / 2);
        }
    };
    
    Heap.prototype.bubbleDown = function(index,len) {
        var mc;
        while (Math.floor(2*index) <= len) {
            mc = this.minChild(index,len);
            if(this.heapList[index]>this.heapList[mc]){
                this.swap(index,mc);
            }else{
                break;
            }
            index = mc;
        }
    };
    
    Heap.prototype.insert = function(key) {
        this.heapList.push(key);
        this.currentSize++;
        this.bubbleUp(this.currentSize);
    };
    
    //Deleting the Root Element(Its the minimum)
    Heap.prototype.deleteMin = function() {
        var res = this.heapList[1];
        
        this.heapList[1] = this.heapList[this.currentSize]; //Moving the last item to root
        this.currentSize--;
        this.heapList.pop();
        
        this.bubbleDown(1,this.currentSize);
        return res;
    };
    Heap.prototype.heapSort = function(arr) {
        this.buildHeap(arr);
        var i = this.currentSize;
        while(i>1){
             this.swap(1,i);
             i--;
             this.bubbleDown(1,i);
        }
       return this.heapList.slice(1);
    };

    var publicApi = {
        Heap:Heap
    };

    return publicApi;

})();

function main(){
    var arr = [9, 11, 6, 5, 2, 8, 3];
    var heap = new MYAPP.HeapApi.Heap();
    heap.heapSort(arr);
    console.log(heap);

    // heap.buildHeap(arr);
    // console.log(heap);
    // heap.insert(1);
    // console.log(heap);
    // heap.insert(13);
    // console.log(heap);
    // heap.deleteMin();
    // console.log(heap);
}

main();