import Container from './container'
import HeaderSection from './section/header'
import Divider from '@/components/divider'
import TableSection from './section/table'

export default function VendorPage() {
    return (
        <Container>
            <HeaderSection />
            <Divider />
            <TableSection />
        </Container>
    )
}