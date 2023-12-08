/// <reference types="react" />
export declare function useLightbox(): {
    openLightbox: (slideIndex?: number) => void;
    closeLightbox: () => void;
};
export declare function useInterval(callback: () => void, delay: number | null, currentID: string): void;
export declare function useOnClickOutside(ref: React.MutableRefObject<HTMLDivElement | null>, handler: () => void): void;
export declare function useSizes(ref: React.RefObject<HTMLDivElement>): {
    x: number;
    y: number;
    width: number;
    height: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
    scrollHeight: number;
    scrollWidth: number;
}[];
