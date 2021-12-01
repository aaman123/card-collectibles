export class Card {
    constructor(
        public id: number,
        public name: string,
        public owner: string,
        public buy: string | undefined
    ) {}
}