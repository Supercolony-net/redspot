import { SolangConfig } from '../../types';
export declare type SolangInput = {
    sources: string[];
};
export declare function getCompilerInput(config: SolangConfig, patterns?: string[]): Promise<SolangInput>;
