import PropTypes from 'prop-types';
import { ISRLLightboxGallery } from '../../../types';
declare const SRLLightboxGallery: {
    ({ options, callbacks, selectedElement, elements, dispatch }: ISRLLightboxGallery): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        callbacks: PropTypes.Requireable<object>;
        elements: PropTypes.Requireable<any[]>;
        isOpened: PropTypes.Requireable<boolean>;
        dispatch: PropTypes.Requireable<(...args: any[]) => any>;
        selectedElement: PropTypes.Requireable<object>;
        options: PropTypes.Requireable<PropTypes.InferProps<{
            thumbnails: PropTypes.Requireable<PropTypes.InferProps<{
                thumbnailsContainerPadding: PropTypes.Requireable<string>;
                thumbnailsPosition: PropTypes.Requireable<string>;
                thumbnailsSize: PropTypes.Requireable<any[]>;
                showThumbnails: PropTypes.Requireable<boolean>;
            }>>;
            settings: PropTypes.Requireable<PropTypes.InferProps<{
                overlayColor: PropTypes.Requireable<string>;
                autoplaySpeed: PropTypes.Requireable<number>;
                disableKeyboardControls: PropTypes.Requireable<boolean>;
                disablePanzoom: PropTypes.Requireable<boolean>;
                limitToBounds: PropTypes.Requireable<boolean>;
                hideControlsAfter: PropTypes.Requireable<number>;
            }>>;
            buttons: PropTypes.Requireable<PropTypes.InferProps<{
                backgroundColor: PropTypes.Requireable<string>;
                iconColor: PropTypes.Requireable<string>;
                iconPadding: PropTypes.Requireable<string>;
                size: PropTypes.Requireable<string>;
            }>>;
            progressBar: PropTypes.Requireable<PropTypes.InferProps<{
                showProgressBar: PropTypes.Requireable<boolean>;
                background: PropTypes.Requireable<string>;
                height: PropTypes.Requireable<string>;
            }>>;
        }>>;
    };
};
export default SRLLightboxGallery;
