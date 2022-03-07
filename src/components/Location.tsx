import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import type {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const Location = ({
	locationName,
	temp,
	icon,
	cardLocation,
	markerLocation,
	animOffset,
}: {
	locationName: string;
	temp: number;
	icon: IconDefinition;
	cardLocation: {bottom: number | string; right: number | string};
	markerLocation: {top: string | number; right: string | number};
	animOffset: number | 0;
}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const textFade = interpolate(
		frame,
		[
			animOffset as number,
			(40 + animOffset) as number,
			videoConfig.durationInFrames - 20,
			videoConfig.durationInFrames,
		],
		[0, 1, 1, 0]
	);

	return (
		<div
			style={{
				position: 'absolute',
				bottom: cardLocation.bottom,
				right: cardLocation.right,
				opacity: textFade,
			}}
		>
			<h2>{locationName}</h2>
			<FontAwesomeIcon
				icon={icon}
				style={{
					position: 'absolute',
					fontSize: '60px',
					right: '65%',
					top: '78%',
				}}
			/>
			<h2
				style={{
					position: 'absolute',
					right: 0,
					top: '50%',
				}}
			>
				{temp}°C
			</h2>
			<div
				style={{
					backgroundColor: '#fff',
					width: '20px',
					height: '20px',
					position: 'absolute',
					right: markerLocation.right,
					top: markerLocation.top,
					borderRadius: '50%',
				}}
			></div>
		</div>
	);
};

export default Location;
