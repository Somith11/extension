import { Route } from 'react-router-dom';

import { RouteUrls } from '@shared/route-urls';

import { RpcGetAddresses } from '@app/pages/rpc-get-addresses/rpc-get-addresses';
import { rpcSendTransferRoutes } from '@app/pages/rpc-send-transfer/rpc-send-transfer.routes';
import { RpcSignPsbt } from '@app/pages/rpc-sign-psbt/rpc-sign-psbt';
import { RpcSignPsbtSummary } from '@app/pages/rpc-sign-psbt/rpc-sign-psbt-summary';
import { AccountGate } from '@app/routes/account-gate';

export const rpcRequestRoutes = (
  <>
    <Route
      path={RouteUrls.RpcGetAddresses}
      element={
        <AccountGate>
          <RpcGetAddresses />
        </AccountGate>
      }
    />
    {rpcSendTransferRoutes}
    <Route
      path={RouteUrls.RpcSignBip322Message}
      lazy={async () => {
        const { RpcSignBip322MessageRoute } = await import(
          '@app/pages/rpc-sign-bip322-message/rpc-sign-bip322-message'
        );
        return { Component: RpcSignBip322MessageRoute };
      }}
    />
    <Route
      path={RouteUrls.RpcSignPsbt}
      element={
        <AccountGate>
          <RpcSignPsbt />
        </AccountGate>
      }
    />
    <Route
      path={RouteUrls.RpcSignPsbtSummary}
      element={
        <AccountGate>
          <RpcSignPsbtSummary />
        </AccountGate>
      }
    />
  </>
);
