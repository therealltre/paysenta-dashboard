import React from 'react';
import { Button, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

interface IconButtonWithSubtitleProps {
  imageUrl: string;
  subtitle: string;
}

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   image: {
//     width: '50px',  // Adjust the size as needed
//     height: '50px', // Adjust the size as needed
//     marginBottom: 8,
//   },
// });

const IconButtonWithSubtitle: React.FC<IconButtonWithSubtitleProps> = ({
  imageUrl,
  subtitle,
}) => {
//   const classes = useStyles();

  return (
    <div className='text-center' >
      <Button variant="outlined" color="primary" style={{width: 145, height: 54}} >
        <img src={imageUrl} alt="" width={22} height={20} style={{alignItems: "center"}}/>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Button>
     
    </div>
  );
};

export default IconButtonWithSubtitle;
