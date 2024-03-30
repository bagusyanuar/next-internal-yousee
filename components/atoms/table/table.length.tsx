import { ColorScheme } from '@/components/utils'
import React from 'react'
import styled from 'styled-components'

interface IProps {
    lengths: Array<number>
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
const TableLength: React.FC<IProps> = ({
    lengths,
    onChange
}) => {
    return (
        <Wrapper>
            <span className='me-2'>Show :</span>
            <select onChange={onChange}>
                {
                    lengths.map((v, i) => {
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