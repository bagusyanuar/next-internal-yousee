import React from 'react'
import styled from 'styled-components'
import { ColorScheme } from '@/components/color'

interface IProps {
    length: Array<number>
    value: number
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const TableLength: React.FC<IProps> = ({
    length,
    value,
    onChange
}) => {
    return (
        <Wrapper>
            <span className='me-2'>Show :</span>
            <select onChange={onChange} defaultValue={value}>
                {
                    length.map((v, i) => {
                        return (
                            <option key={i} value={v}>{v}</option>
                        )
                    })
                }
            </select>
            <span className='ms-2'>Entries</span>
        </Wrapper>
    )
}

export default TableLength

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 0.8em;
        color: ${ColorScheme.textDark};
    }

    select {
        cursor: pointer;
        padding: 0.25rem 0.75rem;
        border-width: 1px;
        border-radius: 0.375rem;
        font-size: 0.8em;
        color: ${ColorScheme.textDark};
        background-color: inherit;

        &:focus {
            outline: none;
        }
        option {
            background-color: white;
            color: ${ColorScheme.textDark};
        }
    }
`