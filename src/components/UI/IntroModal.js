import { Button, Link, Modal, Typography } from "@material-ui/core";
import { Box } from "@mui/system";

const IntroModal = ({ showModal, onToggle }) => {
  return (
    <Modal
      open={showModal}
      onClose={onToggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          margin: "auto",
          maxWidth: 450,
          bgcolor: "#ffffff",
          outline: "none",
          borderRadius: 3,
          minHeight: 150,
          p: 3,
          textAlign: "justify",
          boxShadow: `5px 5px 10px #67787f, -5px -5px 10px #637c66`,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Hi there 👋{" "}
        </Typography>

        <Typography paragraph>
    Thank you for visiting this website. It features a dashboard design inspired by Material-UI, which I've used as a platform for practicing and refining my UI development skills over the past two years.
</Typography>
<Typography paragraph>
    While building this project, my primary focus was on delivering a polished user interface. However, I'm open to feedback and suggestions for improvement to further enhance my skills and craftsmanship.
</Typography>
<Typography paragraph>
    Additionally, I'm currently seeking new opportunities to apply my two years of experience in UI development. If you have any job openings suitable for someone with my level of experience, I would be eager to explore them. 🙏
</Typography>


        {/* Buttons */}
        <Box
          sx={{
            pt: 1,
            display: "grid",
            gap: 2,
            gridAutoFlow: "column",
            justifyContent: "end",
          }}
        >
          <Button
            component={Link}
            underline="none"
            variant="contained"
            disableElevation
            href="https://github.com/yogeshmlv/mui-test"
            target="_blank"
            rel="noopener noreferrer"
          >
            view code
          </Button>

          <Button
            variant="contained"
            disableElevation
            onClick={onToggle}
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default IntroModal;
