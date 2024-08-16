import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Typography,
  Grid
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ActivityChart = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const options: ApexOptions = {
    chart: {
      type: "area",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true
      }
      // height: 370
      // offsetX: 10,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
        columnWidth: "35%"
      }
    },
    colors: [primary, secondary],
    stroke: {
      width: 3,
      curve: "smooth",
      show: true,
      colors: ["transparent"]
    },
    markers: {
      size: 0
    },
    dataLabels: {
      enabled: true
    },
    legend: {
      show: false
      // position: "top",
      // horizontalAlign: "right",
      // offsetY: -20
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: [], // Empty initially, will be updated based on time range
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
          return "GHS " + val + "";
        }
      },
      theme: "dark"
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
    }
  };

  const [timeRange, setTimeRange] = useState("1");

  const handleTimeRangeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTimeRange(event.target.value);
  };

  const getXAxisCategories = () => {
    const currentDate = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    let categories = [];

    //logic to segment graph based on filter conditions
    if (timeRange === "3") {
      for (let i = 0; i < 3; i++) {
        const month = months[(currentDate.getMonth() + i) % 12];
        const year = currentDate.getFullYear() - Math.floor((3 - i) / 12);
        categories.push(`01-${month}-${year}`);
      }
    } else if (timeRange === "6") {
      for (let i = 0; i < 6; i++) {
        const month = months[(currentDate.getMonth() + i) % 12];
        const year = currentDate.getFullYear() - Math.floor((6 - i) / 12);
        categories.push(`01-${month}-${year}`);
      }
    } else if (timeRange === "12") {
      for (let i = 0; i < 12; i++) {
        const month = months[(currentDate.getMonth() + i) % 12];
        const year = currentDate.getFullYear() - Math.floor((1 - i) / 12);
        categories.push(`01-${month}-${year}`);
      }
    }

    return categories;
  };

  const getXAxisCategoriesForSelectedTimeRange = getXAxisCategories();

  // Data series for "amount" based on the time range
  const amountSeries = [
    {
      name: "Amount History",
      data: [
        2000, 2500, 2800, 3000, 3200, 3500, 3800, 4000, 4700, 5000, 5500, 2800
      ]
    }
  ];

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={9}
      variant={undefined}
      title="Activity"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <CardContent sx={{ p: "30px" }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ gap: { xs: 15, lg: 64 } }}
          >
            <Grid item>
              <Typography variant="h4" mb={3}>
                Activity
              </Typography>
            </Grid>
            <Grid item>
              <FormControl variant="outlined" size="small">
                <InputLabel id="time-range-label">Time Range</InputLabel>
                <Select
                  labelId="time-range-label"
                  id="time-range-select"
                  value={timeRange}
                  onChange={handleTimeRangeChange}
                  label="Time Range"
                >
                  {/* <MenuItem value="1">1 Month</MenuItem> */}
                  <MenuItem value="3">3 Months</MenuItem>
                  <MenuItem value="6">6 Months</MenuItem>
                  <MenuItem value="12">1 year</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </div>
      <div style={{ margin: "0 5px" }}>
        <Chart
          options={{
            ...options,
            xaxis: {
              categories: getXAxisCategoriesForSelectedTimeRange,
              axisBorder: {
                show: false
              }
            }
          }}
          series={amountSeries}
          type="area"
          height="370px"
        />
      </div>
    </Card>
  );
};

export default ActivityChart;
