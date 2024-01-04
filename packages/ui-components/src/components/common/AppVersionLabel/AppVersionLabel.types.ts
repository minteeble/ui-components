/**
 * Props model for AppVersionLabel component
 */
export interface AppVersionLabelProps {
  /**
   * Application name
   */
  appName?: string;

  /**
   * Deploy version
   */
  version: string;

  /**
   * Environment Name (eg. Prod, Dev)
   */
  environmentName?: string;

  /**
   * Custom label pattern
   */
  customPattern?: string;
}
