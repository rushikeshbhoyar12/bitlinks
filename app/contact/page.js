import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50'>
      <div className='max-w-2xl mx-auto px-6 py-16'>
        <h1 className='text-5xl font-bold text-purple-900 mb-12'>Contact Us</h1>

        <div className='bg-white rounded-lg shadow-lg p-8 space-y-8'>

          <div>
            <h2 className='text-2xl font-bold text-purple-700 mb-3'>Email</h2>
            <a href='mailto:info@bitlinks.com' className='text-purple-500 hover:text-purple-700 text-lg'>
              info@bitlinks.com
            </a>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-purple-700 mb-3'>Phone</h2>
            <a href='tel:+15551234567' className='text-purple-500 hover:text-purple-700 text-lg'>
              +1 (555) 123-4567
            </a>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-purple-700 mb-3'>Address</h2>
            <p className='text-gray-700 text-lg'>
              123 Tech Street<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-purple-700 mb-3'>Business Hours</h2>
            <p className='text-gray-700 text-lg'>
              Monday - Friday: 9:00 AM - 6:00 PM PST<br />
              Saturday - Sunday: Closed
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact