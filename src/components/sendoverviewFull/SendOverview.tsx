import { useTheme } from "@mui/material/styles";
import {
  Stack,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import Swiper from "../cardSwiper/Swiper";
import QuickTransactions from "../quicktransaction/QuickTransaction";


const contacts = ['John', 'Jane', 'Doe', 'Smith']; //contacts array 

const AvailableCredit = () => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;
  const secondarylight = "#f5fcff";
  const errorlight = "#fdede8";

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={9}
      variant={undefined}
      title="Quick Transaction Section"
    >
      <CardContent>
        <Typography variant="h4" mb={2}>My Card(s)</Typography>
        <Stack spacing={1}>
        <Typography variant="body1">Card balance</Typography>
        <Typography variant="h5" fontWeight={"bold"}>GHS 1,300</Typography>
        </Stack>
        <Swiper />
        <QuickTransactions contacts={contacts} />
      </CardContent>
    </Card>
  );
};

export default AvailableCredit;
