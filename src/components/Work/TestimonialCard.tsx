import type { Testimonial } from '../../data/projects'
import {
  TestimonialCardContainer,
  TestimonialQuoteMark,
  TestimonialQuoteText,
  TestimonialCardFooter,
  TestimonialAuthorAvatar,
  TestimonialAuthorMetadata,
} from './styles'

interface TestimonialCardComponentProps {
  testimonialData: Testimonial
}

export function TestimonialCardComponent({ testimonialData }: TestimonialCardComponentProps) {
  return (
    <TestimonialCardContainer>
      <TestimonialQuoteMark aria-hidden='true'>
        "
      </TestimonialQuoteMark>
      <TestimonialQuoteText>
        {testimonialData.quote}
      </TestimonialQuoteText>
      <TestimonialCardFooter>
        <TestimonialAuthorAvatar>
          {testimonialData.avatar ? (
            <img
              src={testimonialData.avatar}
              alt={testimonialData.name}
            />
          ) : (
            testimonialData.initials
          )}
        </TestimonialAuthorAvatar>
        <TestimonialAuthorMetadata>
          <strong>{testimonialData.name}</strong>
          <span>{testimonialData.role}</span>
        </TestimonialAuthorMetadata>
      </TestimonialCardFooter>
    </TestimonialCardContainer>
  )
}
