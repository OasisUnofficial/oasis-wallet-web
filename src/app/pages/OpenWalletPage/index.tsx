/**
 *
 * OpenWalletPage
 *
 */
import { Anchor } from 'grommet/es6/components/Anchor'
import { Box } from 'grommet/es6/components/Box'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { ButtonLink } from 'app/components/ButtonLink'
import { Header } from 'app/components/Header'
import { selectShowAccountsSelectionModal } from 'app/state/importaccounts/selectors'
import { runtimeIs } from 'config'

export function SelectOpenMethod() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const showAccountsSelectionModal = useSelector(selectShowAccountsSelectionModal)

  useEffect(() => {
    const isExtension = runtimeIs === 'extension'

    if (isExtension && showAccountsSelectionModal) {
      navigate('/open-wallet/ledger/usb')
    }
  }, [navigate, showAccountsSelectionModal])

  return (
    <Box
      round="5px"
      border={{ color: 'background-front-border', size: '1px' }}
      background="background-front"
      margin="small"
      pad="medium"
    >
      <Header>{t('openWallet.header', 'How do you want to open your wallet?')}</Header>

      <Box direction="row-responsive" justify="start" margin={{ top: 'medium' }} gap="medium">
        <span>
          <ButtonLink to="mnemonic" label={t('openWallet.method.mnemonic', 'Mnemonic')} primary />
        </span>
        <span>
          <ButtonLink to="private-key" label={t('openWallet.method.privateKey', 'Private key')} primary />
        </span>
        <span>
          <ButtonLink to="ledger" label={t('openWallet.method.ledger', 'Ledger')} primary />
        </span>
      </Box>

      <Box
        direction="row-responsive"
        justify="start"
        margin={{ top: 'medium' }}
        gap="medium"
        style={{ whiteSpace: 'pre-wrap', display: 'inline' }}
      >
        <Trans
          i18nKey="openWallet.bitpie.warning"
          t={t}
          defaults="❗ BitPie wallet users: You cannot import the mnemonic phrase directly from your BitPie wallet. <DocsLink>Check documentation for details.</DocsLink>"
          components={{
            DocsLink: <Anchor href="https://docs.oasis.io/general/manage-tokens/faq" />,
          }}
        />
      </Box>
    </Box>
  )
}

export function OpenWalletPage() {
  return <SelectOpenMethod />
}
