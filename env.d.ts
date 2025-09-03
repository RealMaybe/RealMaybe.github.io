/// <reference types="vite/client" />

// typings/markdown.d.ts
declare module "*.md" {
    import { DefineComponent } from "vue";
    const component: DefineComponent;
    export default component;
}
