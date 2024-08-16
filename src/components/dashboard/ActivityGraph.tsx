import { useRef, useState } from "react";
import {
  Button,
  Box,
  Menu,
  alpha,
  MenuItem,
  Typography,
  styled,
  useTheme,
  Card
} from "@mui/material";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import type { ApexOptions } from "apexcharts";

const DotPrimaryLight = styled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.palette.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotSecondary = styled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.palette.secondary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = styled("span")(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.palette.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

function Analytics() {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      type: "area",
      toolbar: {
        show: true
      },
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        columnWidth: "35%"
      }
    },
    colors: [
      theme.palette.primary.main,
      alpha(theme.palette.primary.main, 0.5),
      theme.palette.secondary.main
    ],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    theme: {
      mode: theme.palette.mode
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"]
    },
    legend: {
      show: false
    },
    labels: [
      "Jan ",
      "Feb ",
      "Mar ",
      "Apr ",
      "May ",
      "Jun ",
      "Jul ",
      "Aug ",
      "Sep ",
      "Oct ",
      "Nov ",
      "Dec "
    ],
    grid: {
      strokeDashArray: 5,
      borderColor: theme.palette.divider
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    tooltip: {
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        formatter: function (val) {
          // return "GHS " + val + "k";
          return "GHS " + val ;
        }
      },
      theme: "dark"
    }
  };

  const chartData = [
    {
      name: "Amount",
      data: [1000, 2500, 500, 120, 2400, 191, 249, 582, 652, 872, 1032, 2199]
    }
  ];

  const periods = [
    {
      value: "month",
      text: "Month"
    },
    {
      value: "3_months",
      text: "3 Months"
    },
    {
      value: "6_month",
      text: "6 Months"
    },
    {
      value: "year",
      text: "1 Year"
    }
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[3].text);

  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        margin={2}
      >
        <Typography variant="h4">Analytics</Typography>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Chart
        options={chartOptions}
        series={chartData}
        type="area"
        height={270}
      />
    </Card>
  );
}

export default Analytics;
