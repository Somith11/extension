import { BoxProps } from '@stacks/ui';
import { forwardRefWithAs } from '@stacks/ui-core';
import { Flex, styled } from 'leather-styles/jsx';

import type { Money } from '@shared/models/money.model';

import { formatBalance } from '@app/common/format-balance';
import { ftDecimals } from '@app/common/stacks-utils';
import { StacksAssetAvatar } from '@app/components/crypto-assets/stacks/components/stacks-asset-avatar';
import { usePressable } from '@app/components/item-hover';
import { Flag } from '@app/components/layout/flag';
import { Tooltip } from '@app/components/tooltip';

import { AssetCaption } from '../../components/asset-caption';
import { AssetRowGrid } from '../../components/asset-row-grid';

interface StacksFungibleTokenAssetItemLayoutProps extends BoxProps {
  avatar: string;
  balance: Money;
  caption: string;
  imageCanonicalUri?: string;
  isPressable?: boolean;
  title: string;
}
export const StacksFungibleTokenAssetItemLayout = forwardRefWithAs(
  (props: StacksFungibleTokenAssetItemLayoutProps, ref) => {
    const { avatar, balance, caption, imageCanonicalUri, isPressable, title, ...rest } = props;
    const [component, bind] = usePressable(isPressable);

    const amount = balance.decimals
      ? ftDecimals(balance.amount, balance.decimals || 0)
      : balance.amount.toString();
    const formattedBalance = formatBalance(amount);

    return (
      <Flex as={isPressable ? 'button' : 'div'} outline={0} ref={ref} {...rest} {...(bind as any)}>
        <Flag
          align="middle"
          img={
            <StacksAssetAvatar
              color="white"
              gradientString={avatar}
              imageCanonicalUri={imageCanonicalUri}
              size="36px"
            >
              {title[0]}
            </StacksAssetAvatar>
          }
          spacing="space.04"
          width="100%"
        >
          <AssetRowGrid
            title={<styled.span textStyle="label.01">{title}</styled.span>}
            balance={
              <Tooltip
                label={formattedBalance.isAbbreviated ? amount : undefined}
                placement="left-start"
              >
                <styled.span data-testid={title} textStyle="label.01">
                  {formattedBalance.value}
                </styled.span>
              </Tooltip>
            }
            caption={<AssetCaption caption={caption} />}
          />
          {component}
        </Flag>
      </Flex>
    );
  }
);
