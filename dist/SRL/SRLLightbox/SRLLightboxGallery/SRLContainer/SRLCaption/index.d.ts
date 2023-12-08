import PropTypes from 'prop-types';
import { ISRLCaptionContainerComponent } from '../../../../../types';
declare const SRLCaptionContainerComponent: {
    ({ id, captionAlignment, captionOptions, caption, thumbnailsPosition, SRLCaptionRef }: ISRLCaptionContainerComponent): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        captionOptions: PropTypes.Requireable<PropTypes.InferProps<{
            showCaption: PropTypes.Requireable<boolean>;
            captionColor: PropTypes.Requireable<string>;
            captionFontFamily: PropTypes.Requireable<string>;
            captionFontSize: PropTypes.Requireable<string>;
            captionFontStyle: PropTypes.Requireable<string>;
            captionFontWeight: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
            captionTextTransform: PropTypes.Requireable<string>;
        }>>;
        SRLCaptionRef: PropTypes.Requireable<object>;
        thumbnailsPosition: PropTypes.Requireable<string>;
        caption: PropTypes.Requireable<string>;
    };
};
export default SRLCaptionContainerComponent;
