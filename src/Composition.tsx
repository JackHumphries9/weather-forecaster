import {Sequence, Audio} from 'remotion';
import './font.css';
import {Forecast} from './segments/Forecast';
import Intro from './segments/Intro';
import type {IThreeHourData} from './types/Forecast';
import audio from './assets/bgaudio.mp3';
import Outro from './segments/Outro';

export const MyComposition = ({
	forecastData,
}: {
	forecastData: IThreeHourData[];
}) => {
	const fDuration = 300;
	let nextFrames = 180;

	return (
		<div style={{backgroundColor: '#95B8D1', width: '100%', height: '100%'}}>
			<Audio src={audio} />
			<Sequence from={0} durationInFrames={nextFrames}>
				<Intro />
			</Sequence>
			{forecastData.map((item: IThreeHourData, i: number) => {
				return (
					<Sequence
						from={nextFrames + i * fDuration}
						durationInFrames={fDuration + 1}
					>
						<Forecast forecastData={item} />
					</Sequence>
				);
			})}
			<Sequence
				from={nextFrames + fDuration * forecastData.length}
				durationInFrames={180}
			>
				<Outro />
			</Sequence>
		</div>
	);
};
