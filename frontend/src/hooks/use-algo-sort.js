import { useBubbleSort } from '../components/sort/bubbleSort';
import {useMergeSort} from '../components/sort/mergeSort'

export const useAlgoSort = (typeAlgoSort) => {
	switch (typeAlgoSort) {
		case 'bubbleSort':
			return useBubbleSort;
		case 'mergeSort':
			return useMergeSort;
		default:
			return () => <div>ni ma</div>;
	}
};
