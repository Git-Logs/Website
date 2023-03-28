interface IThemeColors {
    band?: string;
    mode?: 'dark' | 'light';
}

interface IBaseColors {
    background: string;
    ui: string;
    flow: string;
    text: string;
    overlay: string;
    icon: string | null;
} 

const blackColor = '#32174d';
const whiteColor = '#ffffff';
const tweeterColor = '#32174d';
const primary = '#20c997';
const secondary = '#42ba96';

const basesColors = {
    dark: {
        background: blackColor,
        ui: tweeterColor,
        flow: blackColor,
        text: whiteColor,
        overlay: blackColor,
        icon: whiteColor
    },
    light: {
        background: '#faecff',
        ui: blackColor,
        flow: whiteColor,
        text: blackColor,
        overlay: whiteColor,
        icon: null
    },
};

const tonalits = Object.entries({
    "5": '0d', 
    "10": '1a', 
    "15": '26', 
    "20": '33', 
    "40": '66', 
    "60": '99', 
    "80": 'cc', 
    "100": ''
});

function ThemeVariables({ band = "#9854FD", mode = 'dark' }: IThemeColors = {}) {
    const baseColors: IBaseColors = basesColors[mode] || basesColors['dark'];
    
    const obj = {
        "--tox-colors-background": baseColors.background,
        ...mapTonalits("--tox-colors-band", band),
        ...mapTonalits("--tox-colors-ui", baseColors.ui),
        ...mapTonalits("--tox-colors-flow", baseColors.flow),
        ...mapTonalits("--tox-colors-text", baseColors.text),
        "--tox-colors-overlay": baseColors.overlay + "E6",
        "--tox-colors-icon": baseColors.icon || band,
        ...mapTonalits("--tox-colors-light", whiteColor),
        ...mapTonalits("--tox-colors-dark", blackColor),
        "--tox-colors-green": "#61fe80",
        "--tox-colors-red": "#EF314B"
    };

    return { 
        ...obj,
        toString: () => {
            return Object.entries({ ...obj }).map(([key, value]) => `${key}:${value};`).join("")
        }
    };
};

function mapTonalits(key: string, color: string) {
    return  Object.fromEntries(
        tonalits.map(([tonalit, value]) => [`${key}-${tonalit}`, `${color}${value}`])
    );
};
    
export default ThemeVariables;
module.exports.mapTonalits = mapTonalits;