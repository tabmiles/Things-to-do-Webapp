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

export enum HomePageDescription {
	HOME = 'Welcome! I have things for you...',
	ACTIVITY = 'Bored? Try an activity!',
	JOKE = 'Need a laugh? Get a joke here',
	DOG = 'Think dogs are cute? See the dog page for a smile'
}

export enum Labels {
	PAGE_LABEL = ' page',
	DOUBLE_ASTERICS_LABEL = '**'
}

export enum ActivityPageDescription {
	HEADER = 'Activity Page',
	RANDOM_ACTIVITY_HEADER = 'Click to get an activity suggestion',
	TYPE_ACTIVITY_HEADER = 'Looking for a specific type? Check out the types below'
}

export enum JokePageDescription {
	HEADER = 'Joke Page',
	RANDOM_JOKE_HEADER = 'Click to get an random joke',
	TYPE_JOKE_HEADER = 'Looking for a specific type? Check out the type of jokes below',
	PART_TYPE_JOKE_HEADER = 'Single or Two-Part Jokes'
}

export enum DogPageDescription {
	HEADER = 'Dog Page',
	RANDOM_DOG_HEADER = 'Click to get an random dog',
	TYPE_DOG_HEADER = 'Looking for a specific breed? Check out the breeds below'
}

export enum PageRoutes { 
	HOME = '',
	ACTIVITY = 'activity',
	JOKE = 'joke',
	DOG = 'dog'
}

export interface DialogData {
	title: string;
	content: [];
	subcontent: [];
	image: string;
}

export enum DialogHeaders {
	ACTIVITY = ' activity to try!',
	JOKE = ' Joke',
	DOG = ' dog',
}