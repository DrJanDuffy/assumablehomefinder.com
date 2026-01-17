import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find Homes with 2-4% Assumable Mortgages
          </h1>
          <p className="mt-6 text-xl text-white/90 sm:text-2xl">
            Save $500-$1,500/month by taking over the seller's existing FHA, VA,
            or USDA loan
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              href="/find-homes"
              className="min-w-[200px]"
            >
              Find Assumable Homes
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/calculator"
              className="min-w-[200px] bg-white/10 text-white border-white hover:bg-white hover:text-[var(--color-primary)]"
            >
              Calculate Your Savings
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-sm font-medium text-white/80">
              Licensed Nevada REALTOR® | Berkshire Hathaway HomeServices
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
