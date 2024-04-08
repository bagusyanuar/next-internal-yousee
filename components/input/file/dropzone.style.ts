import { CSSProperties } from 'react'
import { ColorScheme } from '@/components/color'

export const baseStyle: CSSProperties = {
    cursor: 'pointer',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: ColorScheme.textLight,
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    minHeight: '10rem',
    paddingTop: '10px',
    paddingBottom: '10px'
};

export const focusedStyle = {
    borderColor: '#2196f3'
};

export const acceptStyle = {
    borderColor: '#00e676'
};

export const rejectStyle = {
    borderColor: '#ff1744'
};

export const thumbsContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
}

export const thumb: CSSProperties = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
    position: 'relative'
};

export const thumRemover: CSSProperties = {
    position: 'absolute',
    right: 0,
    top: 0
}

export const thumbInner: CSSProperties = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

export const img: CSSProperties = {
    display: 'block',
    width: 'auto',
    height: '100%'
};