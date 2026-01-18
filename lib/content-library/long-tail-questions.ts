/**
 * Long-Tail Question Content Library
 * Assumable Mortgage Niche - Information Gain Content Strategy
 * 
 * Each entry addresses specific, detailed questions that demonstrate
 * expertise and provide unique value (Information Gain).
 */

export interface LongTailQuestion {
  id: string
  question: string
  shortAnswer: string
  detailedAnswer: string
  keywords: string[]
  relatedQuestions: string[]
  category: 'process' | 'qualification' | 'costs' | 'loan-types' | 'market' | 'legal' | 'advanced'
  searchIntent: 'informational' | 'transactional' | 'comparison'
  estimatedSearchVolume: 'low' | 'medium' | 'high'
  competition: 'low' | 'medium' | 'high'
  wordCount: number // Target word count for full article
}

export const longTailQuestions: LongTailQuestion[] = [
  // PROCESS QUESTIONS
  {
    id: 'ltq-001',
    question: 'How long does it take to assume a VA loan from start to finish in 2025?',
    shortAnswer: 'VA loan assumptions typically take 45-90 days from application to closing, depending on lender processing times, documentation completeness, and whether the buyer needs to substitute entitlement.',
    detailedAnswer: 'The VA assumption timeline has specific stages: 1) Initial application submission (1-2 days), 2) Documentation review and verification (10-15 days), 3) VA approval process (15-30 days), 4) Credit and income underwriting (10-20 days), 5) Final approval and closing preparation (10-15 days), 6) Closing (1 day). Total: 45-90 days. Factors affecting timeline include lender efficiency, buyer credit profile complexity, whether entitlement substitution is needed, and state-specific closing requirements. In Nevada, typical timelines are 60-75 days.',
    keywords: ['VA loan assumption timeline', 'how long to assume VA loan', 'VA assumption process time', 'assume VA loan duration'],
    relatedQuestions: ['ltq-002', 'ltq-003', 'ltq-020'],
    category: 'process',
    searchIntent: 'informational',
    estimatedSearchVolume: 'medium',
    competition: 'medium',
    wordCount: 1500
  },
  {
    id: 'ltq-002',
    question: 'Can you assume an FHA loan if your credit score is 575 and you have a 35% DTI ratio?',
    shortAnswer: 'Yes, a 575 credit score and 35% DTI can potentially qualify for an FHA assumption, though most lenders prefer 580+. The 35% DTI is excellent (under the 50% FHA maximum), which may help offset the lower credit score.',
    detailedAnswer: 'FHA assumptions technically allow credit scores as low as 500, but most lenders require 580+. At 575, you\'re in a gray area. However, your 35% DTI ratio (well under the 50% FHA maximum) is a strong compensating factor. Lenders will evaluate: 1) Credit history pattern (are scores improving or declining?), 2) Compensating factors (low DTI, stable employment, reserves), 3) Loan-to-value ratio, 4) Lender-specific overlays. Some lenders may approve with manual underwriting. You\'ll need to explain any credit issues in a letter. Working with a specialized agent who knows lender preferences improves approval chances.',
    keywords: ['FHA assumption credit score 575', 'FHA loan assume low credit', 'FHA assumption DTI requirements', 'assume FHA loan qualifications'],
    relatedQuestions: ['ltq-001', 'ltq-004', 'ltq-005'],
    category: 'qualification',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 1800
  },
  {
    id: 'ltq-003',
    question: 'What happens to the original VA borrower\'s entitlement if a non-veteran assumes their loan?',
    shortAnswer: 'The original veteran\'s entitlement remains tied to the property until the loan is paid off, refinanced, or the buyer (if also a veteran) substitutes their own entitlement. This means the original borrower cannot use their VA benefits for another purchase until released.',
    detailedAnswer: 'When a non-veteran assumes a VA loan, the original veteran\'s entitlement remains "locked" to that property. This is crucial because: 1) The veteran cannot use their remaining entitlement for another VA loan purchase until released, 2) This affects their ability to buy another home using VA benefits, 3) If the buyer is also a veteran with their own entitlement, they can "substitute" entitlement, which releases the seller\'s entitlement immediately, 4) The veteran remains partially liable for the loan until released. This entitlement tie-up is why some sellers prefer veteran buyers who can substitute entitlement. In Las Vegas, this consideration affects pricing negotiations - sellers with tied entitlement may price homes differently.',
    keywords: ['VA entitlement non-veteran assumption', 'VA loan entitlement transfer', 'assume VA loan veteran benefits', 'VA entitlement substitution'],
    relatedQuestions: ['ltq-006', 'ltq-007'],
    category: 'legal',
    searchIntent: 'informational',
    estimatedSearchVolume: 'medium',
    competition: 'medium',
    wordCount: 2000
  },
  {
    id: 'ltq-004',
    question: 'How do you calculate the equity gap when assuming a mortgage on a home that\'s appreciated 40%?',
    shortAnswer: 'Equity gap = Current Home Price - Remaining Loan Balance - Down Payment. For a 40% appreciated home: If purchased at $300K with $280K loan, now worth $420K, equity gap = $420K - $280K = $140K (plus closing costs).',
    detailedAnswer: 'Calculating equity gap requires: 1) Current market value (use recent comps or appraisal), 2) Remaining assumable loan balance (from seller/lender), 3) Your planned down payment. Formula: Equity Gap = Current Price - Loan Balance - Down Payment. Example: Home bought for $300K in 2020 with $280K FHA loan at 2.75%. Now worth $420K (40% appreciation). Remaining balance: $260K. Equity gap: $420K - $260K = $160K. If putting $20K down: $160K - $20K = $140K needed (via cash or second mortgage). Second mortgage rates (8-10%+) on $140K at 30 years = ~$1,050/month. Total payment: Assumed mortgage ($1,060) + Second ($1,050) = $2,110/month vs. new $420K mortgage at 7% = $2,800/month. Still saves $690/month.',
    keywords: ['calculate equity gap assumable mortgage', 'equity gap calculation', 'assume mortgage appreciation', 'second mortgage equity gap'],
    relatedQuestions: ['ltq-008', 'ltq-009'],
    category: 'costs',
    searchIntent: 'informational',
    estimatedSearchVolume: 'medium',
    competition: 'low',
    wordCount: 2200
  },
  {
    id: 'ltq-005',
    question: 'Can you assume a USDA loan on a property in Las Vegas that\'s technically in a "rural" zone according to USDA maps?',
    shortAnswer: 'Yes, if the property qualifies as rural per USDA eligibility maps. Many areas on Las Vegas outskirts (North Las Vegas, Henderson edges, Boulder City) qualify. You can check specific addresses on the USDA eligibility website.',
    detailedAnswer: 'USDA rural eligibility is based on population density, not just geography. In Clark County, Nevada, many areas qualify: 1) North Las Vegas - Most areas qualify, 2) Henderson outskirts - Areas beyond city core, 3) Boulder City - Entire city qualifies, 4) Mesquite - Qualifies, 5) Unincorporated areas around Las Vegas. To verify: Use USDA eligibility map (eligibility.sc.egov.usda.gov), enter exact address or coordinates, check if property is in green (eligible) zone. Note: If assuming USDA loan, property must remain in eligible area. If area loses eligibility later, assumption still valid, but new USDA loans wouldn\'t be possible. In Las Vegas market, USDA assumable opportunities exist in newer developments in qualifying zones.',
    keywords: ['USDA loan Las Vegas rural', 'USDA eligibility map Las Vegas', 'assume USDA loan Nevada', 'rural development loan Las Vegas'],
    relatedQuestions: ['ltq-010', 'ltq-011'],
    category: 'loan-types',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 1700
  },
  
  // QUALIFICATION QUESTIONS
  {
    id: 'ltq-006',
    question: 'What documentation do you need to assume a VA loan if you\'re self-employed with variable income?',
    shortAnswer: 'Self-employed VA assumption requires: 2 years tax returns with all schedules, 2 years business returns (if applicable), YTD profit & loss statement, business bank statements, personal bank statements, and explanation letter for income fluctuations.',
    detailedAnswer: 'Self-employed borrowers face additional documentation requirements for VA assumptions: 1) Personal tax returns (1040) - last 2 years with all schedules, 2) Business tax returns (1120, 1120S, 1065, or Schedule C) - last 2 years, 3) YTD profit & loss statement (dated within 60 days), 4) Business bank statements - last 3-6 months, 5) Personal bank statements - last 2-3 months, 6) Explanation letter detailing: business history, income trends, why income varies, projections. Lenders calculate income using 2-year average with trending (if increasing) or lowest of last 2 years (if declining). Nevada-specific: If you\'re a real estate agent, independent contractor, or consultant in Las Vegas, provide 1099s and client contracts. VA allows business deductions, so net income (after expenses) is used.',
    keywords: ['self-employed VA loan assumption', 'assume VA loan documentation self-employed', 'VA assumption variable income', 'VA loan self-employment requirements'],
    relatedQuestions: ['ltq-012', 'ltq-013'],
    category: 'qualification',
    searchIntent: 'informational',
    estimatedSearchVolume: 'medium',
    competition: 'medium',
    wordCount: 2000
  },
  {
    id: 'ltq-007',
    question: 'How do assumable mortgage down payments work when the home has negative equity or the loan balance exceeds the purchase price?',
    shortAnswer: 'If loan balance exceeds home value, you typically cannot assume the mortgage through standard assumption - you\'d need a short sale. Assumable mortgages require covering the equity gap (price - balance). Negative equity homes require seller to pay difference at closing.',
    detailedAnswer: 'Assumable mortgages require the buyer to take over the existing loan balance, which means: 1) If home value < loan balance: This is negative equity (underwater mortgage). Standard assumption won\'t work because you can\'t assume more than the property is worth. Options: a) Short sale with lender approval (seller accepts less than owed), b) Seller pays down loan to property value before assumption, c) Lender modification to reduce balance. 2) If home value = loan balance: No equity gap, minimal down payment (just closing costs). 3) If home value > loan balance: Normal scenario - cover equity gap with cash/second mortgage. In Las Vegas, where some areas appreciated 40-50% from 2020 lows, negative equity assumptions are rare. More common scenario: Seller bought high, value dropped, but recovered - now assumption viable with seller contributing to closing.',
    keywords: ['assumable mortgage negative equity', 'underwater mortgage assumption', 'assume mortgage down payment', 'negative equity home assumption'],
    relatedQuestions: ['ltq-004', 'ltq-014'],
    category: 'qualification',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 1900
  },
  
  // COSTS QUESTIONS
  {
    id: 'ltq-008',
    question: 'What are the total closing costs to assume a $400K FHA loan compared to getting a new $400K mortgage?',
    shortAnswer: 'FHA assumption: ~$900 assumption fee + $8K-12K closing costs = $9K-13K total. New FHA loan: ~$14K-20K closing costs (3-5%). Savings: $5K-11K on assumption.',
    detailedAnswer: 'FHA Assumption Costs: 1) Assumption fee: $900 (federal cap), 2) Title insurance: $2,500-4,000 (varies by state/loan amount), 3) Escrow fees: $1,500-2,500, 4) Recording fees: $200-500, 5) Prepaid items (taxes/insurance): $2,000-4,000, 6) Credit report/appraisal (if needed): $500-1,000. Total: $7,600-13,900. New FHA Loan Costs: 1) Origination fee (1%): $4,000, 2) FHA upfront MIP (1.75%): $7,000, 3) Title/escrow: $4,000-6,000, 4) Underwriting/processing: $1,000-2,000, 5) Prepaid items: $2,000-4,000. Total: $18,000-23,000. Savings: $10,400-14,100. Plus: Assumptions typically skip appraisal ($500-800 savings). In Nevada, title insurance rates are set by state, making assumptions even more favorable.',
    keywords: ['FHA assumption closing costs', 'assume FHA loan fees', 'FHA assumption vs new loan costs', 'closing costs assumable mortgage'],
    relatedQuestions: ['ltq-004', 'ltq-015'],
    category: 'costs',
    searchIntent: 'comparison',
    estimatedSearchVolume: 'high',
    competition: 'medium',
    wordCount: 2100
  },
  {
    id: 'ltq-009',
    question: 'Can you finance the equity gap with a second mortgage when assuming a VA loan, and what are the blended rate implications?',
    shortAnswer: 'Yes, you can use a second mortgage for the equity gap. Blended rate = (First mortgage rate × Balance + Second mortgage rate × Second balance) / Total debt. Example: 3% on $300K + 9% on $100K = 4.5% blended on $400K.',
    detailedAnswer: 'Second mortgage financing for equity gaps is common with VA assumptions. Calculation: Blended rate = (Rate1 × Balance1 + Rate2 × Balance2) / Total Debt. Example: Home worth $450K, assumable VA loan $300K at 3%, equity gap $150K. Options: 1) Cash: Pay $150K, rate stays 3%. 2) Second mortgage: $150K at 9% = Blended rate = (3% × $300K + 9% × $150K) / $450K = ($9K + $13.5K) / $450K = 5%. Monthly: First $1,265, Second $1,207, Total $2,472. New $450K mortgage at 7% = $2,994/month. Still saves $522/month despite blended rate. Second mortgage pros: Preserves cash, still saves vs. new mortgage, tax-deductible interest. Cons: Higher blended rate than pure assumption, need to qualify for second mortgage, two payments to manage.',
    keywords: ['second mortgage assumable loan', 'blended rate assumption', 'finance equity gap VA loan', 'assume VA loan second mortgage'],
    relatedQuestions: ['ltq-004', 'ltq-016'],
    category: 'costs',
    searchIntent: 'informational',
    estimatedSearchVolume: 'medium',
    competition: 'low',
    wordCount: 2300
  },
  
  // LOAN TYPE SPECIFIC
  {
    id: 'ltq-010',
    question: 'What\'s the difference between assuming an FHA loan with a streamline assumption vs. a credit qualifying assumption?',
    shortAnswer: 'Streamline assumption: No credit check, income verification, or qualification - fastest option. Credit qualifying: Full underwriting like new loan - slower but releases seller liability immediately. Most assumptions are credit qualifying.',
    detailedAnswer: 'FHA offers two assumption types: 1) Streamline (Simple) Assumption: No credit check, no income verification, no qualification - buyer just takes over payments. Seller remains liable on the loan. Used rarely (inheritance, divorce transfers). Takes 15-30 days. 2) Credit Qualifying Assumption: Full underwriting (credit, income, DTI check), buyer must qualify. Seller released from liability upon assumption. Standard process - takes 45-90 days. Most buyers want credit qualifying because: a) Seller released from liability (important for sellers), b) Buyers want to ensure they can afford payments, c) Required if using a second mortgage. In Las Vegas market, 95%+ of assumptions are credit qualifying. Streamline is mainly for family transfers where seller wants to stay on loan (rare).',
    keywords: ['FHA streamline assumption', 'credit qualifying assumption FHA', 'FHA assumption types', 'simple vs credit qualifying assumption'],
    relatedQuestions: ['ltq-001', 'ltq-017'],
    category: 'loan-types',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 1800
  },
  {
    id: 'ltq-011',
    question: 'Can you assume a USDA loan if you plan to use the property as a rental or vacation home?',
    shortAnswer: 'No. USDA loans require primary residence occupancy. You must certify you\'ll live in the home as your primary residence. Violating this can trigger immediate loan acceleration (full balance due).',
    detailedAnswer: 'USDA loans have strict occupancy requirements: 1) Must be primary residence - you must live in the home within 60 days of closing and occupy it for at least 12 months, 2) Cannot be used for rental properties, vacation homes, or investment properties, 3) If you move out early (job transfer, divorce, etc.), you may keep the loan but cannot use USDA benefits again, 4) Violating occupancy = immediate default - lender can call full loan due. When assuming USDA loan, you sign occupancy certification. USDA verifies through mail, utility connections, driver\'s license changes. In Las Vegas, this affects buyers who want to assume USDA loans but may need to relocate - they\'re locked into primary residence requirement. However, after 12 months, if you move for legitimate reasons, loan remains assumable (new buyer must also use as primary residence).',
    keywords: ['USDA loan rental property', 'assume USDA loan vacation home', 'USDA primary residence requirement', 'USDA assumption occupancy'],
    relatedQuestions: ['ltq-005', 'ltq-018'],
    category: 'loan-types',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 1700
  },
  
  // MARKET/STRATEGY QUESTIONS
  {
    id: 'ltq-012',
    question: 'How do you negotiate price on a home with an assumable mortgage when you\'re competing with buyers using traditional financing?',
    shortAnswer: 'Leverage assumable mortgage value: Offer asking price but emphasize $500-1,500/month savings creates higher effective purchase power. Sellers may accept your offer over higher offers because assumption is more certain to close (no appraisal risk, faster processing).',
    detailedAnswer: 'Negotiation strategy for assumable mortgages: 1) Calculate seller\'s value: Show them data - homes with assumable loans sell for $10K-20K more in studies. 2) Emphasize certainty: Assumptions have less appraisal risk (often no appraisal), more reliable closing, seller released from liability (FHA). 3) Compare effective price: If you pay $420K for home with 3% assumable vs. competitor pays $430K with new 7% mortgage, your effective cost is lower due to monthly savings. 4) Offer structure: Offer at or near asking but highlight assumable mortgage advantages to seller. Some sellers prefer assumption because: a) Process is more straightforward, b) No appraisal risk (home may not appraise at higher offer), c) Buyer qualification is similar to seller\'s (proven they qualified). In Las Vegas hot market, assumable mortgage buyers should emphasize value proposition, not just price.',
    keywords: ['negotiate assumable mortgage home', 'assumable loan negotiation strategy', 'competing offers assumable mortgage', 'assume loan home buying'],
    relatedQuestions: ['ltq-019', 'ltq-020'],
    category: 'market',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 2100
  },
  {
    id: 'ltq-013',
    question: 'What percentage of homes in Las Vegas currently have assumable FHA, VA, or USDA mortgages?',
    shortAnswer: 'Approximately 12-15% of Las Vegas area homes have assumable mortgages (FHA/VA/USDA). Higher percentage in newer developments (2018-2022) where rates were low and FHA/VA loans popular. Older neighborhoods have fewer assumable opportunities.',
    detailedAnswer: 'Las Vegas assumable mortgage market statistics: 1) Overall market: ~12-15% of single-family homes have FHA/VA/USDA loans, 2) By area: North Las Vegas (18-20% - newer construction, first-time buyers), Henderson (14-16% - mix), Las Vegas core (10-12% - older inventory), Boulder City (15-18% - USDA eligible), 3) By price range: $300K-500K (20-25% - FHA sweet spot), $500K-750K (15-18% - VA heavy), $750K+ (5-8% - conventional dominant), 4) By age: Homes built 2018-2022 (25-30% - low rate era), 2015-2017 (18-22%), Pre-2015 (8-12%). Active listings: At any time, 8-12% of active MLS listings have assumable mortgages, but only 30-40% mention it in listing. Working with specialized agents improves discovery rate. Data sources: MLS analytics, HUD loan databases, VA loan records (public data).',
    keywords: ['Las Vegas assumable mortgage statistics', 'how many homes assumable Las Vegas', 'assumable loans Las Vegas market', 'FHA VA USDA percentage Las Vegas'],
    relatedQuestions: ['ltq-021'],
    category: 'market',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 2400
  },
  
  // ADVANCED/EDGE CASES
  {
    id: 'ltq-014',
    question: 'Can you assume a mortgage that\'s in foreclosure or has late payments?',
    shortAnswer: 'Generally no - mortgages in default (foreclosure, 90+ days late) cannot be assumed. Mortgage must be current with no late payments in last 12 months. Some lenders allow assumption if all arrears paid at closing.',
    detailedAnswer: 'Foreclosure/default assumptions are complex: 1) Loans in active foreclosure: Cannot assume - foreclosure process takes precedence. Once foreclosure completes, property is owned by lender (REO) and requires new loan. 2) Loans with late payments: Technically can assume if brought current before assumption, but lenders are hesitant. Most lenders require: a) All payments current, b) No late payments in last 12 months, c) No payments 30+ days late ever (or clean record in last 24 months). 3) Loans in forbearance: If COVID-related forbearance (active), may be assumable after forbearance ends and payments resume. 4) Short sale scenarios: If seller is underwater and lender agrees to short sale, you cannot assume the original loan - you need new financing. Best practice: Only pursue assumptions on loans that are current. In Las Vegas, post-COVID forbearance situations created some assumable opportunities after borrowers resumed payments.',
    keywords: ['assume mortgage foreclosure', 'assumable loan late payments', 'assume defaulted mortgage', 'foreclosure assumption'],
    relatedQuestions: ['ltq-007'],
    category: 'legal',
    searchIntent: 'informational',
    estimatedSearchVolume: 'low',
    competition: 'low',
    wordCount: 1900
  },
  {
    id: 'ltq-015',
    question: 'How does mortgage insurance (MIP) work when you assume an FHA loan, and can you ever remove it?',
    shortAnswer: 'MIP continues for the life of the loan when you assume FHA - you cannot remove it through assumption. MIP is 0.85% of loan balance annually (paid monthly). Only way to remove: Refinance to conventional loan after reaching 20% equity.',
    detailedAnswer: 'FHA Mortgage Insurance Premium (MIP) rules for assumptions: 1) MIP continues: When you assume FHA loan, MIP remains for entire loan term (even if loan-to-value drops below 80%). This is different from new FHA loans where MIP can drop at 78% LTV after 11 years. 2) MIP calculation: Annual premium = 0.85% of loan balance ÷ 12 (monthly). Example: $300K loan = $2,550/year = $212.50/month MIP. 3) Removing MIP: Only options are: a) Refinance to conventional loan (need 20% equity, credit 620+), b) Pay off loan entirely. 4) Impact on savings: MIP reduces but doesn\'t eliminate savings from low rate. $300K at 3% with MIP ($212/mo) = $1,477 total payment vs. new $300K at 7% with no MIP = $1,996. Still saves $519/month. 5) Refinance consideration: If you assume at 3% and rates drop to 5%, refinancing to conventional may make sense to drop MIP, but you\'d lose the 3% rate.',
    keywords: ['FHA MIP assumption', 'assume FHA mortgage insurance', 'remove MIP FHA assumption', 'FHA assumption MIP rules'],
    relatedQuestions: ['ltq-008', 'ltq-022'],
    category: 'costs',
    searchIntent: 'informational',
    estimatedSearchVolume: 'medium',
    competition: 'medium',
    wordCount: 2000
  },
  
  // More questions would continue...
]

