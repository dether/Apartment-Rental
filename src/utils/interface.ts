import asd from "../assets/icon/Light bulb.svg"
export interface Department {
	type: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}