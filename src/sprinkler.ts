import {GpioIf, initGpio} from './interfaces/gpio';
import {GpioConfigs} from './interfaces/types';

interface SprinklerPins {
    onOffPin: number;
    activated: boolean;
}

let usedPins: number[] = [];

export class Sprinkler {
    public activated: boolean;
    public isOn: boolean;
    private gpio: GpioIf;
    private onOffPin: number;

    constructor(pins: SprinklerPins, gpioConfig: GpioConfigs) {
        this.activated = pins.activated;
        this.gpio = initGpio(gpioConfig);

        let pinsArr = Object.values(pins);
        const intersection = pinsArr.filter(value => usedPins.includes(value));
        if (intersection.length) throw Error(`Pins ${intersection} are already in use!`);
        usedPins.concat(usedPins, pinsArr);

        this.onOffPin = pins.onOffPin;
        this.turnOff();
    }

    turnOn() {
        if (!this.activated || this.isOn) return;
        
        this.gpio.pins[this.onOffPin].write(0);
        this.isOn = true;
        console.log(`Sprinkler is on`);
    }

    turnOff() {
        if (!this.activated || !this.isOn) return;
        
        this.gpio.pins[this.onOffPin].write(1);
        this.isOn = false;
        console.log(`Sprinkler is off`);
    }
}