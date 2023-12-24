import SM from "./SM/SM1.jpg";
import ST from "./ST/ST1.jpg";
import SM5 from "./SM/SM5.jpg";
import SM2 from "./SM/SM2.jpg";
import SM3 from "./SM/SM3.jpg";
import SM4 from "./SM/SM4.jpg";
import ST8 from "./ST/ST8.jpg";
import ST2 from "./ST/ST2.jpg";
import ST3 from "./ST/ST3.jpg";
import ST4 from "./ST/ST4.jpg";
import ST5 from "./ST/ST5.jpg";
import ST6 from "./ST/ST6.jpg";
import ST7 from "./ST/ST7.jpg";
import LOCAL from "./ST/LOCAL.jpg";
import LightBulb from "./icon/Light bulb.svg"
import cable from "./icon/cable tv.svg"
import TapWaterDrink from "./icon/Tap Water Drink.svg";

interface DepartmentST {
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

interface DepartmentSM {
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

interface DepartmentSantaMonica {
	type: string;
	location: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

interface DepartmentSantaTeresita {
	type: string;
	location: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

interface ApartmentData {
	departmentST: DepartmentST[];
	departmentSM: DepartmentSM[];
	departmentsSantaMonica: DepartmentSantaMonica[];
	departmentsSantaTeresita: DepartmentSantaTeresita[];
	// Agrega aquí cualquier otro conjunto de datos que tengas
}

const apartmentData: ApartmentData = {
	departmentST: [
		{
			types: ["Monoambientes", "Para dos personas"],
			location: "Esquina 29 y 000 del Barrio Santa Teresita",
			name: "Departamentos Santa Teresita",
			servicesIcon: [
				LightBulb,
				cable,
				TapWaterDrink,
			],
			services: ["Luz", "Cable", "Agua"],
			description:
				"En Departamentos Santa Teresita, te ofrecemos la elección entre acogedores monoambientes y espaciosos departamentos para dos personas. Cada unidad ha sido cuidadosamente diseñada para brindar comodidad y funcionalidad, creando un ambiente acogedor que te hará sentir como en casa desde el momento en que entres por la puerta. Tambien disponemos de un local ubicado estrategicamente en la esquina ubicado en la calle 29 y 000 del Barrio Santa Teresita",
			dimensions: ["15x15 mtrs", "25x25 mtrs"],
			img: ST,
			mapEmbedUrl: "https://maps.app.goo.gl/nKwgP9ujNe894qAB7",
			redirection: "/departments/santa-teresita",
		},
	],
	departmentSM: [
		{
			types: ["Monoambientes", "Para dos personas"],
			location: "Calle 39 entre 14 y 16 del Barrio Santa Monica",
			name: "Departamentos Santa Monica",
			servicesIcon: [
        LightBulb,
				TapWaterDrink,
      ],
			services: ["Luz", "Agua"],
			description:
				"En Departamentos Santa Mónica, te ofrecemos la elección entre acogedores monoambientes y espaciosos departamentos para dos personas. Cada unidad ha sido cuidadosamente diseñada para brindar comodidad y funcionalidad, creando un ambiente acogedor que te hará sentir como en casa desde el momento en que entres por la puerta.",
			dimensions: ["15x15 mtrs", "25x25 mtrs"],
			img: SM,
			mapEmbedUrl: "https://maps.app.goo.gl/1ApEVKo6ZnagDPCy8",
			redirection: "/departments/santa-monica",
		},
	],
	departmentsSantaMonica: [
		{
			type: "Monoambiente",
			location: "Santa Monica",
			name: "Departamento 1",
			available: false,
			services: [
        LightBulb,
				cable,
				TapWaterDrink,
      ],
			description:
				"Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: SM5,
		},
		{
			type: "Monoambiente",
			location: "Santa Monica",
			name: "Departamento 2",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description:
				"Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: SM2,
		},
		{
			type: "Para dos personas",
			location: "Santa Monica",
			name: "Departamento 3",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description:
				"Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "35x35 mtrs",
			img: SM3,
		},
		{
			type: "Para dos personas",
			location: "Santa Monica",
			name: "Departamento 4",
			available: true,
			services: ["Luz", "Cable", "Agua"],
			description:
				"Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "35x35 mtrs",
			img: SM4,
		},
	],
	departmentsSantaTeresita: [
		{
			type: "Monoambiente",
			location: "Santa Teresita",
			name: "Departamento 1",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: ST8,
		},
		{
			type: "Monoambiente",
			location: "Santa Teresita",
			name: "Departamento 2",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: ST2,
		},
		{
			type: "Monoambiente",
			location: "Santa Teresita",
			name: "Departamento 3",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: ST3,
		},
		{
			type: "Monoambiente",
			location: "Santa Teresita",
			name: "Departamento 4",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: ST4,
		},
		{
			type: "Monoambiente",
			location: "Santa Teresita",
			name: "Departamento 5",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: ST5,
		},
		{
			type: "Monoambiente",
			location: "Santa Teresita",
			name: "Departamento 6",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye Mesada, baño, patio y lavado en el patio",
			dimensions: "15x15 mtrs",
			img: ST6,
		},
		{
			type: "Para dos personas",
			location: "Santa Teresita",
			name: "Departamento 7",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Incluye mesada, baño, patio, lavado, agua, luz",
			dimensions: "35x35 mtrs",
			img: ST7,
		},
		{
			type: "Tienda",
			location: "Santa Teresita",
			name: "Local 8",
			available: false,
			services: ["Luz", "Cable", "Agua"],
			description: "Local comercial incluye un baño, vidriera y dos entradas.",
			dimensions: "35x35 mtrs",
			img: LOCAL,
		},
	],
	// Agrega aquí cualquier otro conjunto de datos que tengas
};

export default apartmentData;
// Puedes acceder a los datos de la siguiente manera:
/* const departmentSTData = apartmentData.departmentST;
const departmentSMData = apartmentData.departmentSM;
const santaMonicaApartments = apartmentData.departmentsSantaMonica;
const santaTeresitaApartments = apartmentData.departmentsSantaTeresita; */

