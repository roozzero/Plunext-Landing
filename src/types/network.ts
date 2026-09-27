export interface NetworkNode {
  id: string;
  label: string;
  shortTitle: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: 'sparkles' | 'layers' | 'cpu' | 'flask' | 'users' | 'book' | 'send' | 'briefcase';
  accentColor: string;
  glowRgba: string;
  orbitRadiusRatio: number; // multiplier of base radius
  orbitSpeed: number; // radians per millisecond
  initialAngle: number; // starting angle in radians
  tiltAngle: number; // inclination angle
  stat: {
    value: string;
    label: string;
  };
}

export interface NodePosition {
  x: number;
  y: number;
  angle: number;
  currentRadius: number;
}
