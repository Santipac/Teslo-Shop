import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

export const FullScreenLoading: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      <Typography sx={{ mb: 3 }} variant="h2" fontWeight={300} fontSize={20}>
        Loading...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
