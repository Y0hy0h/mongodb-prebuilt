/// <reference types="node" />
import { IMongoDBDownloadOptions } from "mongodb-download";
import { SpawnOptions, ChildProcess } from 'child_process';
import { MongoDBPrebuilt } from './mongodb-prebuilt';
import { MongoSupervise } from './mongodb-supervise';
export declare class MongoBins {
    commandArguments: string[];
    spawnOptions: SpawnOptions;
    command: string;
    execPath: string;
    debug: any;
    childProcess: ChildProcess;
    mongoSupervise: MongoSupervise;
    mongoDBPrebuilt: MongoDBPrebuilt;
    constructor(command: string, commandArguments?: string[], spawnOptions?: SpawnOptions, downloadOptions?: Partial<IMongoDBDownloadOptions>);
    run(): Promise<boolean>;
    runCommand(): Promise<boolean>;
    getCommand(): Promise<string>;
    getCommandArguments(): Promise<string[]>;
}
