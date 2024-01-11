import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useScreenTransition } from '../../hooks/useScreenTransition';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClickArticles, onClickSetting } = useScreenTransition();
  const { onClose, isOpen } = props;
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody bg="gray.100" pt={3}>
            <Button onClick={onClickArticles} w="100%">
              記事一覧
            </Button>
            <Button onClick={onClickSetting} w="100%">
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
