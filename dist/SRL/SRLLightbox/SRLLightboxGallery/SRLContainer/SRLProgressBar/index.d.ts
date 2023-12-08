import PropTypes from 'prop-types';
import { ISRLProgressBarComponent } from '../../../../../types';
declare const SRLProgressBarComponent: {
    ({ autoplay, autoplaySpeed, progressBar, currentElementID }: ISRLProgressBarComponent): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        autoplay: PropTypes.Requireable<boolean>;
        autoplaySpeed: PropTypes.Requireable<number>;
        currentElementID: PropTypes.Requireable<string>;
        progressBar: PropTypes.Requireable<PropTypes.InferProps<{
            backgroundColor: PropTypes.Requireable<string>;
            fillColor: PropTypes.Requireable<string>;
            height: PropTypes.Requireable<string>;
        }>>;
    };
};
export default SRLProgressBarComponent;
