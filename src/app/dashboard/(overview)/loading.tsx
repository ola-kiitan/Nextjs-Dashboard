import { Skeleton } from '@/components/ui/skeleton'
export default function Loading() {
  return (
    <div className='flex flex-col space-y-3 mr-8'>
      <Skeleton className='h-[500px] w-[500px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}
