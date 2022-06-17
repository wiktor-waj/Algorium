import { useBubbleSort } from '../components/sort/bubbleSort';
import { useMergeSort } from '../components/sort/mergeSort';
import { useSelectionSort } from '../components/sort/selectionSort';

export const useAlgoSort = (typeAlgoSort) => {
	switch (typeAlgoSort) {
		case 'bubbleSort':
			return useBubbleSort;
		case 'mergeSort':
			return useMergeSort;
		case 'selectionSort':
				return useSelectionSort ;
		default:
			return () => <div>ni ma</div>;
	}
};
