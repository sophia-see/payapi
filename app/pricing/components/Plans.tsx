import Button from '@/components/Button'
import Divider from '@/components/Divider'
import SubHeader from '@/components/SubHeader'
import Image from 'next/image'
import React from 'react'

const PLANS = [
  {
    id: "Free",
    description: "Build and test using our core set of products with up to 100 API requests",
    price: 0
  },
  {
    id: "Basic",
    description: "Launch your project with unlimited requests and no contractual minimums",
    price: 249
  },
  {
    id: "Premium",
    description: "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: 499
  },
]

type FeatureType = {
  name: string;
  free: boolean;
  basic: boolean;
  premium: boolean;
}

const FEATURES: FeatureType[] = [
  {
    name: "Transactions",
    free: true,
    basic: true,
    premium: true
  },
  {
    name: "Auth",
    free: true,
    basic: true,
    premium: true
  },
  {
    name: "Identity",
    free: true,
    basic: true,
    premium: true
  },
  {
    name: "Investments",
    free: false,
    basic: true,
    premium: true
  },
  {
    name: "Assets",
    free: false,
    basic: true,
    premium: true
  },
  {
    name: "Liabilities",
    free: false,
    basic: false,
    premium: true
  },
  {
    name: "Income",
    free: false,
    basic: false,
    premium: true
  },
]

export default function Plans() {
  return (
    <div
      className={`
        px-6 lg:px-[115px] xl:px-0 xl:mx-auto xl:max-w-[1110px]
        md:pb-5 lg:pb-4
        flex flex-col gap-12 md:flex-row md:justify-center
      `}
    >
      {PLANS.map((plan) => {
        return (
          <div className='flex flex-col items-center gap-[81px] md:gap-0 lg:items-start' key={plan.id}>
            <div className='serif text-[24px] leading-[32px] tracking-[-0.18px] text-dark-pink'>{plan.id} Plan</div>
            <SubHeader text={plan.description} className='hidden md:block text-center mt-[13px] mb-[19px] lg:text-start' />
            <div className='w-full flex flex-col gap-[34px] items-center lg:items-start'>
              <div className='serif text-[56px] leading-[72px] tracking-[-0.43px]'>${plan.price.toFixed(2)}</div>
              <div className='w-full flex flex-col items-center gap-6  lg:items-start'>
                <Divider mode={"dark"} className='opacity-25'/>
                {
                  FEATURES.map((feature) => {
                    const isAllowed = feature[(plan.id.toLowerCase() as keyof FeatureType)];

                    return (
                      <div className='flex gap-6 items-center w-[135px]' key={feature.name}>
                        <Image
                          src={"/assets/shared/desktop/icon-check.svg"}
                          alt='check icon'
                          width={12}
                          height={8}
                          className={`${isAllowed ? "" : "opacity-0"}`}
                        />
                        <div>{feature.name}</div>
                      </div>
                    )
                  })
                }
                <Divider mode={"dark"} className='opacity-25'/>
                <Button variant='secondary' mode='dark'>Request Access</Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
