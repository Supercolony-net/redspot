interface CompletionEnv {
    line: string;
    point: number;
}
export declare function complete({ line, point }: CompletionEnv): Promise<string[]>;
export {};
