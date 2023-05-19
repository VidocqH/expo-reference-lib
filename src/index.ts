import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoReferenceLib.web.ts
// and on native platforms to ExpoReferenceLib.ts
import ExpoReferenceLibModule from './ExpoReferenceLibModule';
import ExpoReferenceLibView from './ExpoReferenceLibView';
import { ChangeEventPayload, ExpoReferenceLibViewProps } from './ExpoReferenceLib.types';

// Get the native constant value.
export const PI = ExpoReferenceLibModule.PI;

export function hello(): string {
  return ExpoReferenceLibModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoReferenceLibModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoReferenceLibModule ?? NativeModulesProxy.ExpoReferenceLib);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoReferenceLibView, ExpoReferenceLibViewProps, ChangeEventPayload };
