import Pdf from "../R1.pdf";
import { Button } from "@mui/material";

function Resume() {
  return (
    <div className="App">
      <Button href={Pdf} target="_blank" variant="contained">
        Download Pdf
      </Button>
    </div>
  );
}

export default Resume;
