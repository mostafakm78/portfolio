import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from '@heroui/react';

interface techs {
  tech: string[];
}

export default function WorksModal({ tech }: techs) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="lg:hidden block rounded-md bg-transparent hover:opacity-85 duration-300 text-fore dark:text-back"
      >
        توضیحات
      </Button>
      <Modal
        isOpen={isOpen}
        placement="center"
        className="bg-fore dark:bg-back text-back dark:text-fore shadow-md"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              توضیحات و تکنولوژی ها
            </ModalHeader>
            <ModalBody>
              <p className="py-4">{tech.join(' - ')}</p>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
