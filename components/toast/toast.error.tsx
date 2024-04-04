import React from 'react'
import { ToastContentProps } from 'react-toastify'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    text?: string
}
const ToastError: React.FC<Partial<ToastContentProps> & IProps> = ({
    closeToast,
    toastProps,
    text = '',
}) => {
    const handleCloseToast = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (closeToast) {
            closeToast()
        }
    }

    return (
        <Wrapper>
            <div className='spacer-color'></div>
            <div className='content-wrapper'>
                <div className='icon-wrapper'>
                    <i className='bx bxs-x-circle'></i>
                </div>
                <div className='notification-content'>
                    <span className='title'>Error</span>
                    <span className='description'>{text}</span>
                </div>
                <div className='close-button-wrapper'>
                    <a href='#' onClick={handleCloseToast}>
                        <i className='bx bx-x'></i>
                    </a>
                </div>
            </div>
        </Wrapper>
    )
}

export default ToastError

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  min-height: 60px;
  width: 100%;

  .spacer-color {
    height: 100%;
    width: 10px;
    background-color: var(--danger-color);
    min-height: 60px;
    margin-right: 0.5rem;
  }

  

  .content-wrapper {
    display: flex;
    align-items: start;
    width: 100%;
    
    .icon-wrapper {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      margin-left: 0.5rem;

      i {
        color: var(--danger-color);
        font-size: 1.8rem;
      }
    }

    .close-button-wrapper {
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      margin-right: 0.75rem;

      a {
        i {
          color: ${ColorScheme.textLight};
          font-size: 1.5rem;
        }

        &:hover {
          color: ${ColorScheme.textLight};
        }
      }
      
    }

    .notification-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .title {
        font-weight: 600;
        color: ${ColorScheme.textDarkTint.tint20};
        font-size: 1em;
        margin-bottom: 0.1rem;
        line-height: 1;
      }

      .description {
        color: ${ColorScheme.textLight};
        font-size: 0.8em;
      }
    }
  }
`