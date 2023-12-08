import PropTypes from 'prop-types'

import { ISRLVideoIcon } from '../../../../../types'
import { SRLVideoIconStyle } from '../../../../styles/SRLThumbnailsStyle'

export default function SRLVideoIcon({ thumbnailsIconColor }: ISRLVideoIcon) {
  return (
    <SRLVideoIconStyle
      aria-hidden="true"
      data-prefix="fas"
      data-icon="play-circle"
      className="SRLThumbIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={thumbnailsIconColor}
        className="SRLThumbIcon"
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
      />
    </SRLVideoIconStyle>
  )
}

SRLVideoIcon.propTypes = {
  thumbnailsIconColor: PropTypes.string
}
