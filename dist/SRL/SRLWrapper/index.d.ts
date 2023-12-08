import PropTypes from 'prop-types';
import { ISRLWrapper } from '../../types';
declare const SRLWrapper: {
    ({ options, callbacks, elements, children, defaultOptions, defaultCallbacks }: ISRLWrapper): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        defaultOptions: PropTypes.Requireable<PropTypes.InferProps<{
            settings: PropTypes.Requireable<PropTypes.InferProps<{
                autoplaySpeed: PropTypes.Requireable<number>;
                boxShadow: PropTypes.Requireable<string>;
                removeScrollBar: PropTypes.Requireable<boolean>;
                disableKeyboardControls: PropTypes.Requireable<boolean>;
                disablePanzoom: PropTypes.Requireable<boolean>;
                disableWheelControls: PropTypes.Requireable<boolean>;
                downloadedFileName: PropTypes.Requireable<string>;
                hideControlsAfter: PropTypes.Requireable<number>;
                lightboxTransitionSpeed: PropTypes.Requireable<number>;
                lightboxTransitionTimingFunction: PropTypes.Requireable<string>;
                limitToBounds: PropTypes.Requireable<boolean>;
                overlayColor: PropTypes.Requireable<string>;
                slideAnimationType: PropTypes.Requireable<string>;
                slideSpringValues: PropTypes.Requireable<any[]>;
                slideTransitionSpeed: PropTypes.Requireable<number>;
                slideTransitionTimingFunction: PropTypes.Requireable<string>;
                usingPreact: PropTypes.Requireable<boolean>;
            }>>;
            buttons: PropTypes.Requireable<PropTypes.InferProps<{
                backgroundColor: PropTypes.Requireable<string>;
                iconColor: PropTypes.Requireable<string>;
                iconPadding: PropTypes.Requireable<string>;
                showAutoplayButton: PropTypes.Requireable<boolean>;
                showCloseButton: PropTypes.Requireable<boolean>;
                showDownloadButton: PropTypes.Requireable<boolean>;
                showFullscreenButton: PropTypes.Requireable<boolean>;
                showNextButton: PropTypes.Requireable<boolean>;
                showPrevButton: PropTypes.Requireable<boolean>;
                showThumbnailsButton: PropTypes.Requireable<boolean>;
                size: PropTypes.Requireable<string>;
            }>>;
            caption: PropTypes.Requireable<PropTypes.InferProps<{
                captionColor: PropTypes.Requireable<string>;
                captionAlignment: PropTypes.Requireable<string>;
                captionFontFamily: PropTypes.Requireable<string>;
                captionFontSize: PropTypes.Requireable<string>;
                captionFontStyle: PropTypes.Requireable<string>;
                captionFontWeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
                captionContainerPadding: PropTypes.Requireable<string>;
                captionTextTransform: PropTypes.Requireable<string>;
                showCaption: PropTypes.Requireable<boolean>;
            }>>;
            thumbnails: PropTypes.Requireable<PropTypes.InferProps<{
                showThumbnails: PropTypes.Requireable<boolean>;
                thumbnailsAlignment: PropTypes.Requireable<string>;
                thumbnailsContainerPadding: PropTypes.Requireable<string>;
                thumbnailsContainerBackgroundColor: PropTypes.Requireable<string>;
                thumbnailsGap: PropTypes.Requireable<string>;
                thumbnailsIconColor: PropTypes.Requireable<string>;
                thumbnailsOpacity: PropTypes.Requireable<number>;
                thumbnailsPosition: PropTypes.Requireable<string>;
                thumbnailsSize: PropTypes.Requireable<any[]>;
            }>>;
            progressBar: PropTypes.Requireable<PropTypes.InferProps<{
                backgroundColor: PropTypes.Requireable<string>;
                fillColor: PropTypes.Requireable<string>;
                height: PropTypes.Requireable<string>;
                showProgressBar: PropTypes.Requireable<boolean>;
            }>>;
        }>>;
        defaultCallbacks: PropTypes.Requireable<PropTypes.InferProps<{
            onCountSlides: PropTypes.Requireable<(...args: any[]) => any>;
            onLightboxClosed: PropTypes.Requireable<(...args: any[]) => any>;
            onLightboxOpened: PropTypes.Requireable<(...args: any[]) => any>;
            onSlideChange: PropTypes.Requireable<(...args: any[]) => any>;
        }>>;
        children: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        options: PropTypes.Requireable<object>;
        callbacks: PropTypes.Requireable<object>;
        elements: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
    };
    defaultProps: {
        defaultOptions: {
            settings: {
                autoplaySpeed: number;
                boxShadow: string;
                removeScrollBar: boolean;
                disableKeyboardControls: boolean;
                disablePanzoom: boolean;
                disableWheelControls: boolean;
                downloadedFileName: string;
                hideControlsAfter: number;
                limitToBounds: boolean;
                lightboxTransitionSpeed: number;
                lightboxTransitionTimingFunction: string;
                overlayColor: string;
                slideAnimationType: string;
                slideSpringValues: number[];
                slideTransitionSpeed: number;
                slideTransitionTimingFunction: string;
                usingPreact: boolean;
            };
            buttons: {
                backgroundColor: string;
                iconColor: string;
                iconPadding: string;
                showAutoplayButton: boolean;
                showCloseButton: boolean;
                showDownloadButton: boolean;
                showFullscreenButton: boolean;
                showNextButton: boolean;
                showPrevButton: boolean;
                showThumbnailsButton: boolean;
                size: string;
            };
            caption: {
                captionAlignment: string;
                captionColor: string;
                captionContainerPadding: string;
                captionFontFamily: string;
                captionFontSize: string;
                captionFontStyle: string;
                captionFontWeight: string;
                captionTextTransform: string;
                showCaption: boolean;
            };
            thumbnails: {
                showThumbnails: boolean;
                thumbnailsAlignment: string;
                thumbnailsContainerBackgroundColor: string;
                thumbnailsContainerPadding: string;
                thumbnailsGap: string;
                thumbnailsIconColor: string;
                thumbnailsOpacity: number;
                thumbnailsPosition: string;
                thumbnailsSize: [string, string];
            };
            progressBar: {
                backgroundColor: string;
                fillColor: string;
                height: string;
                showProgressBar: boolean;
            };
        };
        defaultCallbacks: {
            onCountSlides: () => void;
            onSlideChange: () => void;
            onLightboxClosed: () => void;
            onLightboxOpened: () => void;
        };
    };
};
export default SRLWrapper;
export declare const defaultOptions: {
    settings: {
        autoplaySpeed: number;
        boxShadow: string;
        removeScrollBar: boolean;
        disableKeyboardControls: boolean;
        disablePanzoom: boolean;
        disableWheelControls: boolean;
        downloadedFileName: string;
        hideControlsAfter: number;
        limitToBounds: boolean;
        lightboxTransitionSpeed: number;
        lightboxTransitionTimingFunction: string;
        overlayColor: string;
        slideAnimationType: string;
        slideSpringValues: number[];
        slideTransitionSpeed: number;
        slideTransitionTimingFunction: string;
        usingPreact: boolean;
    };
    buttons: {
        backgroundColor: string;
        iconColor: string;
        iconPadding: string;
        showAutoplayButton: boolean;
        showCloseButton: boolean;
        showDownloadButton: boolean;
        showFullscreenButton: boolean;
        showNextButton: boolean;
        showPrevButton: boolean;
        showThumbnailsButton: boolean;
        size: string;
    };
    caption: {
        captionAlignment: string;
        captionColor: string;
        captionContainerPadding: string;
        captionFontFamily: string;
        captionFontSize: string;
        captionFontStyle: string;
        captionFontWeight: string;
        captionTextTransform: string;
        showCaption: boolean;
    };
    thumbnails: {
        showThumbnails: boolean;
        thumbnailsAlignment: string;
        thumbnailsContainerBackgroundColor: string;
        thumbnailsContainerPadding: string;
        thumbnailsGap: string;
        thumbnailsIconColor: string;
        thumbnailsOpacity: number;
        thumbnailsPosition: string;
        thumbnailsSize: [string, string];
    };
    progressBar: {
        backgroundColor: string;
        fillColor: string;
        height: string;
        showProgressBar: boolean;
    };
};
export declare const defaultCallbacks: {
    onCountSlides: () => void;
    onSlideChange: () => void;
    onLightboxClosed: () => void;
    onLightboxOpened: () => void;
};
