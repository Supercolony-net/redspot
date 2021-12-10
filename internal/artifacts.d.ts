import { AbiMetadata, Artifacts as IArtifacts } from '../types';
export declare class Artifacts implements IArtifacts {
    private _artifactsPath;
    constructor(_artifactsPath: string);
    getArtifactPath(name: string): Promise<string>;
    getArtifactPathSync(name: string): string;
    readAllArtifact(): Promise<AbiMetadata[]>;
    readAllArtifactSync(): AbiMetadata[];
    readArtifact(name: string): Promise<AbiMetadata>;
    readArtifactSync(name: string): AbiMetadata;
    artifactExists(name: string): Promise<boolean>;
    getArtifactPaths(): Promise<string[]>;
    copyToArtifactDir(originPath: string[] | string): Promise<void>;
    private _getArtifactPath;
    private _getArtifactPathsSync;
    private _getArtifactPathSync;
    private _getArtifactPathFromFiles;
}
