import React from 'react'
import Image from 'next/image'

function TestimonialCard(user) {
  return (
    <div className="carousel-card">
    <div className="carousel-card-top">
        <Image src='/images/carousel-card-img.jpg' alt='testimonials carousel image' width={64} height={64} className="carousel-card-img" />
        <div className="carousel-card-info">
            <h5>{user.user.name}</h5>
            <p className='carousel-card-label'>{user.user.age}</p>
        </div>
    </div>
    <div className="carousel-card-bottom">
        <p className='testimonial-quote'>&quot;{user.user.testimonial}&quot;</p>
    </div>
</div> 
  )
}

export default TestimonialCard