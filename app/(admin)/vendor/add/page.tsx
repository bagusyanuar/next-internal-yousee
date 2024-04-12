import Container from './container'
import HeaderSection from './section/header'
import Divider from '@/components/divider'
import Form from './section/form'

export default function VendorAddPage() {
    return (
        <Container>
            <HeaderSection />
            <Divider />
            <Form />
        </Container>
    )
}