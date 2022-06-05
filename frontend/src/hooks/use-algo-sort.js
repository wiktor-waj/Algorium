import { useBubbleSort } from '../components/sort/bubbleSort';
import {useMergeSort} from '../components/sort/mergeSort'

export const useAlgoSort = (typeAlgoSort) => {
	switch (typeAlgoSort) {
		case 'bubbleSort':
			return useMergeSort;
		// case 'mergeSort':
		// 	return useMergeSort;
		default:
			return () => null;
	}
};
