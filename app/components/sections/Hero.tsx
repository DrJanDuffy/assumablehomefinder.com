import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Find Homes with 2-4% Assumable Mortgages
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl md:text-2xl">
            Save $500-$1,500/month by taking over the seller's existing FHA, VA,
            or USDA loan
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              variant="secondary"
              size="lg"
              href="/find-homes"
              fullWidthMobile={true}
              className="sm:min-w-[200px]"
            >
              Find Assumable Homes
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/calculator"
              fullWidthMobile={true}
              className="sm:min-w-[200px] bg-white/10 text-white border-white hover:bg-white hover:text-[var(--color-primary)] active:bg-white active:text-[var(--color-primary)]"
            >
              Calculate Your Savings
            </Button>
          </div>
          <div className="mt-10 sm:mt-12">
            <p className="text-xs sm:text-sm font-medium text-white/80">
              Expert Guidance by Dr. Jan Duffy | Licensed Nevada REALTOR® | Berkshire Hathaway HomeServices | 30+ Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
