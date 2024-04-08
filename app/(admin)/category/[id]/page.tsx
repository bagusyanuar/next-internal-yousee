import Container from './container'
import HeaderSection from './section/header'
import FormSection from './section/form'
import Divider from '@/components/divider'
import { Category } from '@/model/category'

export default function CategoryEditPage() {

    const category: Category = {
        ID: 1,
        Name: 'Category 1',
        Icon: null
    }
    return (
        <Container>
            <HeaderSection />
            <Divider />
            <FormSection category={category} />
        </Container>
    )
}