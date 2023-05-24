declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PInput: typeof import('./packages/input/index')['default']
  }
}
export {}