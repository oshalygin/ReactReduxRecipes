// import colors from "colors";
/* eslint-disable no-undefined */
/* eslint-disable no-console */

export const loadState = () => {
        try {
            const serializedState = localStorage.getItem("state");
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (error) {
            return undefined;
        }
};

export const saveState = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem("state", serializedState);
        } catch (error) {
            console.log("save state error: " + error);
        }
};
