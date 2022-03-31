import type {IThreeHourData, ILocationData} from '../types/Forecast';
import Config from '../../config';

const API_URL = `http://datapoint.metoffice.gov.uk/public/data/`;
const API_KEY = Config.API_KEY;

const locations: {[name: string]: number} = {
	edinburgh: 351351,
	glasgow: 310009,
	newcastle: 352798,
	belfast: 350347,
	manchester: 310013,
	norwich: 310115,
	birmingham: 310002,
	cardiff: 350758,
	london: 5,
	plymouth: 310016,
};

const locationList = [
	'edinburgh',
	'glasgow',
	'newcastle',
	'belfast',
	'manchester',
	'norwich',
	'birmingham',
	'cardiff',
	'london',
	'plymouth',
];

const weatherTypeToLabel = (wT: string) => {
	const lookup = [
		'moon',
		'sun',
		'cloud-moon',
		'cloud-sun',
		'',
		'smog',
		'smog',
		'cloud',
		'cloud',
		'cloud-moon-rain',
		'cloud-sun-rain',
		'cloud-rain',
		'cloud-rain',
		'cloud-moon-rain',
		'cloud-sun-rain',
		'cloud-showers-heavy',
		'cloud-moon-rain',
		'cloud-sun-rain',
		'cloud-rain',
		'cloud-moon-rain',
		'cloud-sun-rain',
		'cloud-rain',
		'cloud-moon-rain',
		'cloud-sun-rain',
		'snowflake',
		'snowflake',
		'snowflake',
		'snowflake',
		'bolt-lightning',
		'bolt-lightning',
		'bolt-lightning',
	];

	return lookup[parseInt(wT)];
};

const timeCalc = (time: number) => {
	let tStr = '';

	if (time === 0) {
		tStr = `12am`;
	} else if (time >= 12) {
		if (time === 12) {
			tStr = '12pm';
		} else {
			tStr = `${time - 12}pm`;
		}
	} else {
		tStr = `${time}am`;
	}

	return tStr;
};

export const fetchData = async (): Promise<IThreeHourData[]> => {
	const dataRes = [];

	let dateStr = '';

	for (let location in locations) {
		const res = await fetch(
			API_URL +
				`/val/wxfcs/all/json/${locations[location]}?res=3hourly&key=${API_KEY}`
		);

		const json = await res.json();

		dataRes.push(json);
	}

	dateStr = dataRes[0].SiteRep.DV.dataDate;

	const date = new Date(dateStr);

	let dataSeg: any[] = [];

	dataRes.forEach((data: any) => {
		const ds: any = [];

		data.SiteRep.DV.Location.Period[1].Rep.forEach((item: any) => {
			ds.push(item);
		});
		dataSeg.push(ds);
	});

	const fData: any[] = [];

	dataSeg[0].forEach((_: any, i: number) => {
		let d: any = {};
		dataSeg.forEach((ddata: any, ii: number) => {
			d[locationList[ii]] = {
				temp: ddata[i].T,
				weatherIcon: weatherTypeToLabel(ddata[i].W),
			};
		});

		d['time'] = `${timeCalc(i * 3)}`;
		d['collectedAt'] = `${date.toISOString().substr(11, 5)}`;
		fData.push(d);
	});

	return fData as IThreeHourData[];
};
