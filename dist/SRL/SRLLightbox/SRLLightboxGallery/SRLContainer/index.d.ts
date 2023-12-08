import PropTypes from 'prop-types';
import { ISRLContainerComponent } from '../../../../types';
declare function SRLContainerComponent({ caption, direction, elements, handleCurrentElement, handleCloseLightbox, handleNextElement, handlePanzoom, handlePrevElement, height: elementHeight, hideThumbnails, id, options, panzoomEnabled, source, SRLThumbnailsRef, SRLCaptionRef, width: elementWidth }: ISRLContainerComponent): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace SRLContainerComponent {
    var propTypes: {
        caption: PropTypes.Requireable<string>;
        direction: PropTypes.Requireable<string>;
        elements: PropTypes.Requireable<any[]>;
        handleCloseLightbox: PropTypes.Requireable<(...args: any[]) => any>;
        handleCurrentElement: PropTypes.Requireable<(...args: any[]) => any>;
        handleNextElement: PropTypes.Requireable<(...args: any[]) => any>;
        handlePanzoom: PropTypes.Requireable<(...args: any[]) => any>;
        handlePrevElement: PropTypes.Requireable<(...args: any[]) => any>;
        height: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        hideThumbnails: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
        options: PropTypes.Requireable<PropTypes.InferProps<{
            settings: PropTypes.Requireable<PropTypes.InferProps<{
                boxShadow: PropTypes.Requireable<string>;
                disablePanzoom: PropTypes.Requireable<boolean>;
                disableWheelControls: PropTypes.Requireable<boolean>;
                limitToBounds: PropTypes.Requireable<boolean>;
                slideAnimationType: PropTypes.Requireable<string>;
                slideSpringValues: PropTypes.Requireable<any[]>;
                slideTransitionSpeed: PropTypes.Requireable<number>;
                slideTransitionTimingFunction: PropTypes.Requireable<string>;
            }>>;
            caption: PropTypes.Requireable<PropTypes.InferProps<{
                captionAlignment: PropTypes.Requireable<string>;
                captionColor: PropTypes.Requireable<string>;
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
                thumbnailsOpacity: PropTypes.Requireable<number>;
                thumbnailsPosition: PropTypes.Requireable<string>;
                thumbnailsSize: PropTypes.Requireable<any[]>;
            }>>;
        }>>;
        panzoomEnabled: PropTypes.Requireable<boolean>;
        showControls: PropTypes.Requireable<boolean>;
        source: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        SRLCaptionRef: PropTypes.Requireable<object>;
        SRLThumbnailsRef: PropTypes.Requireable<object>;
        thumbnailsOpacity: PropTypes.Requireable<number>;
        type: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
    };
}
export default SRLContainerComponent;
