import { ColorScheme } from '@/components/utils'
import React from 'react'
import { ToastContentProps } from 'react-toastify'
import styled from 'styled-components'

interface IProps { text?: string }
const ToastSuccessLogin = ({ closeToast, toastProps, text = '' }: Partial<ToastContentProps> & IProps) => {
  return (
    <Wrapper>
      <div className='spacer-color'></div>
      <div className='content-wrapper'>
        <div className='icon-wrapper'>
          <i className='bx bxs-check-circle'></i>
        </div>
        <div className='notification-content'>
          <span className='title'>Success</span>
          <span className='description'>{text}</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default ToastSuccessLogin

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  min-height: 60px;

  .spacer-color {
    height: 100%;
    width: 10px;
    background-color: var(--success-color);
    min-height: 60px;
    margin-right: 0.5rem;
  }

  .content-wrapper {
    display: flex;
    align-items: start;

    .icon-wrapper {
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      margin-left: 0.75rem;

      i {
        color: var(--success-color);
        font-size: 1.5rem;
      }
    }

    .notification-content {
      display: flex;
      flex-direction: column;

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