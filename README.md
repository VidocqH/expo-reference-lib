# Expo Reference Lib (Word Dictionary)

Use IOS lookup and Android define by given string

https://github.com/VidocqH/expo-reference-lib/assets/16725418/098015e1-1a19-4a0d-a27f-71f25308d400

### Support

- [x] IOS - use `UIReferenceLibraryViewController`

- [x] Android - use `android.content.Intent.ACTION_DEFINE`

- [x] Expo

### Installation
Using `npm`
```bash
npm i expo-reference-lib
```
Using `yarn`
```bash
yarn add expo-reference-lib
```

### Usage

```typescript
import * as ExpoReferenceLib from "expo-reference-lib";

ExpoReferenceLib.presentReferenceLibraryAsync("Utopia");
ExpoReferenceLib.dismissReferenceLibraryAsync(); // IOS only, close lookup modal
```
