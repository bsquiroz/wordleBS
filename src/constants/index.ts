import { interfaceWord } from "../interfaces";

export const words: interfaceWord[] = [
	{
		id: 0,
		name: "motos",
		desc: "Vehículos de dos ruedas motorizados que se utilizan para el transporte personal.",
		state: false,
	},
	{
		id: 1,
		name: "barco",
		desc: "Embarcación de tamaño considerable utilizada para navegar por el agua.",
		state: false,
	},
	{
		id: 2,
		name: "ronda",
		desc: "Acción de recorrer un lugar en un trayecto circular, visitando distintos puntos.",
		state: false,
	},
	{
		id: 3,
		name: "hongo",
		desc: "Organismo vegetal sin clorofila que crece en lugares húmedos y puede tener formas diversas.",
		state: false,
	},
	{
		id: 4,
		name: "gatos",
		desc: "Mamíferos carnívoros de la familia Felidae, de tamaño mediano, con pelaje suave y cola larga.",
		state: false,
	},
	{
		id: 5,
		name: "marte",
		desc: "Marte es un planeta desértico y frío. Es la mitad del tamaño de la Tierra, y también recibe el nombre de 'planeta rojo'.",
		state: false,
	},
	{
		id: 6,
		name: "manos",
		desc: "Parte terminal de los brazos humanos, con la que se agarran y manipulan objetos.",
		state: false,
	},
	{
		id: 7,
		name: "pizar",
		desc: "Acción de escribir o dibujar en una pizarra o superficie similar.",
		state: false,
	},
	{
		id: 8,
		name: "lucha",
		desc: "Actividad de enfrentamiento físico o simbólico entre dos personas o grupos.",
		state: false,
	},
	{
		id: 9,
		name: "ranas",
		desc: "Anfibios que se caracterizan por tener patas traseras largas y adaptadas para el salto.",
		state: false,
	},
	{
		id: 10,
		name: "grano",
		desc: "Pequeña semilla o fruto seco de algunas plantas, como el trigo o el arroz.",
		state: false,
	},
	{
		id: 11,
		name: "feliz",
		desc: "Estado de ánimo positivo, de satisfacción y alegría.",
		state: false,
	},
	{
		id: 12,
		name: "pilar",
		desc: "Columna o soporte vertical que sostiene una estructura.",
		state: false,
	},
	{
		id: 13,
		name: "pista",
		desc: "Sendero o camino estrecho utilizado para caminar, correr o montar en bicicleta.",
		state: false,
	},
	{
		id: 14,
		name: "bello",
		desc: "Que tiene belleza, que agrada o deleita los sentidos.",
		state: false,
	},
	{
		id: 15,
		name: "lente",
		desc: "Pieza de vidrio u otro material transparente que se utiliza en óptica para enfocar la luz.",
		state: false,
	},
	{
		id: 16,
		name: "cajas",
		desc: "Recipientes generalmente de forma rectangular y con tapa, utilizados para guardar objetos.",
		state: false,
	},
	{
		id: 17,
		name: "hacha",
		desc: "Herramienta con un mango de madera y una hoja de metal, utilizada para cortar.",
		state: false,
	},
	{
		id: 18,
		name: "ficha",
		desc: "Pequeña pieza generalmente plana, utilizada para representar información o como medio de juego.",
		state: false,
	},
	{
		id: 19,
		name: "pecho",
		desc: "Parte anterior del tronco humano, situada entre el cuello y el abdomen.",
		state: false,
	},
	{
		id: 20,
		name: "bufon",
		desc: "Persona, generalmente de aspecto grotesco, que en la Edad Media y principios de la Moderna se encargaba de divertir a la corte con historias graciosas y chistes.",
		state: false,
	},
	{
		id: 21,
		name: "vozes",
		desc: 'Forma plural de "voz", que es el sonido producido por las cuerdas vocales al hablar.',
		state: false,
	},
	{
		id: 22,
		name: "miedo",
		desc: "Sensación de temor o angustia ante la presencia de un peligro o amenaza.",
		state: false,
	},
	{
		id: 23,
		name: "pampa",
		desc: "Llanura extensa, generalmente sin árboles, propia de ciertas regiones de América del Sur.",
		state: false,
	},
	{
		id: 24,
		name: "zafar",
		desc: "Desatascar o liberar algo que estaba atascado o bloqueado.",
		state: false,
	},
	{
		id: 25,
		name: "pobre",
		desc: "Que carece de recursos económicos o que tiene escasos bienes materiales.",
		state: false,
	},
	{
		id: 26,
		name: "horno",
		desc: "Aparato utilizado para calentar o cocinar alimentos mediante calor seco.",
		state: false,
	},
	{
		id: 27,
		name: "fuego",
		desc: "Proceso de combustión que produce calor, luz y llama.",
		state: false,
	},
	{
		id: 28,
		name: "golpe",
		desc: "Acción de golpear o impactar con fuerza contra algo o alguien.",
		state: false,
	},
	{
		id: 29,
		name: "pared",
		desc: "Superficie vertical que delimita o cierra un espacio.",
		state: false,
	},
];

export const getColorLetter: Record<string, string> = {
	yellow: "letter-yellow",
	green: "letter-green",
	grey: "letter-grey",
	null: "letter-null",
};

export type ToastType = "success" | "error" | "warning" | "info";
