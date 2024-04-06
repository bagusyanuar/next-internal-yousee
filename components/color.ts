export const ColorScheme = {
    primary: 'var(--primary-color)',
    primaryShades: {
        shade20: 'color-mix(in srgb, black 20%, var(--primary-color))'
    },
    primaryTint: {
        tint20: 'color-mix(in srgb, white 20%, var(--primary-color))',
        tint80: 'color-mix(in srgb, white 80%, var(--primary-color))',
        tint90: 'color-mix(in srgb, white 90%, var(--primary-color))',
    },
    accent: 'var(--accent-color)',
    textLight: 'var(--light-color)',
    textLightShades: {
        shades20: 'color-mix(in srgb, black 20%, var(--light-color))'
    },
    textDark: 'var(--dark-color)',
    textDarkTint: {
        tint20: 'color-mix(in srgb, white 20%, var(--dark-color))',
        tint80: 'color-mix(in srgb, white 80%, var(--dark-color))',
        tint90: 'color-mix(in srgb, white 90%, var(--dark-color))',
    },
    danger: 'var(--danger-color)',
    dangerTint: {
        tint20: 'color-mix(in srgb, white 20%, var(--danger-color))',
        tint80: 'color-mix(in srgb, white 80%, var(--danger-color))',
        tint90: 'color-mix(in srgb, white 90%, var(--danger-color))',
    },
    warning: 'var(--warning-color)',
    warningTint: {
        tint20: 'color-mix(in srgb, white 20%, var(--warning-color))',
        tint30: 'color-mix(in srgb, white 30%, var(--warning-color))',
        tint40: 'color-mix(in srgb, white 40%, var(--warning-color))',
        tint50: 'color-mix(in srgb, white 50%, var(--warning-color))',
        tint80: 'color-mix(in srgb, white 80%, var(--warning-color))',
        tint90: 'color-mix(in srgb, white 90%, var(--warning-color))',
    }
}