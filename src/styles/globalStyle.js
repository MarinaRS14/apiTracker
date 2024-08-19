import { createGlobalStyle } from 'styled-components';
import * as palette from '../shared/styles/colors';

export const GlobalStyles = createGlobalStyle`
* {
    font-family: 'Rubik';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${palette.COLOR_MAIN};
}
`;
