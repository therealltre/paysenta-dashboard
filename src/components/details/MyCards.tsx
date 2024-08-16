import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Radio,
  FormControlLabel,
  Typography,
  Card,
  CardHeader,
  Divider,
  lighten,
  CardActionArea,
  CardContent,
  Tooltip,
  IconButton,
  Avatar,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import CardBlack from "../creditcard/CardStyleDark";
import CardGreen from "../creditcard/CardStyleGreen";
import CardMagenta from "../creditcard/CardStyleMagenta";

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.palette.secondary};
        color: ${theme.palette.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardLogo = styled("img")(
  ({ theme }) => `
      border: 1px solid ${theme.palette.secondary};
      border-radius: ${theme.palette.primary};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.palette.primary.main[100]};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.palette.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.palette.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.palette.secondary};
        }
`
);

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.palette.error};
     color: ${theme.palette.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${(theme.palette.error, 0.4)};
     }
`
);

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.palette.secondary};
     background: ${theme.palette.primary};
     box-shadow: none;
`
);

function MyCards() {
  const data = {
    savedCards: 3
  };

  const [showAddOverlay, setShowAddOverlay] = useState(false);
  // Assuming card data is fetched or stored in an array like this:
  const [cardData, setCardData] = useState([
    { id: "1", style: <CardBlack /> },
    { id: "2", style: <CardGreen /> },
    { id: "3", style: <CardMagenta /> }
  ]);

  const [selectedValue, setSelectedValue] = useState({});
  // const [selectedCard, setSelectedCard] = useState(""); // Track the selected card
  const defaultSelectedCard = cardData.length > 0 ? cardData[0].id : "";
  const [selectedCard, setSelectedCard] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedSelectedCard = localStorage.getItem('selectedCard');
      return storedSelectedCard || defaultSelectedCard;
    }
    return defaultSelectedCard;
  });

  useEffect(() => {
    if (selectedCard) {
      localStorage.setItem("selectedCard", selectedCard);
    }
  }, [selectedCard]);

  // const handleCardSelection = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSelectedValue(event.target.value);
  // };

  const handleCardSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const cardId = event.target.value;
    setSelectedCard(cardId);
  };

  useEffect(() => {
    const storedSelectedCard = localStorage.getItem("selectedCard");
    if (storedSelectedCard) {
      setSelectedCard(storedSelectedCard);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // const handleCardSelection = (event: ChangeEvent<HTMLInputElement>) => {
  //   const cardId = event.target.value;
  //   const updatedCardData = cardData.map(card => ({
  //     ...card,
  //     selected: card.id === cardId // Set selected to true for the clicked card
  //   }));
  //   setCardData(updatedCardData);
  // };

  const handleAddClick = () => {
    setShowAddOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowAddOverlay(false);
  };

  const handleDelete = (id: string) => {
    // Find the index of the card with the specified id
    const index = cardData.findIndex((card) => card.id === id);

    // If the card is found, remove it from the array
    if (index !== -1) {
      const updatedCardData = [...cardData];
      updatedCardData.splice(index, 1);
      // Update the state or data source with the modified cardData
      setCardData(updatedCardData); // Assuming you are using state or some data management system
    }
  };

  const handleCardSelect = (cardId: SetStateAction<string>) => {
    setSelectedCard(cardId); // Set the selected card
  };

  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      <CardHeader
        subheader={data.savedCards + " saved cards"}
        title="My Cards"
        action={
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#08ADAD" }}
            onClick={handleAddClick}
          >
            <AddTwoToneIcon />
            <Typography>Add Card</Typography>
          </Button>
        }
      />
      <Divider />
      <Box p={2}>
        <Grid container spacing={2} alignItems="center">
          {cardData.map((card) => (
            <Grid item xs={12} md={5} lg={4} key={card.id}>
              {/* Render individual card */}
              <CardCc
                sx={{
                  p: 2,
                  alignItems: "center",
                  justifyItems: "space-between",
                  borderColor:
                    selectedCard === card.id ? "primary.main" : "secondary" // Change border color based on selection
                }}
              >
                {/* Display cards */}
                {card.style}

                {/* Radio button for card selection */}
                <FormControlLabel
                  value={card.id}
                  control={
                    <Radio
                      checked={selectedCard === card.id} // Check if the card is selected
                      onChange={handleCardSelection}
                      value={card.id}
                      color="primary"
                      name="primary-card"
                    />
                  }
                  label="Active"
                />

                {/* Delete card functionality */}
                <Tooltip arrow title="Remove this card">
                  <IconButtonError onClick={() => handleDelete(card.id)}>
                    <DeleteTwoToneIcon fontSize="medium" />
                  </IconButtonError>
                </Tooltip>
              </CardCc>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Overlay */}
      <Dialog
        open={showAddOverlay}
        onClose={handleCloseOverlay}
        maxWidth="lg"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <DialogTitle>Select Card Style</DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            {/* "Create New Card" button */}
            {/* <Grid item xs={12}>
              <Button variant="outlined" fullWidth>
                Create New Card
              </Button>
            </Grid> */}
            {/* Displaying cards in a row */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                  <div
                    onClick={() => handleCardSelect("black")}
                    style={{
                      opacity: selectedCard === "black" ? 1 : 0.5,
                      cursor: "pointer"
                    }}
                  >
                    <CardBlack />
                  </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <div
                    onClick={() => handleCardSelect("green")}
                    style={{
                      opacity: selectedCard === "green" ? 1 : 0.5,
                      cursor: "pointer"
                    }}
                  >
                    <CardGreen />
                  </div>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <div
                    onClick={() => handleCardSelect("magenta")}
                    style={{
                      opacity: selectedCard === "magenta" ? 1 : 0.5,
                      cursor: "pointer"
                    }}
                  >
                    <CardMagenta />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ m: 2 }}>
          <Button variant="outlined" onClick={handleCloseOverlay}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            style={{ backgroundColor: "#08ADAD", color: "white" }}
            onClick={handleCloseOverlay}
          >
            Add Card
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default MyCards;
