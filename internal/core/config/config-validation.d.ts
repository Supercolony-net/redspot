import * as t from 'io-ts';
import { ValidationError } from 'io-ts/lib';
import { Reporter } from 'io-ts/lib/Reporter';
export declare function failure(es: ValidationError[]): string[];
export declare function success(): string[];
export declare const DotPathReporter: Reporter<string[]>;
export declare const hexString: t.Type<string, string, unknown>;
/**
 * Validates the config, throwing a RedspotError if invalid.
 * @param config
 */
export declare function validateConfig(config: any): void;
export declare function getValidationErrors(config: any): string[];
