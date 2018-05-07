export class Post {

    public loveIts: number;
    public created_at: Date;

    constructor(public title: string, public content: string) {
        this.loveIts = 0;
        this.created_at = new Date().toString();
    }
}
/*
Mon TP OpenClassRoom
Ceci est un TP OpenClassRoom

1
MySQL
Je préfère utiliser FireBase

-1
FireBase
C'est vraiment bien et pratique ;)*/
