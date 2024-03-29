import { TH, TR } from '@/components/atoms/table'
import React from 'react'

interface IProps {
    className?: string
}

const CategoriesTable: React.FC<IProps> = ({
    className = ''
}) => {
    return (
        <table className={`w-full ${className}`}>
            <thead>
                <TR>
                    <TH width='4rem' align='center'>No.</TH>
                    <TH width='8rem' align='center'>Icon</TH>
                    <TH>Name</TH>
                    <TH width='12rem' align='center'>Action</TH>
                </TR>
            </thead>
            <tbody></tbody>
        </table>
    )
}

export default CategoriesTable