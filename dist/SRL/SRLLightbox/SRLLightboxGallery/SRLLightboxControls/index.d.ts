import PropTypes from 'prop-types';
import { ISRLLightboxControls } from '../../../../types';
declare const SRLLightboxControls: {
    ({ autoplay, buttons, buttonsOffsetFromProgressBar, currentElementID, handleCloseLightbox, handleFullScreen, handleImageDownload, handleNextElement, handlePrevElement, handlePanzoom, handleThumbnails, hideThumbnails, panzoomEnabled, setAutoplay, settings, showProgressBar, showThumbnails, SRLThumbnailsRef, thumbnailsPosition }: ISRLLightboxControls): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        autoplay: PropTypes.Requireable<boolean>;
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
        hideThumbnails: PropTypes.Requireable<boolean>;
        buttonsOffsetFromProgressBar: PropTypes.Requireable<string>;
        currentElementID: PropTypes.Requireable<string>;
        handleCloseLightbox: PropTypes.Requireable<(...args: any[]) => any>;
        handleFullScreen: PropTypes.Requireable<(...args: any[]) => any>;
        handleImageDownload: PropTypes.Requireable<(...args: any[]) => any>;
        handleNextElement: PropTypes.Requireable<(...args: any[]) => any>;
        handlePanzoom: PropTypes.Requireable<(...args: any[]) => any>;
        handlePrevElement: PropTypes.Requireable<(...args: any[]) => any>;
        handleThumbnails: PropTypes.Requireable<(...args: any[]) => any>;
        panzoomEnabled: PropTypes.Requireable<boolean>;
        setAutoplay: PropTypes.Requireable<(...args: any[]) => any>;
        settings: PropTypes.Requireable<PropTypes.InferProps<{
            autoplaySpeed: PropTypes.Requireable<number>;
        }>>;
        showProgressBar: PropTypes.Requireable<boolean>;
        showThumbnails: PropTypes.Requireable<boolean>;
        thumbnailsPosition: PropTypes.Requireable<string>;
        SRLThumbnailsRef: PropTypes.Requireable<object>;
        thumbnailsSize: PropTypes.Requireable<any[]>;
    };
};
export default SRLLightboxControls;
