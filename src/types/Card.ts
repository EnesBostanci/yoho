type ButtonType={
    bgcolor:string;
    textcolor:string;
}

interface CardType {
    header:string;
    url:string;
    text:string[];
    button:ButtonType;
}

export type {CardType, ButtonType};