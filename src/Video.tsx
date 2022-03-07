import {useEffect, useState} from 'react';
import {Composition, continueRender, delayRender} from 'remotion';
import {MyComposition} from './Composition';
import {fetchData} from './lib/fetchData';
import {IThreeHourData} from './types/Forecast';

export const RemotionVideo: React.FC = () => {
	const frps = 60;

	const [data, setData] = useState<IThreeHourData[]>([]);
	const [handle] = useState(() => delayRender());

	const getData = async () => {
		// if (localStorage.getItem('data')) {
		// 	setData(JSON.parse(localStorage.getItem('data')!) as IThreeHourData[]);
		// } else {
		// 	const result = await fetchData();
		// 	localStorage.setItem('data', JSON.stringify(result));

		// 	setData(result);
		// }
		const result = await fetchData();

		setData(result);

		continueRender(handle);
	};

	useEffect(() => {
		getData();
	}, []);

	const duration = data.length * 300;

	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={duration + 360}
				fps={frps}
				width={1080}
				height={1920}
				defaultProps={{
					forecastData: data,
				}}
			/>
		</>
	);
};
