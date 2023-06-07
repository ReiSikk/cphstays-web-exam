import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqAccordion() {
  return (
    <section className='faq-section'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='h5-style'>How do I book a corporate apartment with CPH Stays?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Booking a corporate apartment with CPH Stays is simple. Browse through our selection of apartments, choose the one that suits your needs, and get in touch with our team. We will guide you through the booking process and assist you with all the necessary arrangements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='h5-style'>How often are the apartments cleaned?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Apartments are cleaned on request. We can arrange for a cleaning service to come to your apartment as often as you like. Please contact us for more information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='h5-style'>Are utilities included in the rent price?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, utilities such as electricity, water, and internet are typically included in the rental price for our corporate apartments. You can enjoy a hassle-free stay without worrying about additional utility expenses.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className='h5-style'>Can I register for CPR (Civil Registration System) at a corporate apartment with CPH Stays?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, it is possible to register for CPR at a corporate apartment with CPH Stays. The CPR registration process is essential for individuals residing in Denmark for an extended period. Our team can provide guidance and support to help you navigate the registration process. We can assist you with the necessary documents and information required for registration, ensuring a smooth and hassle-free experience. Please contact us for further details and assistance with CPR registration during your stay.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}