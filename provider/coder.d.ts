import { JsonRpcRequest, JsonRpcResponse } from '../types';
/** @internal */
export default class RpcCoder {
    #private;
    decodeResponse(response: JsonRpcResponse): unknown;
    encodeJson(method: string, params: any | any[]): JsonRpcRequest;
    encodeObject(method: string, params: unknown[]): JsonRpcRequest;
    getId(): number;
    private _checkError;
}
