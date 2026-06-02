import { useState, FormEvent, ChangeEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionHead } from '../SectionHead'
import { socialLinks } from '../../data/links'
import { useScrollAnimation } from '../../hooks'
import {
  ContactSectionWrapper,
  ContactContentContainer,
  ContactTwoColumnGrid,
  ContactInfoColumn,
  ContactMethodLinksList,
  ContactMethodLinkItem,
  ContactMethodIconBox,
  ContactMethodLinkText,
  ContactLinkArrowIndicator,
  ContactFormCard,
  FormFieldGroup,
  FormFieldLabel,
  FormTextInput,
  FormTextareaInput,
  FormSubmitButton,
  FormSubmissionStatusMessage,
} from './styles'

function isValidEmailAddress(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function Contact() {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmissionSuccessVisible, setIsSubmissionSuccessVisible] =
    useState(false)
  const { elementRef, isVisible } = useScrollAnimation(0.2)

  const handleContactFormSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!contactFormData.name.trim()) return
    if (
      !contactFormData.email.trim() ||
      !isValidEmailAddress(contactFormData.email)
    )
      return
    if (!contactFormData.message.trim()) return

    setIsSubmissionSuccessVisible(true)
    setContactFormData({ name: '', email: '', message: '' })

    setTimeout(() => {
      setIsSubmissionSuccessVisible(false)
    }, 4000)
  }

  return (
    <ContactSectionWrapper
      id='contact'
      aria-labelledby='contact-heading'
      ref={elementRef as React.RefObject<HTMLElement>}
    >
      <ContactContentContainer>
        <SectionHead
          eyebrow='Contact'
          title={
            <>
              Say hi, or just <em>keep in touch</em>
            </>
          }
          titleId='contact-heading'
        />

        <ContactTwoColumnGrid isVisible={isVisible}>
          <ContactInfoColumn>
            <p>
              I'm always happy to chat about projects, ideas, or just tech stuff
              in general. Drop me a line through the form, or reach out directly
              on any of these platforms.
            </p>

            <ContactMethodLinksList>
              {socialLinks.map((socialLinkItem) => (
                <ContactMethodLinkItem
                  key={socialLinkItem.href}
                  href={socialLinkItem.href}
                  target={
                    socialLinkItem.href.startsWith('mailto:')
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    socialLinkItem.href.startsWith('mailto:')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                >
                  <ContactMethodIconBox>
                    <FontAwesomeIcon
                      icon={socialLinkItem.icon}
                      aria-hidden='true'
                    />
                  </ContactMethodIconBox>
                  <ContactMethodLinkText>
                    {socialLinkItem.displayText || socialLinkItem.label}
                  </ContactMethodLinkText>
                  <ContactLinkArrowIndicator className='contact-link-arrow-indicator'>
                    →
                  </ContactLinkArrowIndicator>
                </ContactMethodLinkItem>
              ))}
            </ContactMethodLinksList>
          </ContactInfoColumn>

          <ContactFormCard>
            <form
              id='contact-form'
              onSubmit={handleContactFormSubmit}
              noValidate
            >
              <FormFieldGroup>
                <FormFieldLabel htmlFor='name'>Name</FormFieldLabel>
                <FormTextInput
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your name'
                  required
                  value={contactFormData.name}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setContactFormData((previousData) => ({
                      ...previousData,
                      name: event.target.value,
                    }))
                  }
                />
              </FormFieldGroup>

              <FormFieldGroup>
                <FormFieldLabel htmlFor='email'>Email</FormFieldLabel>
                <FormTextInput
                  type='email'
                  id='email'
                  name='email'
                  placeholder='you@example.com'
                  required
                  value={contactFormData.email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setContactFormData((previousData) => ({
                      ...previousData,
                      email: event.target.value,
                    }))
                  }
                />
              </FormFieldGroup>

              <FormFieldGroup>
                <FormFieldLabel htmlFor='message'>Message</FormFieldLabel>
                <FormTextareaInput
                  id='message'
                  name='message'
                  placeholder="What's on your mind?"
                  required
                  value={contactFormData.message}
                  onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                    setContactFormData((previousData) => ({
                      ...previousData,
                      message: event.target.value,
                    }))
                  }
                />
              </FormFieldGroup>

              <FormSubmitButton type='submit'>Send message</FormSubmitButton>
              <FormSubmissionStatusMessage
                isStatusVisible={isSubmissionSuccessVisible}
                role='status'
                aria-live='polite'
              >
                ✓ Sent - talk soon.
              </FormSubmissionStatusMessage>
            </form>
          </ContactFormCard>
        </ContactTwoColumnGrid>
      </ContactContentContainer>
    </ContactSectionWrapper>
  )
}
