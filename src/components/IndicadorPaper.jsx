import { Grid, Paper } from '@mui/material'
import { ProgressBar, Row, Col } from 'react-bootstrap'
import { ProgressMeter } from './ProgressMeter'

export const IndicadorPaper = ({titulo, descripcion, metas, progresos, medida, year, trimestre}) => {

  const icons = {
    'Personas': 'bi-person-fill-add',
    'Monetario': 'bi-cash-coin',
    'Organizaciones': 'bi-house-add-fill',
    'Proyectos': 'bi-building-gear',
  }

  return (
    <Grid size={{ sm: 12, lg: 6, xl: 4 }}>
      <Paper elevation={8} className='px-5 py-4 h-100' style={{textAlign: 'center', backgroundColor: '#A9CCE3'}}>
        <h6 className='my-0' style={{textAlign: 'end', fontWeight: 'bold'}}>{`${year}${trimestre !== 'Total' ? '-' + trimestre : ''}`}</h6>
        <h2 className="pb-2">{titulo}</h2>
        <h5>{descripcion}</h5>
        <Row className="d-flex align-items-center">
          <Col xs={11} className="my-auto">
            <ProgressBar>
              <ProgressBar striped variant={progresos[year][trimestre] >= metas[year][trimestre] ? 'success' : 'info'} 
                now={Number.isNaN((progresos[year][trimestre] / metas[year][trimestre])) ? 0 : (progresos[year][trimestre] / metas[year][trimestre]) * 100} 
                label={`${Number.isNaN((progresos[year][trimestre] / metas[year][trimestre])) ? 0 : Number.parseInt((progresos[year][trimestre] / metas[year][trimestre]) * 100)}%`} key={1} />
            </ProgressBar>
          </Col>
          <Col xs={1}>
            <i className={`bi ${icons[medida]}`} style={{fontSize: '2rem'}}></i>
          </Col>
        </Row>
        <ProgressMeter medida={medida} year={year} progreso={progresos[year][trimestre] || 0} meta={metas[year][trimestre] || 0} />
      </Paper>
    </Grid>
  )
}
