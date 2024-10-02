export function sanitizeSvg(rawSvg: string) {
    return rawSvg
        .replace(/height="[^"]*"/g, "") // Remove the height attribute
        .replace(/width="[^"]*"/g, "")  // Remove the width attribute
        .replace(/style="[^"]*"/g, ""); // Remove the style attribute
}
