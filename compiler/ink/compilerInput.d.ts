import { InkConfig } from '../../types';
export interface CargoPackage {
    name: string;
    version: string;
    id: string;
    license: null | string;
    license_file: null | string;
    description: null | string;
    source: null | string;
    dependencies: {
        name: string;
        source: string;
        req: string;
        kind: null | string;
        rename: null | string;
        optional: boolean;
        uses_default_features: boolean;
        features: any[];
        target: null | string;
        registry: null | string;
    }[];
    targets: any;
    features: any;
    manifest_path: string;
    metadata: any;
    publish: null | string[];
    authors: string[];
    categories: string[];
    keywords: string[];
    readme: null | string;
    repository: null | string;
    edition: string;
    links: null | string;
}
export interface CargoMetadata {
    packages: CargoPackage[];
    workspace_members: string[];
    resolve: any;
    target_directory: string;
    version: number;
    workspace_root: string;
    metadata: any;
}
export interface InkSource {
    id: string;
    name: string;
    manifestPath: string;
    targetDirectory: string;
}
export interface InkInput {
    sources: InkSource[];
    toolchain: string;
}
export declare function getCargoMetadata(config: InkConfig, cwd: string): CargoMetadata;
export declare function getCompilerInput(config: InkConfig, patterns?: string[]): Promise<{
    sources: InkSource[];
    toolchain: string;
}>;
