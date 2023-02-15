import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'clsx'

const SkeletonLoader:FC<SkeletonProps> = ({className, ...rest}) => {
  return (
    <Skeleton
      {...rest}
      baseColor="rgb(128, 128, 128)"
		  highlightColor="#292A2E"
      className={cn('rounded-lg', className)}
    />
  )
}

export default SkeletonLoader