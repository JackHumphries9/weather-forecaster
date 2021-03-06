import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const Outro = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const textAnim = interpolate(
		frame,
		[0, 20, videoConfig.durationInFrames - 20, videoConfig.durationInFrames],
		[0, 1, 1, 0]
	);

	const curDate = new Date();
	const dateStr = curDate.toLocaleDateString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				fontFamily: '"Montserrat"',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '24px',
				textAlign: 'center',
			}}
		>
			<div style={{opacity: textAnim}}>
				<h1>Created by Jack Humphries</h1>
				<h1>jackhumphries.dev</h1>
			</div>
		</div>
	);
};

export default Outro;
