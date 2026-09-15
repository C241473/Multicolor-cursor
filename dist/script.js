// The package is distributed as a browser module without TypeScript declarations.
// @ts-ignore: the CDN module is resolved by the browser at runtime.
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";
const canvas = document.getElementById("canvas");
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas element was not found.");
}
const app = TubesCursor(canvas, {
    tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
        },
    },
});
document.body.addEventListener("click", () => {
    const colors = randomColors(3);
    const lightsColors = randomColors(4);
    console.log(colors, lightsColors);
    app.tubes.setColors(colors);
    app.tubes.setLightsColors(lightsColors);
});
function randomColors(count) {
    return Array.from({ length: count }, () => {
        const color = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
        return `#${color}`;
    });
}
