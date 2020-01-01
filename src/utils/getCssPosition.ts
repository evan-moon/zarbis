import { WidgetProps } from 'src/interfaces/Props';
import { Position } from 'src/constants';

export function getCssPosition ({ horizontal, vertical }: WidgetProps) {
  if (horizontal === Position.Center && vertical === Position.Center) {
    return `
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }

  let css = '';

  if (horizontal === Position.Left) {
    css += 'left: 0;';
  }
  else if (horizontal === Position.Center) {
    css += 'left: 50%; transform: translateX(-50%);';
  }
  else if (horizontal === Position.Right) {
    css += 'right: 0;';
  }

  if (vertical === Position.Top) {
    css += 'top: 0;';
  }
  else if (vertical === Position.Center) {
    css += 'top: 50%; transform: translateY(-50%);';
  }
  else if (vertical === Position.Bottom) {
    css += 'bottom: 0;';
  };

  return css;
}
