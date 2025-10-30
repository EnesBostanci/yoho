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

interface CardProps extends CardType {
    render?: boolean;
  }

export type {CardType, ButtonType ,CardProps};