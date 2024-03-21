import { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { URLS } from '../utils/urls'
import { Job } from '../Components/Job'
import { Spinner } from 'react-bootstrap'

export function JobExperience () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(URLS.EXPERIENCE_URL)
        const { experience } = await res.json()

        if (!experience || experience.length === 0) {
          console.error('No jobs found')
          return
        }

        setJobs(experience)
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchJobs()
  }, [])

  return (
        <section id="experience" className='py-5'>
            <m.h3
                initial={{ x: 15, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center fw-bolder display-5 py-5"
                >
                Job
                <span className="border-bottom border-2 border-secondary"> Experience</span>
            </m.h3>

            <m.div className="d-flex justify-content-center align-items-center">
                {jobs.length > 0
                  ? jobs.map((job, jobIndex) => (
                <Job key={`job-${jobIndex}`} params={{ job }}/>
                  ))
                  : (<Spinner animation="border" role="status" variant="success">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>)}
            </m.div>
        </section>
  )
}
