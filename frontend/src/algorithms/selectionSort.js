export const selectionSort = (array) => {
    const moves = [];
    for (let i = 0; i < array.length - 1; ++i) {
        let mn_index = i;
        
        for (let j = i + 1; j < array.length; ++j) {
           let  old_min = mn_index;
            moves.push({ minIndex: mn_index,oldMin:old_min, indexCheck:j , firstElement: false, check: true, val: array });
            if (array[j] < array[mn_index]) {
                mn_index = j;
            }
            moves.push({ minIndex: mn_index,oldMin:old_min, indexCheck:j , firstElement: false, check: false ,  val: array});
        }
        [array[i], array[mn_index]] = [array[mn_index], array[i]];
        let arr = array.slice(0, array.length);
        moves.push({ minIndex: mn_index,oldMin:mn_index,  indexCheck:i, firstElement: true,  check: false, val: arr});
    }
    return moves;
};
