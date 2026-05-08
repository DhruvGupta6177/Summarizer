declare module 'wav' {
  export class Writer {
    constructor(options: {
      channels?: number;
      sampleRate?: number;
      bitDepth?: number;
    });
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'data', listener: (chunk: Buffer) => void): this;
    on(event: 'end', listener: () => void): this;
    write(data: Buffer): void;
    end(): void;
  }
}