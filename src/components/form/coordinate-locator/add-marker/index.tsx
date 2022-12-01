import { useMapEvent, Marker } from "react-leaflet";
import { UseFormSetValue } from "react-hook-form";
import { RenderIf } from "../../../core";

const AddMarker = ({
  setValue,
  name,
  position,
}: {
  setValue: UseFormSetValue<any>;
  name: string;
  position: {
    lat: number | null;
    long: number | null;
  };
}) => {
  // ? click event handler to get clicked position
  useMapEvent("click", (event: any) => {
    setValue(name, {
      lat: event.latlng.lat,
      long: event.latlng.lng,
    });
  });

  const lat = position?.lat || 0;
  const lng = position?.long || 0;

  return (
    <RenderIf isTrue={!!lng && !!lng}>
      <Marker
        position={[lat, lng]}
        draggable
        eventHandlers={{
          dragend: (event: any) => {
            setValue(name, {
              lat: event.target._latlng.lat,
              long: event.target._latlng.lng,
            });
          },
        }}
      />
    </RenderIf>
  );
};

export default AddMarker;
