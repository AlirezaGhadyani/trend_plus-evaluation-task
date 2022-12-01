import { AppBar, RenderIf } from "../src/components";
import {
  Container,
  Button,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Add } from "@mui/icons-material";
import { getHubList } from "../src/services";
import { HubItem } from "../src/types";
import WarningIcon from "@mui/icons-material/Warning";
import { DataTable } from "../src/features/hub";

const Home = ({ data }: { data: HubItem[] }) => {
  console.log(data);
  return (
    <>
      <AppBar title="Hubs" />
      <Container>
        <Box
          bgcolor={({ palette }) => palette.background.paper}
          borderRadius={4}
          boxShadow={1}
          mt={8}
          p={3}
        >
          <Box mb={2}>
            <Button
              variant="contained"
              component={Link}
              href="/add-hub"
              startIcon={<Add />}
            >
              add hub
            </Button>
          </Box>
          <Divider />
          <RenderIf isTrue={!data.length}>
            <Stack alignItems="center" justifyContent="center" mt={4} gap={1}>
              <WarningIcon color="warning" sx={{ fontSize: "60px" }} />
              <Typography variant="h5">There is no hub</Typography>
            </Stack>
          </RenderIf>
          <RenderIf isTrue={!!data.length}>
            <DataTable data={data} />
          </RenderIf>
        </Box>
      </Container>
    </>
  );
};

export default Home;

// * fetch hub list
export const getServerSideProps = async ({
  req,
}: {
  req: { cookies: { access: string } };
}) => {
  const data = await getHubList(req.cookies.access);

  return {
    props: {
      data: data.data,
    },
  };
};
