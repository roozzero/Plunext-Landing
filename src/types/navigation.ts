import { ComponentType } from 'react';

export interface NavItem {
  id: string;
  label: string;
  badge?: string;
  icon?: ComponentType<{ className?: string }>;
  description?: string;
}
