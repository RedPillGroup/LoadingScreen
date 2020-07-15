import * as React from 'react';
import { Message } from './styles';

const LoadingMessage: React.FunctionComponent<{
  color: string;
  fontFamily: string;
  fontSize: string;
  message: string;
}> = ({ color, fontFamily, fontSize, message }) => (
  <Message color={color} fontFamily={fontFamily} fontSize={fontSize}>
    {message}
  </Message>
);

export default LoadingMessage;
