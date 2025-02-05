export interface JsonRpcServer {
    listen(): Promise<{
        address: string;
        port: number;
    }>;
    waitUntilClosed(): Promise<void>;
    close(): Promise<void>;
}
