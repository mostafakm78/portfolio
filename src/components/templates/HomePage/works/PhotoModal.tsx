'use client'
import { useTranslation } from 'react-i18next';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from '@heroui/react';
import SingleCard from './SingleCard';

interface photos {
  photos: string[];
}

export default function PhotoModal({ photos }: photos) {
    const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="rounded-md bg-transparent hover:opacity-85 duration-300 text-fore dark:text-back"
      >
        {t('Photos')}
      </Button>
      <Modal
        hideCloseButton={true}
        isOpen={isOpen}
        shadow='none'
        backdrop="opaque"
        placement="center"
        size="5xl"
        className="bg-transparent text-back dark:text-fore"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              {t('Photos')}
            </ModalHeader>
            <ModalBody className='w-full'>
              <SingleCard photos={photos} />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
