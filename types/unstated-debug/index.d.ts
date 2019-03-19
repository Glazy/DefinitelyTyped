// Type definitions for unstated-debug 0.3
// Project: https://github.com/sindresorhus/unstated-debug#readme
// Definitions by: Luke Glazebrook <https://github.com/Glazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Container } from "unstated";

declare const UNSTATED: {
    containers: {
        [containerName: string]: Container<object>;
    };
    isEnabled: boolean;
    logState: () => void;
    logStateChanges: boolean;
    states: object;
};

export default UNSTATED;
