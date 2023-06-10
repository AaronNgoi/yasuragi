declare module 'flickity';

declare module 'wowjs' {
    export class WOW {
        constructor(config?: Partial<{ boxClass: string, animateClass: string, offset: number, mobile: boolean, live: boolean, callback: (box: HTMLElement) => void, scrollContainer: string | null }>);
        init(): void;
    }
}