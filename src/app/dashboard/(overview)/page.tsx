import { fetchCardData } from '@/lib/data'
import Loading from './loading'
import { Suspense } from 'react'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import RevenueChart from '@/components/ui/dashboard/revenue-chart'
import LatestInvoices from '@/components/ui/dashboard/latest-invoices'
export default async function Page() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData()
  //  const  revenue  = await fetchRevenue()

  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader>
            <CardTitle>Collected</CardTitle>
            <CardDescription>{totalPaidInvoices}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
            <CardDescription>{totalPendingInvoices}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Invoices</CardTitle>
            <CardDescription>{numberOfInvoices}</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
            <CardDescription>{numberOfCustomers}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<Loading />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  )
}
