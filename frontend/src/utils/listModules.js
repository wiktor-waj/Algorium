import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
// import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
// import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
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
				'Porównywane sa dwa kolejne elementy i zamieniane w razie potrzeby...',
		},
		icon: (
			<BubbleChartOutlinedIcon
				sx={{ height: 100, width: 100 }}
				style={{
					fill: '#7d91e7',
					marginLeft: '90px',
					marginTop: '20px',
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
				'Kolejne elementy wejściowe są ustawiane na odpowiednie miejsca docelowe...',
		},
		icon: (
			<InsertChartOutlinedRoundedIcon
				sx={{ height: 100, width: 100 }}
				style={{
					fill: '#7d91e7',
					marginLeft: '90px',
					marginTop: '20px',
				}}
			/>
		),
		tag: 'Algorytmy sortujące',
	},
	// TODO -> Dopasować propsy ponizszych modułów tak jak są wyżej zrobione bubble-sort i merge-sort
	// {
	// 	id: 2,
	// 	title: 'Sortowanie szybkie',
	// 	desc: "Wykorzystywana jest technika 'dziel i zwyciężaj'...",
	// 	icon: (
	// 		<ElectricBoltOutlinedIcon
	// 			sx={{ height: 100, width: 100 }}
	// 			style={{
	// 				fill: '#7d91e7',
	// 				marginLeft: '120px',
	// 				marginTop: '20px',
	// 			}}
	// 		/>
	// 	),
	// 	tag: 'Algorytmy sortujące',
	// },
	// {
	// 	id: 3,
	// 	title: 'Przeszukiwanie wszerz',
	// 	desc: 'Polega na odwiedzeniu wszystkich osiągalnych wierzchołków z danego wierzchołka.',
	// 	icon: (
	// 		<SchemaOutlinedIcon
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
