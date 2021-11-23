export interface LoginInterface {
    username: String;
    password: String;
}

export interface ContainersInterface {
    id: String;
    origin: String;
    destiny: String;
    temp: String;
    img: string;
    tacking_number: String
}

export interface WorkerInterface {
    id: String;
    name: String;
    surname: String;
    ocuppation: String;
    img: string;
}