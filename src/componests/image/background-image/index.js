import Styled from 'styled-components';
import PropTypes from 'prop-types';

const DivWithBackground = Styled.div`
    background: linear-gradient(160deg, rgba(0,182,188, 0.8), rgba(255,255,255, 0.6)),url(${props => props.src});
    background-size: cover;
    background-position: center;
    height: calc(100vh - 110px);
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

DivWithBackground.propTypes = {
    src: PropTypes.string.isRequired,
}


export default DivWithBackground;