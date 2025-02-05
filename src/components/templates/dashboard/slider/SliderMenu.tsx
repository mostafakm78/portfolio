'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from '@heroui/react';
import { FaBars } from 'react-icons/fa';

export default function SliderMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="bg-transparent text-lg" onPress={onOpen}>
        <FaBars className="text-back dark:text-fore" />
        فهرست
      </Button>
      <Drawer
        isOpen={isOpen}
        size="xs"
        className="bg-white/85 dark:bg-white/80"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <>
            <DrawerHeader className="flex flex-col gap-1">
              فهرست
            </DrawerHeader>
            <DrawerBody></DrawerBody>
            <DrawerFooter></DrawerFooter>
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
}
