
function merge(arr,l,m,r){
    let n1 = m-l+1;
    let n2 = r-m;

    const L = arr.slice(l,m+1);
    const R = arr.slice(m+1, r+1);

    let i =0;
    let j=0;
    let k=l;

    while(i<n1 && j<n2){
        if(L[i] <=  R[j]){
            arr[k] = L[i];
            i++;
        }else{
            arr[k] = R[j];
            j++
        }
        k++;
    }
    while(i<n1){
        arr[k] = L[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k] = R[j];
        j++;
        k++;
    }
}

let moves = [];

function Sort(arr, l,r){
    if(l>=r){
        return;
    }
    let m = l+(r-l)/2;
    m = Math.floor(m);
    Sort(arr,l, m);
    Sort(arr, m+1, r);
    merge(arr, l, m, r);
    let array = arr.slice(l,r+1);
    let move = {
        left: l,
        right: r,
        mid: m,
        val:array
    }
    moves.push(move);    
}

export const mergeSort = (array) =>{
    let arr = array.slice();
    moves = [];
    let n = array.length;
    Sort(arr,0, n-1 )
    return moves;
}
