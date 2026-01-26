import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <section className="bg-black text-white rounded-2xl p-8 md:p-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight md:max-w-md">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <form onSubmit={handleSubmit} className="w-full md:w-auto space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            className="bg-white text-black min-w-[300px]"
          />
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-full"
          >
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </section>
  )
}
