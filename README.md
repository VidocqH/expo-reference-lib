# Expo Reference Lib (Word Dictionary)

Use IOS lookup and Android define by given string

### Support

- [x] IOS - use `UIReferenceLibraryViewController`

- [x] Android - use `android.content.Intent.ACTION_DEFINE`

- [x] Expo

### Usage

```typescript
import * as ExpoReferenceLib from "expo-reference-lib";

ExpoReferenceLib.presentReferenceLibraryAsync("Utopia");
ExpoReferenceLib.dismissReferenceLibraryAsync(); // IOS only, close lookup modal
```


