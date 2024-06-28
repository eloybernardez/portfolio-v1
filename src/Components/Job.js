import { Container, Stack } from 'react-bootstrap'
import { m } from 'framer-motion'
import { jobIcons } from '../utils/icons'

const pluralize = (amount, word) => amount === 1 ? word : `${word}s`

const duration = (start, end) => {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  const diff = endDate.getTime() - startDate.getTime()
  const months = Math.floor(Number(diff / (1000 * 60 * 60 * 24 * 30)))
  const years = Math.floor(Number(diff / (1000 * 60 * 60 * 24 * 365)))

  const stringedAmountYears = pluralize(years, 'year')
  const stringedAmountMonths = pluralize(months, 'month')

  return years === 0 ? `${months} ${stringedAmountMonths}` : `${years} ${stringedAmountYears} and ${months} ${stringedAmountMonths}`
}

export function Job ({ params }) {
  const { job } = params
  return (
        <Stack
        gap={3}
        className="px-3 px-md-0 justify-content-between justify-content-center align-items-center"
        >
            <m.h3
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="fw-bold text-secondary">
                {job.position} | {job.company}
            </m.h3>

            <h5 className="text-secondary">
                {duration(job.startDate, job.endDate)}
            </h5>

            <Container className="align-items-center justify-content-center">
                <p className='text-center'>{job.description.intro}</p>
                <ul className="list-group px-2 px-md-5 px-lg-1">
                    {job.description.highlights.map((hl, index) => (
                        <m.li
                        initial={{ x: (index + 1) % 2 === 0 ? 25 : -25, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        key={`highligth-${index}`}
                        className="list-group-item d-flex flex-column flex-md-row align-items-center text-bg-dark mb-2">
                            <span>{jobIcons[index]}</span>
                            <div className="mt-3 ms-3">
                                <h6>{hl.title}</h6>
                                <p>{hl.description}</p>
                            </div>
                        </m.li>
                    ))}
                </ul>
            </Container>
        </Stack>
  )
}
