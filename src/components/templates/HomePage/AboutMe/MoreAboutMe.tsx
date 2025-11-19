'use client';

import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure } from '@heroui/react';

export default function MoreAboutMe() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="rounded-md hover:opacity-85 mt-6 duration-300 bg-back text-fore dark:bg-fore dark:text-back" onPress={onOpen}>
        {('More Info')}
      </Button>
      <Drawer size="sm" className="bg-fore dark:bg-back text-back dark:text-fore shadow-md" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex  flex-col gap-1 text-xl">{('About Me')}</DrawerHeader>
              <DrawerBody>
                <p>{('About Me Full')}</p>
              </DrawerBody>
              <DrawerFooter>
                <Button className="text-red-700" variant="light" onPress={onClose}>
                    {('Close')}
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
