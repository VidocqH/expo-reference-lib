// Import the native module. On web, it will be resolved to ExpoReferenceLib.web.ts
// and on native platforms to ExpoReferenceLib.ts
import ExpoReferenceLibModule from "./ExpoReferenceLibModule";
export async function presentReferenceLibraryAsync(value: string) {
  return await ExpoReferenceLibModule.presentReferenceLibraryAsync(value);
}

export async function dismissReferenceLibraryAsync() {
  return await ExpoReferenceLibModule.dismissReferenceLibraryAsync();
}
