import React from 'react';
import { ScrollRevealTimeline, ConnectedCardItem } from '../ScrollRevealTimeline';

export type Skiper104Props = {
  items?: ConnectedCardItem[];
  className?: string;
};

export function Skiper104(props: Skiper104Props) {
  return <ScrollRevealTimeline {...props} />;
}

export default Skiper104;
