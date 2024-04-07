import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Card from '@/components/card'
import Button from '@/components/button/index'
import ButtonOutlineDanger from '@/components/button/button.outline.danger'
import { ColorScheme } from '@/components/color'
import ImageQuestion from '@/public/assets/static/question.svg'
import ImageRemove from '@/public/assets/static/remove.svg'


interface IProps {
    open: boolean
    text?: string
    type?: 'confirmation' | 'delete'
    className?: string
    onAccept: () => void
    onDenied: () => void
    onBackdropClick?: () => void
}
const ModalConfirmation: React.FC<IProps> = ({
    open,
    text = 'Confirmation?',
    type = 'confirmation',
    className = '',
    onAccept,
    onDenied,
    onBackdropClick = () => { }
}) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                setOpenModal(true)
            }, 100);
        } else {
            setOpenModal(false)
        }
        return () => { setOpenModal(false) }
    }, [open])

    return (
        <Backdrop className={className} $open={open} onClick={onBackdropClick}>
            <ModalWrapper onClick={(e) => { e.stopPropagation() }}>
                <ModalContent className={`${openModal ? 'open' : ''}`}>
                    {type === 'delete' ? <Image src={ImageRemove} alt='img-remove' priority /> : <Image src={ImageQuestion} alt='img-question' priority />}
                    <ModalText>
                        {text}
                    </ModalText>
                    <ActionWrapper>
                        <ButtonAccept onClick={onAccept}>
                            {/* <i className='bx bx-check'></i> */}
                            <span>YES</span>
                        </ButtonAccept>
                        <ButtonDenied onClick={onDenied}>
                            {/* <i className='bx bx-x'></i> */}
                            <span>CANCEL</span>
                        </ButtonDenied>
                    </ActionWrapper>
                </ModalContent>
            </ModalWrapper>
        </Backdrop>
    )
}

export default ModalConfirmation

interface IBackdropProps {
    $open: boolean
}

const Backdrop = styled.div<IBackdropProps>`
    display: ${({ $open }) => $open ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    z-index: 100;
`
const ModalWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalContent = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    position: absolute;
    top: 45%;
    transform: translate(0, -50%);
    opacity: 0;
    transition: opacity 200ms ease-in-out, top 200ms ease-in-out, visibility 200ms linear;

    &.open {
        visibility: visible;
        opacity: 1;
        top: 50%;
        transform: translate(0, -50%);
    }

    img {
        width: 150px;
        height: auto;
        margin-bottom: 1.5rem;
    }
    
`

const ModalText = styled.p`
    width: 100%;
    text-align: center;
    color: ${ColorScheme.textDarkTint.tint20};
    font-size: 0.9em;
    margin-bottom: 1.5rem;
`

const ActionWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

const ButtonAccept = styled(Button)`
    i{
        font-size: 1.5em;
        margin-right: 0.15rem;
    }
`

const ButtonDenied = styled(ButtonOutlineDanger)`
    i{
        font-size: 1.5em;
        margin-right: 0.15rem;
    }
`
