import Button from '../ui/Button'
import { AGENT_INFO } from '@/lib/constants'
import Image from 'next/image'

export default function AgentBio() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Agent Photo Placeholder */}
          <div className="md:col-span-1">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-neutral-200">
              <div className="flex h-full items-center justify-center text-neutral-400">
                {/* Placeholder - Replace with actual image */}
                <svg
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Agent Bio */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              {AGENT_INFO.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-[var(--color-primary)]">
              Your Nevada Assumable Mortgage Specialist
            </p>
            <div className="mt-6 space-y-4 text-neutral-600">
              <p>
                {AGENT_INFO.title} | License {AGENT_INFO.license}
              </p>
              <p>{AGENT_INFO.brokerage}</p>
              <p>
                With over 30 years of real estate market expertise, Dr. Jan Duffy
                specializes in helping homebuyers find assumable mortgage
                opportunities in Las Vegas, Henderson, and throughout Nevada.
                Whether you're a first-time buyer or experienced investor, I can
                guide you through the assumption process to save thousands on
                your mortgage.
              </p>
              <div className="mt-6 space-y-2">
                <p className="font-semibold text-neutral-900">Specializations:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Assumable mortgages (FHA, VA, USDA)</li>
                  <li>Luxury homes in Las Vegas and Henderson</li>
                  <li>First-time homebuyer assistance</li>
                  <li>Investment property guidance</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Contact Me</Button>
              <Button variant="outline" href="/about">
                Learn More
              </Button>
            </div>
            <div className="mt-6">
              <a
                href={AGENT_INFO.phoneLink}
                className="text-base font-medium text-[var(--color-primary)] hover:underline"
              >
                {AGENT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
