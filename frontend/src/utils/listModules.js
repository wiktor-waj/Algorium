import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
// import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
// import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
// import PolylineOutlinedIcon from '@mui/icons-material/PolylineOutlined';
// import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
// import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
// import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
// import MoveDownOutlinedIcon from '@mui/icons-material/MoveDownOutlined';
// import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined';

export const modules = [
	{
		to: 'bubble-sort',
		algoProps: {
			title: 'Sortowanie bąbelkowe',
			type: 'bubbleSort',
			description:
				'Metoda sortowania o złożoności czasowej i pamięciowej . Polega na porównywaniu dwóch kolejnych elementów i zamianie ich kolejności, jeżeli zaburza ona porządek, w jakim się sortuje tablicę. Sortowanie kończy się, gdy podczas kolejnego przejścia nie dokonano żadnej zmiany.',
		},
		icon: (
			<BubbleChartOutlinedIcon
				sx={{ height: 100, width: 100 }}
				style={{
					fill: '#7d91e7',
				}}
			/>
		),
		tag: 'Algorytmy sortujące',
	},
	{
		to: 'merge-sort',
		algoProps: {
			title: 'Sortowanie przez wstawianie',
			type: 'mergeSort',
			description:
				'Każdą iterację zaczynamy od wybrania elementu (startując od pierwszego miejsca w tablicy), który będziemy przyrównywać, do elementów znajdujących się na pozycjach poprzedzających. Jeżeli element znajdujący się przed wybranym przez nas elementem jest większy, przesuwamy się o jedno miejsce wstecz.',
		},
		icon: (
			<InsertChartOutlinedRoundedIcon
				sx={{ height: 100, width: 100 }}
				style={{
					fill: '#7d91e7',
				}}
			/>
		),
		tag: 'Algorytmy sortujące',
	},
	{
		to: 'selection-sort',
		algoProps: {
			title: 'Sortowanie przez wybieranie',
			type: 'selectionSort',
			description:
				'Sortowanie przez wybieranie - jedna z prostszych metod sortowania o złożoności O(n^2). Polega na wyszukaniu elementu mającego się znaleźć na żądanej pozycji i zamianie miejscami z tym, który jest tam obecnie. Operacja jest wykonywana dla wszystkich indeksów sortowanej tablicy.',
		},
		icon: (
			<FlipToFrontIcon
				sx={{ height: 100, width: 100 }}
				style={{
					fill: '#7d91e7',
				}}
			/>
		),
		tag: 'Algorytmy sortujące',
	},
	// TODO -> Dopasować propsy ponizszych modułów tak jak są wyżej zrobione bubble-sort i merge-sort
	{
		disabled: true,
		to: 'bfs',
		algoProps: {
			title: 'Przeszukiwanie wszerz',
			description: 'Polega na odwiedzeniu wszystkich osiągalnych wierzchołków z danego wierzchołka.',
			type: 'bfs',
		},
		icon: (
			<SchemaOutlinedIcon
				sx={{ height: 100, width: 100 }}
				style={{
					fill: '#7d91e7',
				}}
			/>
		),
		tag: 'Algorytmy grafowe',
	},
	// {
	// 	id: 4,
	// 	title: 'Przeszukiwanie w głąb',
	// 	desc: 'Polega na badaniu wszystkich krawędzi wychodzących z podanego wierzchołka.',
	// 	icon: (
	// 		<HubOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Algorytmy grafowe',
	// },
	// {
	// 	id: 5,
	// 	title: 'Dijkstra',
	// 	desc: 'Służy do znajdowania najkrótszej ścieżki z pojedynczego źródła w grafie',
	// 	icon: (
	// 		<PolylineOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Algorytmy grafowe',
	// },
	// {
	// 	id: 6,
	// 	title: 'Stos',
	// 	desc: 'Dane dokładane są na wierzch stosu i z wierzchołka są pobierane',
	// 	icon: (
	// 		<HorizontalSplitOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Podstawowe struktury danych',
	// },
	// {
	// 	id: 7,
	// 	title: 'Kolejka',
	// 	desc: 'Nowe dane dopisywane są na końcu kolejki, a z początku kolejki są pobierane',
	// 	icon: (
	// 		<StackedBarChartOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Podstawowe struktury danych',
	// },
	// {
	// 	id: 8,
	// 	title: 'Kopiec',
	// 	desc: 'Oparty jest na drzewie, gdzie wartości potomków węzła są w stałej relacji z wartością rodzica',
	// 	icon: (
	// 		<AccountTreeOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Podstawowe struktury danych',
	// },
	// {
	// 	id: 9,
	// 	title: 'Lista jednokierunkowa',
	// 	desc: 'Z każdego elementu możliwe jest przejście do jego następnika',
	// 	icon: (
	// 		<MoveDownOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Listy',
	// },
	// {
	// 	id: 10,
	// 	title: 'Lista dwukierunkowa',
	// 	desc: 'Z każdego elementu możliwe jest przejście do jego poprzednika i następnika',
	// 	icon: (
	// 		<LinearScaleOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Listy',
	// },
];
