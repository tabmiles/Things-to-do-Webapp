export enum ActivityType {
	RANDOM = 'random',
	RECREATIONAL = 'recreational',
	SOCIAL = 'social',
	COOKING = 'cooking',
	EDUCATION = 'education',
	BUSYWORK = 'busywork',
	DIY = 'diy',
	CHARITY = 'charity',
	RELAXATION = 'relaxation',
	MUSIC = 'music'
}

export interface Activity {
    activity?: string,
	accessibility?: number,
	type?: string,
	participants?: number,
	price?: number,
	link?: string,
	key?: string
}

export interface Joke {
	error?: boolean,
    category?: string,
    type?: string,
    setup?: string,
    delivery?: string,
	joke?: string,
    flags?: {
        nsfw?: boolean,
        religious?: boolean,
        political?: boolean,
        racist?: boolean,
        sexist?: boolean,
        explicit?: boolean
    },
    id?: number,
    safe?: true,
    lang?: string
}

export enum JokeType {
	RANDOM = 'Any',
	PROGRAMMING = 'Programming',
	MISC = 'Misc',
	DARK = 'Dark',
	PUN = 'Pun',
	SPOOKY = 'Spooky',
	CHRISTMAS = 'Christmas'
}

export interface Dog {
	message?: string,
	success?: boolean
}

export enum DogType {
	RANDOM = 'Random',
	BEAGLE = 'beagle',
	BOXER = 'boxer',
	CHIHUAHUA = 'chihuahua',
	COCKAPOO = 'cockapoo',
	COONHOUND = 'coonhound',
	DACHSHUND = 'dachshund',
	DALMATIAN = 'dalmatian',
	DOBERMAN = 'doberman',
	ESKIMO = 'eskimo',
	GERMANSHEPHERD = 'germanshepherd',
	HUSKY = 'husky',
	LABRADOODLE = 'labradoodle',
	LABRADOR = 'labrador',
	MIX = 'mix',
	NEWFOUNDLAND = 'newfoundland',
	PITBULL = 'pitbull',
	POMERANIAN = 'pomeranian',
	PUG = 'pug',
	SAMOYED = 'samoyed',
	SHIBA = 'shiba'
}

export enum JokeLineLength {
	ONE = 'single',
	TWO = 'twopart'
}

export enum PageType {
	HOME = 'HOME',
	ACTIVITY = 'ACTIVITY',
	JOKE = 'JOKE',
	DOG = 'DOG'
}

export enum PageDescription {
	HOME = 'Welcome! I have things for you...',
	ACTIVITY = 'Bored? Try an activity!',
	JOKE = 'Need a laugh? Get a joke here',
	DOG = 'Think dogs are cute? See the dog page for a smile'
}

export enum PageRoutes { 
	HOME = '',
	ACTIVITY = 'activity',
	JOKE = 'joke',
	DOG = 'dog'
}