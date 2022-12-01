import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { HubItem } from "../../../types";
import { RenderIf } from "../../../components";
import { CheckBox, DoNotDisturb } from "@mui/icons-material";

type Props = { data: HubItem[] };

const DataTable: FC<Props> = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Cords</TableCell>
            <TableCell align="right">Regular</TableCell>
            <TableCell align="right">Eco</TableCell>
            <TableCell align="right">Large</TableCell>
            <TableCell align="right">Cold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{`${item.lat} , ${item.long}`}</TableCell>
              <TableCell align="right">
                <RenderIf isTrue={item.is_regular}>
                  <CheckBox color="success" />
                </RenderIf>
                <RenderIf isTrue={!item.is_regular}>
                  <DoNotDisturb color="error" />
                </RenderIf>
              </TableCell>
              <TableCell align="right">
                <RenderIf isTrue={item.is_eco}>
                  <CheckBox color="success" />
                </RenderIf>
                <RenderIf isTrue={!item.is_eco}>
                  <DoNotDisturb color="error" />
                </RenderIf>
              </TableCell>
              <TableCell align="right">
                <RenderIf isTrue={item.is_large}>
                  <CheckBox color="success" />
                </RenderIf>
                <RenderIf isTrue={!item.is_large}>
                  <DoNotDisturb color="error" />
                </RenderIf>
              </TableCell>
              <TableCell align="right">
                <RenderIf isTrue={item.is_cold}>
                  <CheckBox color="success" />
                </RenderIf>
                <RenderIf isTrue={!item.is_cold}>
                  <DoNotDisturb color="error" />
                </RenderIf>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
