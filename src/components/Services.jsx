// src/components/Services.jsx
import React from 'react'

const Services = () => {
  const services = [
    {
      title: 'Personal Care',
      description:
        'Assistance with activities of daily living such as bathing, dressing, grooming, and personal hygiene.',
    },
    {
      title: 'Companionship Services',
      description:
        'Offering friendly companionship for social interaction, emotional support, and a caring presence.',
    },
    {
      title: 'Light Housekeeping',
      description:
        'Assisting with light cleaning tasks, including dusting, vacuuming, laundry, and organizing to maintain a clean and comfortable home.',
    },
    {
      title: 'Medication Reminders',
      description:
        'Ensuring clients take their medications as prescribed by reminding them of scheduled doses and offering support.',
    },
    {
      title: 'Skilled Nursing Care',
      description:
        'Providing advanced medical care, such as wound care, injections, or health assessments, administered by a licensed nurse (if applicable).',
    },
    {
      title: 'Post-Surgery or Rehabilitation Care',
      description:
        'Care provided after surgery or during rehabilitation, offering assistance with mobility, daily activities, and recovery support.',
    },
    {
      title: 'Hospice Care',
      description:
        'Compassionate care for individuals with terminal illnesses, focusing on comfort, pain management, and emotional support (if applicable).',
    },
    {
      title: 'Pick Up and Delivery Services',
      description:
        'Assistance with errands such as picking up prescriptions, grocery shopping, and other necessary deliveries.',
    },
    {
      title: 'Meal Prep and/or Cooking Services',
      description:
        'Preparing nutritious meals tailored to the client’s dietary preferences and needs, ensuring proper nutrition.',
    },
  ]

  return (
    <div style={styles.servicesSection}>
      <h1>Our Services</h1>
      <div style={styles.servicesList}>
        {services.map((service, index) => (
          <div key={index} style={styles.serviceCard}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  servicesSection: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  servicesList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    paddingTop: '20px',
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  serviceTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#555',
  },
}

export default Services
