import { PageWrapper, useSubmitForm } from "../../src/features/login";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, Checkbox, RenderIf } from "../../src/components";
import { useBool } from "../../src/hooks";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const { control, submitHandler, isLoading } = useSubmitForm();
  const { bool: isVisibil, toggle: toggleVisibility } = useBool();

  return (
    <PageWrapper>
      <Box className="login__container">
        <Stack
          mx="auto"
          alignItems="center"
          width={385}
          maxWidth="95%"
          borderRadius={4}
          boxShadow={1}
          p={3}
          gap={4}
          bgcolor={({ palette }) => palette.background.paper}
        >
          <Stack gap={0.5} textAlign="center">
            <Typography variant="h5" fontWeight={500}>
              Welcome To Hub
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={500}
              color={({ palette }) => palette.text.disabled}
            >
              Login To Your Account
            </Typography>
          </Stack>
          <Stack component="form" width="100%" onSubmit={submitHandler} gap={2}>
            <TextField
              type="text"
              control={control}
              name="username"
              label="username"
            />
            <TextField
              type={isVisibil ? "text" : "password"}
              control={control}
              name="password"
              label="password"
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleVisibility}>
                    <RenderIf isTrue={!isVisibil}>
                      <Visibility />
                    </RenderIf>
                    <RenderIf isTrue={isVisibil}>
                      <VisibilityOff />
                    </RenderIf>
                  </IconButton>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox name="rememberMe" control={control} />}
              label="Remember Me"
            />
            <LoadingButton
              variant="contained"
              type="submit"
              loading={isLoading}
            >
              Login
            </LoadingButton>
          </Stack>
        </Stack>
      </Box>
    </PageWrapper>
  );
};

export default Login;
