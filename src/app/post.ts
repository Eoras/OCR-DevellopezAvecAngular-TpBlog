export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.loveIts = Math.floor(Math.random() * 6) + -2;
        this.created_at = new Date();
    }
}
