import * as React from 'react';

import { ExpoReferenceLibViewProps } from './ExpoReferenceLib.types';

export default function ExpoReferenceLibView(props: ExpoReferenceLibViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
