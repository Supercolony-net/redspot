import { RedspotConfig } from '../../types';
export declare const DOCKER_IMAGE_NAME = "redspot/contract";
export declare const WORK_DIR = "/usr/src/contract";
export declare const compileDocker: (config: RedspotConfig, patterns?: string[]) => void;
