import { ReactNode } from 'react';

import GenericError from '@assets/images/generic-error.png';
import { Flex, FlexProps, HStack, styled } from 'leather-styles/jsx';

import { openInNewTab } from '@app/common/utils/open-in-new-tab';

import { LeatherButton } from '../button/button';
import { ExternalLinkIcon } from '../icons/external-link-icon';

const supportUrl =
  'https://wallet.hiro.so/wallet-faq/where-can-i-find-support-for-the-stacks-wallet';

interface GenericErrorProps extends FlexProps {
  body: string;
  helpTextList: ReactNode[];
  onClose(): void;
  title: string;
}
export function GenericErrorLayout(props: GenericErrorProps) {
  const { body, helpTextList, onClose, title, ...rest } = props;

  return (
    <Flex alignItems="center" flexDirection="column" px="space.05" width="100%" {...rest}>
      <styled.img src={GenericError} width="106px" height="72px" alt="Error" mt="space.06" />
      <styled.h1 mt="space.05" textStyle="heading.04">
        {title}
      </styled.h1>
      <styled.h2
        mt="space.04"
        textAlign="center"
        textStyle="label.02"
        width="100%"
        wordWrap="break-word"
      >
        {body}
      </styled.h2>
      <styled.ul
        border="default"
        borderRadius="10px"
        fontSize="14px"
        lineHeight="1.6"
        listStyleType="circle"
        mt="space.06"
        pb="space.05"
        pl="40px"
        pr="space.05"
        pt="space.02"
        textAlign="left"
        width="100%"
      >
        {helpTextList}
        <styled.li mt="space.04" textAlign="left">
          <HStack alignItems="center">
            <styled.span textStyle="label.02">Reach out to our support team</styled.span>
            <styled.button onClick={() => openInNewTab(supportUrl)}>
              <ExternalLinkIcon />
            </styled.button>
          </HStack>
        </styled.li>
      </styled.ul>
      <LeatherButton fontSize="14px" mt="space.05" onClick={onClose} variant="link">
        Close window
      </LeatherButton>
    </Flex>
  );
}
