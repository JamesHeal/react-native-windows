/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */

/**
 * Color information for high contrast
 */
export interface IHighContrastColors {
  ButtonFaceColor: string;
  ButtonTextColor: string;
  GrayTextColor: string;
  HighlightColor: string;
  HighlightTextColor: string;
  HotlightColor: string;
  WindowColor: string;
  WindowTextColor: string;
}

export type AppThemeTypes = 'light' | 'dark';

export interface IAppThemeChangedEvent {
  currentTheme: AppThemeTypes;
}

export interface IHighContrastChangedEvent {
  isHighContrast: boolean;
  highContrastColors: IHighContrastColors;
}
