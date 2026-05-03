import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 to-blue-50'>
      <div className='max-w-4xl mx-auto px-6 py-16'>
        <h1 className='text-5xl font-bold text-purple-900 mb-8'>About BitLinks</h1>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-purple-700 mb-4'>Our Mission</h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            BitLinks is a modern URL shortening service designed to simplify link sharing.
            We help you create memorable, short URLs that are easy to share across all platforms.
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-bold text-purple-700 mb-4'>Why Choose Us?</h2>
          <ul className='space-y-3 text-gray-700'>
            <li className='flex items-start'>
              <span className='text-purple-500 font-bold mr-3'>✓</span>
              <span>Fast and reliable URL shortening service</span>
            </li>
            <li className='flex items-start'>
              <span className='text-purple-500 font-bold mr-3'>✓</span>
              <span>Custom short URLs for your brand</span>
            </li>
            <li className='flex items-start'>
              <span className='text-purple-500 font-bold mr-3'>✓</span>
              <span>Easy to use and intuitive interface</span>
            </li>
            <li className='flex items-start'>
              <span className='text-purple-500 font-bold mr-3'>✓</span>
              <span>Secure and encrypted links</span>
            </li>
          </ul>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-purple-700 mb-4'>Get Started</h2>
          <p className='text-gray-700 mb-4'>
            Start shortening your URLs today and share them with ease.
          </p>
          <a href='/shorten' className='inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg'>
            Create Short URL
          </a>
        </div>
      </div>
    </div>
  )
}

export default About