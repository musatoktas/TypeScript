// @strict: true
// @jsx: preserve
// @jsxImportSource: @solidjs/web
// @module: esnext
// @moduleResolution: bundler
// @moduleDetection: legacy, force
// @noEmit: true

// @filename: /node_modules/@solidjs/web/package.json
{"name":"@solidjs/web","version":"0.0.0","exports":{"./jsx-runtime":{"types":"./jsx-runtime.d.ts"}}}

// @filename: /node_modules/@solidjs/web/jsx-runtime.d.ts
export namespace JSX {
    interface Element {}
    interface IntrinsicElements {
        div: { children?: string };
    }
}

// @filename: /script.tsx
const invalidScriptElement = <div children={123} />;

// @filename: /module.tsx
export {};
const invalidModuleElement = <div children={123} />;
