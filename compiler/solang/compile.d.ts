import { SolangInput } from './compilerInput';
export declare type SolangOutput = {
    outputDirectory: string;
    outputFiles: string[];
};
export declare function compile(input: SolangInput, outPutDir: string): Promise<SolangOutput>;
