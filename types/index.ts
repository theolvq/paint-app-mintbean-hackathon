export interface ILine {
  tool: string;
  points: number[];
  strokeColor: string;
  strokeWidth: number;
}

export interface IBasicShape {
  tool: string;
  points: number[];
  strokeColor: string;
  strokeWidth: number;
  fill?: string;
  shadowBlur?: number;
  width?: number;
  height?: number;
  radius?: number;
}

export interface PositionArgs {
  x: number | null;
  y: number | null;
}
