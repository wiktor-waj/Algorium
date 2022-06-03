import { useBubbleSort } from '../components/sort/bubbleSort';

export const useAlgoSort = (typeAlgoSort) => {
	switch (typeAlgoSort) {
		case 'bubbleSort':
			return useBubbleSort;
		default:
			return () => null;
	}
};
