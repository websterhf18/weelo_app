/**
 * @author Hugo Garcia
 * @description Entity for Inject Functions
 * @returns 
 */
import { Dispatch } from "@reduxjs/toolkit";


export interface Props {
    route: any;
    navigation: any;
}

export interface SlicesDetail { }
export interface SlicesHome { 
    getCoinsRedux: () => (dispatch: Dispatch) => void;
}
