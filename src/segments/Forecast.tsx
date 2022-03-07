import {
	faBoltLightning,
	faCloud,
	faCloudMoon,
	faCloudMoonRain,
	faCloudRain,
	faCloudShowersHeavy,
	faCloudSun,
	faCloudSunRain,
	faMoon,
	faSmog,
	faSnowflake,
	faSun,
} from '@fortawesome/free-solid-svg-icons';
import {Img, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import Location from '../components/Location';
import ukmap from '../assets/uk.svg';
import {IThreeHourData} from '../types/Forecast';
import type {IconDefinition} from '@fortawesome/fontawesome-common-types';

function translateToFA(iconStr: string) {
	const lookup: {[name: string]: IconDefinition} = {
		moon: faMoon,
		sun: faSun,
		'cloud-moon': faCloudMoon,
		'cloud-sun': faCloudSun,
		smog: faSmog,
		cloud: faCloud,
		'cloud-moon-rain': faCloudMoonRain,
		'cloud-sun-rain': faCloudSunRain,
		'cloud-rain': faCloudRain,
		'cloud-showers-heavy': faCloudShowersHeavy,
		snowflake: faSnowflake,
		'bolt-lighning': faBoltLightning,
	};

	return lookup[iconStr];
}

export const Forecast = ({forecastData}: {forecastData: IThreeHourData}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const textFade = interpolate(
		frame,
		[0, 40, videoConfig.durationInFrames - 20, videoConfig.durationInFrames],
		[0, 1, 1, 0]
	);
	return (
		<>
			<h1
				style={{
					position: 'absolute',
					fontFamily: '"Montserrat"',
					fontSize: '72px',
					width: '100%',
					textAlign: 'center',
					opacity: textFade,
				}}
			>
				At {forecastData.time}
			</h1>
			<h1
				style={{
					position: 'absolute',
					fontFamily: '"Montserrat"',
					fontSize: '14px',
					width: '100%',
					textAlign: 'center',
					opacity: textFade,
					bottom: 75,
				}}
			>
				Data was collected from the Met Office API at {forecastData.collectedAt}
				.
			</h1>
			<div
				style={{
					width: '100%',
					height: '100%',
					fontFamily: '"Montserrat"',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '22px',
					textAlign: 'center',
				}}
			>
				<div>
					<Img src={ukmap} />
					<div>
						<Location
							locationName="Glasgow"
							temp={forecastData.glasgow.temp}
							icon={translateToFA(forecastData.glasgow.weatherIcon)}
							animOffset={5}
							cardLocation={{bottom: 1050, right: 550}}
							markerLocation={{right: -20, top: '130%'}}
						/>
						<Location
							locationName="Edinburgh"
							temp={forecastData.edinburgh.temp}
							icon={translateToFA(forecastData.edinburgh.weatherIcon)}
							animOffset={7}
							cardLocation={{bottom: 1060, right: 320}}
							markerLocation={{right: 100, top: '130%'}}
						/>
						<Location
							locationName="Newcastle"
							temp={forecastData.newcastle.temp}
							icon={translateToFA(forecastData.newcastle.weatherIcon)}
							animOffset={9}
							cardLocation={{bottom: 930, right: 220}}
							markerLocation={{right: 70, top: '120%'}}
						/>
						<Location
							locationName="Belfast"
							temp={forecastData.belfast.temp}
							icon={translateToFA(forecastData.belfast.weatherIcon)}
							animOffset={7}
							cardLocation={{bottom: 870, right: 700}}
							markerLocation={{right: -30, top: '120%'}}
						/>
						<Location
							locationName="Manchester"
							temp={forecastData.manchester.temp}
							icon={translateToFA(forecastData.manchester.weatherIcon)}
							animOffset={10}
							cardLocation={{bottom: 740, right: 270}}
							markerLocation={{right: 70, top: '120%'}}
						/>
						<Location
							locationName="Birmingham"
							temp={forecastData.birmingham.temp}
							icon={translateToFA(forecastData.birmingham.weatherIcon)}
							animOffset={12}
							cardLocation={{bottom: 630, right: 230}}
							markerLocation={{right: 80, top: '130%'}}
						/>
						<Location
							locationName="Norwich"
							temp={forecastData.norwich.temp}
							icon={translateToFA(forecastData.norwich.weatherIcon)}
							animOffset={14}
							cardLocation={{bottom: 650, right: 10}}
							markerLocation={{right: 30, top: '120%'}}
						/>
						<Location
							locationName="London"
							temp={forecastData.london.temp}
							icon={translateToFA(forecastData.london.weatherIcon)}
							cardLocation={{bottom: 500, right: 140}}
							markerLocation={{right: 0, top: '120%'}}
							animOffset={16}
						/>
						<Location
							locationName="Cardiff"
							temp={forecastData.cardiff.temp}
							icon={translateToFA(forecastData.cardiff.weatherIcon)}
							animOffset={18}
							cardLocation={{bottom: 520, right: 390}}
							markerLocation={{right: -20, top: '120%'}}
						/>
						<Location
							locationName="Plymouth"
							temp={forecastData.plymouth.temp}
							icon={translateToFA(forecastData.plymouth.weatherIcon)}
							animOffset={20}
							cardLocation={{bottom: 380, right: 530}}
							markerLocation={{right: -20, top: '120%'}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
