export interface Department {
	type: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

export interface GeneralDepartments {
	types: string[];
	location: string;
	name: string;
	servicesIcon: string[];
	services: string[];
	description: string;
	dimensions: string[];
	img: string;
	mapEmbedUrl: string;
	redirection: string;
}