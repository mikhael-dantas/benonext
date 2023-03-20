export const customTheme = {
    colors: returnScaleSet()
} as {
    colors: {
        [key: number]: string;
    };
}

function returnScaleSet() {
    const lumScale = {
        0: "#000000",
        1: "#111111",
        2: "#222222",
        3: "#333333",
        4: "#444444",
        5: "#555555",
        6: "#666666",
        7: "#777777",
        8: "#888888",
        9: "#999999",
        10: "#aaaaaa",
        11: "#bbbbbb",
        12: "#cccccc",
        13: "#dddddd",
        14: "#eeeeee",
        15: "#ffffff",
    };
    return lumScale;
}