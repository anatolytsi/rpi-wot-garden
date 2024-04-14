import {GpioConfigs} from './interfaces/types';
import * as fs from "fs";
import { Sprinkler } from './sprinkler';
import { delay } from './common';

const conf = require('../garden.conf.json');

export type OperationMode = 'manual' | 'autoWinter' | 'autoSummer' | 'test';

type SaveFileType = {
    // TODO add more saved data
    mode: OperationMode;
}

const SAVE_FILE_NAME = 'state.dump.json';

export class Garden {
    public sprinkler1: Sprinkler;
    public sprinkler2: Sprinkler;
    public sprinkler3: Sprinkler;
    public sprinkler4: Sprinkler;
    public sprinkler5: Sprinkler;
    public sprinkler6: Sprinkler;
    public sprinkler7: Sprinkler;
    public sprinkler8: Sprinkler;
    public mode: OperationMode;
    private timer!: NodeJS.Timer;
    private workerCallback: () => void;

    constructor() {
        this.workerCallback = async () => {};
        this.initSprinklers();
        this.setMode('test'); // TODO set proper mode later
        this.readState();
        this.timer = setInterval(async () => {
            await this.timerMainCallback()
        }, 60000);
        setInterval(async () => {await this.dumpState()}, 60000);
    }

    public setMode(mode: OperationMode) {
        this.mode = mode;
        console.log(`Switching mode to "${mode}"`);
        switch (mode) {
            case 'autoWinter':
                this.workerCallback = this.autoWinterMode;
                break;
            case 'autoSummer':
                this.workerCallback = this.autoSummerMode;
                break;
            case 'manual':
                this.workerCallback = async () => {};
                break;
            case 'test':
                this.workerCallback = this.testCycle;
                break;
            default:
                break;
        }
    }

    private readState() {
        fs.readFile(SAVE_FILE_NAME, (err, data) => {
            if (err){
                console.error(err);
            } else {
                // @ts-ignore
                let save: SaveFileType = JSON.parse(data);
                this.setMode(save.mode);
            }
        })
    }

    private async dumpState() {
        let saveFile: SaveFileType = {
            mode: this.mode,
        }
        let json = JSON.stringify(saveFile, null, 2);
        fs.writeFile(SAVE_FILE_NAME, json, () => {});
    }

    private async timerMainCallback() {
        await this.workerCallback();
    }

    private async commonCycle() {
    }

    private async autoSummerMode() {
        console.log('Executing "auto summer" logic');
        this.commonCycle();
    }

    private async autoWinterMode() {
        console.log('Executing "auto winter" logic');
        this.commonCycle();
    }

    private async testCycle() {
        console.log('Executing test logic');

        this.sprinkler1.turnOn();
        await delay(1000);
        this.sprinkler2.turnOn();
        await delay(1000);
        this.sprinkler3.turnOn();
        await delay(1000);
        this.sprinkler4.turnOn();
        await delay(1000);
        this.sprinkler5.turnOn();
        await delay(1000);
        this.sprinkler6.turnOn();
        await delay(1000);
        this.sprinkler7.turnOn();
        await delay(1000);
        this.sprinkler8.turnOn();

        await delay(5000);

        this.sprinkler1.turnOff();
        await delay(1000);
        this.sprinkler2.turnOff();
        await delay(1000);
        this.sprinkler3.turnOff();
        await delay(1000);
        this.sprinkler4.turnOff();
        await delay(1000);
        this.sprinkler5.turnOff();
        await delay(1000);
        this.sprinkler6.turnOff();
        await delay(1000);
        this.sprinkler7.turnOff();
        await delay(1000);
        this.sprinkler8.turnOff();
        await delay(1000);
    }

    private initSprinklers() {
        let gpioConfig: GpioConfigs = {
            type: conf.sprinklers.type,
            i2cDevice: conf.i2cNum,
            modeA: conf.sprinklers.modeA,
            modeB: conf.sprinklers.modeB,
            address: parseInt(conf.valves.address, 16)
        };

        this.sprinkler1 = new Sprinkler(conf.sprinklers.sprinkler1, gpioConfig);
        this.sprinkler2 = new Sprinkler(conf.sprinklers.sprinkler2, gpioConfig);
        this.sprinkler3 = new Sprinkler(conf.sprinklers.sprinkler3, gpioConfig);
        this.sprinkler4 = new Sprinkler(conf.sprinklers.sprinkler4, gpioConfig);
        this.sprinkler5 = new Sprinkler(conf.sprinklers.sprinkler5, gpioConfig);
        this.sprinkler6 = new Sprinkler(conf.sprinklers.sprinkler6, gpioConfig);
        this.sprinkler7 = new Sprinkler(conf.sprinklers.sprinkler7, gpioConfig);
        this.sprinkler8 = new Sprinkler(conf.sprinklers.sprinkler8, gpioConfig);
    }
}