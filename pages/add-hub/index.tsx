import dynamic from "next/dynamic";
import { AppBar, TextField } from "../../src/components";
import { Container, Grid, Stack, InputLabel, Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useAddHub, OrderTypeCheckboxs } from "../../src/features/hub";
const CoordinateLocator = dynamic(
  () => import("../../src/components/form/coordinate-locator/index"),
  {
    ssr: false,
  }
);

const AddHub = () => {
  const { control, watch, setValue, submitHandler, isLoading } = useAddHub();

  return (
    <>
      <AppBar title="Add Hub" />
      <Container>
        <Grid
          container
          component="form"
          bgcolor={({ palette }) => palette.background.paper}
          borderRadius={4}
          boxShadow={1}
          justifyContent="space-between"
          mt={8}
          p={3}
          sx={{
            gap: { xs: 6, md: 1 },
          }}
          onSubmit={submitHandler}
        >
          <Grid item flexBasis="100%" md={5.8}>
            <Stack gap={6}>
              <Stack gap={1.5}>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <TextField
                  control={control}
                  name="name"
                  placeholder="Enter Hub Name"
                  id="name-input"
                />
              </Stack>
              <OrderTypeCheckboxs watch={watch} setValue={setValue} />
            </Stack>
          </Grid>
          <Grid item flexBasis="100%" md={5.8}>
            <CoordinateLocator
              height={360}
              name="cords"
              control={control}
              setValue={setValue}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isLoading}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddHub;
