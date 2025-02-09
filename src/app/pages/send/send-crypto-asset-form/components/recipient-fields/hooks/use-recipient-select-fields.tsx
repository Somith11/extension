import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormikContext } from 'formik';

import { BitcoinSendFormValues, StacksSendFormValues } from '@shared/models/form.model';
import { RouteUrls } from '@shared/route-urls';

import { RecipientFieldType } from '@app/pages/send/send-crypto-asset-form/components/recipient-type-dropdown/recipient-type-dropdown';

import { useRecipientBnsName } from './use-recipient-bns-name';

export function useRecipientSelectFields() {
  const { setFieldError, setFieldTouched, setFieldValue } = useFormikContext<
    BitcoinSendFormValues | StacksSendFormValues
  >();
  const [selectedRecipientField, setSelectedRecipientField] = useState(RecipientFieldType.Address);
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const { setBnsAddress } = useRecipientBnsName();
  const navigate = useNavigate();

  const onClickLabelAction = useCallback(() => {
    setSelectedRecipientField(RecipientFieldType.Address);
    navigate(RouteUrls.SendCryptoAssetFormRecipientAccounts, { replace: true });
  }, [navigate]);

  // Formik does not provide a field reset
  const resetAllRecipientFields = useCallback(() => {
    void setFieldValue('recipient', '');
    setFieldError('recipient', undefined);
    setFieldTouched('recipient', false);
    void setFieldValue('recipientBnsName', '');
    setFieldError('recipientBnsName', undefined);
    setFieldTouched('recipientBnsName', false);
  }, [setFieldError, setFieldTouched, setFieldValue]);

  const onSelectRecipientFieldType = useCallback(
    (index: number) => {
      resetAllRecipientFields();
      setBnsAddress('');
      setSelectedRecipientField(index);
      setIsSelectVisible(false);
    },
    [resetAllRecipientFields, setBnsAddress]
  );

  const onSetIsSelectVisible = useCallback(
    (value: boolean) => {
      resetAllRecipientFields();
      setIsSelectVisible(value);
    },
    [resetAllRecipientFields]
  );

  return {
    isSelectVisible,
    onClickLabelAction,
    onSelectRecipientFieldType,
    onSetIsSelectVisible,
    selectedRecipientField,
  };
}
