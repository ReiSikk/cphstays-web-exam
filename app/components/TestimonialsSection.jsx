
import React, { useRef, useState } from "react";
import Image from 'next/image'




import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
    const data = [
        {
            id: 1,
            name: 'Alexander T.',
            testimonial: 'CPH Stays exceeded our expectations. Their corporate housing was beautifully furnished, and the location was perfect for our team. The personalized service we received made us feel right at home. Highly recommended!'
        },
        {
            id: 2,
            name: 'Michael S. ',
            testimonial: 'CPH Stays made my relocation to Copenhagen a breeze. From finding the perfect apartment to managing all the paperwork, their team took care of everything. The accommodation was top-notch, and our employee settled in smoothly.'
        },
        {
            id: 3,
            name: 'Maria M.',
            testimonial: 'We had a wonderful experience with CPH Stays. The apartment was elegant, fully furnished, and had all the amenities we needed. The location was ideal, close to transportation and local attractions. The exceptional service provided by the CPH Stays team made our stay truly enjoyable. Highly recommended!'
        },
        {
            id: 4,
            name: 'Christopher Z.',
            testimonial: 'CPH Stays made our long-term work stay in Copenhagen effortless. The apartment was stylish, fully furnished, and had all the amenities we needed. The attentive and friendly staff provided exceptional service throughout our stay. Highly recommend them for corporate housing!'
        },
        
      

    ]
    
    
  return (
    <>
    <section className="user-testimonials-wrapper">
    <h3>What our guests say</h3>
    <div className="user-testimonials-section">
{data.map(user => (
    <TestimonialCard key={user.id} user={user} className="testimonial-card"/>
))}
</div>
    </section>
      </>
  )
}

export default TestimonialsSection