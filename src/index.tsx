import * as React from 'react';
import Spinner from './components/Spinner';
import LoadingLogo from './components/LoadingLogo';
import LoadingMessage from './components/LoadingMessage';
import BackgroundContainer from './components/BackgroundContainer';

export interface LoadingScreenProps {
  message: string;
  bgColor: string;
  color: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  bgImage: string;
  logo: string;
  isVisible: boolean;
  spinnerColor: string;
  landscapeGame: boolean;
}

const LoadingScreen: React.FunctionComponent<LoadingScreenProps> = ({
  message,
  bgColor,
  color,
  fontFamily,
  fontSize,
  bgImage,
  logo,
  isVisible,
  spinnerColor,
  landscapeGame,
}) => (
  <BackgroundContainer
    backgroundColor={bgColor}
    backgroundImage={bgImage}
    isVisible={isVisible}
    landscapeGame={landscapeGame}
  >
    <LoadingLogo logo={logo} />
    <Spinner spinnerColor={spinnerColor} />
    <LoadingMessage color={color} fontFamily={fontFamily} fontSize={fontSize} message={message} />
  </BackgroundContainer>
);

export default LoadingScreen;
