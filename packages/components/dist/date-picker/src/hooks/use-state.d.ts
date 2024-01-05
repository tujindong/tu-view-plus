import { Ref } from 'vue';
export declare function useState<T>(defaultValue?: T): [Ref<T>, (newValue: T) => void];
