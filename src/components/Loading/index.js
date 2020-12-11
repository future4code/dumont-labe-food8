import React from 'react';

/*Material UI */
import { CircularProgress } from '@material-ui/core';

/*Tags Styleds*/
import { LoadingContainer } from './styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}