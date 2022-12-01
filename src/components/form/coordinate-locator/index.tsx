import { FC } from "react";
import { useController, Control, UseFormSetValue } from "react-hook-form";
import { Box, Stack, Typography } from "@mui/material";
import { RenderIf } from "../../core";
import dynamic from "next/dynamic";
const MapContainer = dynamic(
  () => import("react-leaflet").then((l) => l.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((l) => l.TileLayer),
  { ssr: false }
);
const AddMarker = dynamic(() => import("./add-marker"), {
  ssr: false,
});

type Props = {
  name: string;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
  height?: number;
};

const CoordinateLocator: FC<Props> = (props) => {
  const { name, control, setValue, height } = props;

  const {
    field: { value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const errorMessage = error as any;

  return (
    <Stack gap={1.5}>
      <Box
        width="100%"
        height={height}
        borderRadius={4}
        overflow="hidden"
        boxShadow={1}
      >
        <MapContainer
          center={[32.4279, 53.688]}
          zoom={4}
          attributionControl={false}
          zoomControl={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <AddMarker name={name} setValue={setValue} position={value} />
        </MapContainer>
      </Box>
      <RenderIf isTrue={!!errorMessage?.lat?.message}>
        <Typography color={({ palette }) => palette.error.main}>
          {errorMessage?.lat?.message}
        </Typography>
      </RenderIf>
    </Stack>
  );
};

export default CoordinateLocator;
