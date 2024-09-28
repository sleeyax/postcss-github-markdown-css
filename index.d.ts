import { Plugin } from 'postcss';

export interface PluginOptions {
  /**
   * The file path to the CSS file to process.
   * Defaults to `github-markdown.css`.
   */
  filePath?: string;
}

declare const plugin: Plugin<PluginOptions>;

export default plugin;
