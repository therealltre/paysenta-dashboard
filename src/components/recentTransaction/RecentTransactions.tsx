import React from "react";
import DashboardCard from "../shared/DashboardCard";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses
} from "@mui/lab";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import { sampleRecentData } from "./RecentTransactionData";

interface RecentTransaction {
  name: string;
  date: string;
  paymentMode: string;
  amount: number;
  status: string;
  type: string;
}

interface StatusCellProps {
  status: string;
}

const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  let statusStyle: React.CSSProperties = {};

  switch (status.toLowerCase()) {
    case "success":
      statusStyle = {
        backgroundColor: "#ECFDF3",
        // border: "1px solid green",
        padding: "8px",
        borderRadius: "5px",
        color: "green",
        textAlign: "center"
      };
      break;
    case "failed":
      statusStyle = {
        backgroundColor: "#FFF5F5",
        // border: "1px solid red",
        padding: "8px",
        borderRadius: "5px",
        color: "#FF9999",
        textAlign: "center"
      };
      break;
    default:
      break;
  }

  return <div style={statusStyle}>{status}</div>;
};

const RecentTransactions = () => {
  const router = useRouter();
  const filteredData: RecentTransaction[] = sampleRecentData; // Replace 'Transaction' with the appropriate type

  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      <>
        <Box
          mb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          margin={2}
        >
          <Typography variant="h6"> Recent Transactions</Typography>
          <Link
            variant="h6"
            onClick={() => router.push("/activity")} // Navigate to /activity route
            style={{ cursor: "pointer", color: "primary" }}
          >
            See All
          </Link>
        </Box>
        <Table>
          <TableHead style={{ backgroundColor: "#F9FAFB", }}>
            <TableRow>
              <TableCell>Recipient</TableCell>
              <TableCell>Payment Mode</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar>{transaction.name[0]}</Avatar>
                    <Box alignItems={"center"} justifyItems={"Start"} gap={0}>
                      <Typography>{transaction.name}</Typography>
                      <Typography>{transaction.type}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography> {transaction.paymentMode}</Typography>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography fontWeight={"bold"}>
                      GHS {transaction.amount}
                    </Typography>
                    <Typography> {transaction.date}</Typography>
                  </Box>
                </TableCell>

                {/* <TableCell>{transaction.status}</TableCell> */}
                <TableCell>
                  <StatusCell status={transaction.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </Card>
  );
};

export default RecentTransactions;
