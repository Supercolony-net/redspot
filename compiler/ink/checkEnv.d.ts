export declare function getCargoContractVersion(): string | null;
export declare function checkEnv({ version }: {
    version: string;
}): Promise<string | false>;
