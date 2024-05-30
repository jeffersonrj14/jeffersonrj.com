import Link from 'next/link'
import PagesMetaHead from '@/components/PagesMetaHead'
import FAQsMain from '@/components/faqs/FAQsMain'

export default function FAQs() {
  return (
    <div className='container mx-auto text-jefferson-light'>
      <PagesMetaHead title='Frequently Asked Question' />
      <FAQsMain />
    </div>
  )
}
