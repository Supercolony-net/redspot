import { SignerResult } from '@polkadot/api/types';
import type { SignOptions } from '@polkadot/keyring/types';
import { SignerPayloadJSON } from '@polkadot/types/types';
import type { LocalKeyringPair, Signer as ISigner } from '../types';
import { Signer as AccountSigner } from './account-signer';
/**
 * A wrapper for Keyringpair
 */
export declare class Signer implements ISigner {
    pair: LocalKeyringPair;
    readonly accountSigner: AccountSigner;
    /**
     *
     * @param pair An instantiation of keyringpair
     * @param api ApiPromise
     */
    constructor(pair: LocalKeyringPair, accountSigner: AccountSigner);
    /**
     * @description The Account address
     */
    get address(): string;
    /**
     * @description The Account address
     */
    get addressRaw(): Uint8Array;
    /**
     * @description Public key of account
     */
    get publicKey(): Uint8Array;
    /**
     * @description Public key of account
     */
    sign(data: Uint8Array, options?: SignOptions): Uint8Array;
    /**
     * Returns the signature of the transaction
     *
     * @param payload - The data to be signed
     * @returns The signature of the transaction
     *
     */
    signPayload(payload: SignerPayloadJSON): Promise<SignerResult>;
    /**
     * Get account address asynchronously
     *
     * @returns Account address
     *
     */
    getAddress(): Promise<string>;
    setKeyPair(pair: LocalKeyringPair): void;
}
