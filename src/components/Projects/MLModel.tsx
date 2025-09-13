import { Stack } from "@mui/material";

function MLModel() {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          paddingTop: 5,
          px: { xs: 10, md: 60 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <iframe
            src="https://www.youtube.com/embed/nWWa3kHDjGA"
            style={{
              width: "80%",
              height: 400,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></iframe>
          <a href="https://github.com/EarliestHippo27/CMSC463_Project">
            Pseudo-LiDar Quasi-Identifier Estimation
          </a>
          <h5>Description: </h5>
          <p>Tech Stack: PyTorch, JuPyter Notebook, Python, NumPy</p>
          <p className="text-wrap">
            LiDar-like images (Depth Maps) are created from an existing image
            dataset containing the tags height, weight, age and gender using the
            MiDas depth estimation model. These images then made up the dataset
            used to train a convolutional neural networks to observe if it truly
            was possible to obtain quasi-identifiers from depth maps. The
            dataset is randomized using a seed and to prevent over-fitting of
            our model(where it becomes only good at answering training data and
            not new data) dropout layers were implemented.
          </p>
          <p>
            The resulting models were able to estimate the identifiers with
            notable accuracy(beter than just guessing the average). From this it
            was concluded that from LiDar images it was possible to determine a
            person's characteristics.
          </p>
        </div>
      </Stack>
    </>
  );
}

export default MLModel;
