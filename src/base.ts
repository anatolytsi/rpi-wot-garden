import '@node-wot/core';
import {Garden} from './garden';
import * as path from 'path';

require('dotenv').config({path: path.join(__dirname, '../', '.env')})

export class WotGarden {
    public thing!: WoT.ExposedThing;
    public td!: WoT.ThingDescription;
    private WoT: WoT.WoT;
    private garden: Garden;

    constructor(WoT: WoT.WoT, tm: any) {
        this.WoT = WoT;
        this.garden = new Garden();
        this.WoT.produce(tm).then(async (exposedThing: WoT.ExposedThing) => {
            this.thing = exposedThing;
            this.td = this.thing.getThingDescription();
            this.addPropertyHandlers();
            this.addActionHandlers();
            this.addEventHandlers();
            await this.thing.expose();
        })
    }

    private addPropertyHandlers() {
        this.thing.setPropertyReadHandler('mode', async () => {
            return this.garden.mode;
        });
        this.thing.setPropertyWriteHandler('mode', async (mode) => {
            this.garden.setMode(mode);
        });
        this.thing.setPropertyReadHandler('sprinklerActivated1', async () => {
            return this.garden.sprinkler1.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated1', async (activated) => {
            this.garden.sprinkler1.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated2', async () => {
            return this.garden.sprinkler2.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated2', async (activated) => {
            this.garden.sprinkler2.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated3', async () => {
            return this.garden.sprinkler3.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated3', async (activated) => {
            this.garden.sprinkler3.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated4', async () => {
            return this.garden.sprinkler4.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated4', async (activated) => {
            this.garden.sprinkler4.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated5', async () => {
            return this.garden.sprinkler5.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated5', async (activated) => {
            this.garden.sprinkler5.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated6', async () => {
            return this.garden.sprinkler6.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated6', async (activated) => {
            this.garden.sprinkler6.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated7', async () => {
            return this.garden.sprinkler7.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated7', async (activated) => {
            this.garden.sprinkler7.activated  = activated;
        });
        this.thing.setPropertyReadHandler('sprinklerActivated8', async () => {
            return this.garden.sprinkler8.activated;
        });
        this.thing.setPropertyWriteHandler('sprinklerActivated8', async (activated) => {
            this.garden.sprinkler8.activated  = activated;
        });


        this.thing.setPropertyReadHandler('sprinklerIsOn1', async () => {
            return this.garden.sprinkler1.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn2', async () => {
            return this.garden.sprinkler2.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn3', async () => {
            return this.garden.sprinkler3.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn4', async () => {
            return this.garden.sprinkler4.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn5', async () => {
            return this.garden.sprinkler5.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn6', async () => {
            return this.garden.sprinkler6.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn7', async () => {
            return this.garden.sprinkler7.isOn;
        });
        this.thing.setPropertyReadHandler('sprinklerIsOn8', async () => {
            return this.garden.sprinkler8.isOn;
        });
    }

    private addActionHandlers() {
        this.thing.setActionHandler('startSprinkler1', async () => {
            return this.garden.sprinkler1.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler1', async () => {
            return this.garden.sprinkler1.turnOff();
        });
        this.thing.setActionHandler('startSprinkler2', async () => {
            return this.garden.sprinkler2.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler2', async () => {
            return this.garden.sprinkler2.turnOff();
        });
        this.thing.setActionHandler('startSprinkler3', async () => {
            return this.garden.sprinkler3.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler3', async () => {
            return this.garden.sprinkler3.turnOff();
        });
        this.thing.setActionHandler('startSprinkler4', async () => {
            return this.garden.sprinkler4.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler4', async () => {
            return this.garden.sprinkler4.turnOff();
        });
        this.thing.setActionHandler('startSprinkler5', async () => {
            return this.garden.sprinkler5.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler5', async () => {
            return this.garden.sprinkler5.turnOff();
        });
        this.thing.setActionHandler('startSprinkler6', async () => {
            return this.garden.sprinkler6.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler6', async () => {
            return this.garden.sprinkler6.turnOff();
        });
        this.thing.setActionHandler('startSprinkler7', async () => {
            return this.garden.sprinkler7.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler7', async () => {
            return this.garden.sprinkler7.turnOff();
        });
        this.thing.setActionHandler('startSprinkler8', async () => {
            return this.garden.sprinkler8.turnOn();
        });
        this.thing.setActionHandler('stopSprinkler8', async () => {
            return this.garden.sprinkler8.turnOff();
        });
    }

    private addEventHandlers() {

    }
}
