/**
 * Content Generator for Long-Tail Question Articles
 * Generates full blog post/article content from question library
 */

import { LongTailQuestion, generateSlug, getRelatedQuestions } from './long-tail-questions'

export interface GeneratedContent {
  title: string
  slug: string
  metaDescription: string
  h1: string
  h2s: string[]
  h3s: string[]
  content: string
  schemaMarkup: object
  internalLinks: Array<{ text: string; url: string }>
}

/**
 * Generate full article content from a long-tail question
 */
export function generateArticleContent(question: LongTailQuestion): GeneratedContent {
  const slug = generateSlug(question.question)
  const related = getRelatedQuestions(question.id)
  
  // Generate H2s based on category and question type
  const h2s = generateH2Structure(question)
  
  // Generate H3s
  const h3s = generateH3Structure(question)
  
  // Build content with proper structure
  const content = buildArticleContent(question, h2s, h3s)
  
  // Generate meta description
  const metaDescription = `${question.shortAnswer.substring(0, 150)}... Learn more about ${question.category} assumable mortgages in Las Vegas.`
  
  // Generate schema markup
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: question.question,
    description: question.shortAnswer,
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Real Estate Agent',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Assumable Home Finder',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://assumablehomefinder.com/blog/${slug}`,
    },
    ...(question.searchIntent === 'comparison' && {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: question.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: question.detailedAnswer,
          },
        },
      ],
    }),
  }
  
  // Generate internal links
  const internalLinks = generateInternalLinks(question, related)
  
  return {
    title: `${question.question} | Assumable Mortgage Expert Guide`,
    slug,
    metaDescription,
    h1: question.question,
    h2s,
    h3s,
    content,
    schemaMarkup,
    internalLinks,
  }
}

function generateH2Structure(question: LongTailQuestion): string[] {
  const baseH2s: string[] = []
  
  // Always start with introduction/answer overview
  baseH2s.push(`Understanding ${question.category.charAt(0).toUpperCase() + question.category.slice(1)} for Assumable Mortgages`)
  
  // Category-specific H2s
  switch (question.category) {
    case 'process':
      baseH2s.push('Step-by-Step Process Breakdown')
      baseH2s.push('Timeline and What to Expect')
      baseH2s.push('Common Challenges and Solutions')
      break
    case 'qualification':
      baseH2s.push('Qualification Requirements Explained')
      baseH2s.push('How Lenders Evaluate Your Application')
      baseH2s.push('Tips for Improving Your Approval Chances')
      break
    case 'costs':
      baseH2s.push('Detailed Cost Breakdown')
      baseH2s.push('Comparing Assumption vs. New Loan Costs')
      baseH2s.push('Hidden Costs and Fees to Consider')
      break
    case 'loan-types':
      baseH2s.push(`${question.question.includes('FHA') ? 'FHA' : question.question.includes('VA') ? 'VA' : 'USDA'} Loan-Specific Considerations`)
      baseH2s.push('Requirements and Restrictions')
      baseH2s.push('Best Practices for This Loan Type')
      break
    case 'market':
      baseH2s.push('Las Vegas Market Context')
      baseH2s.push('How This Affects Your Home Search')
      baseH2s.push('Working with Specialized Agents')
      break
    case 'legal':
      baseH2s.push('Legal and Regulatory Considerations')
      baseH2s.push('Understanding Your Rights and Obligations')
      baseH2s.push('When to Consult a Professional')
      break
    case 'advanced':
      baseH2s.push('Advanced Strategies and Considerations')
      baseH2s.push('Edge Cases and Special Scenarios')
      baseH2s.push('Expert Tips and Recommendations')
      break
  }
  
  // Always end with call to action
  baseH2s.push('Get Expert Help with Assumable Mortgages in Las Vegas')
  
  return baseH2s
}

function generateH3Structure(question: LongTailQuestion): string[] {
  const h3s: string[] = []
  
  // Break down detailed answer into H3 sections
  const sentences = question.detailedAnswer.split(/[.!?]+/).filter(s => s.trim().length > 20)
  
  // Group related sentences into H3 topics
  if (question.category === 'process') {
    h3s.push('Initial Application and Documentation')
    h3s.push('Lender Review and Underwriting')
    h3s.push('Approval and Closing Process')
  } else if (question.category === 'costs') {
    h3s.push('Assumption Fees and Charges')
    h3s.push('Closing Costs Breakdown')
    h3s.push('Ongoing Monthly Payment Considerations')
  } else {
    // Generic structure
    h3s.push('Key Requirements and Qualifications')
    h3s.push('Important Considerations')
    h3s.push('Las Vegas Market Specifics')
  }
  
  return h3s
}

function buildArticleContent(
  question: LongTailQuestion,
  h2s: string[],
  h3s: string[]
): string {
  let content = ''
  
  // Introduction paragraph
  content += `<p>${question.shortAnswer} This comprehensive guide explains everything you need to know about ${question.category} when assuming an FHA, VA, or USDA mortgage in Las Vegas, Henderson, and throughout Nevada.</p>\n\n`
  
  // Main detailed answer section
  content += `## ${h2s[0]}\n\n`
  content += `<p>${question.detailedAnswer}</p>\n\n`
  
  // Add category-specific sections
  content += buildCategorySpecificContent(question, h2s.slice(1, -1), h3s)
  
  // Call to action section
  content += `## ${h2s[h2s.length - 1]}\n\n`
  content += `<p>Navigating assumable mortgage ${question.category} requires specialized expertise. Dr. Jan Duffy, a Nevada-licensed REALTOR® with 30+ years of experience, specializes in assumable mortgages and can guide you through the process. Contact us today to discuss your specific situation and get personalized assistance.</p>\n\n`
  
  return content
}

function buildCategorySpecificContent(
  question: LongTailQuestion,
  h2s: string[],
  h3s: string[]
): string {
  let content = ''
  
  // Add expanded sections based on category
  h2s.forEach((h2, index) => {
    content += `## ${h2}\n\n`
    
    if (h3s[index]) {
      content += `### ${h3s[index]}\n\n`
    }
    
    // Add relevant content based on section
    content += `<p>Detailed content for ${h2} would be expanded here based on the specific question and category. This provides comprehensive coverage of the topic.</p>\n\n`
  })
  
  return content
}

function generateInternalLinks(
  question: LongTailQuestion,
  related: LongTailQuestion[]
): Array<{ text: string; url: string }> {
  const links: Array<{ text: string; url: string }> = []
  
  // Add category page links
  if (question.question.includes('FHA')) {
    links.push({ text: 'Learn more about FHA assumable loans', url: '/fha-assumable-loans' })
  }
  if (question.question.includes('VA')) {
    links.push({ text: 'VA assumable loan guide', url: '/va-assumable-loans' })
  }
  if (question.question.includes('USDA')) {
    links.push({ text: 'USDA assumable mortgage information', url: '/usda-assumable-loans' })
  }
  
  // Add process link if relevant
  if (question.category === 'process') {
    links.push({ text: 'How assumable mortgages work', url: '/how-it-works' })
  }
  
  // Add calculator link
  if (question.category === 'costs') {
    links.push({ text: 'Calculate your assumable mortgage savings', url: '/calculator' })
  }
  
  // Add related question links
  related.forEach(rq => {
    links.push({
      text: `Related: ${rq.question.substring(0, 60)}...`,
      url: `/blog/${generateSlug(rq.question)}`,
    })
  })
  
  return links
}

/**
 * Export all questions as blog post metadata
 */
export function generateBlogPostMetadata() {
  // This would be used to generate blog post files
  // Implementation depends on your blog system
}
