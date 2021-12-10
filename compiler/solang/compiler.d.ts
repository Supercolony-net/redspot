export interface CompilerOptions {
    verbose?: boolean;
}
export declare class Compiler {
    private readonly _verbose;
    constructor({ verbose }?: CompilerOptions);
    _checkSolang(): boolean;
    run(inputDir: string, outPutdir: string): Promise<string>;
}
