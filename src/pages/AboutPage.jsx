import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'
function AboutPage() {
  return (
      <Card>
          <div className='about'>
            <h1> About This Project</h1>
            <p>This app is to get feedback on products or services</p>
            <p>Version: 1.0.0</p>

            <Link to="/">Back to Home Page</Link>
          </div>
      </Card>
   
  )
}

export default AboutPage