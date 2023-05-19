import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoReferenceLibViewProps } from './ExpoReferenceLib.types';

const NativeView: React.ComponentType<ExpoReferenceLibViewProps> =
  requireNativeViewManager('ExpoReferenceLib');

export default function ExpoReferenceLibView(props: ExpoReferenceLibViewProps) {
  return <NativeView {...props} />;
}