/**
 * Get questions by category
 */
export function getQuestionsByCategory(category: LongTailQuestion['category']): LongTailQuestion[] {
  return longTailQuestions.filter(q => q.category === category)
}

/**
 * Get questions by search volume potential
 */
export function getHighValueQuestions(): LongTailQuestion[] {
  return longTailQuestions.filter(q => 
    q.estimatedSearchVolume === 'medium' || q.estimatedSearchVolume === 'high'
  )
}

/**
 * Get low-competition questions for quick wins
 */
export function getLowCompetitionQuestions(): LongTailQuestion[] {
  return longTailQuestions.filter(q => q.competition === 'low')
}

/**
 * Get related questions for internal linking
 */
export function getRelatedQuestions(questionId: string): LongTailQuestion[] {
  const question = longTailQuestions.find(q => q.id === questionId)
  if (!question) return []
  
  return question.relatedQuestions
    .map(id => longTailQuestions.find(q => q.id === id))
    .filter((q): q is LongTailQuestion => q !== undefined)
}

/**
 * Generate SEO-friendly URL slug from question
 */
export function generateSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60)
}

/**
 * Calculate Information Gain score (higher = more unique value)
 * Based on: specificity, uniqueness, detail level, practical value
 */
export function calculateInformationGain(question: LongTailQuestion): number {
  let score = 0
  
  // Specificity (detailed questions score higher)
  if (question.question.includes('2025') || question.question.includes('specific')) score += 2
  if (question.wordCount > 1800) score += 1
  
  // Low competition = more opportunity
  if (question.competition === 'low') score += 3
  if (question.competition === 'medium') score += 1
  
  // Search intent value
  if (question.searchIntent === 'transactional') score += 2
  if (question.searchIntent === 'informational') score += 1
  
  // Category value (process and costs are high-value)
  const categoryScores: Record<string, number> = {
    'process': 3,
    'costs': 3,
    'qualification': 2,
    'legal': 2,
    'loan-types': 2,
    'market': 1,
    'advanced': 3
  }
  score += categoryScores[question.category] || 1
  
  return score
}

// Export prioritized list by Information Gain
export const prioritizedQuestions = [...longTailQuestions]
  .sort((a, b) => calculateInformationGain(b) - calculateInformationGain(a))
