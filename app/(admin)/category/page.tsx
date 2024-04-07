import Divider from '@/components/divider'
import Container from './section/container'
import HeaderSection from './section/header'
import TableSection from './section/table'

export default function Categorypage() {

    return (
        <Container>
            <HeaderSection />
            <Divider />
            <TableSection />
        </Container>
    )
}