import { useLocation, useNavigate } from 'react-router-dom';

import { styled } from 'leather-styles/jsx';
import get from 'lodash.get';

import { RouteUrls } from '@shared/route-urls';

import { GenericError } from '@app/components/generic-error/generic-error';

const helpTextList = [
  <styled.li key={1} mt="space.04">
    <styled.span textStyle="label.02">Please report issue to swap protocol</styled.span>
  </styled.li>,
];

export function SwapError() {
  const location = useLocation();
  const navigate = useNavigate();
  const message = get(location.state, 'message') as string;
  const title = get(location.state, 'title') as string;

  return (
    <GenericError
      body={message}
      helpTextList={helpTextList}
      mb="space.06"
      onClose={() => navigate(RouteUrls.Home)}
      title={title}
    />
  );
}
