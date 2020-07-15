import * as React from 'react';

import { Background } from './styles';

const BackgroundContainer: React.FunctionComponent<{
  backgroundColor: string;
  backgroundImage: string;
  isVisible: boolean;
  landscapeGame: boolean;

}> = ({ backgroundColor, backgroundImage, isVisible, landscapeGame, children }) => (
  <Background
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
    isVisible={isVisible}
    landscapeGame={landscapeGame}
  >
    { children }
  </Background>
);

export default BackgroundContainer;
