import { useState } from 'react'
import { Dialog } from '@headlessui/react'


const NFTModal = (): JSX.Element => {
  let [isOpen, setIsOpen] = useState(true)

  const onNewNFTButtonClick = () => {
    setIsOpen(true)
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>
        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>

  )
}

export default NFTModal

