import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

import { useScreenTransition } from '../../hooks/useScreenTransition';
import { MenuDrawer } from '../molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const { onClickArticles, onClickSetting, onClickHome } =
    useScreenTransition();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
      >
        <Heading
          as="h1"
          fontSize={{ base: 'md', md: 'lg' }}
          padding={{ base: 3, md: 5 }}
          onClick={onClickHome}
          _hover={{ cursor: 'pointer' }}
        >
          記事管理アプリ
        </Heading>
        <Flex flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={3}>
            <Link onClick={onClickArticles}>記事一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <IconButton
          aria-label="メニューボタン"
          icon={<HamburgerIcon />}
          size="sm"
          display={{ base: 'block', md: 'none' }}
          variant="unstyled"
          onClick={onOpen}
        />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
