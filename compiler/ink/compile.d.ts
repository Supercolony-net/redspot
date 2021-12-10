import { InkInput } from './compilerInput';
export declare type InkOutput = {
    name: string;
    wasm: string;
    contract: string;
};
export declare function compile(input: InkInput, verbose?: boolean, release?: boolean): Promise<InkOutput[]>;
