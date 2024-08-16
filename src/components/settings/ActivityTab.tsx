import {
    Box,
    CardMedia,
    Typography,
    Card,
    CardHeader,
    Divider,
    Avatar,
    IconButton,
    Button,
    CardActions,
    Link
  } from '@mui/material';
  import { styled } from '@mui/material/styles';
  
  import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
  import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
  import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
  import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
//   import Text from '@/components/Text';
  
  const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.palette.primary.main[5]};
       padding: ${theme.spacing(3)};
  `
  );
  
  function ActivityTab() {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar src="/static/images/avatars/5.jpg" />}
          action={
            <IconButton color="primary">
              <MoreHorizTwoToneIcon fontSize="medium" />
            </IconButton>
          }
          titleTypographyProps={{ variant: 'h4' }}
          subheaderTypographyProps={{ variant: 'subtitle2' }}
          title="Allison Lipshutz"
          subheader={
            <>
              Managing Partner,{' '}
              <Link
                href="@/content/Management/Users/settings/ActivityTab#"
                underline="hover"
                style={{
                  color: '#1E51C1'
                }}
              >
                #software
              </Link>
              ,{' '}
              <Link
                href="@/content/Management/Users/settings/ActivityTab#"
                underline="hover"
                style={{
                  color: '#1E51C1'
                }}
              >
                #managers
              </Link>
              , Google Inc.
            </>
          }
        />
        <Box px={3} pb={2}>
          <Typography variant="h4" fontWeight="normal">
            Welcome to organizing your remote office for maximum productivity.
          </Typography>
        </Box>
        <CardMedia
          sx={{ minHeight: 280 }}
          image="/static/images/placeholders/covers/6.jpg"
          title="Card Cover"
        />
        <Box p={3}>
          <Typography variant="h2" sx={{ pb: 1 }}>
            Organizing Your Remote Office for Maximum Productivity
          </Typography>
          <Typography variant="subtitle2">
            <Link
              href="@/content/Management/Users/settings/ActivityTab#"
              underline="hover"
            >
              example.com
            </Link>{' '}
            • 4 mins read
          </Typography>
        </Box>
        <Divider />
        <CardActionsWrapper
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
              Like
            </Button>
            <Button
              startIcon={<CommentTwoToneIcon />}
              variant="outlined"
              sx={{ mx: 2 }}
            >
              Comment
            </Button>
            <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
              Share
            </Button>
          </Box>
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            <Typography variant="subtitle2" component="span">
              <Typography color="black">
                <b>485</b>
              </Typography>{' '}
              reactions •{' '}
              <Typography color="black">
                <b>63</b>
              </Typography>{' '}
              comments
            </Typography>
          </Box>
        </CardActionsWrapper>
      </Card>
    );
  }
  
  export default ActivityTab;
  