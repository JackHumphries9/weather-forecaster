export interface ILocationData {
	weatherIcon: string;
	temp: number;
}

export interface IThreeHourData {
	edinburgh: ILocationData;
	glasgow: ILocationData;
	newcastle: ILocationData;
	belfast: ILocationData;
	manchester: ILocationData;
	norwich: ILocationData;
	birmingham: ILocationData;
	cardiff: ILocationData;
	london: ILocationData;
	plymouth: ILocationData;
	time: string;
	collectedAt?: string;
}
