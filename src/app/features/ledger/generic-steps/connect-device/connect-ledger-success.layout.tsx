import { SupportedBlockchains } from '@shared/constants';

import { ConnectLedgerSuccess } from '@app/features/ledger/illustrations/ledger-illu-success';

import { LedgerConnectInstructionTitle } from '../../components/ledger-title';
import { LedgerWrapper } from '../../components/ledger-wrapper';
import { LedgerSuccessLabel } from '../../components/success-label';

interface ConnectLedgerSuccessLayoutProps {
  chain: SupportedBlockchains;
}
export function ConnectLedgerSuccessLayout({ chain }: ConnectLedgerSuccessLayoutProps) {
  return (
    <LedgerWrapper>
      <ConnectLedgerSuccess />
      <LedgerConnectInstructionTitle chain={chain} mt="loose" mx="50px" />
      <LedgerSuccessLabel my="extra-loose">Connected!</LedgerSuccessLabel>
    </LedgerWrapper>
  );
}
