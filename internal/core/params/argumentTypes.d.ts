import { ArgumentType, CLIArgumentType } from '../../../types';
/**
 * String type.
 *
 * Accepts any kind of string.
 */
export declare const string: CLIArgumentType<string>;
/**
 * Boolean type.
 *
 * Accepts only 'true' or 'false' (case-insensitive).
 * @throws RS301
 */
export declare const boolean: CLIArgumentType<boolean>;
/**
 * Int type.
 * Accepts either a decimal string integer or hexadecimal string integer.
 * @throws RS301
 */
export declare const int: CLIArgumentType<number>;
/**
 * Float type.
 * Accepts either a decimal string number or hexadecimal string number.
 * @throws RS301
 */
export declare const float: CLIArgumentType<number>;
/**
 * Input file type.
 * Accepts a path to a readable file..
 * @throws RS302
 */
export declare const inputFile: CLIArgumentType<string>;
export declare const json: CLIArgumentType<any>;
export declare const any: ArgumentType<any>;
