/// <reference types="vite/client" />

// typings/markdown.d.ts
declare module "*.md" {
    import { DefineComponent } from "vue";
    const component: DefineComponent;
    export default component;
}

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}