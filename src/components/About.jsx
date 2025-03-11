// src/components/About.jsx
import React from 'react'

const About = () => {
  return (
    <div style={styles.aboutSection}>
      <h1>About Us</h1>
      <p style={styles.paragraph}>
        At Caring Hands Austin, we believe in the power of personalized care,
        and it all starts with the heart of our mission: to enhance the quality
        of life for our clients, providing them with comfort, support, and
        respect in the place they call home. Our services are designed to be as
        unique as the individuals we care for, ensuring that every need is met
        with empathy, expertise, and compassion.
      </p>

      <h2 style={styles.subTitle}>
        Our Story: Inspired by Family, Driven by Compassion
      </h2>
      <p style={styles.paragraph}>
        Our journey began with a deep, personal inspiration: my grandfather. As
        a young child, I witnessed firsthand the challenges he faced as he aged
        and began to require more assistance with daily activities. Seeing the
        profound impact of compassionate, quality care left an indelible mark on
        me. The care he received wasn’t just about attending to his physical
        needs—it was about providing emotional support, companionship, and
        respect for his independence. That’s when I knew that one day, I would
        dedicate my life to making a difference for others in the same way.
      </p>

      <p style={styles.paragraph}>
        When I saw my grandfather struggle to find the right support that
        understood not only his medical needs but also his desires for
        companionship, independence, and dignity, I knew there was a gap to fill
        in the home care industry. This is how Caring Hands Austin was born: out
        of a desire to offer the same care that my grandfather received—and to
        offer it with the highest level of attention, dedication, and respect.
      </p>

      <h2 style={styles.subTitle}>
        Our Commitment: Top-Tier Support for Every Individual
      </h2>
      <p style={styles.paragraph}>
        At Caring Hands Austin, we understand that the needs of each individual
        are unique, and that's why we work tirelessly to tailor our services to
        each client. Whether it’s assistance with daily activities like bathing,
        dressing, or meal preparation, or offering companionship to prevent
        isolation, our mission is to ensure every person feels valued and cared
        for.
      </p>

      <p style={styles.paragraph}>
        Our dedication goes beyond just providing services; we aim to form
        lasting relationships with our clients and their families. We take pride
        in fostering an environment where our clients not only feel safe and
        supported but also respected and cherished. The trust you place in us is
        something we hold sacred, and we are committed to maintaining the
        highest standards of care.
      </p>

      <p style={styles.paragraph}>
        Every member of our team is highly trained and selected for their
        passion for helping others. We understand the challenges of aging or
        managing a medical condition at home, which is why we ensure that our
        caregivers are not only skilled but also compassionate, patient, and
        understanding. Each team member embodies the same level of dedication
        that inspired me to start this business.
      </p>

      <p style={styles.paragraph}>
        We believe that every person deserves to be treated with dignity and to
        live with purpose. That’s why, at Caring Hands Austin, we don’t just
        provide a service—we offer a partnership. We work with you, your family,
        and your healthcare providers to create a personalized plan that is not
        just effective but compassionate.
      </p>

      <h2 style={styles.subTitle}>
        Looking Ahead: Continuing Our Legacy of Care
      </h2>
      <p style={styles.paragraph}>
        As we continue to grow and expand, we are committed to staying true to
        the values that have guided us from the beginning: family, compassion,
        and respect. We want to ensure that our services are accessible to as
        many individuals as possible, providing them with the care they deserve
        in the comfort of their own homes. Our long-term goal is to make a
        positive impact on the lives of those we serve, just as my grandfather’s
        story has had a lasting impact on me.
      </p>

      <p style={styles.paragraph}>
        Thank you for trusting us with your care and the care of your loved
        ones. We are here for you every step of the way, and we look forward to
        building a brighter, more compassionate future together.
      </p>
    </div>
  )
}

const styles = {
  aboutSection: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  subTitle: {
    fontSize: '2rem',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#555',
  },
}

export default About
