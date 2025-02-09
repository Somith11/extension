import { useContext } from 'react';

import { CommonLedgerDeviceInlineWarnings } from '@app/features/ledger/components/ledger-inline-warnings';
import { ledgerTxSigningContext } from '@app/features/ledger/flows/stacks-tx-signing/ledger-sign-tx.context';
import { ConnectLedger } from '@app/features/ledger/generic-steps/connect-device/connect-ledger';
import { useWhenReattemptingLedgerConnection } from '@app/features/ledger/hooks/use-when-reattempt-ledger-connection';

export function ConnectLedgerSignTx() {
  const { signTransaction, latestDeviceResponse, awaitingDeviceConnection } =
    useContext(ledgerTxSigningContext);

  useWhenReattemptingLedgerConnection(() => signTransaction());

  return (
    <ConnectLedger
      chain="stacks"
      awaitingLedgerConnection={awaitingDeviceConnection}
      warning={
        <CommonLedgerDeviceInlineWarnings
          chain="stacks"
          latestDeviceResponse={latestDeviceResponse}
        />
      }
      onConnectLedger={signTransaction}
      showInstructions={false}
    />
  );
}
