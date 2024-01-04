import { InjectionKey } from 'vue';
export declare const PickerInjectionKey: InjectionKey<string>;
export type PickerContext = Readonly<{
    datePickerT: (key: string, ...args: any[]) => any;
}>;
