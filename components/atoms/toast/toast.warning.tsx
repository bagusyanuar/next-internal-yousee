import { ColorScheme } from '@/components/utils'
import React from 'react'
import { ToastContentProps } from 'react-toastify'
import styled from 'styled-components'

interface IProps {
    text?: string
}

const ToastWarning: React.FC<Partial<ToastContentProps> & IProps> = ({
    closeToast,
    toastProps,
    text = '',
}) => {
    return (
        <Wrapper>
            <div className='spacer-color'></div>
            <div className='content-wrapper'>
                <div className='icon-wrapper'>
                    <i className='bx bxs-error-circle'></i>
                </div>
                <div className='notification-content'>
                    <span className='title'>Warning</span>
                    <span className='description'>{text}</span>
                </div>
                <div className='close-button-wrapper'>
                    <a href='#' onClick={(e) => {
                        e.preventDefault();
                        if (closeToast) {
                            closeToast()
                        }
                    }}>
                        <i className='bx bx-x'></i>
                    </a>

                </div>
            </div>
        </Wrapper>
    )
}

export default ToastWarning

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  min-height: 60px;
  width: 100%;

  .spacer-color {
    height: 100%;
    width: 10px;
    background-color: var(--warning-color);
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
        color: var(--warning-color);
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