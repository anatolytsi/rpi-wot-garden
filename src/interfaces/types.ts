import {Mcp23017Config as Mcp23017} from '../peripherals/mcp23017';

export const Mcp23017_t = 'mcp23017';
type Mcp23017Type = 'mcp23017';
export const Native_t = 'native';
type NativeType = 'native';
export type GpioTypes = Mcp23017Type | NativeType;

export interface Mcp23017Config extends Mcp23017{
    type: Mcp23017Type
}
export interface NativeConfig {
    type: NativeType
}
export type GpioConfigs = Mcp23017Config | NativeConfig;
