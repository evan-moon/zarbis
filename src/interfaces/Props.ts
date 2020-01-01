import { Position } from 'src/constants';

interface WidgetPosition {
  horizontal: Position.Left | Position.Center | Position.Right;
  vertical: Position.Top | Position.Center | Position.Bottom;
}
export interface WidgetProps extends WidgetPosition {}
