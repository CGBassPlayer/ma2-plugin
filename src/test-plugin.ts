const config = {
    "groups": [
        "Spots",
        "Beams",
        "Wash 1",
        "Wash 2",
        "LED 1",
        "LED 2"
    ],
    "colors": [
        "White",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Sea",
        "Cyan",
        "Blue",
        "Violet",
        "Magenta",
        "Pink"
    ]
}

function setupImages(colors: string[], groupName: string) {
    let unfilled_colors: number[] = [];
    for (const [colorIdx, colorName] of colors.entries()) {
        unfilled_colors.push(gma.show.getobj.handle(`Image '${colorIdx}${colorName} Unfilled.png'`));
    }
    for (const c of unfilled_colors) {
        gma.feedback(gma.show.getobj.label(c));
    }

}

function main() {
    for (const group of config.groups) {
        setupImages(config.colors, group)
    }
}
