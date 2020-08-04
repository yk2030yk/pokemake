import { ReactNode } from 'react'
import PageHeader from '@/components/common/PageHeader'
import PageFooter from '@/components/common/PageFooter'

interface Props {
  children: ReactNode
}

export default ({ children }: Props) => (
  <>
    <PageHeader />
    <div className="page-wrapper">{children}</div>
    <PageFooter />
    <style jsx>{`
      .page-wrapper {
        width: 100%;
        padding: 20px;
      }
      div {
        box-sizing: border-box;
      }
    `}</style>
  </>
)
