export interface LoginInterface {
    email: String;
    password: String;
}

export interface CharacterInterface {
    char_id: string; 
    name: string;
    birthday: string;
    occupation: [string];
    img: string;
    status: string;
    nickname: string;
    portrayed: string;
}

export interface PhraseInterface {
    quote_id: string;
    quote: string;
    author: string;
}