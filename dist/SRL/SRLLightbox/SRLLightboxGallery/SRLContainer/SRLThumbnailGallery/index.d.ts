import PropTypes from 'prop-types';
import { ISRLThumbnailGalleryComponent } from '../../../../../types';
declare const SRLThumbnailGalleryComponent: {
    ({ elements, currentId, handleCurrentElement, thumbnails, SRLThumbnailsRef }: ISRLThumbnailGalleryComponent): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        elements: PropTypes.Requireable<any[]>;
        handleCurrentElement: PropTypes.Requireable<(...args: any[]) => any>;
        currentId: PropTypes.Requireable<string>;
        SRLThumbnailsRef: PropTypes.Requireable<object>;
        thumbnails: PropTypes.Requireable<PropTypes.InferProps<{
            thumbnailsAlignment: PropTypes.Requireable<string>;
            thumbnailsContainerBackgroundColor: PropTypes.Requireable<string>;
            thumbnailsContainerPadding: PropTypes.Requireable<string>;
            thumbnailsGap: PropTypes.Requireable<string>;
            thumbnailsIconColor: PropTypes.Requireable<string>;
            thumbnailsOpacity: PropTypes.Requireable<number>;
            thumbnailsPosition: PropTypes.Requireable<string>;
            thumbnailsSize: PropTypes.Requireable<any[]>;
        }>>;
    };
};
export default SRLThumbnailGalleryComponent;
