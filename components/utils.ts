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
    }
}

export const CardPadding = {
    small: '1rem 1rem',
    medium: '1.5rem 1.5rem',
    large: '2rem 2rem'
}

export const CardRadius = {
    small: '8px',
    medium: '12px'
}

export const CardShadow = {
    small: '0 4px 8px rgba(0, 0, 0, 0.2)'
}

export const InputRadius = {
    small: '5px'
}

export const InputFontSize = {
    medium: '0.8em'
}

export const ButtonPadding = {
    small: '0.5rem 2rem',
    medium: '0.75rem 2.5rem'
}

export const SidebarWidth = '280px';

export type TPageTitle= {
    title: string
    subTitle: string
    withBackButton: boolean
}

export type TProfile = {
    image: string
    user: string
    role: string
}