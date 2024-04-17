import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What Drives Us?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Passion for Innovation and Technological Marvels fuels our every move.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How Do We Innovate?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By diving deep into the digital realm, we conjure magic with every line of code.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Why Choose Domapp?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Because we turn dreams into reality, one algorithm at a time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Where Do We Thrive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In the chaos of creativity, where ideas collide and innovation sparks fly.
        </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>What's Our Secret?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It's a blend of caffeine-fueled brainstorming sessions and late-night coding marathons.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}