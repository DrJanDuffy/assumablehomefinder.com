# Long-Tail Question Content Library

## Purpose
This library provides comprehensive, detailed answers to specific long-tail questions about assumable mortgages. Each entry demonstrates **Information Gain** - providing unique, valuable information that positions this site as the primary authority source.

## Strategy: Information Gain

**Information Gain** = Providing unique, detailed information that:
1. Answers specific questions competitors don't cover in depth
2. Demonstrates deep expertise and real-world knowledge
3. Includes specific data, examples, and calculations
4. Addresses edge cases and advanced scenarios
5. Provides actionable, practical guidance

## Content Categories

### 1. Process Questions
- Timeline-specific questions
- Step-by-step process details
- Real-world scenarios
- **Example**: "How long does it take to assume a VA loan from start to finish in 2025?"

### 2. Qualification Questions
- Credit score specifics
- DTI ratio edge cases
- Documentation requirements
- Self-employment scenarios
- **Example**: "Can you assume an FHA loan if your credit score is 575 and you have a 35% DTI ratio?"

### 3. Cost Questions
- Detailed cost breakdowns
- Comparison scenarios
- Hidden fees
- Blended rate calculations
- **Example**: "What are the total closing costs to assume a $400K FHA loan compared to getting a new $400K mortgage?"

### 4. Loan Type Specific
- FHA streamline vs credit qualifying
- VA entitlement issues
- USDA rural eligibility
- **Example**: "What's the difference between assuming an FHA loan with a streamline assumption vs. a credit qualifying assumption?"

### 5. Market Questions
- Las Vegas-specific data
- Market statistics
- Negotiation strategies
- **Example**: "What percentage of homes in Las Vegas currently have assumable FHA, VA, or USDA mortgages?"

### 6. Legal Questions
- Entitlement transfers
- Liability issues
- Default/foreclosure scenarios
- **Example**: "What happens to the original VA borrower's entitlement if a non-veteran assumes their loan?"

### 7. Advanced/Edge Cases
- Complex scenarios
- Rare situations
- Strategic considerations
- **Example**: "Can you assume a mortgage that's in foreclosure or has late payments?"

## How to Use This Library

### 1. Blog Post Generation
Convert questions into full blog posts:
```typescript
import { generateArticleContent } from './content-generator'
import { longTailQuestions } from './long-tail-questions'

const question = longTailQuestions.find(q => q.id === 'ltq-001')
const article = generateArticleContent(question)
// Use article.content, article.h1, article.h2s, etc.
```

### 2. FAQ Sections
Use detailed answers for FAQ sections on relevant pages:
```typescript
import { getQuestionsByCategory } from './long-tail-questions'

const processQuestions = getQuestionsByCategory('process')
// Use for FAQ accordions
```

### 3. Internal Linking
Link related questions together for SEO:
```typescript
import { getRelatedQuestions } from './long-tail-questions'

const related = getRelatedQuestions('ltq-001')
// Generate internal links in articles
```

### 4. Priority Content Creation
Focus on high Information Gain questions first:
```typescript
import { prioritizedQuestions } from './long-tail-questions'

prioritizedQuestions.slice(0, 10) // Top 10 questions to create first
```

## Content Quality Standards

Each long-tail question entry should:
- ✅ Provide specific, actionable information
- ✅ Include real examples with numbers/calculations
- ✅ Address Las Vegas/Nevada market specifics
- ✅ Demonstrate deep expertise (Information Gain)
- ✅ Link to related questions for SEO
- ✅ Target 1500-2500 words for full articles
- ✅ Include proper H1, H2, H3 structure
- ✅ Use target keywords naturally

## Expanding the Library

When adding new questions:

1. **Identify gaps**: What specific questions aren't answered well elsewhere?
2. **Focus on specificity**: "How long does it take?" → "How long does it take to assume a VA loan from start to finish in 2025?"
3. **Include data**: Use real numbers, percentages, calculations
4. **Local context**: Reference Las Vegas, Henderson, Nevada specifics
5. **Edge cases**: Address uncommon but important scenarios
6. **Calculations**: Include formulas and examples

## SEO Benefits

This library provides:
- **Long-tail keyword targeting**: Specific, low-competition keywords
- **Semantic coverage**: Comprehensive topic coverage for E-E-A-T
- **Internal linking**: Natural link structure between related topics
- **User intent matching**: Answers specific user questions
- **Information Gain**: Unique value that makes site authoritative
- **Featured snippet opportunities**: Structured answers that Google may feature

## Next Steps

1. Convert top 10 prioritized questions into blog posts
2. Add FAQ sections to relevant pages using question library
3. Create internal linking strategy between related questions
4. Monitor search performance for long-tail keywords
5. Expand library based on user questions and search data
